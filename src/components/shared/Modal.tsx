
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ModalProps extends React.PropsWithChildren {
  open: boolean;
  onClose: () => void;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogTrigger asChild>Open</DialogTrigger>
      <DialogContent className="bg-dark-1 border-none text-white">{children}</DialogContent>
    </Dialog>
  );
}
