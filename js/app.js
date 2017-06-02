console.log("js cargado..");

/*wa $(".numero").on("click", function() {
	var boton = $(this).text();
	console.log(boton);
	$(".ecuacion").append(boton);

});

$("#borrar").on("click", function() {
	$(".ecuacion").empty();
	$(".result").empty();

});

var a = $(".ecuacion").text();

$("#division").on("click", function() {
	var b = new Number();
	b = $(this).text();
	var resultado = a / b;
	
	$("#resultado").on("click", function() {
	$(".result").append(resultado);
});


}); */


	var eq = '';
	var s = 0;
	var mode = '';

	$('.numero').click(function(){
	  var number = $(this).text();
	  eq += number;
	  if (mode === ''){
		s += number;
	  }
	  s *= 1;
	  if (mode === 'add'){
		  number *= 1;
		  s += number;
	  }
	  if (mode === 'substract'){
		  number *= 1;
		  s -= number;
	  }
	  if (mode === 'multiply'){
		  number *= 1;
		  s *= number;
	  }  
	  if (mode === 'divide'){
		  number *= 1;
		  s /= number;
	  }

		$('.ecuacion').text(eq);
	    
	});

	$('.apps').click(function(){
	  var operation = $(this).text();
	  eq += ' ' + operation + ' ';
	  $('.ecuacion').text(eq);
	  if (operation === '+'){
		mode = 'add';
	  }
	  if (operation === '-'){
		mode = 'substract';
	  }
	  if (operation === '*'){
		mode = 'multiply';
	  }
	  if (operation === '/'){
		mode = 'divide';
	  }
	});

$("#borrar").on("click", function() {
	$(".ecuacion").empty();
	$(".result").empty();
	s = 0;
	eq = "";
	mode = "";
});

$('#resultado').click(function(){
	 
	 $('.result').text(s);
});  
