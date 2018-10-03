"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("./../core");
const Discord = require("discord.js");
const PORTAL_REGEX = /^{"key":"server.dungeon_opened_by","tokens":{"dungeon":"(\S.*)", "name":"(\w+)"}}$/;
let KeyNotifier = class KeyNotifier {
    constructor() {
        this.ready = false;
        this.bot = new Discord.Client();
        this.bot.login('NDg1MDcxMDIwMzk1NDYyNjU2.DoSs7Q.PoCvuOBOhaGZGrVWLVqdXfZqgZk');
        this.bot.once('ready', () => this.ready = true);
    }
    onText(client, textPacket) {
        const match = PORTAL_REGEX.exec(textPacket.text);
        if (match) {
            // the text contains the JSON payload.
            const portalType = match[1];
            const opener = match[2];
            this.callDungeon(portalType, opener, client.server);
        }
    }
    callDungeon(name, opener, server) {
        if (!this.ready) {
            return;
        }
        this.bot.channels.get('492016191246958593')
            .send(`__**${name}**__ \`opened by\` __${opener}__ \`in\` __**${server.name}**__`)
            .then((msg) => {
            // msg was successfully sent to discord.
            core_1.Log('Key Notifier', `${opener}`);
            setTimeout(() => {
                msg.edit(`${msg.content} | ***(closing)***`);
            }, 25000); // called after 25 seconds
            setTimeout(() => {
                msg.delete();
            }, 30000); // called after 30 seconds
        })
            .catch((error) => {
            core_1.Log('Key Notifier', 'An error occurred while sending the message to discord.', core_1.LogLevel.Warning);
            core_1.Log('Discord Error', error.message, core_1.LogLevel.Error);
        });
    }
};
__decorate([
    core_1.HookPacket(core_1.PacketType.TEXT)
], KeyNotifier.prototype, "onText", null);
KeyNotifier = __decorate([
    core_1.NrPlugin({
        name: 'Key Notifier',
        author: 'Lolization',
        enabled: true
    })
], KeyNotifier);
