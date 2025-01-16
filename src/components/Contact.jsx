import React from "react";
import { CONTACT } from "../constants"

const Contact = () => {
    return (
        <div className="pb-4">
            <h1 className="my-5 text-center text-4xl">Contact Me!</h1>
            <div>
                <p className="text-center pb-2">{CONTACT.email}</p>
                <p className="text-center">{CONTACT.phoneNo}</p>
            </div>
        </div>
    );
}

export default Contact;