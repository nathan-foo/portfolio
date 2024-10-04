"use client";

import { useEffect } from 'react';
import Lenis from 'lenis';

const SmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
        lerp: 0.1,
        smooth: true,
        });

        function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    });
};

export default SmoothScroll;