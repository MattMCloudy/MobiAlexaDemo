const Alexa = require('alexa-sdk');
const SC = require('string_constants');

const APP_ID = 'amzn1.ask.skill.e3fb2dfa-12eb-4ba0-ab3b-f4561956a28a'

const handlers = {
    'LaunchRequest': function () {
        this.emit(':tell', SC.WELCOME_MESSAGE);
    }
}

exports.handler = (event, context, callback) => {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID
    alexa.registerHandlers(handlers)
    alexa.execute();
}