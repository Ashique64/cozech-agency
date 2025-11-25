import React from "react";
import "./Description.scss";

const Description = () => {
    return (
        <section id="description" className="description w-full flex items-center justify-center">
            <div className="container flex flex-col gap-5 md:gap-10 justify-center items-center max-w-7xl w-full mx-auto">
                <div className="content">
                    <h6>
                        Cozech Jumpstart is a fast-track website initiative where we build a high-quality,
                        conversion-focused site for selected small businesses — free of cost. We handle the strategy,
                        design, and development. You focus on running your business.
                    </h6>
                </div>
            </div>
        </section>
    );
};

export default Description;
