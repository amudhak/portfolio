import React from "react";
import aboutImg from "../assets/dog.jpeg"
import { ABOUT_TEXT } from "../constants"

const About = () => {
    return (
    <div className="mt-20 mb-20">
        <h1 className="text-center text-4xl">About Me</h1>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded shadow-2xl" src={aboutImg} alt="about" />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default About;