const adjective = prompt('Choose an adjective.');
const verb = prompt('Choose a verb.');
const secondVerb = prompt('Choose another verb.');
const noun = prompt('Choose a plural noun.');
const exclamation = prompt('Choose an exclamation.');

const quote = `<p>The only people that interest me are the ${adjective} ones, the ones who are ${adjective} to live, ${adjective} to talk, ${adjective} to be saved, desirous of everything at the same time, the ones that never ${verb} or say a commonplace thing but ${secondVerb}, ${secondVerb}, ${secondVerb} like fabulous yellow roman candles exploding like ${noun} across the stars and in the middle you see the blue centerlight pop and everybody goes ‘${exclamation}!’</p>`;

document.querySelector('main').innerHTML = quote;
