import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const data = Object.fromEntries(await request.formData()) as {
			email: string;
			password: string;
			passwordConfirm: string;
		};

		try {
			await locals.pb.collection("users").create(data);
			await locals.pb
				.collection("users")
				.authWithPassword(data.email, data.password);
		} catch (e) {
			console.error(e);
			return {
				status: 500,
				body: {
					error: "An error occurred while creating the user",
				},
			};
		}

		throw redirect(302, "/");
	},
};
