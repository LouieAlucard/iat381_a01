var favo = false;

function showFavo() {
	var elements = document.getElementsByClassName('unmarked');
	for (i = 0; i < elements.length; i++) {
		var parent = findAncestor (elements[i], 'col-xs-12');
		if (favo == false) {
			//var parent = findAncestor (elements[i], 'col-xs-12');
			//parent.style.visibility = 'hidden';
			//parent.style.opacity = 0;
			//parent.style.height = 0;
			fadeOut(parent);
			//parent.className = "col-xs-12-hidden";
		} else {
			//var parent = findAncestor (elements[i], 'col-xs-12-hidden');
			//parent.style.visibility = 'visible';
			//parent.style.opacity = '1.0';
			//parent.style.height = '80px';
			fadeIn(parent);
			//parent.className = "col-xs-12";
		}
	}
	favo = !favo;
}

function findAncestor (element, className) {
    while ((element = element.parentElement) && !element.classList.contains(className));
    return element;
}

function fadeOut(el){
	el.style.opacity = 1;

	(function fade() {
		if ((el.style.opacity -= .05) < 0) {
			el.style.display = "none";
		} else {
			requestAnimationFrame(fade);
		}
	})();
}

function fadeIn(el, display){
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .05) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}
