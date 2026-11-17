/*Cufon.replace('h1');
Cufon.replace('h2');
Cufon.replace('h3');
Cufon.replace('.menu a');
Cufon.replace('.homepage_watchword');*/
$(document).ready(function() {
  $('.menu h3').click(function() {
    $(this).parent('li').parent('ul').children('li').children('a').css('color', '#969494');
    $(this).parent('li').parent('ul').children('li').children('h3').css('color', '#969494');
    $(this).css('color', '#E87817');
    if (navigator.appVersion.search(/MSIE.6\.0/) == '-1') {
      $(this).parent('li').parent('ul').children('li').children('ul').hide('slow');
      $(this).parent('li').children('ul').slideToggle('slow');
    }
    else {
      $('li').css('margin-top', '0');
      $(this).parent('li').parent('ul').children('li').children('ul').hide();
      $(this).parent('li').next('li').css('margin-top', '-26');
      $(this).parent('li').children('ul').slideToggle('normal');
    }
  });
});

$(function() {
  $('a.image_view').lightBox({ overlayBgColor: '#8F8F8F', overlayOpacity: 0.9, imageLoading: 'image/icon_loading.gif', imageBtnClose: 'image/close_image.gif', imageBtnPrev: 'image/previous_image.gif', imageBtnNext: 'image/next_image.gif', containerResizeSpeed: 350, txtImage: 'Obrázek', txtOf: 'z' });
});


if (navigator.appVersion.search(/MSIE.6\.0/) == '-1') {
  $(function() {
  	$('#scrollbar_pane').jScrollPane({ scrollbarWidth: 10, scrollbarMargin: 15, showArrows: true, arrowSize: 12, animateStep: 10, dragMaxHeight: 100 });
  });
}

$(window).bind("load", function() { 
  $("div#gallery_image").slideView({easeTime: 1200, toolTip: false})
});

function auto_margin(element_id) {
  // Aktualni vyska body
	yWithScroll = 0;
  if (typeof(window.pageYOffset) == 'number') { //Netscape compliant
    yWithScroll = window.pageYOffset;
  }
  else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) { //DOM compliant
    yWithScroll = document.body.scrollTop;
  }
  else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) { //IE6 standards compliant mode
    yWithScroll = document.documentElement.scrollTop;
  }
  if (yWithScroll == 0) {
    if ((screen.availWidth >= 1600) && (screen.availHeight >= 1030)) {
      yWithScroll = 800;
    }
    else {
      yWithScroll = 605;
    }
  }

  // Maximalni vyska okna
  windowHeight = 0;
  if (typeof(window.innerHeight) == 'number') { //Non-IE
    windowHeight = window.innerHeight;
  }
  else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) { //IE 6+ in 'standards compliant mode'
    windowHeight = document.documentElement.clientHeight;
  }
  else if (document.body && (document.body.clientWidth || document.body.clientHeight)) { //IE 4 compatible
    windowHeight = document.body.clientHeight;
  }
	// Je-li aktualni mensi nez maximalni, tak se zmeni
  if (yWithScroll < windowHeight) {
    marginSize = (windowHeight - yWithScroll) / 2;
    if ((navigator.appName == 'Microsoft Internet Explorer') && (navigator.appVersion.indexOf('MSIE 10.0;') == -1)) {
      document.getElementById(element_id).style.marginTop = marginSize;
    }
    else {
      document.getElementById(element_id).style.marginTop = marginSize + 'px';
    }
  }
	return true;
}
