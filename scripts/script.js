$(document).ready(function () {
	$('.hasSub').click(function () {
    $(this).parent().toggleClass('subactivated');
		$(this).parent().children('ul:first').toggle();
    
  	if($(this).find('i').hasClass('glyphicon-check')){
      $(this).find('i').removeClass('glyphicon-check').addClass('glyphicon-unchecked');
    }else{
      $(this).find('i').removeClass('glyphicon-unchecked').addClass('glyphicon-check');
    }

	}); 
  
	
  $(".menufilter").keyup(function () {
     //$(this).addClass('hidden');
  
    var searchTerm = $(".menufilter").val();
    var listItem = $('.fordtreeview').children('li');
  
    var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
    
      //extends :contains to be case insensitive
  $.extend($.expr[':'], {
  'containsi': function(elem, i, match, array)
  {
    return (elem.textContent || elem.innerText || '').toLowerCase()
    .indexOf((match[3] || "").toLowerCase()) >= 0;
  }
});
    
    $(".fordtreeview li").not(":containsi('" + searchSplit + "')").each(function(e)   {
      $(this).hide()
    });
    
    $(".fordtreeview li:containsi('" + searchSplit + "')").each(function(e) {
      $(this).show();
    });
  });  
});