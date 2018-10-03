"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const packet_1 = require("../../packet");
class PasswordPromptPacket extends packet_1.Packet {
    constructor() {
        super(...arguments);
        this.type = packet_1.PacketType.PASSWORDPROMPT;
    }
    //#endregion
    read() {
        this.cleanPasswordStatus = this.readInt32();
    }
    write() {
        this.writeInt32(this.cleanPasswordStatus);
    }
}
exports.PasswordPromptPacket = PasswordPromptPacket;
