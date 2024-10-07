const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Ball properties
const balls = [];
const colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];
let rainbowBall = null;
let square = null;
let showText = false;

// Helper function to create random velocity
function randomVelocity() {
    return {x: Math.random() * 2 - 1, y: Math.random() * 2 - 1};
}

// Ball class
class Ball {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = randomVelocity();
    }
    
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
    
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.velocity.x *= -1;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.velocity.y *= -1;
        }
    }
}

// Square class for dramatic collision!
class Square {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.velocity = {x: -3, y: -2};
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Ball properties
const balls = [];
const colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];
let rainbowBall = null;
let square = null;
let showText = false;

// Helper function to create random velocity
function randomVelocity() {
    return {x: Math.random() * 2 - 1, y: Math.random() * 2 - 1};
}

// Ball class
class Ball {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = randomVelocity();
    }
    
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
    
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.velocity.x *= -1;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.velocity.y *= -1;
        }
    }
}

// Square class for dramatic collision!
class Square {
    constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.velocity = {x: -3, y: -2};
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}

// Check for ball collision
function ballCollision(ball1, ball2) {
    const dx = ball1.x - ball2.x;
    const dy = ball1.y - ball2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < ball1.radius + ball2.radius;
}

// Create 6 initial balls
for (let i = 0; i < 6; i++) {
    const radius = 30;
    const x = Math.random() * (canvas.width - radius * 2) + radius;
    const y = Math.random() * (canvas.height - radius * 2) + radius;
    balls.push(new Ball(x, y, radius, colors[i]));
}

// Create the rainbow ball and the square after all collisions
function createRainbowBall() {
    rainbowBall = new Ball(canvas.width / 2, canvas.height / 2, 50, 'linear-gradient(to right, red, orange, yellow, green, blue, purple)');
}

function createSquare() {
    square = new Square(canvas.width - 100, canvas.height - 100, 50, '#fff');
}

// Main game loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (!rainbowBall) {
        // Update and draw all balls
        balls.forEach((ball, index) => {
            ball.update();
            ball.draw();

            // Check for collision between each ball
            for (let j = index + 1; j < balls.length; j++) {
                if (ballCollision(ball, balls[j])) {
                    balls.splice(j, 1); // Remove collided balls
                    balls.splice(index, 1); // Remove current ball
                    createRainbowBall(); // Form rainbow ball
                    createSquare(); // Create square for final dramatic collision
                }
            }
        });
    } else if (rainbowBall && square) {
        rainbowBall.update();
        rainbowBall.draw();
        square.update();
        square.draw();

        // Check for square and rainbow ball collision
        if (ballCollision(rainbowBall, square)) {
            // Rainbow ball and square disappear, show the text
            rainbowBall = null;
            square = null;
            showText = true;
        }
    }

    if (showText) {
        // Show dramatic message
        ctx.font = '48px Arial';
        ctx.fillStyle = 'red';
        ctx.fillText("F*** YOU ALL, MFS 🎀🔪", canvas.width / 4, canvas.height / 2);
    }

    requestAnimationFrame(animate);
}

animate();￼Enter    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}

// Check for ball collision
function ballCollision(ball1, ball2) {
    const dx = ball1.x - ball2.x;
    const dy = ball1.y - ball2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < ball1.radius + ball2.radius;
}

// Create 6 initial balls
for (let i = 0; i < 6; i++) {
    const radius = 30;
    const x = Math.random() * (canvas.width - radius * 2) + radius;
    const y = Math.random() * (canvas.height - radius * 2) + radius;
    balls.push(new Ball(x, y, radius, colors[i]));
}

// Create the rainbow ball and the square after all collisions
function createRainbowBall() {
inbowBall = new Ball(canvas.width / 2, canvas.height / 2, 50, 'linear-gradient(to right, red, orange, yellow, green, blue, purple)');
}

function createSquare() {
    square = new Square(canvas.width - 100, canvas.height - 100, 50, '#fff');
}

// Main game loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (!rainbowBall) {
        // Update and draw all balls
        balls.forEach((ball, index) => {
            ball.update();
            ball.draw();

            // Check for collision between each ball
            for (let j = index + 1; j < balls.length; j++) {
                if (ballCollision(ball, balls[j])) {
                    balls.splice(j, 1); // Remove collided balls
                    balls.splice(index, 1); // Remove current ball
                    createRainbowBall(); // Form rainbow ball
                    createSquare(); // Create square for final dramatic collision
                }
            }
