export default {
    server: {
        port: 80
    },
    dir: {
        srcDir: __dirname + '/src/',
        buildDir: './__build__/',
        distDir: __dirname + '/dist/',
        cssDir: 'css/',
        imgDir: 'img/',
        jsDir: 'js/',
        sassDir: 'sass/',
        fontsDir: 'fonts/',
        incDir: 'inc/',
        controlDir: 'controllers/',
        partDir: 'partials/',
        pageDir: 'pages/'
    },
    fonts: {
        formats: 'woff woff2',
        custom: {
            'Open Sans': [400, 600]
        }
    },
    css: {
        autoprefixer: ['> 98%']
    },
    javascript: {
        entry: ['index.js'],
        babel: { presets: ['es2015', 'stage-0'] }
    }
};
