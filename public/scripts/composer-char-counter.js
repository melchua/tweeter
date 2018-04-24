$(function() {
  console.log("ready");

  let textarea = $(".new-tweet textarea");
  const defaultCount = 140;

  textarea.on("keyup", function(event) {
    let inputLength = $(this).val().length;
    let counter = $(this).siblings(".counter").get(0);
    counter.innerText = parseInt(defaultCount) - parseInt(inputLength);
    if (counter.innerText < 0) {
      $(counter).css({"color": "red"});
    } else {
      $(counter).css({"color": "black"});
    }
  });

});

