module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      foo: {
        files: [
          {src: ['frontend/js/vendor/jquery/jquery.min.js', 'frontent/js/vendor/underscore/underscore.js', 'frontend/js/vendor/backbone/backbone.js', 'frontend/js/vendor/bootstrap/dist/js/bootstrap.min.js'], dest: 'frontend/build.js'}
         
        ],
      }
    },
    uglify: {
      options: {
        
      },
      my_target: {
        files: {
          'frontend/buils.min.js': ['frontend/js/buils.js']
        }
      }
    },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};