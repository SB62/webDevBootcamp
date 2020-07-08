// Checkoff specific todos by clicking - toggles done class defined in the CSS
$("li").on("click", function () {
  $(this).toggleClass("done");
});

// Delete Todos
$(".deleteButton").on("click", function (event) {
  $(this)
    .parent()
    .fadeOut("500", function () {
      $(this).remove();
    });
  event.stopPropagation();
});
