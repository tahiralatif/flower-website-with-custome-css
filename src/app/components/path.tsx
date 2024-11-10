


import React, { useState } from "react";
import Sheet from "../components/menu/sheet"

const ExampleComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <div>
      <button onClick={handleOpen}>Open Sheet</button>
      
      <Sheet isOpen={isOpen} onClose={handleClose}>
        <h1>This is the content inside the sheet</h1>
        <p>More content can go here.</p>
      </Sheet>
    </div>
  );
};

export default ExampleComponent;
