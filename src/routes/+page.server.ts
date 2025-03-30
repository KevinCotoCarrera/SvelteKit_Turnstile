import { SECRET_TURNSTILE_KEY } from '$env/static/private';

async function validateToken(token: string): Promise<boolean> {
	const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams({
			secret: SECRET_TURNSTILE_KEY,
			response: token
		})
	});
	const data = await response.json();
	return data.success;
}

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const token = formData.get('cf-turnstile-response')?.toString() || '';

		if (!token || !(await validateToken(token))) {
			return { success: false, message: 'Invalid CAPTCHA' };
		}

		return { success: true, message: 'Form submitted successfully' };
	}
};
