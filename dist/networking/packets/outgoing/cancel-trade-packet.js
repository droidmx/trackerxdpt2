"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const packet_1 = require("../../packet");
class CancelTradePacket extends packet_1.Packet {
    constructor() {
        super(...arguments);
        this.type = packet_1.PacketType.CANCELTRADE;
    }
    //#endregion
    read() {
    }
    write() {
    }
}
exports.CancelTradePacket = CancelTradePacket;
