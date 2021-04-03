var browserify = require('browserify');
var babelify = require('babelify');
var fs = require('fs');

browserify()
    .add('./js/snabbdom.js')
    .plugin('common-shakeify')
    .transform(babelify, {
        'global': true,
        'presets': [
            ['@babel/preset-env', {
                'targets': {
                    'ie': '11'
                }
            }]
        ]
    })
    .bundle()
    .pipe(fs.createWriteStream('./js/snabbdom.bundle.js'))
