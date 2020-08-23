<template>
	<b-container id="login" fluid>
		<b-row align-v="stretch" align-content="center" align-h="center">
			<b-col id="logo-wrapper" cols="8">
				<logo :direction="'alternate'" :duration="5500"></logo>
			</b-col>
			<b-col id="form-wrapper" cols="4"></b-col>
		</b-row>
	</b-container>
</template>
<script lang="ts">
import Vue from 'vue';
import Logo from '@/components/SvgLogo.vue';
export default Vue.extend({
	name: 'Login',
	components: {
		Logo,
	},
});
</script>
