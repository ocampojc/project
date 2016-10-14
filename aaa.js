imgadv= ["img/l1.png","img/l2.jpg","img/l3.jpg"];

currentAdv = 0;

function cycleAdv(){
	if(++currentAdv === imgadv.length){
		currentAdv = 0;
	}
	
	document.images.logo.src = imgadv[currentAdv];
	setTimeout(cycleAdv, 3000);
	
}