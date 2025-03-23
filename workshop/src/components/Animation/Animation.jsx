import React, { useEffect, useRef } from 'react';
import './Animation.css'; // You'll need to create this CSS file

function Animation({ completedHabits }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Canvas dimensions
    canvas.width = 300;
    canvas.height = 300;

    // Puppet drawing function (simplified)
    const drawPuppet = (wiresCut) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas

      // Draw the puppet body (example)
      ctx.fillStyle = 'tan';
      ctx.fillRect(100, 100, 100, 150);

      // Draw the wires (example - adjust positions and number)
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;      // Example Wires (adjust based on number of habits)
      if (wiresCut < 1) { // Wire 1
        ctx.beginPath();
        ctx.moveTo(150, 50);
        ctx.lineTo(120, 100);        ctx.stroke();
      }
      if (wiresCut < 2) { // Wire 2
        ctx.beginPath();
        ctx.moveTo(150, 50);
        ctx.lineTo(180, 100);
        ctx.stroke();
      }

      if (wiresCut < 3) { // Wire 3
        ctx.beginPath();
        ctx.moveTo(150, 50);
        ctx.lineTo(150, 100);
        ctx.stroke();
      }

      // ... more wires as needed

      // "Free" state (after all wires are cut)
      if (wiresCut >= 3) { // Adjust number based on total wires
        ctx.font = '20px Arial';
        ctx.fillStyle = 'green';
        ctx.fillText('Free!', 120, 80);
      }
    };

    // Initial drawing (no wires cut)
    drawPuppet(completedHabits.length);

  }, [completedHabits]); // Redraw when completedHabits changes

  return (
    <canvas ref={canvasRef} className="animation-canvas" />
  );
}

export default Animation;