const Alexa = require('alexa-sdk');
const SC = require('string_constants');

const APP_ID = ''

const handlers = {
    'LaunchRequest': () => {
        this.emit(':tell', SC.WELCOME_MESSAGE)
    }
}

exports.handler = (event, context, callback) => {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID
    alexa.registerHandlers(handlers)
    alexa.execute();
}