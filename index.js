"use strict";

var config = require('./config').config;
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

console.log(config.botName + ' started on ' + new Date());