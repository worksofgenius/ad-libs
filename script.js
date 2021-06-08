const adjective = prompt('Add an adjective.');
const verb = prompt('Add a verb.');
const secondVerb = prompt('Add another verb.');
const noun = prompt('Add a noun.');
const exclamation = prompt('Add an exclamation.');

const quote = `<p>The only people that interest me are the ${adjective} ones, the ones who are ${adjective} to live, ${adjective} to talk, ${adjective} to be saved, desirous of everything at the same time, the ones that never ${verb} or say a commonplace thing but ${secondVerb}, ${secondVerb}, ${secondVerb} like fabulous yellow roman candles exploding like ${noun} across the stars and in the middle you see the blue centerlight pop and everybody goes ‘${exclamation}!’</p>`;

document.querySelector('main').innerHTML = quote;