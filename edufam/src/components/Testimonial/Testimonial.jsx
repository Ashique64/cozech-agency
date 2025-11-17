"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./Testimonial.scss";

const testimonialItems = [
    {
        id: 1,
        logo: "/images/testimonial/edufam.svg",
        description:
            "I didn't know what features I actually needed. They explained everything patiently, didn't push unnecessary things. Felt like they understood small businesses",
        profileImage: "/images/testimonial/profile-1.svg",
        name: "John Doe",
        company: "Founder of GreenEarth Eco Store",
    },
    {
        id: 2,
        logo: "/images/testimonial/hotel-varahi.svg",
        description:
            "I was worried about the cost going up midway. Fixed price from day one, and they kept making changes till I was satisfied. Fair deal overall.",
        profileImage: "/images/testimonial/profile-1.svg",
        name: "Jane Smith",
        company: "CTO at Hotel Varahi Grand",
    },
    {
        id: 3,
        logo: "/images/testimonial/arc.svg",
        description:
            "They didn't just finish and leave. Kept working on it until it looked right. No pushback when I asked for changes. That made the difference",
        profileImage: "/images/testimonial/profile-1.svg",
        name: "Alice Johnson",
        company: "Creative Director, ARC",
    },
    {
        id: 4,
        logo: "/images/testimonial/reps-king.svg",
        description:
            "They gave me one price at the start. I paid after each part was done and approved. No confusion, no extra bills later. That's all I wanted.",
        profileImage: "/images/testimonial/profile-1.svg",
        name: "Michael Brown",
        company: "CEO of RepsKing",
    },
];

const Testimonial = () => {
    const itemContainerRef = useRef(null);
    const duplicatedItems = [...testimonialItems, ...testimonialItems, ...testimonialItems];

    useEffect(() => {
        const container = itemContainerRef.current;
        if (!container) return;

        const initAnimation = () => {
            const firstCard = container.querySelector('.card');
            if (!firstCard) return;

            const cardWidth = firstCard.offsetWidth;
            const gap = 16; 
            const singleSetWidth = (cardWidth + gap) * testimonialItems.length;

            gsap.set(container, { x: -singleSetWidth });

            const animation = gsap.to(container, {
                x: `-=${singleSetWidth}`,
                duration: 15,
                ease: "none",
                repeat: -1,
                modifiers: {
                    x: function(x) {
                        const value = parseFloat(x);
                        return ((value + singleSetWidth) % singleSetWidth) - singleSetWidth + "px";
                    }
                }
            });

            return animation;
        };

        const timeoutId = setTimeout(initAnimation, 100);

        return () => {
            clearTimeout(timeoutId);
            gsap.killTweensOf(container);
        };
    }, []);

    return (
        <section id="testimonial" className="testimonial w-full min-h-screen flex flex-col items-center justify-center">
            <div className="testimonial-container flex flex-col gap-20 justify-center items-center max-w-7xl w-full mx-auto">
                <div className="title-section flex flex-col md:gap-4 text-center">
                    <h2 className="title font-semibold" data-text="Results That Speak">
                        Results That <span>Speak</span>
                    </h2>
                    <p className="description">Here's what our clients have to say about working with us.</p>
                </div>

                <div className="carousal-section w-full">
                    <div className="fade-overlay fade-left"></div>
                    <div className="fade-overlay fade-right"></div>
                    <div ref={itemContainerRef} className="items-container flex items-center gap-4">
                        {duplicatedItems.map(({ id, logo, description, profileImage, name, company }, index) => (
                            <div key={`${id}-${index}`} className="card flex flex-col gap-4">
                                <div className="item-1">
                                    <div className="content-wrapper flex flex-col justify-between gap-6">
                                        <div className="logo ">
                                            <img
                                                className=""
                                                style={{ height: id === 3 ? "30px" : "60px" }}
                                                src={logo}
                                                alt="Client Logo"
                                            />
                                        </div>
                                        <p className="description">{description}</p>
                                    </div>
                                    <div className="arrow">
                                        <img src="/images/testimonial/down-arrow.svg" alt="Down-arrow" />
                                    </div>
                                    <div className="card-bg">
                                        <img src="/images/testimonial/card-bg.png" alt="Card-bg" />
                                    </div>
                                </div>
                                <div className="item-2 flex gap-2">
                                    <div className="profile">
                                        <img src={profileImage} alt="Client Profile Image" />
                                    </div>
                                    <div className="text-wrapper">
                                        <div className="name">{name}</div>
                                        <div className="company">{company}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;