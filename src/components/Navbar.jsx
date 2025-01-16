import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const Navbar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            {/*The rel="noopener noreferrer" is to prevent newely opened tabs from being able to modify the original tab maliciously*/}
            <a href="https://www.linkedin.com/in/amudha-krishnan/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://github.com/amudhak" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://medium.com/@amudhamk" target="_blank" rel="noopener noreferrer">
                <FaMedium />
            </a>
        </div>
    </nav>
};

export default Navbar;