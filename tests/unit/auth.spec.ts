import { dispatchLogin } from '@/app/services/auth';
import { Authentication } from '@xmcl/user';
import { CompleteAuthException } from '@/app';

describe('Auth service tests', () => {
	test('Valid mojang auth attempt', async () => {
		const credentials = {
			username: process.env.TEST_ACCOUNT_USERNAME as string,
			password: process.env.TEST_ACCOUNT_PASSWORD as string,
		};
		const auth = await dispatchLogin(credentials);
		const expectedResponse: Authentication = {
			accessToken: expect.any(String),
			clientToken: expect.any(String),
			availableProfiles: expect.any(Array),
			selectedProfile: expect.any(Object),
		};
		expect(auth).toMatchObject<Authentication>(expectedResponse);
	});

	test('Invalid mojang auth attempt', async () => {
		const credentials = {
			username: '',
			password: '',
		};
		const expectedResponse: CompleteAuthException = {
			error: 'ForbiddenOperationException',
			errorMessage: 'Invalid credentials. Invalid username or password.',
			statusCode: 403,
			statusMessage: 'Forbidden',
		};
		try {
			await dispatchLogin(credentials);
		} catch (error) {
			expect(error).toMatchObject<CompleteAuthException>(expectedResponse);
		}
	});
});
