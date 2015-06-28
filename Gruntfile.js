module.exports = function (grunt) {
 
    grunt.initConfig({
        app: {
            app: '',
            dist: 'release',
            baseurl: ''
        },
        
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
      'release/css/style.min.css': ['css/bootstrap.min.css', 'css/style.css', 'css/jquery.fancybox.css', 'css/jquery.bxslider.css']
    }
  }
},
        uglify: {
    my_target: {
      files: {
        'release/js/js.min.js': ['js/bootstrap.min.js', 'js/jquery.fancybox.js', 'js/helpers/jquery.fancybox-thumbs.js', 'js/jquery.mousewheel-3.0.6.pack.js', 'js/jquery.maskedinput.min.js', 'js/jquery.carouFredSel-6.1.0-packed.js', 'js/jquery.bxslider.min.js']
      }
    }
  },
       includereplace: {
    dist: {
    
                        
      // Destination directory to copy files to
	  files: [{
	  src: ['*/*.html'],
      dest: '<%= app.dist %>/<%= app.baseurl %>',
	  cwd: '<%= app.dist %>/<%= app.baseurl %>',
	  expand: true},
	  {
	  src: ['*.html'],  
      dest: 'release/'	  
	  }
	  ]
    }
  } ,
  htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        '*index.html': 'release/index.html'     // 'destination': 'source'
       
      }
    
    
    }
  },
  
   critical: {
    test: {
        options: {
			inline: true,
            base: './',
			
            css: [
                
                'release/css/style.min.css'
            ],
            width: 1600,
            height: 1000
        },
		
       files: [{
                    expand: true,
                    cwd: '<%= app.dist %>/<%= app.baseurl %>',
                    src: ['**/*.html'],
                    dest: '<%= app.dist %>/<%= app.baseurl %>'
                }]
    }
}
       
    });
 
  
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-include-replace');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-critical');
 
    grunt.registerTask('default', ['includereplace', 'critical']);
};