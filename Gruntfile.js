/*global module:true*/
module.exports=function(grunt){
  grunt.initConfig({
    htmlmin:{
      options:{
        rmoveComments:true,
        collapseWhitespace:true
      },
      files:{
        src:'./index.html',
        dest:'dist/index.html'
      }
    },
    cssmin:{
      'dist/enroll.css':'enroll.css'
    },
    uglify:{
      'dist/enroll.js':'enroll.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('minify',['htmlmin','cssmin','uglify']);
};

