const Aki = `Andrew`;
const Ember = `Ember.js`;

function introduction(name) {
    console.log(`${name}`);
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}`);
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}`)
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

introduction(Aki);
introductionWithLanguage(Aki, Ember);
introductionWithLanguageOptional(Aki);