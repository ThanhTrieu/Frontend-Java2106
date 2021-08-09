// su dung ham khoi tao cua jquery
// muc dich : doi load xong cac dom html roi jquery moi xu ly
// $ == JQuery

$(document).ready(function(){
    // cu phap rat hay dc su dung
    // sau nay code JQ se viet o trong nay
    // $('.btn'); // truy cap vao phan tu JQ
    // document.getElementsByClassName('btn'); // js thuan

    // bat su kien JQ
    // $('.btn').on('click', function(){}); // day du
    $('div.container > div.header > .btn').click(function(){
        alert('Hi you');
    });

    $('input[class="form-control"]').change(function(){
        // $(this) : doi tuong dang thao tac
        // .val(): lay du lieu tu the input
        let data = $(this).val();
        console.log($(this));
    });

    $('.btn-click').click(function(){
        // lay gia tri cua thuoc tinh
        let title = $('#title').attr('class');
        console.log(title);
        // thay doi duong dan anh
        // $('img.icon').attr('src','images/icon2.png');
        // $('img.icon').removeAttr('src');

        /*
        if($('#title').hasClass('my-title')){
            // kiem tra su ton tai cua gia tri class

            // xoa gia tri cua class
            $('#title').removeClass('my-title');
            // mat ca thuoc tinh
            // $('#title').removeAttr('class');
        } else {
            $('#title').addClass('my-title');
        }
        */
        $('#title').toggleClass('my-title');

        // css don
        /*
        $('.container').css('width', '300px');
        $('.container').css('height', '300px');
        $('.container').css('background-color', 'yellow');
        */
       // multiple css
       $('.container').css({
           width: '300px',
           height: '300px',
           backgroundColor: 'yellow',
           padding: '30px',
           border: '3px solid #ccc'
       });
    });

    $('.btn-click-3').click(function(){
        $('.container').width(600); // thiet lap lai
        let h = $('.container').height(); // lay ra chieu cao
        let w = $('.container').width();  // lay ra chieu rong
        console.log(w, h);

        // lay kich thuoc bao gom padding khong bao gom border
        let iw = $('.container').innerWidth();
        let ih = $('.container').innerHeight();
        console.log(iw, ih);


        $('ul.nav__list li').eq(2).css({
            color: 'red',
            fontWeight: 'bold'
        });

        if($('input[type="checkbox"]').is(':checked')) {
            console.log('Da tich chon')
        } else {
            console.log('Chua tich chon')
        }

        $('section.content').find('h2').css({
            color: 'green',
            textTransform: 'uppercase'
        });

        $('section.content').find('h2.last').next().next().css({
            color: 'blue',
            textTransform: 'uppercase'
        });

        $('section.content').find('p.first').prev().prev().css({
            color: 'blue',
            fontStyle: 'italic'
        });

        $('.content__main').html('<h3>Hello you</h3>');
        let html = $('.content__main').html();
        console.log(html);
        //$('.content__main').text('hi you, jquery')
        $('.content__main').empty();
    });

    $('button.hide').click(function(){
        //$('div.main').fadeOut(5000);
        $('div.main').hide(5000);
    });

    $('button.show').click(function(){
        //$('div.main').fadeIn(5000);
        $('div.main').show(5000);
    });

    $('.show-hide').click(function(){
        $('div.main').toggle(5000);
        // fadeToggle
        // slideToggle
        // toggle
    })

    /*
    document.getElementsByClassName('btn')[0].onclick = function(){
        alert('Hi');
    }
    */
});

//Shorthand for $( document ).ready()
/*
$(function(){
    // code JQ nam tat trong nay
});
*/