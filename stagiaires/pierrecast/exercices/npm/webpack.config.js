const path = require('path');

module.exports = {
    entry: './app/main.ts',
    module : {
        rules : {
            test: /\.ts$/,
            use: ts-loader,
            include: path.resolve(__dirname, 'app')
        }
    },
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
}
