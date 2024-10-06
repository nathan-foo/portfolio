import About from "./About";

const Body = () => {
    return (
        <div className="site-body">
            <div className="hero body-page h-[100vh] w-[100vw]">
                <h1 className="text-6xl py-[50px] px-[100px]">
                    what starts here<br/>changes the world.
                </h1>
            </div>
            <About />
        </div>
    );
}
 
export default Body;