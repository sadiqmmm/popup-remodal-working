jQuery(document).ready(function($){
 
 /**
  * function to load a given css file 
  */ 
 loadCSS = function(href) {
     var cssLink = $("<link rel='stylesheet' type='text/css' href='"+href+"'>");
     $("head").append(cssLink); 
 };

/**
 * function to load a given js file 
 */ 
 loadJS = function(src) {
     var jsLink = $("<script type='text/javascript' src='"+src+"'>");
     $("head").append(jsLink); 
 }; 
  
 // load the css file 
 //loadCSS("style.css");

 // load the css file 

loadCSS("css/remodal.css");
loadCSS("css/remodal-default-theme.css");
loadCSS("css/style.css");

 // load the js file
loadJS("js/remodal.js"); //dynamically load and add this .js file
loadJS("js/js.cookie.js"); //dynamically load and add this .js file
loadJS("js/config.js"); //dynamically load and add this .js file
loadJS("js/script.js"); //dynamically load and add this .js file

});

//source: https://naveensnayak.wordpress.com/2013/06/26/dynamically-loading-css-and-js-files-using-jquery/