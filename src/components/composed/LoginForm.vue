<template>
	<b-container id="loginForm" class="my-5 py-4">
		<b-row align-content="center" align-h="center" align-v="stretch">
			<b-col cols="10">
				<h1 class="text-left">
					Login
				</h1>
				<h4 class="text-left text-muted">
					Sign in into your Minecraft account
				</h4>
			</b-col>
			<b-col cols="2">
				<h1 class="text-left my-2">
					<font-awesome-icon :icon="['fas', 'sign-in-alt']" />
				</h1>
			</b-col>
		</b-row>
		<b-row align-content="center" align-h="center" align-v="stretch">
			<b-col class="my-5">
				<b-form>
					<b-form-group
						id="username-group"
						label="Minecraft user name"
						label-for="username-input"
						label-class="form-label"
						description="We'll never share or store your user name with anyone else."
					>
						<b-form-input
							id="username-input"
							v-model="formData.username"
							type="text"
							required
							placeholder="Enter your Minecraft User name"
							size="lg"
						></b-form-input>
					</b-form-group>
					<b-form-group
						id="password-group"
						label="Minecraft password"
						label-for="pasword-input"
						label-class="form-label"
						description="We'll never share or store your password with anyone else."
					>
						<b-form-input
							id="password-input"
							v-model="formData.password"
							type="password"
							required
							placeholder="Enter your Minecraft password"
							size="lg"
						></b-form-input>
					</b-form-group>
				</b-form>
			</b-col>
		</b-row>
	</b-container>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	name: 'LoginForm',
	data: function() {
		return {
			formData: {
				username: '',
			},
		};
	},
});
</script>
