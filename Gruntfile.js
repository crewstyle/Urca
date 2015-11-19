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
                lowes: '319px',
                highes: '320px',
                lows: '549px',
                highs: '550px',
                lowm: '719px',
                highm: '720px',
                lowl: '997px',
                highl: '998px',
                lowel: '1199px',
                highel: '1200px',
                asparent: '1200px'
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
                        '<%= yohoho.path.src %>/less/gryd.less'
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
