$(".one").click(function() {
    $(".map").fadeIn();
    $(".one").text("Tap on map!");
});

$(".map").click(function() {
    $(".map2").fadeIn();
    $(".one").fadeOut();
    $(".two").fadeIn();
    $(".map").fadeOut();
});

$(".two").click(function() {
    $(".two").text("Click on the garden");
});

$(".map2").click(function() {
    $(".forest").slideToggle();
    $(".map2").hide();
    $(".two").hide();
    $("h1").show();
});
$("h1").dblclick(function() {
    $(".forest").fadeOut();
    $(".house").slideToggle();
    $("h1").text("You're HERE! Knock on the door.");
});
$(".house").click(function() {
    $(".doraimg").fadeIn();
    $("h1").text("You're here, you found me!");
    $(".house").hide();
});






