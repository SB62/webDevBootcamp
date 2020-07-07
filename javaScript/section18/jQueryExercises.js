// Change all Div's to Purple background
$("div").css("background-color", "purple");

// change only divs wit highlight class to 200px wide
$("div.highlight").css("width", "200px");

// change div with id third to have orange border
$("#third").css("border", "orange dashed 4px");

// Bonus Change Only first Div to pink text
$("div").first().css("color", "pink");
// other ways:
// css selector first of type
$("div:first-of-type").css("color", "pink");
// jQuery shortcut (every so slightly slower)
$("div:first").css("color", "pink");
