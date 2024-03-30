import type { StorybookConfig } from "@storybook/react-webpack5";
import cracoConfig from "../craco.config.js";

const config: StorybookConfig = {
  stories: ["../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-storysource",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: true,
    defaultName: "Documentation",
  },
  staticDirs: ["..\\public"],
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
    },
  },
  webpackFinal(config) {
    const cracoConfigAlias = cracoConfig.webpack.alias;
    return {
      ...config,
      resolve: {
        alias: {
          ...config.resolve?.alias,
          ...cracoConfigAlias,
        },
        extensions: [".ts", ".js", ".jsx", ".tsx"],
      },
    };
  },
};
export default config;
