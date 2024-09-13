import {create} from 'zustand';

interface useModalCheckoutProps{
    isOpen:boolean,
    onOpen:()=>void,
    onClose:()=>void,
}

export const useModalCheckout = create<useModalCheckoutProps>((set)=>({
    isOpen:false,
    onOpen:()=>set(()=>({isOpen:true})),
    onClose:()=>set(()=>({isOpen:false})),
}))