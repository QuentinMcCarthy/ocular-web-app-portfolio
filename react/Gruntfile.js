module.exports = function(grunt){
	require('time-grunt')(grunt);
	require('jit-grunt')(grunt);

	grunt.initConfig({
		sass: {
			src: {
				files: {
					"src/css/index.css": [
						"src/sass/index.scss",
						"src/sass/master.scss"
					]
				}
			}
		},
		cssmin: {
			src: {
				files: [{
					expand: true,
					cwd: 'src/css',
					src: ['*.css', '!*.min.css'],
					dest: 'src/css',
					ext: '.min.css'
				}]
			}
		},
		jshint: {
			public: ['rc/js/script.js']
		},
		uglify: {
			public: {
				files: {
					'src/js/script.min.js': ['src/js/script.js']
				}
			}
		},
		watch: {
			pubsass: {
				files: ['public/sass/master.scss'],
				tasks: ['sass']
			},
			srcsass: {
				files: ['src/sass/*.scss'],
				tasks: ['sass']
			},
			// pubcss: {
			// 	files: ['public/css/master.css'],
			// 	tasks: ['cssmin']
			// },
			// srccss: {
			// 	files: ['src/css/*.css', '!src/css/*.min.css'],
			// 	tasks: ['cssmin']
			// },
			// pubjs: {
			// 	files: ['public/js/script.js'],
			// 	tasks: ['jshint', 'uglify']
			// }
		}
	});

	// grunt.loadNpmTasks();

	// grunt.registerTask();
};
