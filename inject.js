$(document).ready(function() {
  $('label,input').mousedown(function(){console.log(this.id)});
  $('div.ui-radiobutton span').mousedown(function(e){console.log(e.attr('id'))});
});
