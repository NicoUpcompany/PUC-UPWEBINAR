import { basePath, apiVersion } from "./config";

export function getTestApi(token) {
	const url = `${basePath}/${apiVersion}/test`;

	const params = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: token,
		},
	};

	return fetch(url, params)
		.then((resp) => {
			return resp.json();
		})
		.then((result) => {
			return result;
		})
		.catch((err) => {
			return err.message;
		});
}

export function postTestApi(token, data) {
	const url = `${basePath}/${apiVersion}/test`;

	const params = {
		method: "POST",
		body: JSON.stringify(data),
		headers: {
			"Content-Type": "application/json",
			Authorization: token,
		},
	};

	return fetch(url, params)
		.then((resp) => {
			return resp.json();
		})
		.then((result) => {
			return result;
		})
		.catch((err) => {
			return err.message;
		});
}
