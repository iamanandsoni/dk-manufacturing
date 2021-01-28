$('.open').zoomImage();
$('.open-small-img:first-of-type').css({'border': 'solid 1px #951b25', 'padding': '2px'})
$('.open-small-img:first-of-type').attr('alt', 'now').siblings().removeAttr('alt')
$('.open-small-img').click(function () {
  $('#open-img').attr('src', $(this).attr('src'))
  $('#big-img').attr('src', $(this).attr('src'))
  $(this).attr('alt', 'now').siblings().removeAttr('alt')
  $(this).css({'border': 'solid 1px #951b25', 'padding': '2px'}).siblings().css({'border': 'none', 'padding': '0'})
  if ($('#small-img-roll').children().length > 4) {
    if ($(this).index() >= 3 && $(this).index() < $('#small-img-roll').children().length - 1){
      $('#small-img-roll').css('left', -($(this).index() - 2) * 76 + 'px')
    } else if ($(this).index() == $('#small-img-roll').children().length - 1) {
      $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 76 + 'px')
    } else {
      $('#small-img-roll').css('left', '0')
    }
  }
})
// 点击 '>' 下一张
$('#next-img').click(function (){
  $('#open-img').attr('src', $(".open-small-img[alt='now']").next().attr('src'))
  $('#big-img').attr('src', $(".open-small-img[alt='now']").next().attr('src'))
  $(".open-small-img[alt='now']").next().css({'border': 'solid 1px #951b25', 'padding': '2px'}).siblings().css({'border': 'none', 'padding': '0'})
  $(".open-small-img[alt='now']").next().attr('alt', 'now').siblings().removeAttr('alt')
  if ($('#small-img-roll').children().length > 4) {
    if ($(".open-small-img[alt='now']").index() >= 3 && $(".open-small-img[alt='now']").index() < $('#small-img-roll').children().length - 1){
      $('#small-img-roll').css('left', -($(".open-small-img[alt='now']").index() - 2) * 76 + 'px')
    } else if ($(".open-small-img[alt='now']").index() == $('#small-img-roll').children().length - 1) {
      $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 76 + 'px')
    } else {
      $('#small-img-roll').css('left', '0')
    }
  }
})
// 点击 '<' 上一张
$('#prev-img').click(function (){
  $('#open-img').attr('src', $(".open-small-img[alt='now']").prev().attr('src'))
  $('#big-img').attr('src', $(".open-small-img[alt='now']").prev().attr('src'))
  $(".open-small-img[alt='now']").prev().css({'border': 'solid 1px #951b25', 'padding': '2px'}).siblings().css({'border': 'none', 'padding': '0'})
  $(".open-small-img[alt='now']").prev().attr('alt', 'now').siblings().removeAttr('alt')
  if ($('#small-img-roll').children().length > 4) {
    if ($(".open-small-img[alt='now']").index() >= 3 && $(".open-small-img[alt='now']").index() < $('#small-img-roll').children().length - 1){
      $('#small-img-roll').css('left', -($(".open-small-img[alt='now']").index() - 2) * 76 + 'px')
    } else if ($(".open-small-img[alt='now']").index() == $('#small-img-roll').children().length - 1) {
      $('#small-img-roll').css('left', -($('#small-img-roll').children().length - 4) * 76 + 'px')
    } else {
      $('#small-img-roll').css('left', '0')
    }
  }
})
