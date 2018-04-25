/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fix later:
// tweetId == handle, fix this in CSS later
// fix styling for content boxes instead of line-height, do a padding

function createTweetElement(tweetData) {

  let name = tweetData.user.name;
  let handle = tweetData.user.handle;
  let avatars = tweetData.user.avatars;
  let content = tweetData.content.text;

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
  let $footer = $("<footer><span class='daysPassed'>10 days ago</span><span class='tweeterIcons'><i class='fas fa-flag-checkered'></i><i class='fas fa-retweet'></i><i class='fas fa-heartbeat'></i></span></footer>");

  $tweetObj.append($header);
  $tweetObj.append($content);
  $tweetObj.append($footer);
  $tweetObj.append("</article>");

  return $tweetObj;

}

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
  let $tweet = createTweetElement(tweetData);
  console.log($tweet);
  $('#tweets-container').append($tweet);
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