$(window).scroll(() => {
  const scroll = $(window).scrollTop();
  if (scroll >= 200) {
    $(".bg-transparent").addClass("bg-white");
  } else {
    $(".bg-transparent").removeClass("bg-white");
  }

  console.log(scroll);
});

// handleClick tabs

$(".icon-bar").click(() => {
  $(".nav").toggleClass("active");
});
