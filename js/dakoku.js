$(function() {
  var now,year,mon,day,w,wd,hour,min,sec;

  function getYmd() {
  	var s = year + "年" + mon + "月" + day + "日 ( " + wd[w] + " )";
  	return s;
  }
  function getTime() {
    hour = ( '0'  + hour ).slice( -2 );
    min = ( '0'  + min ).slice( -2 );
    sec = ( '0'  + sec ).slice( -2 );
  	var s = hour + ":" + min + ":" + sec;
  	return s;
  }
  $(document).on('click', 'div#dakoku.entry', function() {
    $('#entry').text(getTime());
    $(this).text('退勤');
    $(this)
      .removeClass('entry')
      .removeClass('green')
      .addClass('red')
      .addClass('done');
  });
  $(document).on('click', 'div#dakoku.done',function() {
    $('#done').text(getTime());
    $(this)
      .removeClass('done')
      .removeClass('red')
      .addClass('gray');
  });

  setInterval(function(){
    now = new Date();
    year = now.getFullYear();
    mon = now.getMonth()+1;
    day = now.getDate();
    w = now.getDay();
    wd = ["日", "月", "火", "水", "木", "金", "土"];

    now = new Date();
    hour = now.getHours();
    min = now.getMinutes();
    sec = now.getSeconds();

    $('#date').text(getYmd());
    $('#time_count').text(getTime());
  }, 1000);
});
