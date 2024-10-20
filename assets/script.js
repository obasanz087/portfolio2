//年・月・日・曜日を書き出す
let date_update = document.getElementById('today')
    var today=new Date(); 
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var week = today.getDay();
    var day = today.getDate();
    var week_en= new Array("Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat.");
    date_update.innerHTML = `${year+"."+month+"."+day+" "+week_en[week]}` //div要素の中身の変更

//header_menu_btn

$(function() {
    $('.header_btn').click(function() {
        $('.header_nav').toggleClass('active');
 
        if ($('.header_nav').hasClass('active')) {
            $('.header_menu_icon').addClass('active');
        } else {
            $('.header_menu_icon').removeClass('active');
        } 
      
    });
});
$(function() {
    $('.header_menu_inner a[href]').click(function() {
        $('header_menu_icon').removeClass('active');
        $('.header_nav').removeClass('active');
        $('.header_btn').removeClass('active');

    });
  });