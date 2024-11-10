import React, { ReactNode } from "react";

interface SheetProps {
  isOpen: boolean;          
  onClose: () => void;       
  children: ReactNode;  
}

export default function Sheet({ isOpen, onClose, children }: SheetProps) {
  return (
    <>
      {isOpen && (
        <div className="sheetContainer" onClick={onClose}>
          <div className="sheetContent" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
