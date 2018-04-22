$(document).ready(function() {
  $('label,input').mousedown(function(){console.log(this.id)});
  $('div.ui-radiobutton span').mousedown(function(){
    var rButton = $(this).parents('div.ui-radiobutton').get(0);
    console.log(rButton.id);
  });
  $('span.ui-icon.ui-icon-triangle-1-s').mousedown(function(){
    console.log('span click');
    var arrow = $(this).parent().prev().first();
    console.log(arrow);
  });
  $('span').mousedown(function(){
    console.log(this);
    console.log($(this));
    });
});
