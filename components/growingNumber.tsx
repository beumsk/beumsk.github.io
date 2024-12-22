import { useEffect, useState } from 'react';

export default function GrowingNumber({ number }: { number: number }) {
  const [animatedNumber, setAnimatedNumber] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // Animation duration in milliseconds
    const increment = number / (duration / 16); // Assuming 60fps

    const animate = () => {
      start += increment;
      if (start < number) {
        setAnimatedNumber(Math.ceil(start));
        requestAnimationFrame(animate);
      } else {
        setAnimatedNumber(number);
      }
    };

    animate();
  }, [number]);

  return <span className="growing-number">{animatedNumber}</span>;
}
