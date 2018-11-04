'use strict';

const functions = require('firebase-functions');
const { WebhookClient } = require('dialogflow-fulfillment');
const { Card, Suggestion } = require('dialogflow-fulfillment');


exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
    const agent = new WebhookClient({ request, response });
    console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

    function welcome(agent) {
        agent.add(`Welcome to my agent!`);
    }

    function fallback(agent) {
        agent.add(`I didn't understand`);
        agent.add(`I'm sorry, can you try again?`);
    }

    function getRecipe(agent) {
        const recipe = agent.parameters;
        const ingredient = recipe.ingredient;
        const cookTime = recipe.cookTime;

    return (
        function (jsonBody) {
            var jsonData = JSON.parse(jsonBody);
            var recipe = jsonData.data[0].value;
            agent.add(`Here you go, ${ingredient}, ${cookTime}. What else do you want to know?`);
            return Promise.resolve(agent);
        }, function(error) {
            console.log(`error: #{error}`);
            }
        );
    }

    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('GetRecipe', getRecipe);

    agent.handleRequest(intentMap);
});
