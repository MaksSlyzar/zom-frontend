import Camera from "../gameObjects/Camera";
import GameObject from "../gameObjects/GameObject";
import CanvasView from "./CanvasManager";
import CanvasManager from "./CanvasManager";
import loaded from "../loaded";
import Player from "../gameObjects/Player";

class GameObjectsManager {
    camera: Camera;
    loaded: boolean = false;
    mainPlayer: Player;
    players: Array<Player> = [];

    constructor () {
        if (loaded.isLoaded() == true)
            this.start();

        loaded.onLoaded(() => {
            this.start();
        });
    }
    
    start () {
        this.camera = new Camera();
    }

    draw () {
        if (loaded.isLoaded() == false)
            return;

        if (this.mainPlayer)
            this.mainPlayer.draw();
        
        this.camera.update();
    }
}

export default new GameObjectsManager();