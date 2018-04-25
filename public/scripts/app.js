/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fix later:
// tweetId == handle, fix this in CSS later
// fix styling for content boxes instead of line-height, do a padding

// return # of days from
function numOfDaysFrom(date) {
  const today = Date.now();
  const remaining = today - date;
  const minutes = 1000 * 60;
  const hours = minutes * 60;
  const days = hours * 24;
  return Math.floor(remaining/days);
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
  $content.append(content + "</section>");

// build footer
  let $footer = $("<footer><span class='daysPassed'>" + daysPassed + " days ago </span><span class='tweeterIcons'><i class='fas fa-flag-checkered'></i><i class='fas fa-retweet'></i><i class='fas fa-heartbeat'></i></span></footer>");

  $tweetObj.append($header);
  $tweetObj.append($content);
  $tweetObj.append($footer);
  $tweetObj.append("</article>");

  return $tweetObj;

}

function renderTweets(tweets) {
  tweets.forEach(function(tweet) {
    let $tweet = createTweetElement(tweet);
    $('#tweets-container').append($tweet);
  });
}

// function fetchTweets()
// {
//   $.ajax({
//         method: 'GET',
//         url: '/tweets',
//         success: renderTweets
//       });
// }


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
      console.log($newTweet.serialize())
      $.ajax({
        method: 'POST',
        url: '/tweets',
        success: loadTweets,
        data: $newTweet.serialize()
      });
    });
}

$(function() {
  loadTweets();
  newTweet();
});



