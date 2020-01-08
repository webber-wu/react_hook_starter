const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

config = {
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
      path.resolve(__dirname, "src/redux"),
      path.resolve(__dirname, "src/redux/action"),
      path.resolve(__dirname, "src/redux/reducer"),
      "node_modules"
    ]
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
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
      useRef: ["react", "useRef"],
      useCallBack: ["react", "useCallBack"],
      useMemo: ["react", "useMemo"],
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
    new CopyWebpackPlugin([
      { from: "src/asset", to: "asset" }
      // { from: "src/public", to: "public" }
    ]),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
      ignoreOrder: false // Enable to remove warnings about conflicting order
    })
  ],
  module: {
    rules: [
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
        test: /\.exec\.js$/,
        use: ["script-loader"]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "../asset/image",
              outputPath: "../asset/image"
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: "src",
    hot: true,
    historyApiFallback: true,
    port: 4000
  }
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    config.devtool = "source-map";
  }

  if (argv.mode === "production") {
    if (env) {
      config.output.publicPath = env.demo
        ? "http://demo.dosomething-studio.com/xxxxx/"
        : "/";
      config.plugins = config.plugins.concat([
        new webpack.DefinePlugin({
          "process.env.PUBLIC_PATH": JSON.stringify(config.output.publicPath),
          "process.env.DEMO": JSON.stringify("demo"),
          "process.env.NODE_ENV": JSON.stringify("production")
        })
      ]);
    } else {
      config.plugins = config.plugins.concat([
        new webpack.DefinePlugin({
          "process.env.PUBLIC_PATH": JSON.stringify("/"),
          "process.env.DEMO": JSON.stringify(""),
          "process.env.NODE_ENV": JSON.stringify("production")
        })
      ]);
    }
    config.module.rules = config.module.rules.concat([
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development",
              reloadAll: true
            }
          },
          "css-loader",
          "postcss-loader"
        ]
      }
    ]);
  } else {
    config.plugins = config.plugins.concat([
      new webpack.DefinePlugin({
        "process.env.PUBLIC_PATH": JSON.stringify("/"),
        "process.env.NODE_ENV": JSON.stringify("development")
      })
    ]);
    config.module.rules = config.module.rules.concat([
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]);
  }
  return config;
};
