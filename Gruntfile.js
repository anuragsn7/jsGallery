'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'src/js/*.js'
            ]
        },
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    compass: false,
                    sourcemap: false
                },
                files: {
                    'dist/css/jsGallery.css': [
                        'src/scss/main.scss'
                    ]
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/js/jsGallery.js': [
                        'src/js/*.js'
                    ]
                },
                options: {
                    sourceMap: 'dist/jsGallery.js.map',
                    sourceMappingURL: '/dist/jsGallery.js.map'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            sass: {
                files: [
                    'src/scss/*.scss'
                ],
                tasks: ['sass']
            },
            js: {
                files: [
                    'src/js/*.js'
                ],
                tasks: ['jshint', 'uglify']
            },
            html: {
                files: [
                    'demo/*.html'
                ]
            }
        },
        clean: {
            dist: [
                'dist/js/jsGallery.js',
                'dist/css/jsGallery.css'
            ]
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Register tasks
    grunt.registerTask('default', [
        'clean',
        'sass',
        'uglify'
    ]);
    grunt.registerTask('dev', [
        'watch'
    ]);

};