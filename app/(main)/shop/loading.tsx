import { CircularProgress } from "@mui/material";

export default function LoadingShopPage(){
    return(
        <div className="flex-1 flex justify-center w-full pt-32 sm:pt-52  min-h-[400px] sm:min-h-[1091px]">
            <div className="flex flex-row gap-5 ">
            <h3 className="text-2xl">Loading...</h3>
            <CircularProgress color="inherit"/>
            </div>
        </div>
    )
}