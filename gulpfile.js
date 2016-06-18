var browserify = require('browserify'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    jade = require('gulp-jade'),
    less = require('gulp-less'),
    nodemon = require('gulp-nodemon'),
    path = require('path'),
    source = require('vinyl-source-stream'),
    babel = require('babelify'),
    Server = require('karma').Server;

var paths = {
  public: 'public/**',
  jade: 'app/**/*.jade',
  styles: 'app/styles/*.+(less|css)',
  scripts: 'app/**/*.js',
  staticFiles: [
    '!app/**/*.+(less|css|js|jade)',
    'app/**/*.*'
  ]
};

gulp.task('jade', function() {
  gulp.src(paths.jade)
    .pipe(jade())
    .pipe(gulp.dest('./public/'));
});

gulp.task('less', function() {
  gulp.src(paths.styles)
    .pipe(less({
      paths: [ path.join(__dirname, 'styles') ]
    }))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('static-files', function() {
  return gulp.src(paths.staticFiles)
    .pipe(gulp.dest('public/'));
});

gulp.task('nodemon', function() {
  nodemon({ 
    script: 'server.js', 
    ext: 'js', 
    ignore: ['public/**', 'app/**', 'test/**', 'node_modules/**'] 
  })
  .on('restart', ['jade','less'], function() {
    console.log('>> node restart');
  });
});

gulp.task('browserify', function() {
  var b = browserify('./app/application.js').transform(babel, {presets: ['es2015']});
  
  return b.bundle()
  .on('success', gutil.log.bind(gutil, 'Browserify Rebundled'))
  .on('error', gutil.log.bind(gutil, 'Browserify Error: in browserify gulp task'))
  .pipe(source('index.js'))
  .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function() {
  gulp.watch(paths.jade, ['jade']);
  gulp.watch(paths.styles, ['less']);
  gulp.watch(paths.scripts, ['browserify']);
});

gulp.task('test:unit', function(done) {
  new Server({
    configFile: __dirname + '/karma.config.js',
    singleRun: true
  }, done).start();
});


gulp.task('build', ['jade', 'less', 'browserify', 'static-files']);
gulp.task('default', ['nodemon', 'build', 'watch']);