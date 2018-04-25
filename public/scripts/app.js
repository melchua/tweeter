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
  let today = Date.now();
  let remaining = today - date;
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

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};

$(function() {
  // let $tweet = createTweetElement(tweetData);
  // console.log($tweet);
  // $('#tweets-container').append($tweet);
  renderTweets(data);
});



/*
        <article class="tweet">
          <header>
            <img src="https://theblueraft.files.wordpress.com/2010/08/aang.jpg" class="avatar">
            <h2>J-Money</h2>
            <span class="tweetId">@MrMoney</span>
          </header>
          <section class="content">
            The new T-swizzle album just dropped!!! Derp.
          </section>
          <footer>
            <span class="daysPassed">10 days ago</span>
            <span class="tweeterIcons">
              <i class="fas fa-flag-checkered"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heartbeat"></i>
            </span>
          </footer>
        </article>
        */