"use client";

import MagneticButton from "../components/MagneticButton";

const Navbar = () => {
    return (
        <nav className="w-[100%] py-0 px-8 flex absolute z-10">
            <div className="flex flex-1 justify-start">
                <MagneticButton width={'6rem'} height={'4rem'}>
                    nathan foo
                </MagneticButton>
            </div>
            <div className="links flex flex-1 justify-end gap-[1em]">
                <MagneticButton width={'4.5rem'} height={'4.5rem'}>
                    about
                </MagneticButton>
                <MagneticButton width={'4.5rem'} height={'4.5rem'}>
                    work
                </MagneticButton>
                <MagneticButton width={'4.5rem'} height={'4.5rem'}>
                    contact
                </MagneticButton>
            </div>
        </nav>
    );
}

export default Navbar;