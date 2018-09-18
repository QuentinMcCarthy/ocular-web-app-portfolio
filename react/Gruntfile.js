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
		watch: {
			sass: {
				files: ['src/sass/*.scss'],
				tasks: ['sass', 'cssmin']
			}
		}
	});

	// grunt.loadNpmTasks();

	// grunt.registerTask();
	grunt.registerTask('loadcss', ['sass', 'cssmin']);
};
