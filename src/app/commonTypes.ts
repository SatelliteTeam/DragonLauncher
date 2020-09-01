import { AuthException } from '@xmcl/user';
export interface Credentials {
	username: string;
	password: string;
}

export interface StorageItem {
	name: string;
	value: string | object;
}

export interface SimpleProfile {
	id: string;
	name: string;
}

export interface CompleteAuthException extends AuthException {
	statusCode: number;
	statusMessage: string;
}
