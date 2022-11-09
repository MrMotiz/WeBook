import { api } from '../../lib';
import { setCookie } from '../../utils';
import { IUser } from './authServiceTypes';

async function login(email: string, password: string): Promise<IUser> {
	const { data: user }: { data: IUser } = await api.post('/api/auth/login', {
		email,
		password,
	});

	const token = user.data.token;

	const { exp: expirationInSeconds }: { exp: number } = JSON.parse(
		window.atob(token.split('.')[1])
	);

	setCookie('token', token, expirationInSeconds);

	return user;
}

async function register(
	email: string,
	password: string,
	name: string
): Promise<IUser> {
	const { data: user }: { data: IUser } = await api.post(
		'/api/auth/register',
		{
			email,
			password,
			name,
		}
	);

	return user;
}

export { login, register };
