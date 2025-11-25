import React from "react";
import "./WhatYouGet.scss";

const WhatYouGet = () => {
    const cardData = [
        {
            title: "Modern Website",
            description: "Landing page or 3–4 pages",
            logo: "/images/jump-to-start/WhatYouGet/logo-1.svg",
            cardStyleItem: "/images/jump-to-start/WhatYouGet/card-style-item.svg",
            cardBg: "/images/jump-to-start/WhatYouGet/card-bg.png",
        },
        {
            title: "Mobile-first & Fast",
            description: "Clean, responsive, optimized",
            logo: "/images/jump-to-start/WhatYouGet/logo-2.svg",
            cardStyleItem: "/images/jump-to-start/WhatYouGet/card-style-item.svg",
            cardBg: "/images/jump-to-start/WhatYouGet/card-bg.png",
        },
        {
            title: "Basic SEO",
            description: "Visibility-ready foundation",
            logo: "/images/jump-to-start/WhatYouGet/logo-3.svg",
            cardStyleItem: "/images/jump-to-start/WhatYouGet/card-style-item.svg",
            cardBg: "/images/jump-to-start/WhatYouGet/card-bg.png",
        },
        {
            title: "1-Month Support",
            description: "Stability after launch",
            logo: "/images/jump-to-start/WhatYouGet/logo-4.svg",
            cardStyleItem: "/images/jump-to-start/WhatYouGet/card-style-item.svg",
            cardBg: "/images/jump-to-start/WhatYouGet/card-bg.png",
        },
    ];
    return (
        <section id="what-you-get" className="what-you-get w-full flex items-center justify-center">
            <div className="container flex flex-col gap-5 md:gap-10 justify-center items-center max-w-7xl w-full mx-auto">
                <div className="title-section text-center">
                    <h2 data-text="What You Get">
                        What You <span>Get</span>
                    </h2>
                    <p className="description">
                        A milestone-driven approach that keeps your projects transparent, organized, and stress-free from
                        start to finish.
                    </p>
                </div>

                <div className="card-section">
                    <div className="card-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {cardData.map((item, index) => (
                            <div key={index} className="card flex flex-col gap-10">
                                <div className="card-bg">
                                    <img src={item.cardBg} alt="Card Background" />
                                </div>
                                <div className="item-1">
                                    <div className="logo">
                                        <div className="card-style-item">
                                            <img src={item.cardStyleItem} alt="Card Style Item" />
                                        </div>
                                        <img src={item.logo} alt="Logo" />
                                    </div>
                                </div>
                                <div className="item-2 flex flex-col gap-4 overflow-hidden">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatYouGet;
