let mix = require('laravel-mix');

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

// DONT USE, react client moved to https://github.com/jrohlandt/t4-client
// mix.react(
//    'resources/assets/js/backend/app.js',
//    'public/js/backend/app.js'
//    )
//    .extract([
//       'react',
//       'react-dom',
//       'react-router-dom',
//       'react-transition-group',
//       'chart.js',
//       'react-chartjs',
//    ]);
//
// mix.sass(
//    'resources/assets/sass/backend/app.scss',
//    'public/css/backend/app.css'
//    );

if (mix.inProduction()) {
   mix.version();
}
