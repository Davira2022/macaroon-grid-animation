'use strict';

const {src, dest, watch, series} = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
// const concatCss = require('gulp-concat-css');

exports.less = function () {
    return src('./css/style.less')
        .pipe(less())
        // .pipe(less().on('error', less.logError))
        // .pipe(concatCss("css/bundle.css"))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./dist'));
};

exports.watch = function () {
    watch('./css/style.less', series('less'));
};






// const {src, dest} = require('gulp');
// const less = require('gulp-less');
//
//
// exports.less = function () {
//     return src('./css/*.less')
//         .pipe(less())
//         .pipe(dest('./dist'));
// }