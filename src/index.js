import * as p5 from 'p5';

const sketch = (p) => {
    p.setup = function() {
        p.createCanvas(400, 400);
    };

    p.draw = function() {
        if (p.mouseIsPressed) {
            p.fill(0);
        } else {
            p.fill(255);
        }
        p.ellipse(p.mouseX, p.mouseY, 80, 80);
    };

};

let myp5 = new p5(sketch);
