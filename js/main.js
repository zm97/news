/*
显示时间
 */
function DispDate() {
    var _elem = document.getElementById("js-dispDate"),
        now = new Date(),
      Week=['星期天','星期一','星期二','星期三','星期四','星期五','星期六'],
      curDate = now.getFullYear() + "年" + (now.getMonth() + 1) + "月" + now.getDate() + "日&emsp;" + Week[now.getDay()];
    if ( !_elem ) { return false };
    document.getElementById("js-dispDate").innerHTML = curDate;
};

/*
设为首页
 */
function SetHome() {
    var _elem = document.getElementById("js-setHome");
    if ( !_elem ) { return false };
    _elem.onclick = function() {
        var url = window.location;
        if (document.all) {
            document.body.style.behavior = 'url(#default#homepage)';
            document.body.setHomePage(url);
        } else {
            alert("您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");
        }
    }
}
/*
轮播焦点图
 */
function indexFocus() {
  if ($(".js-focus").length < 1) {
    return false
  };

  var slideAmount = $('.js-focus .focusConItem').length;
  $('.focusSlider').html('');
  for (var i = 0; i < slideAmount; i++) {
    $('.focusSlider').append('<i></i>');
  }
  $('.focus').slide({
    titCell: '.focusSlider i',
    mainCell: '.focusCon',
    prevCell: '#focusPrev',
    nextCell: '#focusNext',
    titOnClassName: 'current',
    trigger: 'click',
    effect: 'left',
    autoPlay: true
  });
  $('#focus').hover(function() {
    $('#focusNav').show();
  }, function() {
    $('#focusNav').hide();
  });
};
/*
军事模块整体、首屏焦点图军事区
 */
function setMilitaryCon() {
    if ($("#js-c-military").length < 1) { return false };
    var ts = new Date().getTime();
    $.ajax({
        url: 'https://junshi.china.com/api/artical?ts=' + ts,
        type: 'GET',
        dataType: 'script',
        cache: true,
        success: function() {
          if ( typeof(mili_data) != "object" ) { return false; };
          // 首屏焦点图，军事模块
          if ( mili_data.banner.length > 0  ) {
              var elemF1 = $('#js-mil-focus1'),
                  elemF2 = $('#js-mil-focus2'),
                  htmlF1 = '',
                  htmlF2 = '',
                  dataF = mili_data.banner;
              for ( var i=0; i<1; i++ ) {
                  htmlF1 += '<div class="item">';
                  htmlF1 += '  <a target="_blank" href="'+ dataF[i].url +'">';
                  htmlF1 += '    <img alt="'+ dataF[i].title +'" src="'+ dataF[i].img +'">';
                  htmlF1 += '    <p>'+ dataF[i].title +'</p>';
                  htmlF1 += '  </a>';
                  htmlF1 += '</div>';
              };
              for ( var i=1; i<3; i++ ) {
                  htmlF2 += '<div class="item">';
                  htmlF2 += '  <a target="_blank" href="'+ dataF[i].url +'">';
                  htmlF2 += '    <img alt="'+ dataF[i].title +'" src="'+ dataF[i].img +'">';
                  htmlF2 += '    <p>'+ dataF[i].title +'</p>';
                  htmlF2 += '  </a>';
                  htmlF2 += '</div>';
              };

              elemF1.html(htmlF1);
              elemF2.html(htmlF2);
          };
          // 左侧大图、两个小图
          if ( mili_data.left_pic.length > 0  ) {
              var elem_L1 = $('#js-mil-imgWide'),
                  elem_L2 = $('#js-mil-imgList'),
                  html_L1 = '',
                  html_L2 = '',
                  data_L = mili_data.left_pic;
              for ( var i=0; i<1; i++ ) {
                  html_L1 += '<div class="item">';
                  html_L1 += '  <a target="_blank" href="'+ data_L[i].url +'">';
                  html_L1 += '    <img alt="'+ data_L[i].title +'" src="'+ data_L[i].art_img +'">';
                  html_L1 += '    <p>'+ data_L[i].title +'</p>';
                  html_L1 += '  </a>';
                  html_L1 += '</div>';
              };
              for ( var i=1; i<5; i++ ) {
                  html_L2 += '<div class="item">';
                  html_L2 += '  <a target="_blank" href="'+ data_L[i].url +'">';
                  html_L2 += '    <img alt="'+ data_L[i].title +'" src="'+ data_L[i].art_img +'">';
                  html_L2 += '    <p>'+ data_L[i].title +'</p>';
                  html_L2 += '  </a>';
                  html_L2 += '</div>';
              };

              elem_L1.html(html_L1);
              elem_L2.html(html_L2);
          };
          // 中间18条
          if ( mili_data.middle_art.length > 0  ) {
              var elem_M = $('#js-mil-longList'),
                  html_M = '',
                  data_M = mili_data.middle_art;
              for ( var j=0; j<18; j++ ) {
                  if (j == 0) {
                    html_M += '<li><strong><a href="'+ data_M[j].url +'" target="_blank">'+ data_M[j].title +'</a></strong></li>';
                  } else if (j == 6 || j == 12) {
                    html_M += '<li class="mt26"><a href="'+ data_M[j].url +'" target="_blank">'+ data_M[j].title +'</a></li>';
                  } else {
                    html_M += '<li><a href="'+ data_M[j].url +'" target="_blank">'+ data_M[j].title +'</a></li>';
                  }
              };

              elem_M.html(html_M);
          };
          // 右侧-军事评论
          if ( mili_data.right_topic.length > 0  ) {
              var elem_R1 = $('#js-mil-jspl'),
                  html_R1 = '',
                  data_R1 = mili_data.right_topic;
              for ( var m=0; m<7; m++ ) {
                  if ( m == 0 ) {
                    html_R1 += '<li class="current"><a href="'+ data_R1[m].url +'" target="_blank"><img src="'+ data_R1[m].art_img +'"><p>'+ data_R1[m].title +'</p></a></li>';
                  } else {
                    html_R1 += '<li><a href="'+ data_R1[m].url +'" target="_blank"><img src="'+ data_R1[m].art_img +'"><p>'+ data_R1[m].title +'</p></a></li>';
                  }
              };
              elem_R1.html(html_R1);

              $('#js-mil-jspl>li').on('mouseover',function(){
                $(this).addClass('current').siblings().removeClass('current');
              });

          };
          // 右侧-军史秘闻
          if ( mili_data.right_history.length > 0  ) {
              var elem_R2 = $('#js-mil-jsmw'),
                  html_R2 = '',
                  data_R2 = mili_data.right_history;
              for ( var n=0; n<7; n++ ) {
                  if ( n == 0 ) {
                    html_R2 += '<li class="current"><a href="'+ data_R2[n].url +'" target="_blank"><img src="'+ data_R2[n].art_img +'"><p>'+ data_R2[n].title +'</p></a></li>';
                  } else {
                    html_R2 += '<li><a href="'+ data_R2[n].url +'" target="_blank"><img src="'+ data_R2[n].art_img +'"><p>'+ data_R2[n].title +'</p></a></li>';
                  }
              };

              elem_R2.html(html_R2);

              $('#js-mil-jsmw>li').on('mouseover',function(){
                $(this).addClass('current').siblings().removeClass('current');
              });
          };

        },
        error: function() {
          console.log('失败');
        }
    })
};

/*
首屏，要闻区，军事数据
 */
function setMilitaryYw() {
    if ($("#js-yw-hangye").length < 1) { return false };
    var ts = new Date().getTime();

    $.ajax({
        url: 'https://junshi.china.com/api/oneArtical?ts=' + ts,
        type: 'GET',
        dataType: 'script',
        cache: true,
        success: function() {
          if ( typeof(mili_one_data) != "object" ) { return false; };

          if ( mili_one_data.length > 0  ) {
              var elem = $('#js-yw-hangye'),
                  html = '',
                  data = mili_one_data;

              for ( var i=0; i<1; i++ ) {
                  html += '<a href="#" target="_blank">[军事]</a>&nbsp;<a href="'+ data[i].url +'" target="_blank">'+ data[i].title +'</a>';
              };

              elem.find('li').eq(0).html(html);
          };

        },
        error: function() {
          console.log('失败');
        }
    })
};

/*
财经模块整体数据
 */
function setEconomyCon() {
    if ($("#js-c-economy").length < 1) { return false };

    $.ajax({
        url: 'https://finance.china.com/api/article',
        type: 'GET',
        dataType: 'script',
        cache: true,
        success: function() {
          if ( typeof(cjchina_data) != "object" ) { return false; };

          // 左侧大图、两个小图
          if ( cjchina_data.focusMap.length > 0  ) {
              var elem_L1 = $('#js-cj-imgWide'),
                  elem_L2 = $('#js-cj-imgList'),
                  html_L1 = '',
                  html_L2 = '',
                  data_L = cjchina_data.focusMap;
              for ( var i=0; i<1; i++ ) {
                  html_L1 += '<div class="item">';
                  html_L1 += '  <a target="_blank" href="'+ data_L[i].url +'">';
                  html_L1 += '    <img alt="'+ data_L[i].title +'" src="'+ data_L[i].img +'">';
                  html_L1 += '    <p>'+ data_L[i].title +'</p>';
                  html_L1 += '  </a>';
                  html_L1 += '</div>';
              };
              for ( var i=1; i<3; i++ ) {
                  html_L2 += '<div class="item">';
                  html_L2 += '  <a target="_blank" href="'+ data_L[i].url +'">';
                  html_L2 += '    <img alt="'+ data_L[i].title +'" src="'+ data_L[i].img +'">';
                  html_L2 += '    <p>'+ data_L[i].title +'</p>';
                  html_L2 += '  </a>';
                  html_L2 += '</div>';
              };

              elem_L1.html(html_L1);
              elem_L2.html(html_L2);
          };

          // 中间12条
          if ( cjchina_data.middle.length > 0  ) {
              var elem_M = $('#js-cj-longList'),
                  html_M = '',
                  data_M = cjchina_data.middle;
              for ( var j=0; j<12; j++ ) {
                  if (j == 0) {
                    html_M += '<li><strong><a href="'+ data_M[j].url +'" target="_blank">'+ data_M[j].title +'</a></strong></li>';
                  } else if (j == 6) {
                    html_M += '<li class="mt26"><a href="'+ data_M[j].url +'" target="_blank">'+ data_M[j].title +'</a></li>';
                  } else {
                    html_M += '<li><a href="'+ data_M[j].url +'" target="_blank">'+ data_M[j].title +'</a></li>';
                  }
              };

              elem_M.html(html_M);
          };
          // 右侧-天天315
          if ( cjchina_data.consume.length > 0  ) {
              var elem_R1 = $('#js-cj-consume1'),
                  html_R1 = '',
                  data_R = cjchina_data.consume;
              for ( var m=0; m<5; m++ ) {
                  if ( m == 0 ) {
                    html_R1 += '<li class="current"><a href="'+ data_R[m].url +'" target="_blank"><img src="'+ data_R[m].art_img +'"><p>'+ data_R[m].title +'</p></a></li>';
                  } else {
                    html_R1 += '<li><a href="'+ data_R[m].url +'" target="_blank"><img src="'+ data_R[m].art_img +'"><p>'+ data_R[m].title +'</p></a></li>';
                  }
              };
              elem_R1.html(html_R1);

              $('#js-cj-consume1>li').on('mouseover',function(){
                $(this).addClass('current').siblings().removeClass('current');
              });

          };
          // 右侧-财富故事
          if ( cjchina_data.cfgs.length > 0  ) {
              var elem_R3 = $('#js-cj-cfgs'),
                  html_R3 = '',
                  data_R3 = cjchina_data.cfgs;
              for ( var n=0; n<2; n++ ) {
                  html_R3 += '<div class="item">';
                  html_R3 += '  <a target="_blank" href="'+ data_R3[n].url +'">';
                  html_R3 += '    <img alt="'+ data_R3[n].title +'" src="'+ data_R3[n].art_img +'">';
                  html_R3 += '    <p class="imgTit">'+ data_R3[n].title +'</p>';
                  html_R3 += '  </a>';
                  html_R3 += '</div>';
              };

              elem_R3.html(html_R3);
          };

        },
        error: function() {
          console.log('失败');
        }
    })
};

xiId = 0;
/*
首屏分地区tab切换
 */
function spotlightTab() {
  if ($("#spotlight").length < 1) {
    return false
  };

  $('#spotlight').slide({
    titCell: '.spotTabHd span',
    mainCell: '.spotTabCon',
    titOnClassName: 'active',
    trigger: 'mouseover',
    effect: 'fade'
  });

};



// 加载地方站信息
/* ads add by zhangyan 20091116, ck20150923*/
var allcookies = document.cookie;
// Look for the start of the cookie named "version"
var pos = allcookies.indexOf("area_name=");
var value = ""; 
// If we find a cookie by that name, extract and use its value
if (pos != -1) 
{
var start = pos + 10; // Start of cookie value
var end = allcookies.indexOf(";", start); // End of cookie value
if (end == -1) end = allcookies.length;
value = allcookies.substring(start, end); // Extract the value
}
/*end ads*/

/**
 * 整体函数调用相关
 */
function init(){
  // 显示时间
  DispDate();
  // 设为首页
  SetHome();

  // 轮播焦点图
  indexFocus();
  // 军事模块整体、首屏焦点图军事区
  setMilitaryCon();
  // 首屏，要闻区，军事数据
  setMilitaryYw();


  // 军事右侧展开列表
  $('.js-sideFeatList>li').on('mouseover',function(){
    $(this).addClass('current').siblings().removeClass('current');
  });

  // 财经模块整体数据
  setEconomyCon();

  // 首屏分地区tab切换
  spotlightTab();


  //login
  china_api_login({
    id:"headNavLogin",
    initHTML:'<a id="headNav_reg" href="#" class="reg">注册</a><a id="headNav_login" href="#" class="login">登录</a>',
    logonHTML:'<em class="headNavLogout">[F7:nickname /] &#91;[F7:out /]&#93;</em>',
    succeed:{
    }
  });
};

$(function(){
    init();
});