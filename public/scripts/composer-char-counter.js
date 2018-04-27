// Character counter function
$(function() {
  const counter = $('.counter');
  const defaultCount = 140;

  $(".new-tweet textarea").on("input", function(event) {
    let inputLength = $(this).val().length;
    let remaining = defaultCount - inputLength;

    counter.css({"color": remaining < 0 ? "red" : "black"});
    counter.text(remaining);
  });
  counter.text(defaultCount);
});

