import { LANGUAGES_DATA_URL } from '../utils/constants.js';
async function getLanguages() {
    console.log('Script loaded');
    try {
        const response = await fetch(LANGUAGES_DATA_URL)
        if (!response) {
            throw new Error(`Status code ${response.status}`)
        }
        const data = response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function addDropdownItems() {
    const languages = await getLanguages()
    const dropdown = document.getElementById('languages')
    languages.forEach(language => {
        const option = document.createElement('option')
        option.textContent = language.title
        dropdown.appendChild(option)
    })
}

addDropdownItems()
