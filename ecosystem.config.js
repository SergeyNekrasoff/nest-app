module.exports = {
  apps: [{
    name: "nest-app",
    script: "./dist/main",
    watch: false,
    env: {
      NODE_ENV: "production",
    },
  }],
};