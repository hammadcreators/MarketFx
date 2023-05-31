require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const speakeasy = require("speakeasy");
const uuid = require("uuid");

const SECRET_KEY = process.env.SECRET_KEY;

// importing the models
const User = require("../models/User");
const ChatModel = require("../models/Chat");
const MessageModel = require("../models/Message");
const ComplaintModel = require("../models/Complaint");
const Otp = require("../models/Otp");
const authMidddlware = require("../middlewares/authMiddleware");
const config = require("../middlewares/config");

const userRouter = express.Router();
userRouter.use(bodyParser.json());

// Register the user
userRouter.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    let password = hash;

    const newUser = await User.create({
      name: req.body.name,
      password: password,
      email: req.body.email,
      mobile: req.body.mobile,
      stripeId: '',
    });

    // Creating a token
    const token = jwt.sign({ user: newUser }, SECRET_KEY);
    res.status(201).json({
      message: "User has been registered",
      info: newUser,
      token: token,
    });
  } catch (ex) {
    console.log(ex.message);
    res.status(400).json({ message: ex.message });
  }
});

// Login the user
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    // If user is not found
    if (!user) return res.status(401).json({ message: "User not found" });

    // If the user is found compare the passwords
    const match = await bcrypt.compare(password, user.password);

    // If the password didnt match
    if (!match) return res.status(401).json({ message: "Password mismatch" });
    const token = jwt.sign({ user: user }, SECRET_KEY);
    // If the password matches
    return res
      .status(200)
      .json({ message: "User found", info: user, token: token });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

// get the user...
userRouter.get("/me", authMidddlware, async (req, res) => {
  console.log("/me");
  const user = req.user;
  return res.status(200).json({ message: "User found", user: user });
});

// Update the user..
userRouter.patch("/update", authMidddlware, async (req, res) => {
  const { name, password, email, mobile } = req.body;
  const user = req.user;
  const obj = {};
  console.log(user);

  // If the provided fields are empty
  if (name) obj.name = name;
  // if password is found in the body we will first hash it.....
  if (password) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    obj.password = hash;
  }
  if (email) obj.email = email;
  if (mobile) obj.contactNumber = mobile;

  const updatedUser = Object.assign(user, obj);
  try {
    const dbUpdatedUser = await User.findOneAndUpdate(
      { _id: updatedUser._id },
      updatedUser,
      { new: true }
    );
    return res
      .status(201)
      .json({ message: "User has been updated", info: dbUpdatedUser });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

// delete the user
userRouter.delete("/delete", authMidddlware, async (req, res) => {
  const user = req.user;

  try {
    const deletedUser = await User.findByIdAndDelete(user._id);
    res.status(200).json({
      message: "User has been deleted successfully",
      info: deletedUser,
    });
  } catch (ex) {
    res.status(400).json({ message: ex.message });
  }
});

userRouter.post("/contactCustomerSupport/:uid", async (req, res) => {
  if (User.findOne({ _id: req.params.uid }) == null) {
    res.writeHead(404, "User does not exists");
    res.end();
  }

  let chat = await ChatModel.findOne({ UserId: req.params.uid, IsOpen: true });

  if (chat == null) {
    chat = await ChatModel.create({ UserId: req.params.uid });
  }

  req.body["SenderId"] = req.params.uid;
  req.body["SenderType"] = "User";
  req.body["SentDate"] = Date.now();
  let message = await MessageModel.create(req.body);
  chat.MessageIds.push(message._id);
  chat.save();
  res.writeHead(200, "Message sent successfully");
  res.end();
});

userRouter.get("/chats/:uid", async (req, res) => {
  if ((await User.findOne({ _id: req.params.uid })) == null) {
    res.writeHead(404, "User does not exists");
    res.end();
    return;
  }

  let chats = await ChatModel.find({ UserId: req.params.uid }).populate(
    "MessageIds"
  );
  res.writeHead(400);
  res.write(JSON.stringify(chats));
  res.end();
});

userRouter.get("/chat/:cid", async (req, res) => {
  let chat = await ChatModel.findOne({ _id: req.params.cid }).populate(
    "MessageIds"
  );
  if (chat == null) {
    res.writeHead(404, "Chat not found");
    res.end();
    return;
  }
  res.writeHead(200);
  res.write(JSON.stringify(chat));
  res.end();
});

userRouter.put("/closechat/:id", async (req, res) => {
  let chat = await ChatModel.findOne({ _id: req.params.id, IsOpen: true });
  if (chat == null) {
    res.writeHead(404, "No open chat found");
    res.end();
    return;
  }
  await ChatModel.updateOne(
    { _id: req.params.id },
    { $set: { IsOpen: false } }
  );
  res.writeHead(200);
  res.write("Chat closed successfully");
  res.end();
});

userRouter.post("/register-complaint/:uid", async (req, res) => {
  let user = await User.findOne({ _id: req.params.uid });
  if (user == null) {
    res.writeHead(404, "User not found");
    res.end();
    return;
  }
  req.body["UserId"] = req.params.uid;
  req.body["SubmissionDate"] = Date.now();
  let complaint = await ComplaintModel.create(req.body);
  res.writeHead(200, "Complaint Registered Successfully");
  res.write(JSON.stringify(complaint));
  res.end();
});

userRouter.get("/complaints/:uid", async (req, res) => {
  let user = await User.findOne({ _id: req.params.uid });
  if (user == null) {
    res.writeHead(404, "User not found");
    res.end();
    return;
  }
  let complaint = await ComplaintModel.find({ UserId: req.params.uid });
  res.writeHead(200);
  res.write(JSON.stringify(complaint));
  res.end();
});

userRouter.get("/complaint/:uid/:cid", async (req, res) => {
  let user = await User.findOne({ _id: req.params.uid });
  if (user == null) {
    res.writeHead(404, "User not found");
    res.end();
    return;
  }
  let complaint = await ComplaintModel.findOne({ _id: req.params.cid });

  if (complaint == null) {
    res.writeHead(404, "Complaint not found");
    res.end();
    return;
  }

  res.writeHead(200);
  res.write(JSON.stringify(complaint));
  res.end();
});

// generate a JWT token
function generateToken(user) {
  const payload = {
    id: user.id,
    email: user.email,
    name: user.name,
  };
  const options = { expiresIn: "1h" };
  const secret = "mysecretkey";
  return jwt.sign(payload, secret, options);
}

// send password reset email
function sendResetPasswordEmail(email, token) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "maazharoon147@gmail.com",
      pass: "mjdqnevtekektwii",
    },
  });

  const mailOptions = {
    from: "maazharoon147@gmail.com",
    to: email,
    subject: "Password Reset Request",
    html: `<p>You are receiving this email because you (or someone else) has requested a password reset for your account.</p>
           <p>Please click the following link to reset your password:</p>
           <a href="http://localhost:3000/reset-password/${token}">Reset Password</a>`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

// forgot password endpoint
userRouter.post("/forgot-password", async (req, res) => {
  const { email } = req.body;

  // lookup user by email
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).send("User not found");
  }

  // generate reset token and save to user
  const token = generateToken(user);
  user.resetPasswordToken = token;
  user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

  await user.save();

  // send password reset email
  sendResetPasswordEmail(email, token);

  res.send("Password reset email sent");
});

// reset password endpoint
userRouter.post("/reset-password", async (req, res) => {
  const { token, pass } = req.body;
  console.log(token, pass);

  // lookup user by reset token
  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(400).send("Invalid or expired token");
  }

  // hash new password and save to user
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(pass, salt);
  user.resetPasswordToken = null;
  user.resetPasswordExpires = null;

  await user.save();

  res.send("Password reset successfully");
});

//Otp
function generateOTP() {
  const secret = speakeasy.generateSecret({ length: 20 });
  const token = speakeasy.totp({
    secret: secret.base32,
    encoding: "base32",
  });
  return { secret: secret.base32, token };
}

async function sendOTP(email, token, id) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "maazharoon147@gmail.com",
      pass: "mjdqnevtekektwii",
    },
  });

  const mailOptions = {
    from: "maazharoon147@gmail.com",
    to: email,
    subject: "2FA Verification Code",
    html: `<p>Your verification code is ${token}</p>
           <p>Please click the following link to Enable Two Factor Authentication, Enter the Verification Code There:</p>
           <a href="http://localhost:3000/verify-otp/${id}">Verify Otp</a>`,
  };

  await transporter.sendMail(mailOptions);
}
userRouter.post("/generate-otp", async (req, res) => {
  const { email } = req.body;
  console.log(email);
  const { secret, token } = generateOTP();
  const id = uuid.v4();

  try {
    await sendOTP(email, token, id);
    const otp = new Otp({ id, secret });
    await otp.save();
    res.json({ id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send OTP" });
  }
});

userRouter.post("/verify-otp", async (req, res) => {
  const { token } = req.body;
  const { id } = req.body;

  try {
    const otp = await Otp.findOne({ id });

    if (!otp) {
      res.status(400).json({ message: "Invalid OTP ID" });
      return;
    }

    // Verify the OTP token
    const verified = speakeasy.totp.verify({
      secret: otp.secret,
      encoding: "base32",
      token,
      window: 3, // Allow a time skew of 1 x 30 seconds
    });

    if (!verified) {
      res.status(401).json({ message: "Invalid OTP" });
      return;
    }

    // Delete the OTP from the database
    await otp.delete();

    res.json({ message: "OTP verified" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to verify OTP" });
  }
});

module.exports = userRouter;
