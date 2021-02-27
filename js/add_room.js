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



