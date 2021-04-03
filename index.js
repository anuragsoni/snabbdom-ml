var browserify = require('browserify');
var babelify = require('babelify');
var fs = require('fs');

browserify()
    .add('./js/snabbdom.js')
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
    .plugin('tinyify', { flat: false })
    .bundle()
    .pipe(fs.createWriteStream('./js/snabbdom.bundle.js'))
