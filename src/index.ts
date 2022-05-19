import axios from "axios";
import cron from "node-cron";

import variables from "./config/variables";

const { SERVER_URL } = variables;

const server = axios.create({
  baseURL: SERVER_URL,
  timeout: 1000,
});

/**
 * Close expired job offers from remoteOk
 * Schedule: Every 12 hours
 */
cron.schedule("15 */12 * * *", function () {
  console.log("CRON TASK: Close expired job offers from remoteOk");
  server.get("/jobs/validation");
});

/**
 * Check upcoming events
 * Schedule: Every 12 hours
 */
cron.schedule("20 */12 * * *", function () {
  console.log("CRON TASK: Check upcoming events");
  server.get("/events/upcoming", { params: { updateCache: true } });
});

/**
 * Check stale communities
 * Schedule: once a day at 00:00
 */
cron.schedule("10 0 * * *", function () {
  console.log("CRON TASK: Check stale communities");
  server.get("/communities/stale");
});

/**
 * Parse new job offers from remoteOk
 * Schedule: Every 6 hours
 */
// cron.schedule("10 */6 * * *", function () {
//   console.log("CRON TASK: Parse new job offers from remoteOk");
//   jobsController.fetchNewOffersRemoteOk({ direction: 1 });
//   jobsController.getJobs({}, { withData: false, updateCache: true });
// });

/**
 * Parse new job offers from weworkremotely
 * Schedule: Every 6 hours
 */
// cron.schedule("10 */6 * * *", function () {
//   console.log("CRON TASK: Parse new job offers from remoteOk");
//   jobsController.fetchNewOffersWeworkRemotely();
//   jobsController.getJobs({}, { withData: false, updateCache: true });
// });

/**
 * Push jobs filters to cloudflare KV store
 * Schedule: every 3 hours
 */
// cron.schedule("25 */3 * * *", function () {
//   console.log("CRON TASK: Push jobs filters to cloudflare KV store");
//   jobsController.getJobsFilters().then((data) => {
//     cloudflare.storeValue("jobs_filters", data, "jobs");
//   });
// });

/**
 * Push trending shows to cloudflare KV store
 * Schedule: every 1 hour
 */
// cron.schedule("*/10 * * * *", function () {
//     console.log("CRON TASK: Push trending shows to cloudflare KV store");
//     projectsController.getTrendingProjects({ limit: 5 });
// });

/**
 * Weekly digest newsletter
 * Schedule: Once a week on Friday at 00:30
 */
// cron.schedule("30 0 * * 5", function () {
//   newsletterController.weeklyDigest();
// });
