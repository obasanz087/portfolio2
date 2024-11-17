//時計を表示する関数
function header_date_update() {
    //年・月・日・曜日を書き出す
    var today=new Date(); 
    var year = today.getFullYear();
    var month = today.getMonth()+1;
    var week = today.getDay();
    var day = today.getDate();
    var week_en= new Array("Sun.","Mon.","Tue.","Wed.","Thu.","Fri.","Sat.");
    //時・分・秒を書き出す
    var hour = ('00' + today.getHours()).slice(-2);
    var minute = ('00' + today.getMinutes()).slice(-2);
    var second = ('00' + today.getSeconds()).slice(-2);
    //書き出し
    let date_update = document.getElementById('today')
    date_update.innerHTML = `${year+"."+month+"."+day+" "+week_en[week]+'　'+hour+":"+minute+":"+second}`; //div要素の中身の変更
}
//上の関数を毎秒実行する
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
    $('.header_menu_inner_link a[href]').click(function() {
        $('header_menu_icon').removeClass('active');
        $('.header_nav').removeClass('active');
    });
  });
