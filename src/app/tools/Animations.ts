import Anime from 'animejs';

export async function animateLogoLines(duration: number, direction: string, delay?: number, loop?: boolean) {
	await Anime.timeline({
		targets: '#svglogo .linedraw',
		strokeDashoffset: [Anime.setDashoffset, 0],
		easing: 'easeInOutSine',
		duration: duration,
		delay: delay,
		direction: direction,
		loop: loop,
	}).add({
		fill: ['none', '#878787'],
		duration: 3000,
		delay: 500,
	}).finished;
}

export async function animateLogoBody(duration: number, direction: string, delay?: number, loop?: boolean) {
	await Anime.timeline({
		targets: '#svglogo .bodydraw',
		fill: ['none', '#171717'],
		easing: 'easeInOutSine',
		duration: duration / 3,
		direction: direction,
		delay: 0,
		loop: loop,
	})
		.add({
			targets: '#svglogo .detaildraw',
			fill: ['none', '#282828'],
			easing: 'easeInOutSine',
			duration: duration / 3,
			direction: direction,
			loop: loop,
		})
		.add({ targets: '#svglogo .mindraw', fill: ['none', '#5117a2'], duration: duration / 4, delay: 0 }).finished;
}

export function animateLoginForm() {
	Anime.timeline({
		targets: '#logo-wrapper #logotext',
		opacity: [0, 1],
		duration: 800,
		delay: 500,
		direction: 'normal',
		easing: 'easeInOutQuad',
	})
		.add({
			targets: '#logo-wrapper #logotext',
			'font-size': ['3em', '5em'],
			duration: 450,
			delay: 0,
			direction: 'normal',
			easing: 'easeInOutQuad',
		})
		.add({
			targets: '#logo-wrapper #logo',
			translateX: ['50%', '0%'],
			translateY: ['20%', '0%'],
		})
		.add({
			targets: '#form-wrapper',
			begin: function() {
				(document.querySelector('#form-wrapper') as HTMLElement).style.visibility = 'visible';
			},
		})
		.add({
			targets: '#form-wrapper',
			'background-color': '#282828',
		})
		.add({ targets: '#logo-wrapper #sub-logo', opacity: [0, 1] })
		.add({
			duration: 1000,
			delay: 200,
			targets: '#logo-wrapper #sub-logo hr',
			width: ['0%', '75%'],
		});
}

export function animateFormData() {
	Anime({
		targets: '#form-wrapper #loginFormData',
		opacity: [1, 0],
		duration: 2500,
		direction: 'normal',
		easing: 'easeInOutQuad',
	});
}
