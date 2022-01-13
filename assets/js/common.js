$('a[href^=#]').click(function() {
  var Hash, HashOffset, headerHight, href;
  href = this.hash;
  headerHight = 95;
  //ヘッダの高さ
  if ($.inArray(href) < 0) {
    Hash = $(this.hash);
    HashOffset = $(Hash).offset().top - headerHight;
    $('html,body').animate({
      scrollTop: HashOffset
    }, 800, 'easeInOutQuad');
    $('html body').mousewheel(function() {
      $('html,body').stop();
    });
    return false;
  }
});

$(window).on('load', function() {
  var url;
  url = $(location).attr('href');
  setTimeout((function() {
    var $target, id, pos;
    if (url.indexOf('?id=') !== -1) {
      id = url.split('?id=');
      $target = $('#' + id[id.length - 1]);
      if ($target.length) {
        pos = $target.offset().top;
        $('html, body').animate({
          scrollTop: pos
        }, 400);
      }
    }
  }), 100);
});

//# ソーシャルのウインドウポップアップ
$('.socials > a').click(function() {
  window.open(this.href, 'WindowName', 'width=600,height=500,resizable=yes,scrollbars=yes');
  return false;
});

$(document).ready(function() {
  $('iframe').fitVids();
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 120) {
    $('#scroll-header').addClass('active');
    $('#header').addClass('hidden');
  } else {
    $('#scroll-header').removeClass('active');
    $('#header').removeClass('hidden');
  }
});

$(function() {
  var scrollpos, state;
  state = false;
  scrollpos = 0;
  $('#menu-trigger').click(function() {
    scrollpos = $(window).scrollTop();
    $('body').addClass('locked').css({
      'top': -scrollpos
    });
    $('#sp-header').fadeIn();
    return setTimeout((function() {
      $('input[type="search"]').focus();
    }), 0);
  });
  $('#close-trigger').click(function() {
    $('body').removeClass('locked').css({
      'top': 0
    });
    window.scrollTo(0, scrollpos);
    return $('#sp-header').fadeOut();
  });
});

//# カテゴリジャンプ
$(function() {
  // プルダウン変更時に遷移
  $('select[name=category]').change(function() {
    if ($(this).val() !== '') {
      window.location.href = $(this).val();
    }
  });
});

// ボタンを押下時に遷移
$('#slide-wrapper > ul').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: false,
  autoplay: false,
  prevArrow: $('.slick-prev'),
  nextArrow: $('.slick-next'),
  appendDots: $('.nums'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false
      }
    }
  ]
});

$('.carousel-category').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  variableWidth: true
});

$('#relative-article-container .articles').slick({
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: "unslick"
    }
  ]
});

$('.carousel-sponsor').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  variableWidth: true
});
