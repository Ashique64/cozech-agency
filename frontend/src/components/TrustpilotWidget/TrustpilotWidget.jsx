"use client";

import { useEffect, useRef } from "react";

const TrustpilotWidget = () => {
    const widgetRef = useRef(null);

    useEffect(() => {
        if (window.Trustpilot && widgetRef.current) {
            window.Trustpilot.loadFromElement(widgetRef.current, true);
        }
    }, []);

    return (
        <div
            ref={widgetRef}
            className="trustpilot-widget"
            data-locale="en-US"
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="6931832417b37a58bd867f30"
            data-style-height="52px"
            data-style-width="100%"
            data-token="fd6e8402-dec7-4d1a-b7a4-8bd8a4b60042"
        >
            <a href="https://www.trustpilot.com/review/cozech.com" target="_blank" rel="noopener">
                Trustpilot
            </a>
        </div>
    );
};

export default TrustpilotWidget;
