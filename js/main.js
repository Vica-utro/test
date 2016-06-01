$(document).ready(function(){
	$('.datepicker').datepicker();

	$( ".tabletotal, .chairtotal" ).blur(function() {
		var inputValue = $(this).val();
	  	if ((isNaN(inputValue) || inputValue <= 0 || inputValue >= 100) && inputValue !== '') {
	      $(this).parent().addClass('has-error');
	      $(this).val('');
	  	}
	});

	$( ".tabletotal, .chairtotal" ).focus(function() {
		$(this).parent().removeClass('has-error');
	});

	$("#addRow").click(function() {
		var rowAmount = $('.recordNote');
		var currentRow = rowAmount[0]; 
	  	$(currentRow).clone().insertAfter(rowAmount[rowAmount.length - 1]).find("input").val("");
	});

	$(document).change(function() {
	  var tableTotal = $('.tabletotal');
	  var chairTotal = $('.chairtotal');
	  var tableSum = 0;
	  var chairSum = 0;
	  var currentCount;

	  for(currentCount = 0; currentCount < tableTotal.length; ++currentCount){
	  	var currenTableValue = $(tableTotal[currentCount]).val();
	  	var currenChairValue = $(chairTotal[currentCount]).val();

	    currenTableValue = parseInt(currenTableValue, 10);
	    currenChairValue = parseInt(currenChairValue, 10);
	    
		if(!isNaN(currenTableValue)){
			tableSum += currenTableValue;
		}

		if(!isNaN(currenChairValue)){
			chairSum += currenChairValue;
		}
	  };

	  tableSum = tableSum / currentCount;
	  chairSum = chairSum / currentCount;
	  $('#tableTotalSum').val(tableSum);
	  $('#chairTotal').val(chairSum);
	  
	});

	var checkboxList = $('input[type="checkbox"]');
	$('input[type="checkbox"]').siblings().attr( "disabled", "disabled" );


	$( "input[type='checkbox']" )
	  .click(function() {
	    if($( this ).prop( "checked" )){
	    	$(this).siblings().removeAttr( "disabled", "disabled" );
	    }else{
	    	$(this).siblings().attr( "disabled", "disabled" );
	    }
	  });

	  $(document).click(function() { 
	  	$( "input[type='checkbox']" )
		  .click(function() {
		    if($( this ).prop( "checked" )){
		    	$(this).siblings().removeAttr( "disabled", "disabled" );
		    }else{
		    	$(this).siblings().attr( "disabled", "disabled" );
		    }
		  });
	  });

});//end document.ready