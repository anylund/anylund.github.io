$(document).ready(function() {
  var fired = false;
  $('label,input,textarea').mousedown(function(){console.log('Element '+this.id)});
  $('span.ui-icon-triangle-1-s').mousedown(function(e){
    var target = e.target;
    while(!target.id){
      target = target.parentNode;
    }
    console.log(target.id);
    fired = true;
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
    if(!fired) {
      console.log(e.target.id);
    } else {
      //Prevents button firing for the same event when drop down already fired
      fired = 0;
    }
  });
  $('span.ui-chkbox-icon').mousedown(function(e){
    var target = e.target;
    while(!target.id){
      target = target.parentNode;
    }
    console.log(target.id);
    //var tableId = e.target.closest('table[id*=tat]');
    console.log('Table '+ target.id);
  });
//Errors
  var errorLines = document.querySelectorAll('div.ui-messages-error > ul li');
  for(var x=0;x<errorLines.length;x++) {
    console.log(errorLines[x].innerText);
    //suorita piwik-koodi error teksti:errorLines[x].innertext;
  }
});
