const express = require('express')
const PORT = process.env.PORT || 3001
const app = express(); 
const { animals } = require('./data/animals');

function filterByQuery(query, animalsArray) {
    let personalityTraitsArray = []
    let filteredResults = animalsArray;
    if(query.personalityTraits) {
        if(typeof query.personalityTraits === 'string') {
            personalityTraitsArray = [query.personalityTraits]; 
        } else {
            personalityTraitsArray = query.personalityTraits;
        }
        // loop through each trait in the personalityTraits arr
    personalityTraitsArray.forEach( trait => {
      // Check the trait against each animal in the filteredResults array.
      // Remember, it is initially a copy of the animalsArray,
      // but here we're updating it for each trait in the .forEach() loop.
      // For each trait being targeted by the filter, the filteredResults
      // array will then contain only the entries that contain the trait,
      // so at the end we'll have an array of animals that have every one 
      // of the traits when the .forEach() loop is finished.
        filteredResults = filteredResults.filter(
            animal=> animal.personalityTraits.indexOf(trait) !== -1
        );
    });
    }

    if(query.diet) {
        filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
    }
    if(query.species) {
        filteredResults = filteredResults.filter(animal => animal.species === query.species);
    }
    if(query.name) {
        filteredResults = filteredResults.filter(animal => animal.name === query.name);
    }
    return filteredResults; 
}

app.get('/api/animals', (req, res)=> {
    // get method requires two arguments, first is string that describes
    // the route the client will fetch, the second is callback function
    // that executes every time that route is accessed with GET request.
    let results = animals;
    if(req.query) {
        results = filterByQuery(req.query, results); 
    }
    res.json(results);
})
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
}); 



