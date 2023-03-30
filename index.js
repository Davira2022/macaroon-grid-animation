'use strict'

let loader = $('.loader');

$('#submit').click(function () {
    let orderDetails = $('#orderDetails');
    let name = $('#name');
    let phone = $('#phone');
    let myForm = $('#myForm');
    let thankYou = $('#thankYou');
    let hasError = false;


    $('.error-input').hide();
    orderDetails.css('border-color', '#821328');
    name.css('border-color', '#821328');
    phone.css('border-color', '#821328');

    if (!orderDetails.val()) {
        orderDetails.css('border-color', 'red');
        orderDetails.next().show();
        hasError = true;
    }
    if (!name.val()) {
        name.css('border-color', 'red');
        name.next().show();
        hasError = true;
    }
    if (!phone.val()) {
        phone.css('border-color', 'red');
        phone.next().show();
        hasError = true;
    }

    if (!hasError) {
        loader.css('display', 'flex');
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: { orderDetails: orderDetails.val(), name: name.val(), phone: phone.val() }
        })
            .done(function( msg ) {
                loader.hide();
                if (msg.success) {
                    myForm.hide();
                    thankYou.css('display', 'flex');
                } else {
                    orderDetails.val('');
                    name.val('');
                    phone.val('')
                    alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ!');
                }
            });
    }
})

$('.main-action').click (function () {
    $('#assortment')[0].scrollIntoView({behavior: 'smooth'});
});

$('.card-btn').click(event => {
    $('.order')[0].scrollIntoView({behavior: 'smooth'});
    $('#orderDetails')
        .val($(event.target)
            .parents('.card')
            .find('.card-title')
            .text());
});