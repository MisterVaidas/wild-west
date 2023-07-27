function survive(request, response) {
const scenarios = [
    'You made it to saloon. Congrats',
    'You died of dysentery.',
    'A snake gotcha!',
    'Your horse made it... you didnt',
    'You made it... your horse didnt',
    'You found gold',
    'You found gold',
    'You didnt even attempt to cross Oregon trail.',
];

const randomNum = Math.floor(Math.random() * scenarios.length);
const outcome = scenarios[randomNum];

response.json(outcome);

};

module.exports = survive;