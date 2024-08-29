import Banner from "../_components/banner/Banner";
import DealthOfMonth from "../_components/dealthOfMonth/DealthOfMonth";
import NewArrivals from "../_components/newArrivals/NewArrivals";
import Packages from "../_components/packages/Packages";

export default function Home(){
    return(
        <>
            <Banner/>
            <DealthOfMonth/>
            <NewArrivals/>
            <Packages/>
        </>
    )
}