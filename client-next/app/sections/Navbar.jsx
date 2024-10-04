"use client";

import { useGSAP } from "@gsap/react";
import { gsap, Power4, Elastic } from "gsap";

const Navbar = () => {
    useGSAP(() => {
        const magnetics = document.querySelectorAll('.magnetic');

        magnetics.forEach((magnetic) => {
            // When mouse gets in range of button
            const activateMagnet = (event) => {
                let boundBox = magnetic.getBoundingClientRect();
                let magnetStrength = 40;

                const newX = ((event.clientX - boundBox.left)/magnetic.offsetWidth - 0.5);
                const newY = ((event.clientY - boundBox.top)/magnetic.offsetHeight - 0.5);
    
                gsap.to(magnetic, {
                    duration: 1,
                    x: newX * magnetStrength,
                    y: newY * magnetStrength,
                    ease: Power4.out,
                });
            };
    
            // When mouse gets out of range of button
            const resetMagnet = (event) => {
                gsap.to(magnetic, {
                    duration: 1,
                    x: 0,
                    y: 0,
                    ease: Elastic.easeOut,
                })
            };
    
            // Event listeners
            magnetic.addEventListener('mousemove', activateMagnet);
            magnetic.addEventListener('mouseleave', resetMagnet);
        });
    });

    return (
        <nav className="w-[100%] py-0 px-8 flex">
            <div className="flex flex-1 justify-start">
                <button className="magnetic w-[6rem] h-[4.5rem] cursor-pointer">
                    <span>nathan foo</span>
                </button>
            </div>
            <div className="links flex flex-1 justify-end gap-[1em]">
                <button className="magnetic w-[4.5rem] h-[4.5rem] cursor-pointer">
                    <span>about</span>
                </button>
                <button className="magnetic w-[4.5rem] h-[4.5rem] cursor-pointer">
                    <span>work</span>
                </button>
                <button className="magnetic w-[4.5rem] h-[4.5rem] cursor-pointer">
                    <span>contact</span>
                </button>
            </div>
        </nav>
    );
}
 
export default Navbar;