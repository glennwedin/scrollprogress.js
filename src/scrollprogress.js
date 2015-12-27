;(function (window, document, undefined) {
	var el = document.createElement('div'),
	progress = document.createElement('div'),
	scrollprogress = 0;

	el.id = "scrollprogress";
	//Styles
	el.style.height = '3px';
	el.style.width = '100%';
	el.style.position = 'fixed';
	el.style.top = '0';
	el.style.left = '0';
	progress.style.height = '100%';
	progress.style.width = '0';
	progress.style.backgroundColor = "#00b71a";

	//Document height
	var B = document.body,
	    H = document.documentElement,
	    height, top;

	if (typeof document.height !== 'undefined') {
	    height = document.height; // For webkit browsers
	} else {
	    height = Math.max(B.scrollHeight, B.offsetHeight,H.clientHeight, H.scrollHeight, H.offsetHeight);
	}
	height = height - window.innerHeight;
			
	//Events
	window.addEventListener('scroll', function (e) {
		top = (window.pageYOffset || H.scrollTop)  - (H.clientTop || 0) //+ window.innerHeight;
		scrollprogress = top/height*100;
		console.log(scrollprogress);
		progress.style.width = scrollprogress+'%';
	});
	el.appendChild(progress);
	document.body.insertBefore(el, document.body.firstChild);
}(window, document));