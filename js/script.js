$(function () {
    $('span.unfavorite').click(function () {

        $(this).toggleClass('favorite glyphicon-heart glyphicon-heart-empty');
    });
});

$(document).ready(function () {
    $("span").click(function () {
        var amoun = ($("span.favorite").length);
        $('.amount').html(amoun)
    });
});


var change = function () {
    $('.click_me').click(function () {
        $(this).parent().toggleClass("open");
    });
};


$(function () {
    $(document).mouseup(function (e) {

        change();

        var div = $(".dropdown-menu");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.parent().removeClass('open');
        }
    });
});
$(function () {
    $(document).mouseup(function (e) {
        change();
        var div = $(".little");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            div.parent().removeClass('open');
        }
    });
});
$(function () {
    $(document).mouseup(function (e) {
        change();
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

$(function () {
    $('li.random_price input.input_from').click(function () {
        $('label').addClass("input_from").removeClass("input_to");
        var place_from = this;
        $('label.input_from').click(function () {
            if ($(this).is('.input_from')) {
                $('label').removeClass("input_from");
                var text_from = $(this).text();
                $(place_from).attr("placeholder", text_from);
            }
        });
    });
});
$(function () {
    $('li.random_price input.input_to').click(function () {
        $('label').addClass("input_to").removeClass("input_from");
        var place_to = this;
        $('label.input_to').click(function () {
            if ($(this).is('.input_to')) {
                $('label').removeClass("input_to");
                var text_up = $(this).text();
                $(place_to).attr("placeholder", text_up);
            }
        });
    });
});
