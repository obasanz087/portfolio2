//年・月・日・曜日を書き出す
function header_date_update() {
    var today=new Date(); 
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var week = today.getDay();
    var day = today.getDate();
    var week_en= new Array("Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat.");
    var minute = ('00' + today.getHours()).slice(-2);
    var minute = ('00' + today.getMinutes()).slice(-2);
    var second = ('00' + today.getSeconds()).slice(-2);
    let date_update = document.getElementById('today')
    date_update.innerHTML = `${year+"."+month+"."+day+" "+week_en[week]+'　'+hour+":"+minute+":"+second}`; //div要素の中身の変更
}

setInterval('header_date_update()',1000);

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