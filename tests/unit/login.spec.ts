import { mount } from '@vue/test-utils';
import { localVueFactory } from '@/app/testFactories';
// import flushPromises from 'flush-promises';
import Login from '@/components/composed/LoginForm.vue';
// import { ValidationProvider } from 'vee-validate';

describe('Login Form tests', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});
	test('Component mounting and rendering', async () => {
		const localVue = localVueFactory();
		const loginForm = mount(Login, { localVue });

		expect(loginForm.findComponent({ ref: 'loginObserver' }).exists()).toBe(true);
		expect(loginForm.findComponent({ ref: 'loginForm' }).exists()).toBe(true);
		expect(loginForm.findComponent({ ref: 'usernameProvider' }).exists()).toBe(true);
		expect(loginForm.findComponent({ ref: 'passwordProvider' }).exists()).toBe(true);
		expect(loginForm.findComponent({ ref: 'usernameInput' }).exists()).toBe(true);
		expect(loginForm.findComponent({ ref: 'passwordInput' }).exists()).toBe(true);
		expect(loginForm.findComponent({ ref: 'loginButton' }).exists()).toBe(true);
	});

	/*
	Disabled until get help related with vee validate testing caveats
	test('Form validations', async () => {
		const localVue = localVueFactory();
		const loginForm = mount(Login, { localVue });

		loginForm.findComponent({ ref: 'usernameInput' }).setValue('');
		loginForm.findComponent({ ref: 'passwordInput' }).setValue('');
		await flushPromises();
		expect((loginForm.vm.$refs.usernameProvider as InstanceType<typeof ValidationProvider>).errors[0]).toBeTruthy();
		expect((loginForm.vm.$refs.passwordProvider as InstanceType<typeof ValidationProvider>).errors[0]).toBeTruthy();
	}); */
});
