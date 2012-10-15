/*
 * DetailedMovie
 * 
 * Gives a more detailed description of a movie that is used on the movie's individual page.
 */
var Movie=function(title, actor, genre, decade, poster, link, rating){
	this.title=title;
	this.actor=actor;
	this.genre=genre;
	this.decade=decade;
	this.poster=poster;
	this.link=link;
	this.rating=rating;
};

Movie.prototype.printTitle=function(){
	document.write(title);
};
Movie.prototype.printActor=function(){
	document.write(actor);
};
Movie.prototype.printGenre=function(){
	document.write(genre);
};
Movie.prototype.printDecade=function(){
	document.write(decade);
};
Movie.prototype.printPoster=function(){
	document.write(poster);
};
Movie.prototype.printRating=function(){
	document.write(rating);
};