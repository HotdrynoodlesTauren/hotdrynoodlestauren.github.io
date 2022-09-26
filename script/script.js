// eslint-disable-next-line no-unused-vars, no-undef
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