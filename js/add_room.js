$('body').click(function () {
    $('.guest_wrapper').hide();
}),

    $('#guest_show').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $('.guest_wrapper').toggle();
    })
$('.guest_wrapper').click(function (e) {
    e.stopPropagation();
})
$(".guest_body").on("click", "span.add", function () {
    one = $(this).prev().html();
    get_num = Number(one) + 1;
    if (one >= 3) {

        get_num = 3
    }
    $(this).prev().html(get_num);
});
$(".guest_body").on("click", "span.less", function () {
    one = $(this).next().html();
    get_num = Number(one) - 1;
    $(this).next().html(get_num);
    if (one <= 0) {
        $(this).next().html(0)
    }
});
var getNum = 2;
$('.add_room').click(function () {
    var getFirstChild = $('.gues_container').length;
    $('.guest input').val(eval(getFirstChild) + 1 + ' Rooms');
    if (getFirstChild > 0) {
        $('.del_room').show();
    }
    $('.guest_body').append(
        '<div class="gues_container"><p>Room ' + (getNum++) + '</p><p><span class="less">-</span> <span class="value">1</span> <span class="add">+</span></p></div>',
    )
});


var getFirstChild = $('.gues_container').length;
if (getFirstChild <= 2) {
    $('.del_room').hide();
}
$('.del_room').click(function () {
    var getFirstChild = $('.gues_container').length;
    $('.guest input').val(eval(getFirstChild) - 1 + ' Rooms');
    getNum--
    var getFirstChild = $('.gues_container').length;
    if (getFirstChild <= 2) {
        $('.del_room').hide();
    }
    $('.gues_container:last-child').remove();
});

/* onscroll form */

$('body').click(function () {
    $('.guest_wrapper_2').hide();
}),

$('#guest_show_2').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.guest_wrapper_2').toggle();
})
$('.guest_wrapper_2').click(function (e) {
    e.stopPropagation();
})
$(".guest_body_2").on("click", "span.add_2", function () {
    one = $(this).prev().html();
    get_num = Number(one) + 1;
    if (one >= 3) {

        get_num = 3
    }
    $(this).prev().html(get_num);
});
$(".guest_body_2").on("click", "span.less_2", function () {
    one = $(this).next().html();
    get_num = Number(one) - 1;
    $(this).next().html(get_num);
    if (one <= 0) {
        $(this).next().html(0)
    }
});
var getNum = 2;
$('.add_room_2').click(function () {
    var getFirstChild = $('.gues_container_2').length;
    $('.onscroll_guest input').val(eval(getFirstChild) + 1 + ' Rooms');
    if (getFirstChild > 0) {
        $('.del_room_2').show();
    }
    $('.guest_body_2').append(
        '<div class="gues_container_2"><p>Room ' + (getNum++) + '</p><p><span class="less_2">-</span> <span class="value_2">1</span> <span class="add_2">+</span></p></div>',
    )
});


var getFirstChild = $('.gues_container_2').length;
if (getFirstChild <= 2) {
    $('.del_room_2').hide();
}
$('.del_room_2').click(function () {
    var getFirstChild = $('.gues_container_2').length;
    $('.onscroll_guest input').val(eval(getFirstChild) - 1 + ' Rooms');
    getNum--
    var getFirstChild = $('.gues_container_2').length;
    if (getFirstChild <= 2) {
        $('.del_room_2').hide();
    }
    $('.gues_container_2:last-child').remove();
});



