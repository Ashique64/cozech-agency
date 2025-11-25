import React from "react";
import Hero from "@/components/JumpStart/Hero/Hero";
import Navbar2 from "@/components/Navbar2/Navbar2";
import Description from "@/components/JumpStart/Description/Description";

export const metadata = {
    title: "Jump Start - COZECH",
    description: "Learn about COZECH's jump start program.",
};

const JumpStartPage = () => {
    return (
        <>
            <Navbar2 />
            <Hero />
            <Description />
        </>
    );
};

export default JumpStartPage;
