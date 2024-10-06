"use client";

import { useGSAP } from "@gsap/react";
import { gsap, Power4, Elastic } from "gsap";

const MagneticButton = ({ children, width, height }) => {
    useGSAP(() => {
        const magnetics = document.querySelectorAll('.magnetic');

        magnetics.forEach((magnetic) => {
            // When mouse gets in range of button
            const activateMagnet = (event) => {
                let boundBox = magnetic.getBoundingClientRect();
                let magnetStrength = 40;

                const newX = ((event.clientX - boundBox.left) / magnetic.offsetWidth - 0.5);
                const newY = ((event.clientY - boundBox.top) / magnetic.offsetHeight - 0.5);
    
                gsap.to(magnetic, {
                    duration: 1,
                    x: newX * magnetStrength,
                    y: newY * magnetStrength,
                    ease: Power4.out,
                });
            };
    
            // When mouse gets out of range of button
            const resetMagnet = () => {
                gsap.to(magnetic, {
                    duration: 1,
                    x: 0,
                    y: 0,
                    ease: Elastic.easeOut,
                });
            };
    
            // Event listeners
            magnetic.addEventListener('mousemove', activateMagnet);
            magnetic.addEventListener('mouseleave', resetMagnet);
        });
    });
    return (
        <button style={{ width, height }} className={`magnetic cursor-pointer anti-mask`}>
            <span>{children}</span>
        </button>
    );
}
 
export default MagneticButton;