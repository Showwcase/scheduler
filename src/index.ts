import axios from "axios";
import cron from "node-cron";

import variables from "./config/variables";

const { SERVER_URL } = variables;
console.log("SERVER_URL :>> ", SERVER_URL);

/**
 * Close expired job offers from remoteOk
 * Schedule: Every 12 hours
 */
cron.schedule("* * * * *", function () {
  console.log("5 seconds passed");
});
