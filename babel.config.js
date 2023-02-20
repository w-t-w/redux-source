/**
 * babel 配置
 * @type {{}}
 */
const babelConfig = {
    presets: [[
        '@babel/preset-env',
        {
            useBuiltIns: 'usage',
            modules: false,
            loose: false,
            corejs: {
                version: 3,
                proposal: true
            }
        }
    ]],
    plugins: [
        '@babel/plugin-proposal-class-properties', [
            '@babel/plugin-proposal-decorators',
            {
                legacy: true
            }
        ],
        '@babel/plugin-transform-runtime',
        '@babel/plugin-syntax-dynamic-import'
    ]
};

module.exports = babelConfig;