console.log;('hallo world!!')
// ハンバーガー１

$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        } 
      
    });
});
$(function() {
    $('.globalMenuSp a[href]').click(function() {
        $('.globalMenuSp').removeClass('active');
       $('.hamburger').removeClass('active');

    });
  });

  $(function() {$('.t-i-close').click(function() {$('.topview-info').removeClass('active')})});


// ハンバーガー2

$(function() {
  $('.pc_hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.pc_globalMenu').addClass('active');
      } else {
          $('.pc_globalMenu').removeClass('active');
      } 
    
  });
});
$(function() {
  $('.pc_globalMenu a[href]').click(function() {
      $('.pc_globalMenu').removeClass('active');
     $('.pc_hamburger').removeClass('active');

  });
});

if ($('.pc_hamburger').hasClass('active')) {$(".nav-list-item").addClass('active2');}



//ヘッダー色変更
jQuery(window).scroll(function() {
	let scrollTop = jQuery(window).scrollTop(); // スクロール上部の位置
	let areaTop = jQuery(".contents").offset().top; // 対象エリアの上部の位置
	let areaBottom = areaTop + jQuery(".contents").innerHeight(); // 対象エリアの下部の位置

	if (scrollTop > areaTop && scrollTop < areaBottom) {
		jQuery("header").addClass("active"); // スクロールが対象エリアに入った場合
	} else {
		jQuery("header").removeClass("active"); // スクロールが対象エリアから出ている場合
	}
});

//ページ内リンク
$(function () {
  $(window).on("load scroll resize", function () {

    var st = $(window).scrollTop();
    var wh = $(window).height();

    $('.section-point').each(function (i) {
      var tg = $(this).offset().top;
      var id = $(this).attr('id');

      if (st > tg  - wh + (wh / 2)) {
        $(".header-bg").removeClass("active");
        var link = $(".header-bg[href *= " + id +"]");
        $(link).addClass("active");
      }
    });

  });

});
// projects

$(function(){$('.button_1').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_1').addClass('active'),('.section2').addClass('active');}else{$('.index_1').removeClass('active');} });});
$(function(){$('.button_2').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_2').addClass('active');}else{$('.index_2').removeClass('active');} });});
$(function(){$('.button_3').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_3').addClass('active');}else{$('.index_3').removeClass('active');} });});
$(function(){$('.button_4').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_4').addClass('active');}else{$('.index_4').removeClass('active');} });});
$(function(){$('.button_5').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_5').addClass('active');}else{$('.index_5').removeClass('active');} });});
$(function(){$('.button_6').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_6').addClass('active');}else{$('.index_6').removeClass('active');} });});
$(function(){$('.button_7').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_7').addClass('active');}else{$('.index_7').removeClass('active');} });});
$(function(){$('.button_8').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_8').addClass('active');}else{$('.index_8').removeClass('active');} });});
$(function(){$('.button_9').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_9').addClass('active');}else{$('.index_9').removeClass('active');} });});
$(function(){$('.button_10').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_10').addClass('active');}else{$('.index_10').removeClass('active');} });});
$(function(){$('.button_11').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_11').addClass('active');}else{$('.index_11').removeClass('active');} });});
$(function(){$('.button_12').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_12').addClass('active');}else{$('.index_12').removeClass('active');} });});
$(function(){$('.button_13').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_13').addClass('active');}else{$('.index_13').removeClass('active');} });});
$(function(){$('.button_14').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_14').addClass('active');}else{$('.index_14').removeClass('active');} });});
$(function(){$('.button_15').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_15').addClass('active');}else{$('.index_15').removeClass('active');} });});
$(function(){$('.button_16').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_16').addClass('active');}else{$('.index_16').removeClass('active');} });});
$(function(){$('.button_17').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_17').addClass('active');}else{$('.index_17').removeClass('active');} });});
$(function(){$('.button_18').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_18').addClass('active');}else{$('.index_18').removeClass('active');} });});
$(function(){$('.button_19').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_19').addClass('active');}else{$('.index_19').removeClass('active');} });});
$(function(){$('.button_20').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_20').addClass('active');}else{$('.index_20').removeClass('active');} });});
$(function(){$('.button_21').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_21').addClass('active');}else{$('.index_21').removeClass('active');} });});
$(function(){$('.button_22').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_22').addClass('active');}else{$('.index_22').removeClass('active');} });});
$(function(){$('.button_23').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_23').addClass('active');}else{$('.index_23').removeClass('active');} });});
$(function(){$('.button_24').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_24').addClass('active');}else{$('.index_24').removeClass('active');} });});
$(function(){$('.button_25').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_25').addClass('active');}else{$('.index_25').removeClass('active');} });});
$(function(){$('.button_26').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_26').addClass('active');}else{$('.index_26').removeClass('active');} });});
$(function(){$('.button_27').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_27').addClass('active');}else{$('.index_27').removeClass('active');} });});
$(function(){$('.button_28').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_28').addClass('active');}else{$('.index_28').removeClass('active');} });});
$(function(){$('.button_29').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_29').addClass('active');}else{$('.index_29').removeClass('active');} });});
$(function(){$('.button_30').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_30').addClass('active');}else{$('.index_30').removeClass('active');} });});
$(function(){$('.button_31').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_31').addClass('active');}else{$('.index_31').removeClass('active');} });});
$(function(){$('.button_32').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_32').addClass('active');}else{$('.index_32').removeClass('active');} });});
$(function(){$('.button_33').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_33').addClass('active');}else{$('.index_33').removeClass('active');} });});
$(function(){$('.button_34').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_34').addClass('active');}else{$('.index_34').removeClass('active');} });});
$(function(){$('.button_35').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_35').addClass('active');}else{$('.index_35').removeClass('active');} });});
$(function(){$('.button_36').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_36').addClass('active');}else{$('.index_36').removeClass('active');} });});
$(function(){$('.button_37').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_37').addClass('active');}else{$('.index_37').removeClass('active');} });});
$(function(){$('.button_38').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_38').addClass('active');}else{$('.index_38').removeClass('active');} });});
$(function(){$('.button_39').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_39').addClass('active');}else{$('.index_39').removeClass('active');} });});
$(function(){$('.button_40').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_40').addClass('active');}else{$('.index_40').removeClass('active');} });});
$(function(){$('.button_41').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_41').addClass('active');}else{$('.index_41').removeClass('active');} });});
$(function(){$('.button_42').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_42').addClass('active');}else{$('.index_42').removeClass('active');} });});
$(function(){$('.button_43').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_43').addClass('active');}else{$('.index_43').removeClass('active');} });});
$(function(){$('.button_44').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_44').addClass('active');}else{$('.index_44').removeClass('active');} });});
$(function(){$('.button_45').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_45').addClass('active');}else{$('.index_45').removeClass('active');} });});
$(function(){$('.button_46').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_46').addClass('active');}else{$('.index_46').removeClass('active');} });});
$(function(){$('.button_47').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_47').addClass('active');}else{$('.index_47').removeClass('active');} });});
$(function(){$('.button_48').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_48').addClass('active');}else{$('.index_48').removeClass('active');} });});
$(function(){$('.button_49').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_49').addClass('active');}else{$('.index_49').removeClass('active');} });});
$(function(){$('.button_50').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_50').addClass('active');}else{$('.index_50').removeClass('active');} });});
$(function(){$('.button_51').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_51').addClass('active');}else{$('.index_51').removeClass('active');} });});
$(function(){$('.button_52').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_52').addClass('active');}else{$('.index_52').removeClass('active');} });});
$(function(){$('.button_53').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_53').addClass('active');}else{$('.index_53').removeClass('active');} });});
$(function(){$('.button_54').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_54').addClass('active');}else{$('.index_54').removeClass('active');} });});
$(function(){$('.button_55').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_55').addClass('active');}else{$('.index_55').removeClass('active');} });});
$(function(){$('.button_56').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_56').addClass('active');}else{$('.index_56').removeClass('active');} });});
$(function(){$('.button_57').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_57').addClass('active');}else{$('.index_57').removeClass('active');} });});
$(function(){$('.button_58').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_58').addClass('active');}else{$('.index_58').removeClass('active');} });});
$(function(){$('.button_59').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_59').addClass('active');}else{$('.index_59').removeClass('active');} });});
$(function(){$('.button_60').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_60').addClass('active');}else{$('.index_60').removeClass('active');} });});
$(function(){$('.button_61').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_61').addClass('active');}else{$('.index_61').removeClass('active');} });});
$(function(){$('.button_62').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_62').addClass('active');}else{$('.index_62').removeClass('active');} });});
$(function(){$('.button_63').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_63').addClass('active');}else{$('.index_63').removeClass('active');} });});
$(function(){$('.button_64').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_64').addClass('active');}else{$('.index_64').removeClass('active');} });});
$(function(){$('.button_65').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_65').addClass('active');}else{$('.index_65').removeClass('active');} });});
$(function(){$('.button_66').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_66').addClass('active');}else{$('.index_66').removeClass('active');} });});
$(function(){$('.button_67').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_67').addClass('active');}else{$('.index_67').removeClass('active');} });});
$(function(){$('.button_68').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_68').addClass('active');}else{$('.index_68').removeClass('active');} });});
$(function(){$('.button_69').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_69').addClass('active');}else{$('.index_69').removeClass('active');} });});
$(function(){$('.button_70').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_70').addClass('active');}else{$('.index_70').removeClass('active');} });});
$(function(){$('.button_71').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_71').addClass('active');}else{$('.index_71').removeClass('active');} });});
$(function(){$('.button_72').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_72').addClass('active');}else{$('.index_72').removeClass('active');} });});
$(function(){$('.button_73').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_73').addClass('active');}else{$('.index_73').removeClass('active');} });});
$(function(){$('.button_74').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_74').addClass('active');}else{$('.index_74').removeClass('active');} });});
$(function(){$('.button_75').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_75').addClass('active');}else{$('.index_75').removeClass('active');} });});
$(function(){$('.button_76').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_76').addClass('active');}else{$('.index_76').removeClass('active');} });});
$(function(){$('.button_77').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_77').addClass('active');}else{$('.index_77').removeClass('active');} });});
$(function(){$('.button_78').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_78').addClass('active');}else{$('.index_78').removeClass('active');} });});
$(function(){$('.button_79').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_79').addClass('active');}else{$('.index_79').removeClass('active');} });});
$(function(){$('.button_80').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_80').addClass('active');}else{$('.index_80').removeClass('active');} });});
$(function(){$('.button_81').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_81').addClass('active');}else{$('.index_81').removeClass('active');} });});
$(function(){$('.button_82').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_82').addClass('active');}else{$('.index_82').removeClass('active');} });});
$(function(){$('.button_83').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_83').addClass('active');}else{$('.index_83').removeClass('active');} });});
$(function(){$('.button_84').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_84').addClass('active');}else{$('.index_84').removeClass('active');} });});
$(function(){$('.button_85').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_85').addClass('active');}else{$('.index_85').removeClass('active');} });});
$(function(){$('.button_86').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_86').addClass('active');}else{$('.index_86').removeClass('active');} });});
$(function(){$('.button_87').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_87').addClass('active');}else{$('.index_87').removeClass('active');} });});
$(function(){$('.button_88').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_88').addClass('active');}else{$('.index_88').removeClass('active');} });});
$(function(){$('.button_89').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_89').addClass('active');}else{$('.index_89').removeClass('active');} });});
$(function(){$('.button_90').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_90').addClass('active');}else{$('.index_90').removeClass('active');} });});
$(function(){$('.button_91').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_91').addClass('active');}else{$('.index_91').removeClass('active');} });});
$(function(){$('.button_92').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_92').addClass('active');}else{$('.index_92').removeClass('active');} });});
$(function(){$('.button_93').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_93').addClass('active');}else{$('.index_93').removeClass('active');} });});
$(function(){$('.button_94').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_94').addClass('active');}else{$('.index_94').removeClass('active');} });});
$(function(){$('.button_95').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_95').addClass('active');}else{$('.index_95').removeClass('active');} });});
$(function(){$('.button_96').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_96').addClass('active');}else{$('.index_96').removeClass('active');} });});
$(function(){$('.button_97').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_97').addClass('active');}else{$('.index_97').removeClass('active');} });});
$(function(){$('.button_98').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_98').addClass('active');}else{$('.index_98').removeClass('active');} });});
$(function(){$('.button_99').click(function() {$(this).addClass('active');if ($(this).hasClass('active')) {$('.index_99').addClass('active');}else{$('.index_99').removeClass('active');} });});


$(function(){$('.sp-menu-discord').click(function() {$('.discord-caption').addClass('active');;})});;
$(function(){$('.f-sns-icon.discord').click(function() {$('.discord_popup').addClass('active');;})});;
$(function() {$('.fa-solid.fa-circle-xmark').click(function() {$('discord_popup').removeClass('active')})});;

// projects - 閉じるときの動作////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$(function() {$('.pj_index_close').click(function() {$('.index_1').removeClass('active');$('.button_1').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_2').removeClass('active');$('.button_2').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_3').removeClass('active');$('.button_3').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_4').removeClass('active');$('.button_4').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_5').removeClass('active');$('.button_5').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_6').removeClass('active');$('.button_6').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_7').removeClass('active');$('.button_7').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_8').removeClass('active');$('.button_8').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_9').removeClass('active');$('.button_9').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_10').removeClass('active');$('.button_10').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_11').removeClass('active');$('.button_11').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_12').removeClass('active');$('.button_12').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_13').removeClass('active');$('.button_13').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_14').removeClass('active');$('.button_14').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_15').removeClass('active');$('.button_15').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_16').removeClass('active');$('.button_16').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_17').removeClass('active');$('.button_17').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_18').removeClass('active');$('.button_18').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_19').removeClass('active');$('.button_19').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_20').removeClass('active');$('.button_20').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_21').removeClass('active');$('.button_21').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_22').removeClass('active');$('.button_22').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_23').removeClass('active');$('.button_23').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_24').removeClass('active');$('.button_24').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_25').removeClass('active');$('.button_25').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_26').removeClass('active');$('.button_26').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_27').removeClass('active');$('.button_27').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_28').removeClass('active');$('.button_28').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_29').removeClass('active');$('.button_29').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_30').removeClass('active');$('.button_30').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_31').removeClass('active');$('.button_31').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_32').removeClass('active');$('.button_32').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_33').removeClass('active');$('.button_33').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_34').removeClass('active');$('.button_34').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_35').removeClass('active');$('.button_35').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_36').removeClass('active');$('.button_36').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_37').removeClass('active');$('.button_37').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_38').removeClass('active');$('.button_38').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_39').removeClass('active');$('.button_39').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_40').removeClass('active');$('.button_40').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_41').removeClass('active');$('.button_41').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_42').removeClass('active');$('.button_42').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_43').removeClass('active');$('.button_43').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_44').removeClass('active');$('.button_44').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_45').removeClass('active');$('.button_45').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_46').removeClass('active');$('.button_46').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_47').removeClass('active');$('.button_47').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_48').removeClass('active');$('.button_48').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_49').removeClass('active');$('.button_49').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_50').removeClass('active');$('.button_50').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_51').removeClass('active');$('.button_51').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_52').removeClass('active');$('.button_52').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_53').removeClass('active');$('.button_53').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_54').removeClass('active');$('.button_54').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_55').removeClass('active');$('.button_55').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_56').removeClass('active');$('.button_56').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_57').removeClass('active');$('.button_57').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_58').removeClass('active');$('.button_58').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_59').removeClass('active');$('.button_59').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_60').removeClass('active');$('.button_60').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_61').removeClass('active');$('.button_61').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_62').removeClass('active');$('.button_62').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_63').removeClass('active');$('.button_63').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_64').removeClass('active');$('.button_64').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_65').removeClass('active');$('.button_65').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_66').removeClass('active');$('.button_66').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_67').removeClass('active');$('.button_67').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_68').removeClass('active');$('.button_68').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_69').removeClass('active');$('.button_69').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_70').removeClass('active');$('.button_70').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_71').removeClass('active');$('.button_71').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_72').removeClass('active');$('.button_72').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_73').removeClass('active');$('.button_73').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_74').removeClass('active');$('.button_74').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_75').removeClass('active');$('.button_75').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_76').removeClass('active');$('.button_76').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_77').removeClass('active');$('.button_77').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_78').removeClass('active');$('.button_78').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_79').removeClass('active');$('.button_79').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_80').removeClass('active');$('.button_80').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_81').removeClass('active');$('.button_81').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_82').removeClass('active');$('.button_82').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_83').removeClass('active');$('.button_83').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_84').removeClass('active');$('.button_84').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_85').removeClass('active');$('.button_85').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_86').removeClass('active');$('.button_86').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_87').removeClass('active');$('.button_87').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_88').removeClass('active');$('.button_88').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_89').removeClass('active');$('.button_89').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_90').removeClass('active');$('.button_90').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_91').removeClass('active');$('.button_91').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_92').removeClass('active');$('.button_92').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_93').removeClass('active');$('.button_93').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_94').removeClass('active');$('.button_94').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_95').removeClass('active');$('.button_95').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_96').removeClass('active');$('.button_96').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_97').removeClass('active');$('.button_97').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_98').removeClass('active');$('.button_98').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_99').removeClass('active');$('.button_99').removeClass('active');});});
$(function() {$('.pj_index_close').click(function() {$('.index_100').removeClass('active');$('.button_100').removeClass('active');});});

$(function() {$('.pj_index_close').click(function() {$('.index_100').removeClass('active');$('.s-readmore-index').removeClass('active');});});

// projects - 絞り込み////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var searchBox = '.search-box'; // 絞り込む項目を選択するエリア
var listItem = '.works_button_wrapper';    // 絞り込み対象のアイテム
var hideClass = 'is-hide';     // 絞り込み対象外の場合に付与されるclass名

$(function() {
  // 絞り込み項目を変更した時
  $(document).on('change', searchBox + ' input', function() {
    search_filter();
  });
});

/**
 * リストの絞り込みを行う
 */
function search_filter() {
  // 非表示状態を解除
  $(listItem).removeClass(hideClass);
  for (var i = 0; i < $(searchBox).length; i++) {
    var name = $(searchBox).eq(i).find('input').attr('name');
    // 選択されている項目を取得
    var searchData = get_selected_input_items(name);
    // 選択されている項目がない、またはALLを選択している場合は飛ばす
    if(searchData.length === 0 || searchData[0] === '') {
      continue;
    }
    // リスト内の各アイテムをチェック
    for (var j = 0; j < $(listItem).length; j++) {
      // アイテムに設定している項目を取得
      var itemData = $(listItem).eq(j).data(name);
      // 絞り込み対象かどうかを調べる
      if(searchData.indexOf(itemData) === -1) {
        $(listItem).eq(j).addClass(hideClass);
      }
    }
  }
}

/**
 * inputで選択されている値の一覧を取得する
 * @param  {String} name 対象にするinputのname属性の値
 * @return {Array}       選択されているinputのvalue属性の値
 */
function get_selected_input_items(name) {
  var searchData = [];
  $('[name=' + name + ']:checked').each(function() {
    searchData.push($(this).val());
  });
  return searchData;
}


//loading
window.onload = function() {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
    setTimeout('stopload()',10000);
  }

//img
$(function() 
{$('.pj-img').hover(function() 
{$('.pj-title').removeClass('active');
$('.pj-title').removeClass('active')
;});});





// モードの判定結果を `data-color` の値に指定
const setColorMode = (mode) => document.documentElement.setAttribute('data-color', mode);

// モードの判定
const getColorMode = () => {
  if (localStorage.getItem('color-mode')) {
    return localStorage.getItem('color-mode');
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

setColorMode(getColorMode());