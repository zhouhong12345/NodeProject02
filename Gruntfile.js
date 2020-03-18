/*global module:true*/
module.exports=function(grunt){
  grunt.initConfig({
    htmlmin:{
      options:{
        collapseWhitespace:true
      },
      files:{
        src:'dist/index.html',
        dest:'dist/index.html'
      }
    },
    cssmin:{
      'dist/enroll.css':'dist/enroll.css'
    },
    uglify:{
      'dist/enroll.js':'dist/enroll.js'
    },
    copy:{
       html:{
         src:'./index.html',
         dest:'./dist/index.html'
       },
       css:{
         src:'./enroll.css',
         dest:'./dist/enroll.css'
       },
       js:{
         src:'./enroll.js',
         dest:'./dist/enroll.js'
       }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('release',['copy','htmlmin','cssmin','uglify']);
};

