let currentColor = "#000000";
let currentWeight = 5;
let canvasDiv;
let canvas;
let promptDiv;
let prompts = [
  "landscape",
  "person",
  "animal",
  "vehicle",
  "building",
  "food",
  "plant",
  "machine",
];
let currentPrompt;

function setup() {
  canvasDiv = createDiv("");
  canvas = createCanvas(800, 600);
  canvas.parent(canvasDiv);

  promptDiv = createDiv("");
  promptDiv.style("font-family", "Garamond");
  promptDiv.style("font-size", "24px");
  promptDiv.style("margin-bottom", "20px");
  promptDiv.parent(canvasDiv);

  generatePrompt();

  let colorPicker = createInput();
  colorPicker.attribute("type", "color");
  colorPicker.parent(canvasDiv);
  colorPicker.changed(() => {
    currentColor = colorPicker.value();
  });

  let weightSlider = createSlider(1, 50, 5);
  weightSlider.parent(canvasDiv);
  weightSlider.input(() => {
    currentWeight = weightSlider.value();
  });

  let clearButton = createButton("Clear");
  clearButton.parent(canvasDiv);
  clearButton.mousePressed(clearCanvas);

  let newPromptButton = createButton("New Prompt");
  newPromptButton.parent(canvasDiv);
  newPromptButton.mousePressed(generatePrompt);
}

function draw() {
  stroke(currentColor);
  strokeWeight(currentWeight);
  if (mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

function clearCanvas() {
  // Clear the canvas by drawing a white background
  background(255);
}

function generatePrompt() {
  // Choose a random drawing prompt from the prompts array
  currentPrompt =
    "Draw a " + prompts[Math.floor(Math.random() * prompts.length)];

  // Set the text of the promptDiv to the current drawing prompt
  promptDiv.html(currentPrompt);
  promptDiv.style("font-family", "Garamond");
}

