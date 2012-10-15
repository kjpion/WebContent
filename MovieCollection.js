/*
 * MovieCollection
 * 
 * Holds the collection of all the movies
 */

var MovieCollection = function() {
	this.movies = new Array();
};

MovieCollection.prototype.add = function(movie) {
	this.movies.push(movie);
};
MovieCollection.prototype.remove = function(movie) {
	for ( var i = 0; i < this.movies.length; i++) {
		if (this.movies[i] = movie) {
			this.movies.splice(i, 1);
		}
	}
};
MovieCollection.prototype.FindSimilar = function(movie) {
	var points = new Array;
	for ( var i = 0; i < this.movies.length; i++) {
		points[i] = 0;
		if (this.movies[i].title != movie.title) {
			if (this.movies[i].actor == movie.actor)
				points[i]++;
			if (this.movies[i].genre = movie.genre)
				points[i]++;
			if (this.movies[i].decade = movie.decade)
				points[i]++;
		}
	}
	for ( var j = 0; j < this.movies.length; j++) {
		bestMatch = this.movies[0];
		if (points[j + 1] > points[j])
			bestMatch = this.movies[j];
	}
	return bestMatch;
};
MovieCollection.prototype.getMovie = function(title, genre, actor, decade) {
	alert(title);
	console.log("getMovie function called");
	if (title == null || actor == null || title=='' || actor =='') {
		alert("ERROR: The search form is incomplete.  You must fill in all fields. ");
		return;
	}
	for ( var i = 0; i < this.movies.length; i++) {
		if (title == this.movies[i].title && genre == this.movies[i].actor
				&& actor == this.movies[i].actor
				&& decade == this.movies[i].decade) {
			return this.movies[i];
		} else
			return null;
	}
};
