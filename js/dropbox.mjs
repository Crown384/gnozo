
import { Dropbox } from 'dropbox'; // Install via npm
import fetch from 'isomorphic-fetch'; // Fetch API is required for Dropbox SDK

// Initialize Dropbox with your Access Token
const dbx = new Dropbox({
    accessToken: 'sl.B-krhH1aqVxaU67cISvitpacS8XGjtUlKVz7hZfwqKt3dMQIqGz3wfcfOn3eT1EEDFHaFyILj_kOoxrB8FOiJZxrLXPzkwdk0gxY6y38b-oXFOH4Oh1l7U8YwgQXRgwVMJubR0rw6kTj',
    fetch: fetch
});

// Folder path in Dropbox where files are stored
const folderPath = '/GNOZO/ENGINEERING/100_LEVEL/FIRST_SEMESTER';

// Function to create shared links for all files in a folder
async function createSharedLinksForFolder() {
    try {
        // List files in the specified folder
        const filesList = await dbx.filesListFolder({ path: folderPath });
        const files = filesList.entries.filter(entry => entry['.tag'] === 'file'); // Filter for only files

        // Loop through each file and create shared links
        for (let file of files) {
            const linkResponse = await dbx.sharingCreateSharedLinkWithSettings({
                path: file.path_lower
            });

            console.log(`File: ${file.name}, Link: ${linkResponse.url}`);
        }

    } catch (error) {
        console.error('Error creating shared links: ', error);
    }
}

// Run the function
createSharedLinksForFolder();
