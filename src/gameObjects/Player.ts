import CanvasManager from "../managers/CanvasManager";
import GameObject from "./GameObject";

class Player extends GameObject {
    constructor () {
        super();
    }

    setPos (posX: number, posY: number) {
        this.posX = posX;
        this.posY = posY;
    }

    draw () {
        CanvasManager.ctx.fillStyle = "white";
        // console.log(this.posX, this.posY)
        CanvasManager.ctx.fillRect(this.posX, this.posY, 50, 50);
    }
};

export default Player;
