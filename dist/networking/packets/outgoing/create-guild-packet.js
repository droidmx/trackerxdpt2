"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const packet_1 = require("../../packet");
class CreateGuildPacket extends packet_1.Packet {
    constructor() {
        super(...arguments);
        this.type = packet_1.PacketType.CREATEGUILD;
    }
    //#endregion
    read() {
        this.name = this.readString();
    }
    write() {
        this.writeString(this.name);
    }
}
exports.CreateGuildPacket = CreateGuildPacket;
