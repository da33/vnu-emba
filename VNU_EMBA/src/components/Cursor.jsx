import React, { useState, useEffect } from 'react';

const Cursor = () => {
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            const target = e.target;
            const isClickable = target.closest('a, button, .interactive, [role="button"]');
            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                left: mousePos.x,
                top: mousePos.y,
                width: isHovering ? '60px' : '20px',
                height: isHovering ? '60px' : '20px',
                backgroundColor: isHovering ? 'rgba(197, 160, 89, 0.3)' : '#C5A059',
                border: '2px solid #C5A059',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 2147483647, // 瀏覽器支援的最大 z-index
                transform: 'translate(-50%, -50%)',
                transition: 'width 0.2s ease, height 0.2s ease, background-color 0.2s ease',
                boxShadow: '0 0 10px rgba(197, 160, 89, 0.5)'
            }}
        />
    );
};

export default Cursor;
