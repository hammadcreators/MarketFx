const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const axios = require("axios");

let io;
// const http = require("http");
// const { Server } = require("socket.io");

// Importin routes
const userRoute = require("./app/routes/User");
const customerSupportRoute = require("./app/routes/CustomerSupport");
const watchlistRoute = require("./app/routes/Watchlist");
const profileRoute = require("./app/routes/ProfileRouter");
const calenderRoute = require("./app/routes/Calender");
const dataportal = require("./app/routes/DataPortal");

const PORT = 5000;
const app = express();
app.use(cors());

// const server = http.createServer();
// const io = new Server(server, {
//   cors: {
//     origin: "http://localhost:3000/",
//   },
// });

// io.on("connection", ()=>{
//   console.log("COnnected ")
// })
const url = "mongodb://localhost:27017/MarketFX";

// Moutin routes

// app.use(allowCrossDomain);
app.use(express.json());

app.use("/user", userRoute);
app.use("/customersupport", customerSupportRoute);
app.use("/watchlist", watchlistRoute);
app.use("/profile", profileRoute);
app.use("/calender", calenderRoute);
app.use("/dataportal", dataportal);

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to the db");
  })
  .catch((err) => {
    console.log("Failed to connect to the db");
  });

const serverWithSocket = app.listen(PORT, () => {
  console.log("server has started on port 3001");
  io = require("socket.io")(serverWithSocket, {
    cors: {
      origin: "*",
    },
  }); //? invoking the func also something like func()

  io.on("connection", (socket) => {
    console.log("a user connected");
    socket.on("disconnect", function () {
      console.log("A user disconnected");
    });
  });
});

const pairs = [
  { to_Currency: "EUR", From_Currency: "USD", name: "EUR/USD" },
  { to_Currency: "USD", From_Currency: "JPY", name: "USD/JPY" },
  { to_Currency: "GBP", From_Currency: "USD", name: "GBP/USD" },
  { to_Currency: "USD", From_Currency: "CHF", name: "USD/CHF" },
  { to_Currency: "AUD", From_Currency: "USD", name: "AUD/USD" },
  { to_Currency: "NZD", From_Currency: "USD", name: "NZD/USD" },
  { to_Currency: "USD", From_Currency: "CAD", name: "USD/CAD" },
  { to_Currency: "EUR", From_Currency: "JPY", name: "EUR/JPY" },
  { to_Currency: "GBP", From_Currency: "JPY", name: "GBP/JPY" },
  { to_Currency: "EUR", From_Currency: "GBP", name: "EUR/GBP" },
  { to_Currency: "AUD", From_Currency: "JPY", name: "AUD/JPY" },
  { to_Currency: "CHF", From_Currency: "JPY", name: "CHF/JPY" },
  { to_Currency: "NZD", From_Currency: "JPY", name: "NZD/JPY" },
  { to_Currency: "EUR", From_Currency: "CHF", name: "EUR/CHF" },
  { to_Currency: "GBP", From_Currency: "CHF", name: "GBP/CHF" },
  { to_Currency: "AUD", From_Currency: "CHF", name: "AUD/CHF" },
  { to_Currency: "EUR", From_Currency: "AUD", name: "EUR/AUD" },
  { to_Currency: "GBP", From_Currency: "AUD", name: "GBP/AUD" },
  { to_Currency: "AUD", From_Currency: "NZD", name: "AUD/NZD" },
];

const data = [];
let x = 0;

const fetchData = async () => {
  const datawindow = {};

  console.log("RAN");

  for (let i = 0; i < 5; i++) {
    console.log(x);

    if (x > 18) {
      x = 0;
      break;
    }
    const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${pairs[x].From_Currency}&to_currency=${pairs[x].to_Currency}&apikey=7BO7JWVYERB11TB9`;

    const response = await axios.get(url, {
      headers: {
        "User-Agent": "request",
      },
    });
    datawindow[pairs[x].name] = response.data;
    x += 1;
  }
  console.log(data);
  io.emit("datawindow", datawindow);
};

fetchData();
setInterval(() => {
  fetchData();
}, 60000);
