import CanvasComponent from "./CanvasComponent";

class DisplayPing extends CanvasComponent {
    pingLabel: HTMLDivElement;

    constructor () {
        super();
        
        this.windowDiv = document.getElementById("gameDiv") as HTMLDivElement;
        this.pingLabel = document.createElement("div") as HTMLDivElement;

        this.pingLabel.style.position = "fixed";
        this.pingLabel.style.color = "lime";
        
        this.windowDiv.appendChild(this.pingLabel);
    }

    setPing (ping: number) {
        this.pingLabel.innerHTML = String(ping);
    }
}

export default DisplayPing;