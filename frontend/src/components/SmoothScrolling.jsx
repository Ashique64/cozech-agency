"use client";
import { ReactLenis } from "lenis/react";

function SmoothScrolling({ children }) {
    return (
        <ReactLenis root options={{ lerp: 0.05, duration: 2, smoothWheel: true }}>
            {children}
        </ReactLenis>
    );
}

export default SmoothScrolling;
