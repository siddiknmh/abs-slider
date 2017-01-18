var slidecount = 1;
var total = 5;

function slide(x){
	var imgTag = document.getElementById("image");
	slidecount = slidecount + x;
	if ( slidecount > total ) { slidecount = 1 }
	if ( slidecount < 1 ) { slidecount = total }
	imgTag.src = "img/slide_"+ slidecount +".jpg";

	console.log(imgTag.src);
}

window.setInterval(function slideA(){
	var imgTag = document.getElementById("image");
	slidecount = slidecount + 1;
	if ( slidecount > total ) { slidecount = 1 }
	if ( slidecount < 1 ) { slidecount = total }
	imgTag.src = "img/slide_"+ slidecount +".jpg";
},3000);