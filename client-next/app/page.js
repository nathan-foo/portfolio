"use client";

import { useGSAP } from "@gsap/react";
import { gsap, Power4 } from "gsap";

import Navbar from "./sections/Navbar";
import Body from "./sections/Body";
import BodyMask from "./sections/BodyMask";

export default function Home() {
    useGSAP(() => {
        const antiMasks = document.querySelectorAll('.anti-mask');
        const pointer = document.querySelector('.pointer-effect');

        antiMasks.forEach((antiMask) => {
            const scaleDown = (event) => {
                const { clientX, clientY } = event;

                gsap.set(pointer, {
                    transformOrigin: `${clientX}px ${clientY}px`,
                });

                gsap.to(pointer, {
                    duration: 0.5,
                    scale: 0,
                    ease: Power4.out,
                });
            };

            const scaleUp = () => {
                gsap.to(pointer, {
                    duration: 0.5,
                    scale: 1,
                    ease: [.16, .44, .3, .99],
                });
            };

            antiMask.addEventListener('mousemove', scaleDown);
            antiMask.addEventListener('mouseleave', scaleUp);
        });
    });

    return (
        <div className="wrapper relative">
            {/* <div className="pre-loader">
                <div className="loader">
                    Loader
                </div>
            </div>
            <div className="loader-content">
                <div className="loader-text"><p>Loader Content</p></div>
            </div> */}
            <div className="site-content relative">
                <Navbar />
                <Body />
                <BodyMask />
            </div>
        </div>
    );
}
