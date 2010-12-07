
$(document).ready(function(){

    $('#about, #projects li').live('mouseenter mouseleave', function(e) {
        var link = $(this).find('.text_link');

        var duration, textColor, linkColor;
        if (e.type == 'mouseenter') {
            duration = 100;
            textColor = '#333';
            linkColor = '#FF5F4D';
            linkDecoration = 'underline';
        } else {
            duration = 240;
            textColor = '#D6D6D6';
            linkColor = (link.closest('em').length > 0) ? '#333' : '#D6D6D6';
            linkDecoration = 'none';
        }

        $(this).animate({'color': textColor}, duration, 'linear');
        link.animate({'color': linkColor}, duration, 'linear');
        link.css('text-decoration', linkDecoration);
    })

    $('.thumb').bind('mouseenter mouseleave', function(e) {
        var duration = (e.type == 'mouseenter') ? 160: 300;
        var opacity = (e.type == 'mouseenter') ? 1.0: 0.0;
        $(this).children('.tooltip').fadeTo(duration, opacity);
    });

    $('.text_link').live('mouseenter mouseleave', function(e) {
        var thumb = $('#'+$(this).attr('id')+'_thumb');
        var positionTop = (e.type == 'mouseenter') ? 1 : 0;
        thumb.trigger(e.type);
        thumb.children('img').css('top', positionTop);
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
