module.exports = {
    presets: ['@babel/env', '@babel/typescript', '@babel/react'],
    plugins: ['@babel/plugin-transform-runtime', '@babel/proposal-class-properties'],
    env: {
        esm: {
            presets: [
                [
                    '@babel/env',
                    {
                        modules: false,// 关闭模块转换
                    },
                ],
            ],
            plugins: [
                [
                    '@babel/plugin-transform-runtime',
                    {
                        useESModules: true,// 使用esm形式的helper
                    },
                ],
            ],
        },
    },
};