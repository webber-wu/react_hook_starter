var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var ImageminPlugin = require("imagemin-webpack-plugin").default;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");

var config = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `bundle_${Date.now()}.js`,
    publicPath: "/"
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "src/"),
      path.resolve(__dirname, "src/asset"),
      path.resolve(__dirname, "src/component"),
      path.resolve(__dirname, "src/container"),
      path.resolve(__dirname, "src/module"),
      "node_modules"
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      inject: "body"
    }),
    new webpack.ProvidePlugin({
      API: "api",
      ReactDOM: "react-dom",
      React: "react",
      useState: ["react", "useState"],
      useEffect: ["react", "useEffect"],
      Fragment: ["react", "Fragment"],
      Provider: ["react-redux", "Provider"],
      connect: ["react-redux", "connect"],
      NavLink: ["react-router-dom", "NavLink"],
      Link: ["react-router-dom", "Link"],
      Switch: ["react-router-dom", "Switch"],
      BrowserRouter: ["react-router-dom", "BrowserRouter"],
      HashRouter: ["react-router-dom", "HashRouter"],
      Route: ["react-router-dom", "Route"],
      withRouter: ["react-router-dom", "withRouter"],
      Redirect: ["react-router-dom", "Redirect"],
      branch: ["recompose", "branch"],
      lifecycle: ["recompose", "lifecycle"],
      withState: ["recompose", "withState"],
      renderComponent: ["recompose", "renderComponent"],
      compose: ["recompose", "compose"],
      withHandlers: ["recompose", "withHandlers"],
      pure: ["recompose", "pure"],
      withStateHandlers: ["recompose", "withStateHandlers"],
      setDisplayName: ["recompose", "setDisplayName"],
      RetinaImage: "react-retina-image"
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CopyWebpackPlugin([{ from: "src/asset", to: "asset" }]),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 1, sourceMap: true }
          },
          "postcss-loader"
        ]
      },

      // {
      //   enforce: "pre",
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: "eslint-loader"
      // },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      },
      {
        test: /\.json$/,
        use: "json-loader"
      },
      {
        test: /\.(jpg|png|svg)$/,
        use:
          "file-loader?name=[name].[ext]&publicPath=asset/image/&outputPath=asset/image/"
      }
      // {
      //     test: /\.(woff2|woff|ttf)$/,
      //     use: 'file-loader?name=[name].[ext]&publicPath=asset/font/&outputPath=asset/font/'
      // },
    ]
  },
  devServer: {
    contentBase: "src",
    hot: true,
    historyApiFallback: true,
    port: 7777
  }
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.devtool = "source-map";
  }

  if (argv.mode === "production") {
    if (env) {
      config.output.publicPath = env.demo
        ? "http://demo.dosomething-studio.com/XXX/"
        : "/";
      config.plugins = config.plugins.concat([
        new webpack.DefinePlugin({
          "process.env.PUBLIC_PATH": JSON.stringify(config.output.publicPath),
          "process.env.DEMO": JSON.stringify("demo")
        })
      ]);
    }
    (config.devServer = {}),
      (config.plugins = config.plugins.concat([
        new UglifyJsPlugin({
          uglifyOptions: {
            comments: false,
            compress: {
              warnings: false,
              drop_console: true // remove all console.log
            },
            output: {
              beautify: false,
              comments: false
            },
            nameCache: null,
            sourceMap: true
          }
        }),
        new ExtractTextPlugin("styles.css")
      ]));
  }

  return config;
};
