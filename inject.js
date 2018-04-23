$(document).ready(function() {
  var fired = false;
  $('label,input,textarea').mousedown(function(){console.log('Element '+this.id)});
  $('span.ui-icon-triangle-1-s').mousedown(function(e){
    var target = e.target;
    while(!target.id){
      target = target.parentNode;
    }
    console.log('Dropdown '+target.id);
    fired = true;
  });
  $('ul.ui-selectcheckboxmenu-multiple-container,div.ui-selectcheckboxmenu-trigger').mousedown(function(e){
    if(!fired) {
      var target = e.target;
      while(!target.id){
        target = target.parentNode;
      }
      console.log('Dropdown multiple '+ target.id);
    } else {
      fired = 0;
    }
  });
  
  $('span.ui-radiobutton-icon').mousedown(function(e){
    var target = e.target;
    while(!target.id){
      target = target.parentNode;
    }
    console.log('Radiobutton '+ target.id);

  });
  $('button,span.ui-button-text').mousedown(function(e){
    if(!fired) {
      console.log('Button '+e.target.id);
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
    console.log('Checkbox '+ target.id);
  });
  $('a').mousedown(function(e){
    console.log('Link '+e.innerText);
  });
//Errors
  var errorLines = document.querySelectorAll('div.ui-messages-error > ul li');
  for(var x=0;x<errorLines.length;x++) {
    console.log(errorLines[x].innerText);
    //suorita piwik-koodi error teksti:errorLines[x].innertext;
  }
});
