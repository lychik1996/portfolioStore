import {create} from 'zustand';

interface useModalFilterProps{
    isOpen:boolean,
    onOpen:()=>void,
    onClose:()=>void,
}

export const useModalFilter = create<useModalFilterProps>((set)=>({
    isOpen:false,
    onOpen:()=>set(()=>({isOpen:true})),
    onClose:()=>set(()=>({isOpen:false})),
}))