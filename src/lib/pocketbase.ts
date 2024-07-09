import PocketBase from "pocketbase";
import { writable } from "svelte/store";

export const pb = new PocketBase(
	"http://pocketbase:8090",
	// PUBLIC_POCKETBASE_URL ?? "http://pocketbase:8090",
);
export const currentUser = writable(pb.authStore.model);
