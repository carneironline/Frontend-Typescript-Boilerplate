module.exports = function(config) {
  config.set({
    basePath: '',
    autoWatch: true,
    frameworks: ['jasmine'],
    files: [
	    'js/tiny.js',
	    'spec/js/*.js',
	    'lib/mock-ajax.js'
    ],
    browsers: ['Chrome'],

    reporters: ['progress', 'coverage'],
    preprocessors: { 'js/*.js': ['coverage'] },

    singleRun: true
  });
};
