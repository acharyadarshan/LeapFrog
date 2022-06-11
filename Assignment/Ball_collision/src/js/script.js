//IIFE (Immediately Invoked Function Expression) implementeation.

(function(){


var wall = {
    width: 1500,
    height: 700
};

// To convert the integer value into pixel string

function pixel(value) {
    return `${value}px`;
}


var wallRef = document.getElementById("wall");

wallRef.style.width = pixel(wall.width);
wallRef.style.height = pixel(wall.height);
wallRef.style.border = '1px solid blue';

const ballSpeed = 5;
const ballCount = 500;
const minBallRadius = 2;
const maxBallRadius = 9;
class Ball {
    constructor(x, y, radius) {
        this.radius = radius;
        this.color = "#" + ((Math.random() * 0xffffff) << 0).toString(16).substring(0, 6);
        this.x = x;
        this.y = y;
        this.direction = Math.random() * Math.PI * 2;
        this.speed = Math.random() * ballSpeed + 1;
        this.vx = Math.cos(this.direction);
        this.vy = Math.sin(this.direction);
        this.element = document.createElement("div");
        this.element.style.left = pixel(this.x);
        this.element.style.top = pixel(this.y);
        this.element.style.height = this.element.style.width = pixel(this.radius * 2);
        this.element.style.borderRadius = "50%";
        this.element.style.position = "absolute";
        this.element.style.background = this.color;



        this.create_ball = function () {
            wallRef.appendChild(this.element);
        };

        this.update = function () {
            requestAnimationFrame(this.update.bind(this));
            
            this.x += this.vx * this.speed;
            this.y += this.vy * this.speed;

            this.wall_collision(wall.height, wall.width);
            this.ball_collision();

            this.element.style.top = pixel(this.y);
            this.element.style.left = pixel(this.x);
        };


        this.wall_collision = function (height, width) {
            if (this.x > width - this.radius * 2 || this.x < 0) {
                this.direction = Math.atan2(this.vy, this.vx * -1);
                this.vx = Math.cos(this.direction);
                this.vy = Math.sin(this.direction);

                // to make sure ball remains inside the container, not outside the boundary
                this.x = this.x > 0 ? width - this.radius * 2 : 1; 
            }
            if (this.y > height - this.radius * 2 || this.y < 0) {
                this.direction = Math.atan2(this.vy * -1, this.vx);
                this.vx = Math.cos(this.direction);
                this.vy = Math.sin(this.direction);
                this.y = this.y > 0 ? height - this.radius * 2 : 1;
            }

        }

        this.ball_collision = function () {
            balls.forEach((ball) => {
                if (ball !== this) {
                    let squareDistance = (this.x - ball.x) * (this.x - ball.x) + (this.y - ball.y) * (this.y - ball.y);
                    let sumRadius = (this.radius + ball.radius);
                    let squareRadius = sumRadius ** 2;

                    // Collision conditions:

                    if (squareDistance <= squareRadius) {

                        // Calculates the velocity of the collision and the final relative velocity and speed between balls.
                        var difference = {
                            x: (ball.x - this.x),
                            y: (ball.y - this.y)

                        };
                        var distance = Math.sqrt(squareDistance);

                        //unit distance vector
                        var unit_dist = {
                            x: difference.x / distance,
                            y: difference.y / distance
                        };

                        var relativeVelocity = {
                            x: this.vx - ball.vx,
                            y: this.vy - ball.vy
                        };

                        // Calculating relative speed by summing the vector of both x and y direction.

                        var relativeSpeed = relativeVelocity.x * unit_dist.x + relativeVelocity.y * unit_dist.y;
                        if (relativeSpeed > 0) {
                            this.vx -= (relativeSpeed * unit_dist.x);
                            this.vy -= (relativeSpeed * unit_dist.y);
                            ball.vx += (relativeSpeed * unit_dist.x);
                            ball.vy += (relativeSpeed * unit_dist.y);
                        }

                    }

                }
            });
        };

    };

}

const balls = new Array();

for (let i = 0; i < ballCount; i++) {
    var rand_x = Math.floor(Math.random() * wall.height);
    var rand_y = Math.floor(Math.random() * wall.width);
    var rand_radius = Math.floor(Math.random() * maxBallRadius) + minBallRadius;
    balls.push(new Ball(rand_x, rand_y, rand_radius));
};

function play() {
    for (let i = 0; i < balls.length; i++) {
        balls[i].update(wall.height, wall.width);
        balls[i].create_ball();
    }
};

play();

})();