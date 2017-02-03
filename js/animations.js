$(function () {

  $('.tweet-compose').on('focus', function () {
    $('#tweet-controls').show();
    $(this).css('height', '5em');
  });

  $('.tweet-compose').on('blur', function () {
    $('#tweet-controls').hide();
    $(this).css('height', '2.5em');
  });

  $('.tweet-compose').on('keypress', function () {
    var count = $('#char-count').html();
    count = count - 1;
    $('#char-count').html(count);
    if (count <= 10) {
      $('#char-count').css('color', 'red');
    }
  });

  $('.tweet-compose').on('keydown', function (e) {
    var count = Number($('#char-count').html());
    var code = e.keyCode;
      if (count < 140) {
        if (code == 8) {
          count = count + 1;
          $('#char-count').html(count);
        }
      }
      if (count > 10) {
        $('#char-count').css('color', '#999');
      }
  });





});
