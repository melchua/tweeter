/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function numOfDaysFrom(date) {
  const today = Date.now();
  const remaining = today - date;
  const minutes = 1000 * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  return Math.floor(remaining/days);
}

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function createTweetElement(tweetData) {
  let name = tweetData.user.name;
  let handle = tweetData.user.handle;
  let avatars = tweetData.user.avatars;
  let content = tweetData.content.text;
  const daysPassed = numOfDaysFrom(tweetData.created_at);

  let $tweetObj = $("<article>").addClass("tweet");

// build header
  let $header = $("<header>");
  $header.append("<img src='" + avatars.small + "' class='avatar'>");
  $header.append("<h2>" + name + "<h2>");
  $header.append("<span class='handle'>" + handle + "</span> </header>");

//build content section
  let $content = $("<section>").addClass("content");
  $content.append( escape(content) + "</section>");

// build footer
  let $footer = $("<footer><span class='daysPassed'>" + daysPassed + " days ago </span><span class='tweeterIcons'><i class='fas fa-flag-checkered'></i><i class='fas fa-retweet'></i><i class='fas fa-heartbeat'></i></span></footer>");

  $tweetObj.append($header);
  $tweetObj.append($content);
  $tweetObj.append($footer);
  $tweetObj.append("</article>");

  return $tweetObj;

}

function renderTweets(tweets) {
  $('#tweets-container').empty();
  tweets.reverse().forEach(function(tweet) {
    let $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet);
  });

}

function loadTweets() {
  $.ajax({
    method: 'GET',
    url: '/tweets',
    success: renderTweets,
  })
}

function newTweet() {
  var $newTweet = $('#new-tweet')

  $newTweet.on('submit', function(event) {
      event.preventDefault();
      rawInput = $newTweet.serialize();
      inputLength = (rawInput.substring(5, rawInput.length)).length;

      if (inputLength > 140) {
        $.flash('You have entered too many characters.');
      } else if (inputLength === 0) {
        $.flash('You have not entered anything.');
      } else {
        $newTweet.get(0).reset();
        $('.counter').text("140");
        $.ajax({
          method: 'POST',
          url: '/tweets',
          success: function() {
            loadTweets();
            $newTweet.get(0).reset();
          },
          data: rawInput
        });
      }
    });
}

$(function() {
  loadTweets();
  newTweet();
});



