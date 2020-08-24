<template>
	<b-container id="login" class="h-100" fluid>
		<b-row align-v="center" align-content="center" align-h="center" class="h-100">
			<b-col id="logo-wrapper" align-self="center" cols="7">
				<logo
					:key="startLoad"
					:direction="'alternate'"
					:duration="4500"
					:loop="startLoop"
					@mounted="logoMounted"
				></logo>
				<h1 id="logotext" class="text-center my-5">
					Dragon Launcher
				</h1>
				<div id="sub-logo">
					<hr class="w-75" />
					<h3 class="text-center">
						A complete minecraft launcher
					</h3>
				</div>
			</b-col>
			<b-col id="form-wrapper" cols="5" class="h-100"></b-col>
		</b-row>
	</b-container>
</template>
<script lang="ts">
import Vue from 'vue';
import Logo from '@/components/SvgLogo.vue';
import Anime from 'animejs';
export default Vue.extend({
	name: 'Login',
	components: {
		Logo,
	},
	data: function() {
		return {
			startLoop: false,
			startLoad: false,
		};
	},
	methods: {
		logoMounted: function(): void {
			Anime({
				targets: '#logo-wrapper #logotext',
				opacity: [0, 1],
				duration: 1500,
				delay: 500,
				direction: 'normal',
				easing: 'easeInOutQuad',
				complete: function() {
					Anime.timeline({
						targets: '#logo-wrapper #logotext',
						'font-size': ['3em', '5em'],
						duration: 800,
						delay: 500,
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
							'background-color': '#282828',
						})
						.add({
							targets: '#logo-wrapper #sub-logo',
							width: ['0%', '100%'],
						})
						.add({ targets: '#logo-wrapper #sub-logo', opacity: [0, 1] });
				},
			});
		},
	},
});
</script>
