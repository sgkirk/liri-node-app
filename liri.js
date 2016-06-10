//At the top of the liri.js file make it so you grab the data from keys.js and store it into a variable to use

var twitter = require('twitter');
var keys = require('./keys.js');
var keysTwitter = keys.twitterKeys;




//Make it so liri.js can take in one of the following arguments

// my-tweets

// spotify-this-song

// movie-this

// do-what-it-says

var action = process.argv[2];

switch(action){
    case 'my-tweets':
        myTweets();
        break;
    case 'spotify-this-song':
        spotifyThis();
        break;
    case 'movie-this':
        movieThis();
        break;
    case 'do-what-it-says':
        whatItSays();
        break;
}



// So if you succeed, running the following commands in your terminal will do the followig things

// node liri.js my-tweets
// will show your last 20 tweets and when they were created at in the terminal

function myTweets(){

	var client = new twitter({

		consumer_key: keysTwitter.consumer_key,
		consumer_secret: keysTwitter.consumer_secret,
		access_token_key: keysTwitter.access_token_key,
		access_token_secret: keysTwitter.access_token_secret

	});

	var params = {screen_name: 'therealmochi', count: 20};
	
	client.get('statuses/user_timeline', params, function(error, tweets, response){

			for (var prop in tweets){
   				console.log(tweets[prop].text);
   				console.log(tweets[prop].created_at);
   				console.log();
  			}
	});

}



 






// node liri.js spotify-this-song '<song name here>'
// shows the following information about the song in the terminal

// artist(s)
// song name
// preview link of the song from spotify
// album that the song is a part of
// song name
// if no song is provided then your program will default to
// "what's my age again" by blink 182


// node liri.js movie-this '<movie name here>'
// this would output the following information to the terminal:

// Title
// Year
// IMDB Rating
// Country
// Language
// Plot
// Actors
// Rotten Tomatoes Rating
// Rotton Tomatoes UrL

// if no movie is provided then the program will output information for the movie: 'Mr. Nobody'


// node liri.js do-what-it-says 
// Using the fs package in node, the program would take the text inside of random.txt and use it to call the first command with the second part as it's parameter

// Currently in random.txt, the following text is there:

// spotify-this-song,"I Want it That Way"
// so according to those instructions, you would call the appropriate function and pass in "I Want it That Way" as the song.

// This should work for any function and paramter you use.

// To get the data for the above things you'll have to use the following npm packages:

// twitter
// spotify
// request

// The request npm package will be used to hit the OMDB API
// OMDB API
// to install these npm packages run these commands one at a time.

// npm install twitter
// npm install spotify
// npm install request

