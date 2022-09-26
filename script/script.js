// I don't think this is an error as the tutorial told me to just put this exact same line here and it worked
// I suppose it's used in html files
const swup = new Swup()

var pic = document.querySelector('img.cat')
document.addEventListener('mousemove', function(e){
	// console.log(1)
	var x = e.pageX
	var y = e.pageY
	x = x + 4
	// y = y + 1
	pic.style.left = x + 'px'
	pic.style.top = y + 'px'
})