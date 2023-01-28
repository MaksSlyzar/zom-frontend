import Camera from "./gameObjects/Camera";
import AssetsManager from "./managers/AssetsManager";
import CanvasManager from "./managers/CanvasManager";
import GameObjectsManager from "./managers/GameObjectsManager";
import SIOManager from "./managers/SIOManager";

class MainEngine {
    camera: Camera;

    constructor () {
        AssetsManager.loadImages();
        this.update();
        SIOManager.connect({
            connect: () => {
                console.log("Connection!");
            }
        });
    }

    update () {
        CanvasManager.clear();
        GameObjectsManager.draw();
        setTimeout(() => this.update(), 25);
    }
}

export default MainEngine;