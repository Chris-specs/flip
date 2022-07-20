module.exports = function (api) {
    api.cache(true)
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./app'],
                    alias: {
                        '@screens': './app/screens',
                        '@components': './app/components',
                        '@layouts': './app/layouts',
                        '@services': './app/services',
                        '@hooks': './app/hooks/index.js',
                        '@navigation': './app/navigations/index.js',
                        '@utils': './app/utils/index.js'
                    },
                },
            ],
        ],
    }
}
