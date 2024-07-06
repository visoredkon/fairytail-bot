import { readdirSync } from "node:fs";

/**
 * Returns an array of file paths for all TypeScript files in the specified directory and its subdirectories.
 * @param dir - The directory to search for TypeScript files.
 * @returns A promise that resolves with an array of file paths for all TypeScript files found in the specified directory and its subdirectories.
 * @throws An error if no TypeScript files are found in the specified directory and its subdirectories.
 */
export const getFiles = async (dir: string): Promise<string[]> => {
    const conPath = `${process.cwd()}/src/${dir}`;

    return await new Promise((resolve, reject) => {
        const files: string[] = [];

        const findFiles = (path: string): void => {
            for (const contents of readdirSync(path, { withFileTypes: true })) {
                if (contents.isFile() && contents.name.endsWith(".ts")) {
                    files.push(import.meta.resolveSync(`${path}/${contents.name}`));
                }

                if (contents.isDirectory()) {
                    findFiles(`${path}/${contents.name}`);
                }
            }
        };

        findFiles(conPath);

        if (files.length > 0) {
            resolve(files);
        } else {
            reject(new Error(`No files found in ${conPath}`));
        }
    });
};
