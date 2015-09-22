module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
        files: {
          'frontend/js/build.js': [
            'frontend/js/vendor/jquery/jquery.min.js', 
            'frontent/js/vendor/underscore/underscore.js', 
            'frontend/js/vendor/backbone/backbone.js', 
            'frontend/js/vendor/bootstrap/dist/js/bootstrap.min.js'
            ]
        }
      }
    }
   

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};