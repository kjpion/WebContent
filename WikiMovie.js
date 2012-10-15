
$(document).ready(function(){
	var mc=new MovieCollection();
	mc.add(new Movie('Big Bad John', 'Tom Cruise', 'c', '90s', 'poster', 'link', '89'));
	var tsvalue=null;
	var asvalue=null;
	var tcvalue=null;
	var acvalue=null;
	var lcvalue=null;
	var rcvalue=null;
	$('#titlesearchfield').keyup(function(){
		tsvalue= $(this).val();
	});
	$('#actorsearchfield').keyup(function(){
		asvalue= $(this).val();
	});
	$('#titlecreatefield').keyup(function(){
		tcvalue= $(this).val();
	});
	$('#actorcreatefield').keyup(function(){
		acvalue= $(this).val();
	});
	$('#linkcreatefield').keyup(function(){
		lcvalue= $(this).val();
	});
	$('#ratingcreatefield').keyup(function(){
		rcvalue= $(this).val();
	});
	$('#searchpage').on('click', '.search', function(e){
		var t= tsvalue;
		var g= $('#genresearchfield').val();
		var a= asvalue;
		var d= $('#decadesearchfield').val();
		alert(t.trim());
		alert(g);
		alert(a.trim());
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
	$('createpage').on('click','.create',function(e){
		e.preventDefault();
		var tc=tcvalue;
		var gc= $('#genrecreatefield').val();
		var ac=acvalue;
		var dc= $('#decadecreatefield').val();
		var lc=lcvalue;
		var rc=rcvalue;
		alert(tc);
		alert(gc);
		alert(ac);
		alert(dc);
		alert(lc);
		alert(rc);
	});
	});
