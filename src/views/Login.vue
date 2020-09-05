<template>
	<b-container id="login" class="h-100" fluid>
		<b-row align-v="center" align-content="center" align-h="center" class="h-100">
			<b-col id="logo-wrapper" align-self="center" cols="7">
				<logo :direction="'alternate'" :duration="4500" @mounted="logoMounted"></logo>
				<h1 id="logotext" class="text-center my-5">
					Dragon Launcher
				</h1>
				<div id="sub-logo">
					<hr />
					<h3 class="text-center">
						A complete minecraft launcher
					</h3>
				</div>
			</b-col>
			<b-col id="form-wrapper" cols="5" class="h-100">
				<login-form></login-form>
			</b-col>
		</b-row>
	</b-container>
</template>
<script lang="ts">
import Vue from 'vue';
import Logo from '@/components/single/SvgLogo.vue';
import LoginForm from '@/components/composed/LoginForm.vue';
import { animateLoginForm } from '@/app/tools/animations';
export default Vue.extend({
	name: 'Login',
	components: {
		Logo,
		LoginForm,
	},
	methods: {
		logoMounted: function(): void {
			animateLoginForm();
		},
	},
});
</script>
