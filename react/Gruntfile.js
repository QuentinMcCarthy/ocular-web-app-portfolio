module.exports = function(grunt){
	require('time-grunt')(grunt);
	require('jit-grunt')(grunt);

	grunt.initConfig({
		sass: {
			src: {
				files: {
					'src/css/index.css': 'src/sass/index.scss'
				}
			}
		},
		cssmin: {
			src: {
				files: {
					'src/css/index.min.css': 'src/css/index.css'
				}
			}
		},
		jshint: {
			src: ['src/js/script.js']
		},
		uglify: {
			src: {
				files: {
					'src/js/script.min.js': 'src/js/script.js'
				}
			}
		},
		watch: {
			sass: {
				files: ['src/sass/*.scss'],
				tasks: ['sass']//, 'cssmin']
			}//,
			// js: {
			// 	files: ['src/js/script.js'],
			// 	tasks: ['jshint', 'uglify']
			// }
		}
	});

	// grunt.loadNpmTasks();

	// grunt.registerTask();
};
