import { useEffect, useRef } from "react";

export default function ThankYouPage() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = {
      x: undefined,
      y: undefined,
    };

    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    function Circle() {
      this.radius = getRandomInt(10);
      this.originalSize = this.radius;
      this.x =
        Math.random() * (window.innerWidth - this.radius * 2) + this.radius;
      this.y =
        Math.random() * (window.innerHeight - this.radius * 2) + this.radius;
      this.gradient = Math.random();
      this.color = `rgba(${getRandomInt(255)},${getRandomInt(
        255
      )},${getRandomInt(255)},${this.gradient})`;
      this.xVelocity = 5 * (Math.random() - Math.random());
      this.yVelocity = 5 * (Math.random() - Math.random());

      this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = this.color;
        c.stroke();
        c.fillStyle = this.color;
        c.fill();
        this.update();
      };

      this.update = function () {
        if (
          this.x + this.radius > window.innerWidth ||
          this.x - this.radius < 0
        ) {
          this.xVelocity = -this.xVelocity;
        }

        if (
          this.y + this.radius > window.innerHeight ||
          this.y - this.radius < 0
        ) {
          this.yVelocity = -this.yVelocity;
        }

        this.x += this.xVelocity;
        this.y += this.yVelocity;

        if (
          mouse.x - this.x < 50 &&
          mouse.x - this.x > -50 &&
          mouse.y - this.y < 10 &&
          mouse.y - this.y > -50
        ) {
          if (this.radius < 100) {
            this.radius += 2;
          }
        } else if (this.radius !== this.originalSize) {
          this.radius -= 2;
        }
      };
    }

    const circleArray = [];
    for (let i = 0; i < 30; i++) {
      circleArray.push(new Circle());
    }

    function animate() {
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);
      circleArray.forEach((circle) => circle.draw());
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white font-[Poppins]">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      />

      {/* Center Content */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="max-w-[700px] text-center">
          <div className="w-[220px] mx-auto mb-10 relative z-10 p-3">
            <img
              src="/img/logo/thankyou.webp"
              alt="Thank You"
              className="w-full"
            />
          </div>

          <div className="w-[275px] mx-auto mb-6 relative z-10">
            <img
              src="/img/logo/logo_black.png"
              alt="Logo"
              className="w-full"
            />
          </div>

          <div className="text-black text-lg sm:text-2xl leading-6 sm:leading-8 font-light">
            <span className="font-medium">
              You have successfully completed your Step 1 towards Application
              at Pillai University
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
