console.log('\'Allo \'Allo!');

$(document).ready(function() {
    $('.video-background').videobackground({
	videoSource: [['video/galaxy.mp4', 'video/mp4'],
		      ['video/galaxy.webm', 'video/webm'], 
		      ['video/galaxy.ogv', 'video/ogg']], 
	poster: 'video/big-buck-bunny.jpg',
	loadedCallback: function() {
	    $(this).videobackground('mute');
	}
    });
});
