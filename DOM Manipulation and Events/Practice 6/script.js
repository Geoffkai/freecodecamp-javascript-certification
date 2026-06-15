const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

console.log(ctx);
ctx.fillStyle = "crimson"; // red rectangle
ctx.fillRect(10, 10, 150, 100);

ctx.fillStyle = "blue"; // blue rectangle
ctx.fillRect(200, 50, 150, 100);

ctx.strokeStyle = "green"; // outline rectangle
ctx.strokeRect(50, 130, 100, 50);

// ===== TEXT EXAMPLE =====
const textCanvas = document.getElementById("my-text-canvas");
const textCtx = textCanvas.getContext("2d");

textCtx.font = "30px Arial";
textCtx.fillStyle = "crimson";
textCtx.fillText("Hello Canvas!", 10, 50);

textCtx.font = "20px Verdana";
textCtx.strokeStyle = "blue";
textCtx.strokeText("Outline Text", 10, 80);

console.log(ctx);        // See the full object in browser dev tools
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(ctx)));

