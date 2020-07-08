// Checkoff specific todos by clicking - toggles done class defined in the CSS
$("ul").on("click", "li", function () {
  $(this).toggleClass("done");
});

// Delete Todos
$("ul").on("click", ".deleteButton", function (event) {
  $(this)
    .parent()
    .fadeOut("500", function () {
      $(this).remove();
    });
  event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    // extract typed value and clear input
    let todoText = $(this).val();
    $(this).val("");
    // create new li and add to ul
    $("ul").append(
      "<li><span class='deleteButton'>X</span> " + todoText + "</li>"
    );
  }
});
