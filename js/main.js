// トップ
// アニメーションを適用する要素を取得
// const fadeElements = document.querySelectorAll('.fade-in');

// // スクロールイベントを監視
// window.addEventListener('scroll', function() {
//   fadeElements.forEach(element => {
//     if (isElementInViewport(element) && !element.classList.contains('fade-in-active')) {
//       element.classList.add('fade-in-active'); // アニメーションクラスを追加
//     }
//   });
// });

// // 要素がビューポート内に表示されているかどうかを判定するヘルパー関数
// function isElementInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
//   );
// }


$(function() {

  $('.hamburger').click(function() {

    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('#navi').addClass('active');
    } else {
      $('#navi').removeClass('active');
    }
  });
});


// オーストラリア・カナダ・オランダ
$(window).scroll(function () {
    var scrollAnimationElm = document.querySelectorAll('.section-container');
    var scrollAnimationFunc = function () {
      for (var i = 0; i < scrollAnimationElm.length; i++) {
        var triggerMargin = 100;
        if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimationElm[i].classList.add('on');
        }
      }
    }
    // window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
});

