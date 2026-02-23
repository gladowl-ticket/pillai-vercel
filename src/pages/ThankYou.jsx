import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logo_black.png";
import thankyou from "../assets/logo/thankyou.webp";
import "./ThankYou.css";

const ThankYou = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouse = { x: undefined, y: undefined };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    function Circle() {
      this.radius = getRandomInt(10);
      this.originalSize = this.radius;
      this.x = Math.random() * innerWidth;
      this.y = Math.random() * innerHeight;
      this.color = `rgba(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)},0.5)`;
      this.dx = (Math.random() - 0.5) * 4;
      this.dy = (Math.random() - 0.5) * 4;

      this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fillStyle = this.color;
        c.fill();
      };

      this.update = () => {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0)
          this.dx = -this.dx;
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0)
          this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;

        if (
          mouse.x - this.x < 50 &&
          mouse.x - this.x > -50 &&
          mouse.y - this.y < 50 &&
          mouse.y - this.y > -50
        ) {
          if (this.radius < 80) this.radius += 2;
        } else if (this.radius > this.originalSize) {
          this.radius -= 2;
        }

        this.draw();
      };
    }

    const circles = [];
    for (let i = 0; i < 30; i++) circles.push(new Circle());

    function animate() {
      c.clearRect(0, 0, innerWidth, innerHeight);
      circles.forEach((circle) => circle.update());
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="thankyou-page">
      <canvas ref={canvasRef} className="canvas-bg"></canvas>

      <div className="tankyou">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="cong">
          <img src={thankyou} alt="thank you" />
        </div>

        <div className="text">
          <span>
            You have successfully completed your Step 1 towards Application at
            Pillai University
          </span>
        </div>

        <div className="btn hidden">
          <Link to="/admissions-2026/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;