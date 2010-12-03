$(document).ready(function(){

    $('#about, #projects li').live('mouseenter mouseleave', function(e) {
        if (e.type == 'mouseenter') {
            $(this).animate({'color': '#333'}, 100, 'linear');
        } else {
            $(this).animate({'color': '#D6D6D6'}, 300, 'linear');
        }
    })

    $('.thumb').live('mouseenter mouseleave', function(e) {
        var toolTip = $(this).children('.tooltip');
        if (e.type == 'mouseenter') {
            toolTip.fadeIn(160);
        } else {
            toolTip.fadeOut(200);
        }
    });

    $.getJSON('http://twitter.com/status/user_timeline/ivanhzhao.json?count=1&callback=?', 
        function(response){
            var lastTweet = response[0].text;
            var timeParts = response[0].created_at.split(' ');
            var timeDate = timeParts[1] + ' ' + timeParts[2];
            $('#last_tweet').text(lastTweet);
            $('#last_tweet_date').text(timeDate);
    });
});
