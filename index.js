#!/usr/bin/env node
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const prefix = 'madpeach'
var config = JSON.parse(fs.readFileSync("./realmtrack-config.json"));

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity('for Raid Leaders', {
            type: 'WATCHING'
        }).then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
        .catch(console.error);
});

client.on('message', async msg => { // START MESSAGE HANDLER
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
    let args = msg.content.split(" ");
    var verifiedmembers = ['295642860164743169', '465236540826583040']
    if (!verifiedmembers.includes(msg.author.id)) return;
    if (msg.content.toLowerCase().startsWith(prefix + ' check')) {
        var checking = args[2]

        if (!checking) return msg.channel.send('Provide a name to check!')
        var checkingperson = config.list.find((x) => x.name.toLowerCase().includes(checking.toLowerCase()));
        if (checkingperson != null) {
            msg.channel.send(`${checkingperson.name} was found on the list in the category ${checkingperson.type}! Currently being tracked!`)
        }else{
            msg.channel.send(`${checking} is not being tracked.`)
        }

    }
    if (msg.content.toLowerCase().startsWith(prefix + ' permatrack')) {
        var permaperson = args[2]
        var permatype = args[3]

        if (!permaperson && !permatype) return msg.channel.send('Provide person name and type!')
        config.list.push({ name: permaperson, type: permatype });
        fs.writeFile('./realmtrack-config.json', JSON.stringify(config), console.error);
        msg.channel.send(`${permaperson} has been tracked with category ${permatype}!`)
    }
    if (msg.content.toLowerCase().startsWith(prefix + ' temptrack')) {

        var temptrackperson = args[2]
        

        if (!temptrackperson && !temptracktime) return msg.channel.send(`Please give a name to temporarily tracked and a time in milliseconds!`);
        config.list.push({ name: temptrackperson, type: 'Temporarily tracked' });
        fs.writeFile('./realmtrack-config.json', JSON.stringify(config), console.error);
                            setTimeout(() => {
                                config.list.splice(config.list.indexOf(config.list
                                    .find((name) => name == temptrackperson)), 1);
                                fs.writeFile('./realmtrack-config.json', JSON.stringify(config), console.error);
                                    console.log(`${name} has been removed from temp track!`)
                            }, 1200000);
        msg.channel.send(`${temptrackperson} has been temporarily tracked!`)
    }
    
})
fs.writeFile('./realmtrack-config.json', JSON.stringify(config), console.error);
client.login('NDg1MDcxMDIwMzk1NDYyNjU2.DoSs7Q.PoCvuOBOhaGZGrVWLVqdXfZqgZk')
const { CLI } = require('./dist');
new CLI();

