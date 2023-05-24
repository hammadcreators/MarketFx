const express = require("express");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const { EconomicCalender } = require("../models/EconomicCalender");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const calenderRoute = express.Router();

const buttons = {
  yesterday: "timeFrame_yesterday",
  today: "timeFrame_today",
  tomorrow: "timeFrame_tomorrow",
  thisweek: "timeFrame_thisWeek",
  nextweek: "timeFrame_nextWeek",
};

const pupetter = async function () {};

calenderRoute.get("/economicCalender/:time", async (req, res) => {
  try {
    const { time } = req.params;
    const calender = await EconomicCalender.find({
      period: time,
    });
    res.json({
      calender,
    });
  } catch (ex) {
    res.json({ error: ex.message });
  }
});

// calenderRoute.get("/economicCalender/:time", async (req, res) => {
//   try {
//     const { time } = req.params;
//     console.log(time);
//     // const response = await fetch(
//     //   "https://www.investing.com/economic-calendar/"
//     // );
//     // const body = await response.text();

//     // Launch a new browser instance
//     const browser = await puppeteer.launch();

//     // Create a new page instance
//     const page = await browser.newPage();

//     // Navigate to the target page
//     await page.goto("https://www.investing.com/economic-calendar/", {
//       timeout: 0,
//     });

//     // Click a button on the page
//     await page.click(`#${buttons[time]}`);
//     // await page.waitForTimeout(2000);
//     //   await page.waitForNavigation();

//     // Get the updated HTML
//     const html = await page.content();

//     const $ = cheerio.load(html);
//     const tableRows = $(".js-event-item");
//     const date = tableRows.attr("data-event-datetime");
//     const tableData = [];
//     tableRows.each((i, row) => {
//       const rowData = [];
//       rowData.push(date);
//       $(row)
//         .find("td")
//         .each((j, cell) => {
//           const impact = $(cell).attr("data-img_key");
//           if (!$(cell).text() && impact) {
//             rowData.push(impact);
//           } else if ($(cell).text().length >= 1) {
//             rowData.push($(cell).text().trim());
//           }
//         });
//       tableData.push(rowData);
//     });

//     console.log(tableData);
//     await browser.close();
//     res.status(200).json({ calender: tableData });
//   } catch (ex) {}
// });

module.exports = calenderRoute;
