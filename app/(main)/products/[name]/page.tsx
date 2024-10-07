import DealthOfMonth from "../../_components/dealthOfMonth/DealthOfMonth";
import Packages from "../../_components/packages/Packages";
import Subscribe from "../../_components/subscribe/Subscribe";
import Item from "./_components/Item";

export default function Product(){
    return(
        <>
            <Item/>
            <Packages/>
            <DealthOfMonth/>
            <Subscribe/>
        </>
    )
}