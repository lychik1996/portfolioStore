import {create} from 'zustand';

interface useModalDrawerProps{
    isOpen:boolean,
    onOpen:()=>void,
    onClose:()=>void,
}

export const useModalDrawer = create<useModalDrawerProps>((set)=>({
    isOpen:false,
    onOpen:()=>set(()=>({isOpen:true})),
    onClose:()=>set(()=>({isOpen:false})),
}))