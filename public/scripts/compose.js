$(function() {
  // This function is used to toggle slide upon click of Compose button
  const $newTweet = $(".new-tweet");
  $(".compose").on("click", function(event) {
    event.preventDefault();
    if ($newTweet.is(":hidden")) {
      $newTweet.slideDown();
      $newTweet.find("textarea").focus();
    } else {
      $newTweet.slideUp();
    }
  });

});

