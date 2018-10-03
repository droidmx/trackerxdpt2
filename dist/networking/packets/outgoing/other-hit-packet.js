"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const packet_1 = require("../../packet");
class OtherHitPacket extends packet_1.Packet {
    constructor() {
        super(...arguments);
        this.type = packet_1.PacketType.OTHERHIT;
    }
    //#endregion
    read() {
        this.time = this.readInt32();
        this.bulletId = this.readByte();
        this.objectId = this.readInt32();
        this.targetId = this.readInt32();
    }
    write() {
        this.writeInt32(this.time);
        this.writeByte(this.bulletId);
        this.writeInt32(this.objectId);
        this.writeInt32(this.targetId);
    }
}
exports.OtherHitPacket = OtherHitPacket;
