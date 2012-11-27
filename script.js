$(document).ready(function(){

  if ($('html').hasClass('no-touch')) {

    $('.thumb').on('mouseenter', function(e){
      $(this).addClass('entered');
      var poptip = $(this).data('poptip');
      if (poptip) $(this).append('<div class="poptip">' + poptip + '</div>');
    });

    $('.thumb').on('mouseleave', function(e){
      $(this).removeClass('entered');
      $(this).find('.poptip').remove();
    });

    $('a').on('mouseenter mouseleave', function(e){
      var thumbClass = $(this).data('thumb-class');
      if (thumbClass) $('.' + thumbClass).trigger(e.type);
    });
  }

  $.getJSON('http://search.twitter.com/search.json?callback=?&q=from:ivanhzhao', 
    function(response){
      if (response && response.results && response.results.length > 0) {
        var lastTweet = response.results[0].text;
        var timeParts = response.results[0].created_at.split(' ');
        var timeDate = timeParts[1] + ' ' + timeParts[2];
        $('.last-tweet').text(lastTweet);
        $('.last-tweet-date').text(timeDate);
      }
    });

  WebFont.load({
    custom: {
      families: ['MinionProRegular', 'MinionProItalic'],
    urls : ['./style.css']
    }
  });
});
