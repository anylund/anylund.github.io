$(document).ready(function() {
  $('label,input').mousedown(function(){console.log(this.id)});
  $('div.ui-radiobutton span').mousedown(function(){
    var rButton = $(this).closest('div[id*=tat]').get(0);
    console.log('rButton ');
    console.log(rButton.id);

    if(rButton) {
      console.log('NO ID');
      //var someID = rButton.parents('#id').get(0).id;
      //console.log('someID '+someID);
    }
  });
  $('span.ui-icon-triangle-1-s').mousedown(function(){
    console.log('span click');
    var arrow = $(this).parent().prev().first();
    console.log(arrow);
    if(arrow.id) {
      console.log('Arrow '+arrow.id);
    } else {
      //koulutus
      console.log(arrow.get(0));
      arrow = arrow.get(0);
      console.log(arrow.id);
    }
  });
  $('button,span.ui-button-text').mousedown(function(){
    if(this.id) {
      console.log(this.id);
    } else {
      var btn = $(this).parent();
      console.log('Button '+ btn);
    }
  });
//Errors
  var errorLines = document.querySelectorAll('div.ui-messages-error > ul li');
  for(var x=0;x<errorLines.length;x++) {
    console.log(errorLines[x].innerText);
    //suorita piwik-koodi error teksti:errorLines[x].innertext;
  }
});
