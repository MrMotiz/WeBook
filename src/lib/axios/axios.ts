import axios from 'axios';

import { enableCors, getTokenFromCookies } from '../../utils';

const { VITE_API_URL: baseURL } = import.meta.env;

const api = axios.create({ baseURL });

api.interceptors.request.use(
	(config) => {
		enableCors();

		const token = getTokenFromCookies();

		config.headers = { Authorization: token };

		return config;
	},
	async (error) => {
		return await Promise.reject(error);
	}
);

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		if (error.response && [401, 403].includes(error.response.status)) {
			const w: Window = window;

			if (w.location.pathname !== '/login') {
				w.location = '/login';
			}
		}

		return await Promise.reject(error);
	}
);

export { api };
