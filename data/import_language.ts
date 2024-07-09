/* eslint-disable @typescript-eslint/no-explicit-any */
import csv from "csv-parser";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

async function readCSVFiles() {
	const directoryPath = __dirname;

	try {
		const files = await readdir(directoryPath);
		const csvFiles = files.filter((file) => path.extname(file) === ".csv");

		for (const file of csvFiles) {
			const filePath = path.join(directoryPath, file);
			const data = await readFile(filePath);
			const language = path.basename(file, ".csv");
			await parseCSV(data.toString(), file, language);
		}
	} catch (error) {
		console.error("Error reading directory:", error);
	}
}

async function parseCSV(data: string, fileName: string, language: string) {
	return new Promise<void>((resolve, reject) => {
		const results: any[] = [];
		const stream = csv();

		stream.on("data", (row: any) => results.push(row));
		stream.on("end", async () => {
			console.log(`Parsed data from ${fileName}:`, results);
			for (const row of results) {
				await uploadToPocketBase(row, language);
			}
			resolve();
		});
		stream.on("error", reject);

		stream.write(data);
		stream.end();
	});
}

async function uploadToPocketBase(row: any, language: string) {
	try {
		const data = {
			language: language,
			native: row.Native,
			english: row.English,
			frequency: Number.parseInt(row.Frequency, 10), // Ensure the frequency is an integer
		};

		const record = await pb.collection("words").create(data);
		console.log(`Record created for language ${language}:`, record);
	} catch (error) {
		console.error(
			`Error uploading to PocketBase for language ${language}:`,
			error,
		);
	}
}

readCSVFiles();
