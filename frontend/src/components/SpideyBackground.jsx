import { useState, useEffect } from "react";
import "./SpideyBackground.css";

export default function SpideyBackground() {
  const [effects, setEffects] = useState([]);

  const handleClick = (e) => {
    const burstId = crypto.randomUUID();

    // Create a burst of spiders + web animation
    const burstEffects = {
      id: burstId,
      x: e.clientX,
      y: e.clientY,
      timestamp: Date.now(),
    };

    setEffects((prev) => [...prev, burstEffects]);

    // remove after animation
    setTimeout(() => {
      setEffects((prev) => prev.filter((x) => x.id !== burstId));
    }, 3500);
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="spideyverse-bg">
      {Array.from({ length: 25 }).map((_, i) => (
        <span 
          key= {i}
          className="ambient-web"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        ></span>
      ))}

      {/* Click burst effects */}
      {effects.map((e) => (
        <div key={e.id} className="burst-layer">
          {/* Web Explosion */}
          <div
            className="web-burst"
            style={{ left: e.x, top: e.y }}
          ></div>

          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (360 / 8) * i;
            const offsetX = Math.cos(angle) * (150 + Math.random() * 150);
            const offsetY = Math.sin(angle) * (150 + Math.random() * 150);

            return (
              <img
                key={crypto.randomUUID()}
                src="https://cdnb.artstation.com/p/assets/images/images/002/445/803/original/airian-cong-spider-animation-2.gif?1461824305"
                className="spider-elite"
                style={{
                  left: e.x,
                  top: e.y,
                  "--dx": `${offsetX}px`,
                  "--dy": `${offsetY}px`,
                }}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
