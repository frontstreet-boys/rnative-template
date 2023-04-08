// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const aliases = require("./alias.config");

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
    ...defaultConfig,
    resolver: {
        ...defaultConfig.resolver,
        extraNodeModules: {
            ...defaultConfig.resolver.extraNodeModules,
            ...aliases,
        },
    },
};
