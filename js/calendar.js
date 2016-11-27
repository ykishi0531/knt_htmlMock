$(function() {

  var now = new Date();
  var year = now.getFullYear();
  var mon = now.getMonth()+1;
  var day = now.getDate();

  var nowYear = year;
  var nowMonth = mon;

  $('div#ym').text(year + '年' + mon + '月  ');
  createCalendar(year, mon, day);


  $('div#prev').click(function () {
    var prev = new Date(year, mon - 2, 1);
    year = prev.getFullYear();
    mon = prev.getMonth()+1;

    $('div#ym').text(year + '年' + mon + '月  ');
    createCalendar(year, mon, 0);
  })

  $('div#next').click(function () {
    var next = new Date(year, mon, 1);
    year = next.getFullYear();
    mon = next.getMonth()+1;

    $('div#ym').text(year + '年' + mon + '月  ');
    createCalendar(year, mon, 0);
  })

  $('div#now').click(function () {
    now = new Date();
    year = now.getFullYear();
    mon = now.getMonth()+1;
    day = now.getDate();

    $('div#ym').text(year + '年' + mon + '月  ');
    createCalendar(year, mon, day);
  })

  function createCalendar(y, m, d) {
    $('tr').remove('tr:not(:first)')
    var firstDate = new Date(y, m - 1, 1);
    var firstDayOfWeek = firstDate.getDay();

    var targetYear = firstDate.getFullYear();
    var targetMon = firstDate.getMonth() + 1;

    var lastDate = new Date(y, m, 0);
    var lastDay = lastDate.getDate();

    var trTag;
    var day = 0;
    var rowCount = 0;
    for( var i = 0; i < lastDay + firstDayOfWeek; i++) {
      if( i == 0 || i % 7 == 0 ) {
        trTag = $('<tr></tr>');
        $('tbody').append(trTag);
        rowCount++;
      };
      if( i < firstDayOfWeek ) {
        trTag.append('<td class="noLine"></td>');
        continue;
      }
      day++;
      var cls = '';
      if( nowYear == targetYear
        && nowMonth == targetMon
        && day == d ) {
        cls = ' today';
      }
      if( i % 7 == 6 ) {
        cls += ' satday';
      }
      else if ( i % 7 == 0 ) {
        cls += ' sunday'
      }
      trTag.append('<td class="' + cls + '">' + day + '</td>');
    }
    for( var i = rowCount; i < 6; i++) {
      $('tbody').append('<tr><td class="noLine"></td></tr>');
    }
  }

  $("#edit").click(function() {
    window.location.href = "./application.html";
  })
  $("#insert").click(function() {
    window.location.href = "./application.html";
  })
})
