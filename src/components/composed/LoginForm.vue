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
				<ValidationObserver #default="{ handleSubmit }" slim>
					<b-form @submit.prevent="handleSubmit(dispatchLogin)">
						<ValidationProvider
							#default="{ valid, errors }"
							:rules="{ required: true, email: true }"
							name="Minecraft user name"
							slim
						>
							<b-form-group
								id="username-group"
								label="Minecraft user email"
								label-for="username-input"
								label-class="form-label"
								description="We'll never share or store your user email with anyone else."
							>
								<b-form-input
									id="username-input"
									v-model="formData.username"
									type="text"
									:state="isValid(errors, valid)"
									placeholder="Enter your Minecraft User name"
									size="lg"
								></b-form-input>
								<b-form-invalid-feedback id="userNameLiveFeedback">{{
									errors[0]
								}}</b-form-invalid-feedback>
							</b-form-group>
						</ValidationProvider>
						<ValidationProvider
							#default="{ valid, errors }"
							:rules="{ required: true, min: 6 }"
							name="Minecraft password"
							slim
						>
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
									:state="isValid(errors, valid)"
									placeholder="Enter your Minecraft password"
									size="lg"
								></b-form-input>
								<b-form-invalid-feedback id="passwordLiveFeedback">{{
									errors[0]
								}}</b-form-invalid-feedback>
							</b-form-group>
						</ValidationProvider>
						<b-button style="dark" type="submit" block>
							Iniciar Sesion
							<font-awesome-icon :icon="['fas', 'sign-in-alt']" />
						</b-button>
					</b-form>
				</ValidationObserver>
			</b-col>
		</b-row>
	</b-container>
</template>
<script lang="ts">
import Vue from 'vue';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { isValid } from '@/app/common-functions';
import { dispatchLogin } from '@/app/services/auth';
export default Vue.extend({
	name: 'LoginForm',
	components: {
		ValidationObserver,
		ValidationProvider,
	},
	data: function() {
		return {
			formData: {
				username: '',
				password: '',
			},
		};
	},
	methods: {
		dispatchLogin: async function() {
			try {
				const auth = await dispatchLogin(this.formData);
				console.info('Successfull Login');
				console.info({ auth });
			} catch (err) {
				if (err.statusCode === 403 && err.errorMessage === 'Invalid credentials. Invalid username or password.')
					console.error('Invalid Login');
				else console.error(err);
			}
		},
		isValid: function(errors: string[], valid: boolean | undefined): boolean | null {
			return isValid(errors, valid);
		},
	},
});
</script>
