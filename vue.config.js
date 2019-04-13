module.exports = {
    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: true
        }
    },
    configureWebpack: config => {
        config.entry.app = ['./src/index.ts'];
    }
}
