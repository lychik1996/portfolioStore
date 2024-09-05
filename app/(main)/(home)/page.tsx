import Banner from "../_components/banner/Banner";
import DealthOfMonth from "../_components/dealthOfMonth/DealthOfMonth";
import FollowUS from "../_components/followUs/FollowUs";
import NewArrivals from "../_components/newArrivals/NewArrivals";
import Packages from "../_components/packages/Packages";
import Rewiews from "../_components/rewiews/Rewiews";

import Subscribe from "../_components/subscribe/Subscribe";

export default function Home(){
    return(
        <>
            <Banner/>
            <DealthOfMonth/>
            <NewArrivals/>
            <Packages/>
            <FollowUS/>
            <Rewiews/>
            <Subscribe/>
            
        </>
    )
}