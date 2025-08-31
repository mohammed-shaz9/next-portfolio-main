import { ThreeDCardDemo } from "../components/Card3D";
import { EcardDemo } from "../components/Ecard";
import { IcardDemo } from "../components/Icard";
import { NavbarDemo } from "../components/Navbar";
import { PcardDemo } from "../components/Pcard";

export default function () {
    return <div>
        <NavbarDemo />
        <div className="flex flex-col items-center text-4xl font-semibold mt-28">
            My Projects
        </div>
        <div className="m-5 md:grid grid-cols-3 mt-5">
            <ThreeDCardDemo />
            <EcardDemo />
            <PcardDemo />
            <IcardDemo />
        </div>
    </div>
}