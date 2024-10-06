"use client";

import useMousePosition from "../utils/useMousePosition";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Mask = ({ children }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const size = (isHovered) ? 350 : 40;

    useEffect(() => {
        const masks = document.querySelectorAll('.mask');

        const handleMouseEnter = () => {
            setIsHovered(true);
        };
        const handleMouseLeave = () => {
            setIsHovered(false);
        };

        masks.forEach(mask => {
            mask.addEventListener('mouseenter', handleMouseEnter);
            mask.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            masks.forEach(mask => {
                mask.removeEventListener('mouseenter', handleMouseEnter);
                mask.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <motion.div
            className="pointer-effect absolute top-0 left-0 w-full h-full z-0"
            animate={{
                WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
                WebkitMaskSize: `${size}px`,
            }}
            transition={{type: "tween", duration: 0.5, ease: [.16, .44, .3, .99]}}
        >
            {children}
        </motion.div>
    );
}

export default Mask;