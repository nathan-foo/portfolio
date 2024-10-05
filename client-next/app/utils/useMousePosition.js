import { useState, useEffect } from "react";

export default function useMousePosition() {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    const updateMousePosition = (event) => {
        setMousePosition({x: event.clientX + window.scrollX, y: event.clientY + window.scrollY});
    };

    useEffect(() => {
        window.addEventListener('mousemove', updateMousePosition);
        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        }
    }, []);

    return mousePosition;
}