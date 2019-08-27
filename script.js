
function init() {
	intro();
}



function intro() {
	}

	function movieReady() {
		
		document.getElementById('movie__intro__loader').innerHTML = "Entrar";
		TweenMax.to(['.movie__intro__title','.movie__intro__loader'], 1, {opacity: 1});
		document.getElementById('movie__intro').onclick=function(){
			 open("https://troopsmx.com");
		}
	}

var audioTrack = document.createElement('audio');
audioTrack.setAttribute('src', 'https://mcraiganthony.github.io/leftovers/audio/let-the-mystery-be.mp3');
audioTrack.setAttribute('type', 'audio/mpeg');
audioTrack.setAttribute('preload', 'none');





	function preloadImages(srcs) {
  function loadImage(src) {
    return new Promise(function(resolve, reject) {
      var img = new Image();
      img.onload = function() {
          resolve(img);
      };
      img.onerror = img.onabort = function() {
          reject(src);
      };
      img.src = src;
    });
  }


  var promises = [];
  for (var i = 0; i < srcs.length; i++) {
    promises.push(loadImage(srcs[i]));
  }
  return Promise.all(promises);
}

preloadImages([
	'https://mcraiganthony.github.io/leftovers/img/scene1.jpg',
  
	]).then(function(imgs) {
    // all images are loaded now and in the array imgs
    //alert("loaded");
    movieReady();
}, function(errImg) {
    // at least one image failed to load
    //alert("errored");
});

ready(init);