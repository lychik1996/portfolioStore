import ReactDOM from 'react-dom'

interface PortalProps{
    isOpen:boolean;
    reference?:React.RefObject<HTMLDivElement>;
    children: React.ReactNode;
    referenceId?:string;
}
export default function Portal({isOpen,children,reference,referenceId}:PortalProps){
    let targetElement:HTMLElement | null=null;
    if(reference && reference.current){
        targetElement=reference.current
    }else if(referenceId){
        targetElement = document.getElementById(referenceId);
    }
    if(!isOpen || !targetElement) return null;
    return ReactDOM.createPortal(children,targetElement);
}