import { writable } from "svelte/store";

// place files you want to import through the `$lib` alias in this folder.
export const currentCardIndex = writable(0);
