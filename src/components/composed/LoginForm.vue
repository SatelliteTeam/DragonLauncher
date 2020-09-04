<template>
	<b-container id="loginFormContainer" class="my-5 py-4">
		<b-row align-content="center" align-h="center" align-v="stretch">
			<b-col cols="10">
				<h1 id="loginTitle" class="text-left">
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
				<ValidationObserver ref="loginObserver" #default="{ handleSubmit }" slim>
					<b-form
						v-if="auth.profile.id === '' || auth.profile.id === undefined"
						id="loginForm"
						ref="loginForm"
						@submit.prevent="handleSubmit(dispatchLogin)"
					>
						<ValidationProvider
							ref="usernameProvider"
							#default="{ valid, errors }"
							:rules="{ required: true, email: true }"
							name="Minecraft user name"
							slim
						>
							<b-form-group
								id="username-group"
								label="Minecraft email"
								label-for="username-input"
								label-class="form-label"
								description="We'll never share or store your user email with anyone else."
							>
								<b-form-input
									id="username-input"
									ref="usernameInput"
									v-model="formData.username"
									type="text"
									:state="isValid(errors, valid)"
									placeholder="Enter your Minecraft email"
									size="lg"
								></b-form-input>
								<b-form-invalid-feedback ref="usernameError" :state="isValid(errors, valid)">
									{{ errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</ValidationProvider>
						<ValidationProvider
							ref="passwordProvider"
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
									ref="passwordInput"
									v-model="formData.password"
									type="password"
									:state="isValid(errors, valid)"
									placeholder="Enter your Minecraft password"
									size="lg"
								></b-form-input>
								<b-form-invalid-feedback ref="passwordError" :state="isValid(errors, valid)">
									{{ errors[0] }}
								</b-form-invalid-feedback>
							</b-form-group>
						</ValidationProvider>
						<b-button
							ref="loginButton"
							style="dark"
							variant="outline-primary"
							size="lg"
							type="submit"
							block
						>
							Login
							<font-awesome-icon :icon="['fas', 'sign-in-alt']" />
						</b-button>
					</b-form>
				</ValidationObserver>
			</b-col>
		</b-row>
		<b-row
			v-if="(headUrl !== '' && auth.profile.id !== '') || auth.profile.id !== undefined"
			align-content="center"
			align-h="center"
			align-v="stretch"
		>
			<b-col cols="12" class="text-center my-2">
				<b-img fluid :src="headUrl"></b-img>
			</b-col>
			<b-col cols="12" class="text-center my-2">
				<h2 class="text-muted">Welcome {{ auth.profile.name }} !</h2>
			</b-col>
		</b-row>
	</b-container>
</template>
<script lang="ts">
import Vue from 'vue';
import { ValidationObserver, ValidationProvider } from 'vee-validate';
import { isValid, storeItems, getItem } from '@/app/commonFunctions';
import { SimpleProfile } from '@/app';
import { dispatchLogin } from '@/app/services/auth';
import Swal from 'sweetalert2';
import _ from 'lodash';
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
			auth: {
				profile: {} as SimpleProfile,
			},
		};
	},
	computed: {
		headUrl: function(): string {
			if (!_.isEmpty(this.auth.profile) && this.auth.profile.id !== '')
				return `https://crafatar.com/renders/head/${this.auth.profile.id}`;
			else return '';
		},
	},
	mounted: function() {
		this.loadAuth();
	},
	methods: {
		dispatchLogin: async function(): Promise<void> {
			try {
				const auth = await dispatchLogin(this.formData);
				const { selectedProfile, accessToken, clientToken } = auth;
				this.storeAuth(accessToken, clientToken, selectedProfile);
				this.auth.profile = selectedProfile;
			} catch (err) {
				console.error(typeof err);
				if (err.statusCode === 403 && err.errorMessage === 'Invalid credentials. Invalid username or password.')
					Swal.fire({
						icon: 'error',
						titleText: 'Invalid credentials',
						text: 'Invalid email or password, verify your data and try again.',
						timer: 2500,
						timerProgressBar: true,
					});
				else console.error(err);
			}
		},
		isValid: function(errors: string[], valid: boolean | undefined): boolean | null {
			return isValid(errors, valid);
		},
		storeAuth: function(accessToken: string, clientToken: string, authProfile: object): void {
			if (accessToken !== '' && clientToken !== '' && !_.isEmpty(authProfile))
				storeItems([
					{ name: 'accessToken', value: accessToken },
					{ name: 'clientToken', value: clientToken },
					{ name: 'authProfile', value: authProfile },
				]);
		},
		loadAuth: function(): void {
			const authLoad = getItem('authProfile');
			this.auth.profile = authLoad as SimpleProfile;
		},
	},
});
</script>
