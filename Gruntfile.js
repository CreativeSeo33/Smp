module.exports = function (grunt) {
 
    grunt.initConfig({
        
        
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/compress/'
                }]
            }
        },
        useminPrepare: {
            html: ['build/index.html'],
            options: {
                root: '.',
                dest: 'build'
            }
        },
		cssmin: {
  options: {
    shorthandCompacting: false,
    roundingPrecision: -1
  },
  target: {
    files: {
      'css/style.min.css': ['css/bootstrap.min.css', 'css/style.css', 'css/jquery.fancybox.css', 'css/jquery.bxslider.css']
    }
  }
},
        uglify: {
    my_target: {
      files: {
        'js/js.min.js': ['js/bootstrap.min.js', 'js/jquery.fancybox.js', 'js/helpers/jquery.fancybox-thumbs.js', 'js/jquery.mousewheel-3.0.6.pack.js', 'js/jquery.maskedinput.min.js', 'js/jquery.carouFredSel-6.1.0-packed.js', 'js/jquery.bxslider.min.js']
      }
    }
  }
        
       
    });
 
  
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    
 
    grunt.registerTask('default', ['cssmin', 'imagemin', 'uglify']);
};