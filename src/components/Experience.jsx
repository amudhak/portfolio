import React from 'react';
import { EXPERIENCES } from '../constants'

const Experience = () => {
    return (
    <div className="border-b border-neutral-900 mt-20 mb-20">
        <h1 className="my-10 text-center text-4xl">Experience</h1>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm">{experience.year}</p>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">
                            {experience.role} - {" "}
                            <span className="text-sm text-teal">
                                {experience.company}
                            </span>
                        </h6>
                        <p className="text-sm mb-4">{experience.description}</p>
                        {experience.technologies.map((tech, index) => (
                            <span key={index} className="p-1 mr-2 mt-4 rounded text-white bg-teal">{tech}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

export default Experience;