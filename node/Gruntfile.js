module.exports = function(grunt){
	require("time-grunt")(grunt);
	require("jit-grunt")(grunt);

	grunt.initConfig({
		sass: {
			public: {
				files: {
					"../react/public/css/master.css": "../react/public/sass/master.scss"
				}
			},
			src: {
				files: [{
					expand: true,
					cwd: "../react/src/sass",
					src: ["*.scss"],
					dest: "../react/src/css",
					ext: ".css"
				}]
			}
		},
		cssmin: {
			public: {
				files: {
					"../react/public/css/master.min.css": "../react/public/css/master.css"
				}
			},
			src: {
				files: [{
					expand: true,
					cwd: "../react/src/css",
					src: ["*.css", "!*.min.css"],
					dest: "../react/src/css",
					ext: ".min.css"
				}]
			}
		},
		jshint: {
			public: ["../react/public/js/script.js"]
		},
		uglify: {
			public: {
				files: {
					"../react/public/js/script.min.js": ["../react/public/js/script.js"]
				}
			}
		},
		watch: {
			pubsass: {
				files: ["../react/public/sass/master.scss"],
				tasks: ["sass:public"]
			},
			srcsass: {
				files: ["../react/src/sass/*.scss"],
				tasks: ["sass:src"]
			},
			// pubcss: {
			// 	files: ["../react/public/css/master.css"],
			// 	tasks: ["cssmin:public"]
			// },
			// srccss: {
			// 	files: ["../react/src/css/*.css", "!../react/src/css/*.min.css"],
			// 	tasks: ["cssmin:src"]
			// },
			// pubjs: {
			// 	files: ["../react/public/js/script.js"],
			// 	tasks: ["jshint:public", "uglify:public"]
			// }
		}
	});

	// grunt.loadNpmTasks();

	// grunt.registerTask();
};
