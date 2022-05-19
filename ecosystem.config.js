module.exports = {
  apps: [
    {
      name: "Scheduler",
      script: "./dist/index.js",
      env: {
        NODE_ENV: "production",
      },
      args: ["--color"],
    },
  ],
};
