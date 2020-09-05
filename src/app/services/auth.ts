import { login, Authentication } from '@xmcl/user';
import { Credentials } from '@/app';

export async function dispatchLogin(credentials: Credentials): Promise<Authentication> {
	const { username, password } = credentials;
	const mojangAuth: Authentication = await login({ username, password });
	return mojangAuth;
}
