import { dispatchLogin } from '@/app/services/auth';
import { Authentication } from '@xmcl/user';

test('Valid mojang authentication attempt', async () => {
	const Credentials = {
		username: process.env.TEST_ACCOUNT_USERNAME as string,
		password: process.env.TEST_ACCOUNT_PASSWORD as string,
	};
	const Auth = await dispatchLogin(Credentials);
	const ExpectedResponse: Authentication = {
		accessToken: expect.any(String),
		clientToken: expect.any(String),
		availableProfiles: expect.any(Array),
		selectedProfile: expect.any(Object),
	};
	expect(Auth).toMatchObject<Authentication>(ExpectedResponse);
});
