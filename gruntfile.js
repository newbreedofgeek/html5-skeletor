module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            src: ['build', 'deploy']
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: false
            },
            min: {
                files: [{
                    src:[ "src/js/modules/*.js"],
                    dest: 'build/js/script.js'
                },
                {
                    src:[ "src/js/libraries/*.js"],
                    dest: 'build/js/libraries.js'
                }]
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/images/', src: ['**'], dest: 'build/images/'},
                    {expand: true, cwd: 'src/css/', src: ['**'], dest: 'build/css/'}
                ]
            }
        },
        targethtml: {
            dist: {
                files: {
                    'build/index.html': 'src/index.html'
                }
            }
        },
        compress: {
            main: {
                options: {
                    archive: 'deploy/build.zip'
                },
                files: [
                    {src: ['build/**'], dest: ''}
                ]
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: 'src/',
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-targethtml');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks( 'grunt-contrib-connect' );

    // Default task to build app
    grunt.registerTask('default', ['clean', 'uglify', 'copy', 'targethtml']);

    // Build and package app to zip
    grunt.registerTask( 'package', ['clean', 'uglify', 'copy', 'targethtml', 'compress'] );

    // Serve working src locally
    grunt.registerTask( 'serve', ['clean', 'connect'] );

};