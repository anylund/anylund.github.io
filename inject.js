$(document).ready(function() {
  $('label,input').mousedown(function(){console.log(this.id)});
  $('div.ui-radiobutton span').mousedown(function(){
    var rButton = $(this).parents('div.ui-radiobutton').get(0);
    console.log('rButton ');
    console.dir(rButton);
    if(rButton) {
      console.log('NO ID');
      var someID = rButton.parents('#id').get(0).id;
      console.log('someID '+someID);
    }
  });
  $('span.ui-icon-triangle-1-s').mousedown(function(){
    console.log('span click');
    var arrow = $(this).parent().prev().first();
    console.log(arrow);
    console.log('Arrow '+arrow.id);
  });

});
