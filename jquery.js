// navbar
$(".nav_open").click(function () {
    $('.nav_ul').toggle(0.05);
});

// headrer slider 
$('#head_page').mousemove(function(){
    $('.header_hover_div').slideDown(2500)
});


/* back to top */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('.btn-top-img').fadeIn(400);
        }
        else {
            $('.btn-top-img').fadeOut(500);
        };
        $('.btn-top-img').click(function () {
            $('html,body').animate({ scrollTop: 0 }, 0);

        })
    })
});


/* form registr */
$(function () {
    $("#submit").click(function (e) {
        e.preventDefault();
        var submit_color = {
            border: ' 1px solid rgb(31, 252, 31)'
        }
        var error_color = {
            border: ' 1px solid red'
        }
        var name = $('#name');
        var lastname = $('#lastname');
        var phone = $('#phone');
        var parol = $('#parol');
        var reparol = $('#reparol');
        var textarea = $('#textarea');
        var email = $('#email');
        var email_val = email.val();
        var phone_val = phone.val();

        name.css(submit_color);
        lastname.css(submit_color);
        phone.css(submit_color);
        parol.css(submit_color);
        reparol.css(submit_color);
        textarea.css(submit_color);
        email.css(submit_color);

        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (regex.test(email_val) == true) {
            console.log('dae')
            email.css(submit_color);
        }
        else {
            email.css(error_color);
        };

        if (name.val() == '') {
            name.css(error_color);
        }
        if (phone.val() == '') {
            phone.css(error_color);
        }
        if (lastname.val() == '') {
            lastname.css(error_color);
        }
        if (parol.val() == '') {
            parol.css(error_color);
        }
        if (reparol.val() == '') {
            reparol.css(error_color);
        }
        if (reparol.val() != parol.val()) {
            reparol.css(error_color);
        }
        if (textarea.val() == '') {
            textarea.css(error_color);
        }      
        $("#submit").css('background','green');
    })
});

