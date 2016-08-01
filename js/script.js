$(function () {
    $('span.unfavorite').click(function () {
        $(this).toggleClass('favorite');
    });
});

$(document).ready(function () {
    $("span").click(function () {
        var amoun = ($("span.favorite").length);
        $('.amount').html(amoun)
    });
});


$(function () {
    $('.click_me').click(function () {
        $(this).parent().toggleClass("open");
    });
});
$(function () {
    $(document).mouseup(function (e){
        var div = $(".dropdown-menu");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.parent().removeClass('open');
        }
    });
});
$(function () {
    $(document).mouseup(function (e){
        var div = $(".little");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.parent().removeClass('open');
        }
    });
});
$(function () {
    $(document).mouseup(function (e){
        var div = $(".big");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.parent().removeClass('open');
        }
    });
});

$(function () {
    $('div.filter a').click(function () {
        $('div.more_filters').toggleClass("offline");
        $('div.less_filters').toggleClass("offline");
    });
});
$(function () {
    $('div.dropdown li').click(function () {
        var text = $(this).find("label").text();
        $(this).parent().parent().children("input.click_me").attr("placeholder", text);
        if ($(this).mouseout()) {
            $(this).parent().parent().removeClass("open");
        }
    });
});

