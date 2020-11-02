const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
    stories: ['../**/*.stories.jsx'],
    addons: [
        {name:'@storybook/addon-essentials', options: { controls: true }},
        '@storybook/addon-a11y',
        '@storybook/addon-storysource'
    ],
    webpackFinal: async (config, { configType }) => {
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

         config.resolve.modules.push(path.resolve("./"));

        // Return the altered config
        return config;
    },
};
