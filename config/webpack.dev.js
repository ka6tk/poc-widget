const path =require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
module.exports = {
    entry:{
        main:["./src/main.js"],
        widget:["./src/widget.js"]
    },
    mode:"production",
    output:{
        filename:"[name]-bundle.js",
        path:path.resolve(__dirname,"../dist")
    },
    devServer:{
        contentBase:"dist",
        overlay:true,
        hot:true,
        stats:{
            colors:true
        }
    },
    devtool: 'source-map',
    module:{
        rules:[
            {
                test:/\.js$/,
                use:[{
                    loader:"babel-loader"
                }],
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                use:[{
                    loader:'style-loader'
                },{
                    loader:'css-loader'
                }]
            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:"html-loader",
                    }
                ]
            },
            {
                test:/\.(png|jpeg|jpg|gif)$/,
                use:[
                    {
                        loader:"file-loader",
                        options:{
                            name:"images/[name].[ext]"
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Enable HMR
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({ 
            template: 'src/index.html'
          }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname,"../src/example/"),
            to: path.resolve(__dirname,"../dist/example/"),
        }])
      ]
}