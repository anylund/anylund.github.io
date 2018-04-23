$(document).ready(function() {
  $('label,input,textarea').mousedown(function(){console.log('Element '+this.id)});
  $('span.ui-icon-triangle-1-s').mousedown(function(e){
    console.log('span click');
    var arrow = e.target.parent().prev().first();
    if(arrow.id) {
      console.log('Dropdown '+arrow.id);
    } else {
      //koulutus
      arrow = arrow.get(0);
      console.log('DropdownB '+arrow.id);
    }
  });
  $('ul.ui-selectcheckboxmenu-multiple-container,div.ui-selectcheckboxmenu-trigger').mousedown(function(e){
    var rArrow = e.target.closest('div[id*=tat]');
    console.log('Selection '+rArrow.id);
  });
  
  $('span.ui-radiobutton-icon').mousedown(function(e){
    var rButton = e.target.closest('table[id*=tat]');
    console.log('Radiobutton '+rButton.id);

  });
  $('button,span.ui-button-text').mousedown(function(e){
    if(e.target.id) {
      console.log(e.target.id);
    } else {
      var btn = e.target.parent();
      console.log('Button '+ btn.id);
    }
  });
  $('span.ui-chkbox-icon').mousedown(function(e){
    var tableId = e.target.closest('table[id*=tat]');
    console.log('Table '+ tableId.id);
  });
//Errors
  var errorLines = document.querySelectorAll('div.ui-messages-error > ul li');
  for(var x=0;x<errorLines.length;x++) {
    console.log(errorLines[x].innerText);
    //suorita piwik-koodi error teksti:errorLines[x].innertext;
  }
});
