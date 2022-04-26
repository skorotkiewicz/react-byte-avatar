import React, { useEffect, useRef } from "react";

export interface AvatarProps {
  width?: number;
  height?: number;
  name: string;
}

const Avatar = ({ width = 18, height = 14, name }: AvatarProps) => {
  const canvasRef: any = useRef(null);

  useEffect(() => {
    const p = 2;
    const c = canvasRef.current;
    const x = c.getContext("2d");

    for (let s = name, r = 1, i = 28 + s.length; i--; ) {
      // xorshift32
      (r ^= r << 13), (r ^= r >>> 17), (r ^= r << 5);
      const X = i & 3,
        Y = i >> 2;
      if (i >= 28) {
        // seed state
        r += s.charCodeAt(i - 28);
        x.fillStyle = "#" + ((r >> 8) & 0xffffff).toString(16).padStart(0, "6");
      } else {
        // draw pixel
        if (r >>> 29 > (X * X) / 3 + Y / 2)
          x.fillRect(p * 3 + p * X, p * Y, p, p),
            x.fillRect(p * 3 - p * X, p * Y, p, p);
      }
    }
  }, []);

  return <canvas ref={canvasRef} width={width} height={height}></canvas>;
};

export default Avatar;
