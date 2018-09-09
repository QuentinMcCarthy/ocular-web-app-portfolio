module.exports = function(grunt){
	grunt.initConfig({
		sass: {
			dist: {
				files: {
					"../react/src/master.css": "../react/src/sass/master.scss"
				}
			}
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: '../react/src/',
					src: ['*.css', '!*.min.css'],
					dest: '../react/src/',
					ext: '.min.css'
				}]
			}
		},
		jshint: {
			all: ["../react/public/js/script.js"]
		},
		uglify: {
			my_target: {
				files: {
					"../react/public/js/script.min.js": ["../react/public/js/script.js"]
				}
			}
		},
		watch: {
			sass: {
				files: ["../react/src/sass/master.scss"],
				tasks: ["sass"]
			},
			css: {
				files: ["../react/src/master.css"],
				tasks: ["csslint", "cssmin"]
			},
			js: {
				files: ["../react/public/js/script.js"],
				tasks: ["jshint", "uglify"]
			}
		}
	});

	// grunt.loadNpmTasks();
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-sass");

	// grunt.registerTask();
};
