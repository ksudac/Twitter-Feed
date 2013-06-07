$(document).ready(function(){
    $.getJSON("https://api.twitter.com/1/statuses/user_timeline/ksudac99.json?count=1&include_rts=1&callback=?", function(data) {
      $('#tweet').text(data[0].text);
      $('#date').text($.timeago(data[0].created_at));
    });    
    !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
});


