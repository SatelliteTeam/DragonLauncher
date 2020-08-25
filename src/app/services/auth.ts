import { login, Authentication } from '@xmcl/user';

interface Credentials {
	username: string;
	password: string;
}

export async function dispatchLogin(credentials: Credentials): Promise<Authentication> {
	const { username, password } = credentials;
	const mojangAuth: Authentication = await login({ username, password });
	return mojangAuth;
}
