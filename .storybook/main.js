const path = require("path");

module.exports = {
  stories: ["../packages/**/*.stories.tsx", "../apps/**/*.stories.tsx"],
  addons: [],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    config.resolve.alias["@common/theme"] = path.resolve(
      __dirname,
      "../packages/theme/src"
    );
    config.resolve.alias["@common/components"] = path.resolve(
      __dirname,
      "../packages/components/src"
    );
    return config;
  },
};
