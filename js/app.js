// dom ready
document.addEventListener('DOMContentLoaded', function () {
	console.log('dom ready');
	tweenFunc()
});
// window resize
window.addEventListener('resize', function () {
	console.log('window resized')
});

const mainTimeline = new TimelineMax({repeat: -1, repeatDelay: 0, yoyo: true});
const tweenFunc = function () {
	
	mainTimeline.to(
		'#hair',
		0.2,
		{
			morphSVG: '#hair-2',
			ease: Ease.Power3
		},
		0
	);
}