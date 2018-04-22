$(document).ready(function() {
  $('label,input').mousedown(function(){console.log(this.id)});
  $('div.ui-radiobutton').mousedown(function(){console.log(this.id)});
});
