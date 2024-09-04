import Footer from "./_components/footer/Footer";
import Header from "./_components/Header/Header";
import ModalDrawer from "./_components/ModalDrawer/ModalDrawer";

export default function layout({children}:{children:React.ReactNode}){
    return(
        <div className="relative w-full flex flex-col h-full items-center" id="body">
            <ModalDrawer/>
            <Header/>
            <main className="flex-1 w-full flex flex-col items-center">{children}</main>
            <Footer/>
        </div>
    )
}