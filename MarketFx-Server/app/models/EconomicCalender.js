const { Schema, model } = require("mongoose");

let economicCalenderSchema = new Schema({
  period: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  time: {
    type: String,
  },
  cur: {
    type: String,
  },
  impact: {
    type: String,
    enum: ["Low", "Medium", "High"],
  },
  event: {
    type: String,
  },
  actual: {
    type: String,
  },
  forcast: {
    type: String,
  },
  previous: {
    type: String,
  },
});

const EconomicCalender = model("EconomicCaleder", economicCalenderSchema);
module.exports = { EconomicCalender };
