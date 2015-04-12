for (var i=0; i<guardianHeroinData.length; i++) {
	var rowData = guardianHeroinData[i];
	

		var $template = $('<div class="quoteContainer">'+ 
		'<div class="mainQuote">'+rowData.mainQuote+'</div>'+
		'<div class="readMore">Show more Obsessions</div>'+
		'<div class="moreInfo">'+
			'<div class="wholeQuote">'+rowData.wholeQuote+'</div>'+
			'<div class="source">'+rowData.source+'</div>'+
			'<div class="yearsClean">'+rowData.yearsClean+'</div>'+
			'<div class="location">'+rowData.location+'</div>'+
			'</div>'+
		'</div>');

	$template.find(".readMore").on("click", toggleContent); //a click on the read more toggles whether the content shows or does not show
	

	$('#dataContainer').append($template);	//the append action inserts all my data divs
	
}

function toggleContent(e) { //this is the beginning of a function that will toggle content based on clicking the read more button
		$quoteContainer = $(this).parent(); 
		
		if ($quoteContainer.hasClass("expanded")) {//quoteContainer has class .expanded (you can see content), so remove content
			$quoteContainer.removeClass("expanded"); 
			
		} else { //quoteContainer does not have class .expanded (you can't see content), so show content
			$quoteContainer.addClass("expanded");
			
		}
		
		
	}