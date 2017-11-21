const discord = require('discord.js');
const bot = new discord.Client();

bot.on('message', (message) => {

    if(message.content == 'ik zeg piemel jij zegt') {
        message.reply('likken');
    }

    if(message.content == 'ping') {
        message.reply('pong');
    }

    if(message.content == 'ik zeg ping jij zegt') {
        message.reply('pong');
    }

    if(message.content == '!!play') {
        message.reply('with my dick');
    }

    if(message.content == 'kanker') {
        message.reply('Jij krijgt ban :0');
    }

    if(message.content == 'kut') {
        message.reply('ik ga het zeggen');
    }

    if(message.content == '@Mickje') {
        message.reply('Wat moet je');
    }

    if(message.content == 'anus') {
        message.reply('poepje');
    }

    if(message.content == 'mick') {
        message.reply('is beast');
    }

});

bot.login(process.env.MzgyMTg4NjAyMzc5MjA2NjU2.DPTJYA.4QgOvDD8OvOxLNtlWd2K_0v1GQw);
