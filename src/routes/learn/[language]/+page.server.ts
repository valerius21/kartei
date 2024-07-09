import type { Word } from "$lib/response-types";
import { error } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params, locals }) {
	const language = params.language;

	const words = await locals.pb.collection("words").getFullList<Word>({
		filter: `language="${language}"`,
	});

	if (!words.length) {
		error(404, "Not found");
	}

	// shuffle the words
	words.sort(() => Math.random() - 0.5);

	return { words };
}
