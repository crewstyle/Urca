/*! *//*!
 * ~~~~~~~~~~~~~~~~~~
 * Urca - ª®©æ
 * https://github.com/crewstyle/Urca
 * ~~~~~~~~~~~~~~~~~~
 * Copyright 2015 Achraf Chouk <achrafchouk@gmail.com>
 */

module.exports = function (grunt){
    //------ [REGISTER CONFIGURATION] ------//

    grunt.initConfig({
        //project settings
        yohoho: {
            name: 'urca',
            path: {
                bow: 'bower_components',
                src: 'src',
                tar: 'dist'
            },
            vars: {
                //colors
                primarycolor: '#00a0dc',
                secondarycolor: '#ecf0f1',
                successcolor: '#2ecc71',
                warningcolor: '#f39c12',
                alertcolor: '#e74c3c',

                whitecolor: '#ffffff',
                lightgraycolor: '#eff3f6',
                mediumgraycolor: '#a0b1c1',
                darkgraycolor: '#59626a',
                blackcolor: '#272727',

                //fonts
                fontbase: '14px',

                //grid
                columnWidth: (100 / 12) + '%',
                gutterWidth: '2%',

                //media sizes
                lowextrasmall: '319px',
                highextrasmall: '320px',
                lowsmall: '549px',
                highsmall: '550px',
                lowmedium: '719px',
                highmedium: '720px',
                lowlarge: '997px',
                highlarge: '998px',
                lowextralarge: '1199px',
                highextralarge: '1200px'
            }
        },

        //packages are listed here
        pkg: grunt.file.readJSON('package.json'),

        //1. remove any previously-created files
        clean: [
            '<%= yohoho.path.tar %>/*',
        ],

        //2. less compilation
        less: {
            main: {
                options: {
                    modifyVars: '<%= yohoho.vars %>',
                    optimization: 2
                },
                files: {
                    '<%= yohoho.path.tar %>/standalone/<%= yohoho.name %>.css': [
                        //Gryd
                        '<%= yohoho.path.src %>/less/*.less'
                    ]
                }
            }
        },

        //3. minify CSS files
        cssmin: {
            compress: {
                files: {
                    '<%= yohoho.path.tar %>/<%= yohoho.name %>.min.css': [
                        //Normalize.css
                        '<%= yohoho.path.bow %>/normalize-css/normalize.css',
                        //Urca
                        '<%= yohoho.path.tar %>/standalone/<%= yohoho.name %>.css'
                    ]
                }
            }
        }
    });

    //------ [REGISTER MODULES] ------//

    //remove any previously-created files
    grunt.loadNpmTasks('grunt-contrib-clean');

    //minify CSS files
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    //less compilation
    grunt.loadNpmTasks('grunt-contrib-less');

    //------ [REGISTER TASKS] ------//

    //default task: `grunt default` / `grunt`
    grunt.registerTask('default',   ['clean','less','cssmin']);
};
