import { useEffect, useState } from "react";

export function CustomCursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    window.addEventListener('mousemove', updateCursorPosition);
    
    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot fixed w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-50 transition-transform duration-100"
        style={{
          left: cursorPosition.x - 4,
          top: cursorPosition.y - 4,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)'
        }}
      />
      <div
        className="cursor-outline fixed w-10 h-10 border-2 border-cyan-400/50 rounded-full pointer-events-none z-40 transition-all duration-100"
        style={{
          left: cursorPosition.x - 20,
          top: cursorPosition.y - 20,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
          opacity: isHovering ? 1 : 0.5
        }}
      />
    </>
  );
}
