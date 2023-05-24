const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
const axios = require("axios");

let io;
// const http = require("http");
// const { Server } = require("socket.io");

// Importing routes
const userRoute = require("./app/routes/User");
const customerSupportRoute = require("./app/routes/CustomerSupport");
const watchlistRoute = require("./app/routes/Watchlist");
const profileRoute = require("./app/routes/ProfileRouter");
const calenderRoute = require("./app/routes/Calender");
const dataportal = require("./app/routes/DataPortal");
const CurrencyPair = require("./app/models/CurrencyPair");
const Cards = require('./app/routes/Cards');
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
const url = "mongodb://127.0.0.1:27017/MarketFX";

// Moutin routes

// app.use(allowCrossDomain);
app.use(express.json());

app.use("/user", userRoute);
app.use("/customersupport", customerSupportRoute);
app.use("/watchlist", watchlistRoute);
app.use("/profile", profileRoute);
app.use("/calender", calenderRoute);
app.use("/dataportal", dataportal);
app.use("/cards", Cards);

const pairs = [
  { Currency1: "EUR", Currency2: "USD", name: "EUR/USD" },
  { Currency1: "USD", Currency2: "JPY", name: "USD/JPY" },
  { Currency1: "GBP", Currency2: "USD", name: "GBP/USD" },
  { Currency1: "USD", Currency2: "CHF", name: "USD/CHF" },
  { Currency1: "AUD", Currency2: "USD", name: "AUD/USD" },
  { Currency1: "NZD", Currency2: "USD", name: "NZD/USD" },
  { Currency1: "USD", Currency2: "CAD", name: "USD/CAD" },
  { Currency1: "EUR", Currency2: "JPY", name: "EUR/JPY" },
  { Currency1: "GBP", Currency2: "JPY", name: "GBP/JPY" },
  { Currency1: "EUR", Currency2: "GBP", name: "EUR/GBP" },
  { Currency1: "AUD", Currency2: "JPY", name: "AUD/JPY" },
  { Currency1: "CHF", Currency2: "JPY", name: "CHF/JPY" },
  { Currency1: "NZD", Currency2: "JPY", name: "NZD/JPY" },
  { Currency1: "EUR", Currency2: "CHF", name: "EUR/CHF" },
  { Currency1: "GBP", Currency2: "CHF", name: "GBP/CHF" },
  { Currency1: "AUD", Currency2: "CHF", name: "AUD/CHF" },
  { Currency1: "EUR", Currency2: "AUD", name: "EUR/AUD" },
  { Currency1: "GBP", Currency2: "AUD", name: "GBP/AUD" },
  { Currency1: "AUD", Currency2: "NZD", name: "AUD/NZD" },
];

mongoose
  .connect(url)
  .then(async () => {
    console.log("Connected to the db");
    let result = await CurrencyPair.find({});
    if(result.length === 0){
      for(let i = 0; i < pairs.length; i++){
        await CurrencyPair.create({
          Id: pairs[i].name.replace("/", "_"),
          Currency1: pairs[i].Currency1,
          Currency2: pairs[i].Currency2
        });
      }
    }
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
    const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${pairs[x].Currency1}&to_currency=${pairs[x].Currency2}&apikey=7BO7JWVYERB11TB9`;

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
