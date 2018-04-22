$(document).ready(function() {
  $('label,input').mousedown(function(){console.log(this.id)});
  $('div.ui-radiobutton span').mousedown(function(){console.log($(this).parent().attr('id'))});
});
