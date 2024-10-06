import Mask from "../components/Mask";
import About from "./About";

const BodyMask = () => {
    return (
        <Mask>
            <div className="hero body-mask h-[100vh] w-[100vw]">
                <h1 className="mask text-6xl py-[50px] px-[100px]">
                    what changes the<br/>world starts with me.
                </h1>
            </div>
            <About />
        </Mask>
    );
}
 
export default BodyMask;