$(document).ready(function() {
  $('label,input,textarea').mousedown(function(){console.log('Element '+this.id)});
  $('span.ui-icon-triangle-1-s').mousedown(function(){
    console.log('span click');
    var arrow = $(this).parent().prev().first();
    if(arrow.id) {
      console.log('Dropdown '+arrow.id);
    } else {
      //koulutus
      arrow = arrow.get(0);
      console.log('DropdownB '+arrow.id);
    }
  });
  $('ul.ui-selectcheckboxmenu-multiple-container,div.ui-selectcheckboxmenu-trigger').mousedown(function(){
    var rArrow = $(this).closest('div[id*=tat]').get(0);
    console.log('Selection '+rArrow.id);
  });
  
  $('span.ui-radiobutton-icon').mousedown(function(){
    var rButton = $(this).closest('div[id*=tat]').get(0);
    console.log('Radiobutton '+rButton.id);
  });
  $('button,span.ui-button-text').mousedown(function(){
    if(this.id) {
      console.log(this.id);
    } else {
      var btn = $(this).parent();
      console.log('Button '+ btn);
    }
  });
  $('span.ui-chkbox-icon').mousedown(function(){
    var tableId = $(this).closest('table[id*=tat]').get(0);
    console.log('Table '+ tableId);
  });
//Errors
  var errorLines = document.querySelectorAll('div.ui-messages-error > ul li');
  for(var x=0;x<errorLines.length;x++) {
    console.log(errorLines[x].innerText);
    //suorita piwik-koodi error teksti:errorLines[x].innertext;
  }
});
