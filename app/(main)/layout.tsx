import Footer from "./_components/Footer";
import Header from "./_components/Header/Header";

export default function layout({children}:{children:React.ReactNode}){
    return(
        <div className="w-full flex flex-col h-full items-center">
            <Header/>
            <main className="flex-1 w-full flex flex-col items-center">{children}</main>
            <Footer/>
            
        </div>
    )
}