"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const packet_1 = require("../../packet");
class PlayerTextPacket extends packet_1.Packet {
    constructor() {
        super(...arguments);
        this.type = packet_1.PacketType.PLAYERTEXT;
    }
    //#endregion
    read() {
        this.text = this.readString();
    }
    write() {
        this.writeString(this.text);
    }
}
exports.PlayerTextPacket = PlayerTextPacket;
