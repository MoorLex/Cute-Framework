const path = require('path');

module.exports = {
    entry: './src/meow.scss',
    // entry: ['./src/index.js', './src/meow.scss'],
    // output: {
    //     filename: 'js/main.js',
    //     path: path.resolve(__dirname, 'dist')
    // },
    module: {
        rules: [
            {
                test: /\.(css|scss)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'css/[name].css',
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader?-url'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')
                            ]
                        }
                    },
                    {
                        loader: 'group-css-media-queries-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ],
    }
};
