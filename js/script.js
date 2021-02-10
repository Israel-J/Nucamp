$(function () {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

    //Button click to open a reserve a campsite modal

    $("#reserveButton").click(function () {
        $("#reserveModal").modal("show");
    });

    //button click to open login modal

    $("#loginButton").click(function () {
        $("#loginModal").modal("show");
    });
});

