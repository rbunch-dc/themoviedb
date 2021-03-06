$(document).ready(function(){
    // $( document ).tooltip();

	$('#movie-search-form').submit(function(){
		$('#now-playing-wrapper').html('');
		var x=0;
		var html="";
		var movieString = $('#movieInput').val();
		var searchUrl = 'http://api.themoviedb.org/3/search/movie?query='+movieString+'&api_key='+apiKey;
		$.getJSON(searchUrl, function(data){
			movieArray = data.results;
			// movieArray = objectArray;
			// for(i=0; i<data.results.length; i++){
			for(i=0; i<movieArray.length; i++){
				x++;
				var isAdult = movieArray[i].adult;
				var backdrop_path = movieArray[i].backdrop_path;
				var genre_ids = movieArray[i].genre_ids;
				var movieId = movieArray[i].id;
				var title = movieArray[i].title;
				var overview = movieArray[i].overview;
				var popularity = movieArray[i].popularity;
				var posterPath = movieArray[i].poster_path;
				var releaseDate = movieArray[i].release_date;
				var voteAverage = movieArray[i].vote_average;
				var voteCount = movieArray[i].vote_count;


		if(posterPath !== null){
			if(i==0){
				html += '<div class="movie-row">';
			}

			if(x==5){
				html += '</div>';
				html += '<div class="movie-row">';
				x=1;
			}
			html += '<div class="now-playing-movie">';
			html += '<img title="'+overview+'" alt="'+title+'" src="'+basePath+'w300'+posterPath+'">';
			html += '</div>';
		}

		if(i == (movieArray.length-1)){
			html += '</html>';
			$(html).appendTo('#now-playing-wrapper');
		}
	}


		});
		event.preventDefault();
	});


	$('.dropdown-menu').click(function(){

	});

});


var apiKey = 'fec8b5ab27b292a68294261bb21b04a5';
var basePath = '';
var sizeOptions = '';
var logo_sizes = '';	
var poster_sizes = '';
var profile_sizes = '';
//http://api.themoviedb.org/3/search/movie?query=taken&api_key=fec8b5ab27b292a68294261bb21b04a5

var siteConfig = 'https://api.themoviedb.org/3/configuration?api_key='+apiKey;
$.getJSON(siteConfig, function(data){
	basePath = data.images.base_url;
	sizeOptions = data.images.poster_sizes;
	//0: "w300" 1: "w780" 2: "w1280" 3: "original"
	posterSize = 'w300';
	logo_sizes = logo_sizes['original'];
	profileSizes = profile_sizes['original'];
});

var nowPlaying = 'http://api.themoviedb.org/3/movie/now_playing?api_key='+apiKey;

console.log(nowPlaying);

$.getJSON(nowPlaying, function(data){
	var html = "";
	var x = 0;
	movieArray = data.results;
	// movieArray = objectArray;
	// for(i=0; i<data.results.length; i++){
	for(i=0; i<movieArray.length; i++){
		x++;
		var isAdult = movieArray[i].adult;
		var backdrop_path = movieArray[i].backdrop_path;
		var genre_ids = movieArray[i].genre_ids;
		var movieId = movieArray[i].id;
		var title = movieArray[i].title;
		var overview = movieArray[i].overview;
		var popularity = movieArray[i].popularity;
		var posterPath = movieArray[i].poster_path;
		var releaseDate = movieArray[i].release_date;
		var voteAverage = movieArray[i].vote_average;
		var voteCount = movieArray[i].vote_count;	

		if(i==0){
			html += '<div class="movie-row">';
		}

		if(x==5){
			html += '</div>';
			html += '<div class="movie-row">';
			x=1;
		}
		html += '<div class="now-playing-movie">';
		html += '<img title="'+overview+'" alt="'+title+'" src="'+basePath+'w300'+posterPath+'">';
		html += '</div>';
		
		if(i == (movieArray.length-1)){
			html += '</html>';
			$(html).appendTo('#now-playing-wrapper');
		}
	}
}); // End get json - popular movies




