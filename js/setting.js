$(function() {
  var ulArea = $('ul#categoryList');
  var jsonData =
    [
      {
        "cName": "遅刻・早退",
        "middleCategoryList": [
          {
            "cName": "電車遅延のため"
          },
          {
            "cName": "体調不良のため"
          }
        ]
      },
      {
        "cName": "欠勤",
        "middleCategoryList": [
          {
            "cName": "風邪"
          },
          {
            "cName": "ドラクエの発売日"
          }
        ]
      },
      {
        "cName": "有給休暇",
        "middleCategoryList": [
          {
            "cName": "旅行"
          },
          {
            "cName": "自分探し"
          },
          {
            "cName": "ドラクエ"
          }
        ]
      }
    ];

    init();

    function init () {
      $('ul#categoryList').empty();
      var categoryJson = jsonData;
      middleCategory = $.map(categoryJson, function( data, i) {
        var liTagStr
          = '<li id="' + i + '" class="category">'
           + data.cName
            + '</li>';
        var liTag = $(liTagStr);
        ulArea.append(liTag);
        var jsonStr = JSON.stringify(data.middleCategoryList);
        return jsonStr;
      })
    }

    $('ul>li').click( function () {
      var id = $(this).attr('id');
      var middleJson = $.parseJSON(middleCategory[id]);
      $('ul#categoryList').empty();
      $.map(middleJson, function(data, i) {
        var liTagStr
          = '<li id="' + i + '" class="mCategory">'
           + data.cName
           + '</li>';
         var liTag = $(liTagStr);
         ulArea.append(liTag);
      })
    })
})
