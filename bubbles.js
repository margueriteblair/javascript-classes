
class Bubble {
    constructor() {
        this.x = 200;
        this.y = 150;
    }
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

}
function setup() {
    bubble = new Bubble();

}
setup();
let count = 0;
document.getElementById('bubbleDiv').addEventListener("click", function() {
    count++;
    let bubble2 = new Bubble;
    console.log(count);
})