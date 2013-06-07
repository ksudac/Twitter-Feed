$(document).ready(function(){

   function getTweet(){

        $('#poster').html("<h2 class='loading'>Your poster is on its way!</h2>");
        $.getJSON("https://userstream.twitter.com/1.1/ksudac99.json" + film + "?callback=?", function(json) {

         $('#poster').html('<h2 class="loading">Well, gee whiz! We found you a poster, skip!</h2><img id="thePoster" src=' + json[0].posters[0].image.url + ' />');
 }

});