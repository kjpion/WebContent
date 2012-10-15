
$(document).ready(function(){
	var mc=new MovieCollection();
	mc.add(new Movie('Big Bad John', 'Tom Cruise', 'c', '90s', 'poster', 'link', '89'));
	var tvalue=null;
	var avalue=null;
	$('#createSection').on('click', '.create', function(){
		alert("YOU DID IT!!!");
	});
	$('#titlesearchfield').keyup(function(){
		tvalue= $(this).val();
	});
	$('#actorsearchfield').keyup(function(){
		avalue= $(this).val();
	});
	$('#searchpage').on('click', '.search', function(e){
		e.preventDefault();
		var t= tvalue;
		var g= $('#genresearchfield').val();
		var a= avalue;
		var d= $('#decadesearchfield').val();
		alert(t.trim());
		alert(g);
		alert(a);
		alert(d);
		var r= mc.getMovie(t.trim(),g,a.trim(),d);
		if (r === undefined){
			alert("r was undefined.")
		}
		else if (r === null){
			alert("r was null");
		}
		else {
			alert("r.title= " + r.title);
		}
		
			
			
		});
	});
