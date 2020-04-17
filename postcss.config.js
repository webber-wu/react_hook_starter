let mediaQuery = {
    '--phone-m': '(min-width: 360px)',
    '--phone-l': '(min-width: 414px)',
    '--phone-xl': '(min-width: 600px)',
    '--pad': '(min-width: 768px)',
    '--desktop': '(min-width: 1024px)',
    '--desktop-w': '(min-width: 1280px)',
    '--desktop-hd': '(min-width: 1440px)',
    '--desktop-index': '(min-width: 1540px)',
    '--desktop-fullhd': '(min-width: 1920px)',
    '--desktop-goddammscreen': '(min-width: 2560px)'
}

let variables = {
    'main': '#FFFFFF',
    'black': '#000000',
    'sans': '"Noto Sans TC", "Microsoft JhengHei", "HanHei TC", "MHei", "PingFang TC", "STHeitiTC-Light", "Helvetica Neue", "Helvetica", "Arial", sans-serif;',
}

let postCSSConfig = {
    plugins: {
        'postcss-import': {},
        'postcss-mixins': {},
        'postcss-variables': {},
        'postcss-cssnext': {
            features: {
                customMedia: {
                    extensions: mediaQuery
                },
                customProperties: {
                    variables: variables
                }
            }
        }
    }
}

module.exports = postCSSConfig


