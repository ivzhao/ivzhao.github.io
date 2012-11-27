$(document).ready(function(){

  $('.thumb').on('mouseenter', function(e) {
    $(this).addClass('entered');
    var poptip = $(this).data('poptip');
    if (poptip) $(this).append('<div class="poptip">' + poptip + '</div>');
  });

  $('.thumb').on('mouseleave', function(e) {
    $(this).removeClass('entered');
    $(this).find('.poptip').remove();
  });

  $('a').on('mouseenter mouseleave', function(e){
    var thumbClass = $(this).data('thumb-class');
    if (thumbClass) $('.' + thumbClass).trigger(e.type);
  });

  $.getJSON('http://twitter.com/status/user_timeline/ivanhzhao.json?count=1&callback=?', 
    function(response){
      if (response && response.length > 0) {
        var lastTweet = response[0].text;
        var timeParts = response[0].created_at.split(' ');
        var timeDate = timeParts[1] + ' ' + timeParts[2];
        $('#last_tweet').text(lastTweet);
        $('#last_tweet_date').text(timeDate);
      }
    });

  WebFont.load({
    custom: {
      families: ['MinionProRegular', 'MinionProItalic'],
    urls : ['./style.css']
    }
  });
});
