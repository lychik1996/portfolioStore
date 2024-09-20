import { CircularProgress } from "@mui/material";

export default function LoadingUser(){
    return(
        <div className="flex-1 flex justify-center w-full items-center h-[400px]">
            <div className="flex flex-row gap-5 items-center">
            <h3 className="text-2xl">Loading...</h3>
            <CircularProgress color="inherit"/>
            </div>
        </div>
    )
}