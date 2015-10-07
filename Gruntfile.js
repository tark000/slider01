module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
        options: {
          mangle: false,
          compress: false
        },
        files: {
          'public/js/output.js': [
            'frontend/js/vendor/jquery/jquery.min.js',
            'frontend/js/vendor/underscore/underscore.js',
            'frontend/js/vendor/backbone/backbone-min.js',
            'frontend/js/vendor/bootstrap/dist/js/bootstrap.min.js',
            'frontend/js/app/**/*.js',
            'frontend/js/router.js'
          ]
        }
      }
    },
    cssmin: {

      target: {
        files: {
          'public/css/output.css': [
            'frontend/js/vendor/bootstrap/dist/css/bootstrap.min.css', 
            'frontend/css/style.css'
          ]
        }
      }
    },
    watch: {
      scripts: {
        files: ['frontend/js/app/**/*.js', 'frontend/js/router.js'],
        tasks: ['uglify']
      },
      css: {
        files: ['frontend/css/style.css'],
        tasks: ['cssmin']
      }
    }
   

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify:my_target', 'cssmin']);

};