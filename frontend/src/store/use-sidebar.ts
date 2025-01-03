import { useAtom } from "jotai"; 
/*
Jotai --> Minimalistic, flexible state management library for React

An easier way to do context..
*/
import { atomWithStorage } from "jotai/utils";

const sidebarState = atomWithStorage("sidebarState", true);

export function useSidebar() {
  const [isOpen, setIsOpen] = useAtom(sidebarState);

  const open = () => setIsOpen(true); 
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
}