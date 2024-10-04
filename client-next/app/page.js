import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Work from "./sections/Work";

export default function Home() {
    return (
        <div className="wrapper">
            {/* <div className="pre-loader">
                <div className="loader">
                    Loader
                </div>
            </div>
            <div className="loader-content">
                <div className="loader-text"><p>Loader Content</p></div>
            </div> */}
            <div className="site-content relative">
                <Navbar />
                <Hero />
                <About />
                <Work />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}
