"use strict";

var config = {
    channels: ['#jsxtest'],
    server: 'irc.mozilla.org',
    botName: 'botzilla'
};


var irc = require('irc');
var bot = new irc.Client(config.server, config.botName, {
    channels: config.channels
});

bot.addListener('join', function (channel, who) {
    bot.say(channel, who + ', welcome!');
});

bot.addListener('message', function (from, to, text, message) {
    bot.say(from, 'Hello');
    console.log(to)
    console.log(message)
});

/*
bot.addListener('message', function (from, to, text, message) {
    bot.say(config.channels[0], 'public message');
});*/
