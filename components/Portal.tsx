import ReactDOM from 'react-dom'

interface PortalProps{
    isOpen:boolean;
    reference:React.RefObject<HTMLDivElement>;
    children: React.ReactNode;
}
export default function Portal({isOpen,children,reference}:PortalProps){
    if(!isOpen || !reference.current) return null;
    return ReactDOM.createPortal(children,reference.current);
}