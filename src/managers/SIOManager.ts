import { io, Socket } from 'socket.io-client'
import Player from '../gameObjects/Player';
import CanvasManager from './CanvasManager';
import GameObjectsManager from './GameObjectsManager';

interface events {
    connect?: () => void
}

class SIOManager {
    socket: Socket;
    events: events;
    ping: number;
    pingStartTime: number = -1;

    constructor () {
        console.log("SIO loading.")

        this.socket = io("https://zom-backend-j1b4.vercel.app/");

        this.socket.on("connect", () => {
            this.register("Maks");
            console.log("Connection!");
        });

        this.socket.emit("createPlayerEvent");

        this.socket.on("updateEvent", (data) => {
            this.ping = Date.now() - this.pingStartTime;
            this.pingStartTime = Date.now();

            CanvasManager.DisplayPing.setPing(this.ping);
            // GameObjectsManager.mainPlayer.setPos(data.posX, data.posY);
        });
    }

    connect (callbackEvents: events) {
        console.log("Connect...");
        this.events = callbackEvents;
    }

    register (username: string) {
        this.socket.emit("register", {
            username: username
        });

        this.socket.on("playerCreated", (data) => {
            console.log(data);

            GameObjectsManager.mainPlayer = new Player();
            GameObjectsManager.mainPlayer.setPos(data.posX, data.posY);
        })
    }
}

export default new SIOManager();