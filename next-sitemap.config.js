module.exports = {
  siteUrl: "https://twotwo.co.jp",
  generateRobotsTxt: true,
  additionalPaths: async (config) => [
    await config.transform(config, "/"),
    await config.transform(config, "/about"),
    await config.transform(config, "/services"),
    await config.transform(config, "/contact"),
  ],
};
