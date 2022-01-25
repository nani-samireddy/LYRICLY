const availableLanguages = ['Telugu', 'English', 'Hindi', 'Tamil'];

const languagesElement = document.getElementById('LanguageElement');
const languageNameSpan = document.getElementById('languageName');
const langugaesNamesContainerUL = document.getElementById('langugaesNamesContainer');
const languageModalCloseBtn = document.getElementById('LanguageModalCloseBtn');
const languageModal = document.getElementById('LanguageModal');


//event listener
languagesElement.addEventListener('click', () => {
    languageModal.classList.toggle('hidden');
});

languageModalCloseBtn.addEventListener('click', () => {
    languageModal.classList.toggle('hidden');
});

function loadLanguages() {
    availableLanguages.forEach(element => {
        let selected = element == languageNameSpan.textContent ? "bg-blue-200" : "";
        langugaesNamesContainerUL.innerHTML = langugaesNamesContainerUL.innerHTML + `  <a href="/public/Languages/${element}/${element}Index.html"><li class="cursor-pointer rounded-xl p-4 hover:bg-green-200 ${selected}"><span>${element}</span> </li></a>`;
    });
}

loadLanguages();