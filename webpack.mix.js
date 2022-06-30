const mix = require("laravel-mix");
var LiveReloadPlugin = require("webpack-livereload-plugin");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    output: {
        chunkFilename: "jsv2/[name].[chunkhash].js"
    },
    plugins: [new LiveReloadPlugin()]
});

mix.js("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css");

if (mix.inProduction()) {
    mix.version();
}

mix.browserSync("http://127.0.0.1:8002");