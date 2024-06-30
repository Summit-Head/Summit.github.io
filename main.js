/**
 * This is the main Node.js server script for your project
 * Check out the two endpoints this back-end API provides in fastify.get and fastify.post below
 */

const WebSocket = require('ws');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

const hertz = document.getElementById('hertz');
const hValue = document.getElementById('hertzvalue');
const amp = document.getElementById('amp');
const aValue = document.getElementById('ampvalue');

hertzSlider.addEventListener('input', e =>
{
  cyclesLabel.innerHTML = e.target.value;
  frequency = e.target.value;
  plotSine();
});


const ws = new WebSocket('wss://your-glitch-project-url.glitch.me');

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('New WebSocket connection');

  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    // Broadcast message to all connected clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.send('Welcome to the WebSocket server!');
});

const path = require("path");

ws.onmessage = (event) => {
      console.log('Message from server:', event.data);
    };

    rangeSlider.addEventListener('input', () => {
      const value = rangeSlider.value;
      sliderValue.textContent = value;
      ws.send(value);

      
      function plotSine()
{
  chartContext.strokeStyle = 'limegreen';
  chartContext.fillStyle = 'black';
  chartContext.fillRect(0,0,w,h);
  chartContext.lineWidth = 1;
  chartContext.beginPath();
  chartContext.moveTo(midW, 0);
  chartContext.lineTo(midW, h);
  chartContext.moveTo(0, midH);
  chartContext.lineTo(w, midH);
  chartContext.stroke();
  
  chartContext.fillStyle = 'limegreen';
  chartContext.font = '1em monospace';
  chartContext.fillText('0 seconds', 0, midH+15);
  chartContext.fillText('1', midW, midH+15);
  chartContext.fillText('2', w-10, midH+15);
  chartContext.fillText('1', midW-15, 15);
  chartContext.fillText('0', midW-15, midH);
  chartContext.fillText('-1', midW-25, h);

  const zeroOffsetX = midW;
  const zeroOffsetY = midH;
  const T = 1/frequency;
  chartContext.lineWidth = 2;
  chartContext.beginPath();
  chartContext.moveTo(0, getY(0, zeroOffsetX, zeroOffsetY));
  for(let x = 0; x < w; x += T)
  {
    let y = getY(x, zeroOffsetX, zeroOffsetY);
    chartContext.lineTo(x, y);
  }
  chartContext.stroke(); 
}

plotSine();
