"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const packet_1 = require("../../packet");
class GoToQuestRoomPacket extends packet_1.Packet {
    constructor() {
        super(...arguments);
        this.type = packet_1.PacketType.QUESTROOM_MSG;
    }
    //#region packet-specific members
    //#endregion
    read() {
    }
    write() {
    }
}
exports.GoToQuestRoomPacket = GoToQuestRoomPacket;
