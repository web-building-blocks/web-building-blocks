import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";

export default function Checkbox() {
  const [isMobile, setIsMobile] = React.useState(false);

  return (
    <div className="mt-5 w-full h-96 rounded-md border flex flex-col items-center justify-between">
      <div className="w-full h-14 flex items-center justify-end">
        <Badge
          variant={isMobile ? "outline" : "default"}
          onClick={() => setIsMobile(false)}
          className="mr-1 select-none cursor-pointer"
        >
          Desktop
        </Badge>
        <Badge
          variant={!isMobile ? "outline" : "default"}
          onClick={() => setIsMobile(true)}
          className="mr-4 select-none cursor-pointer"
        >
          Mobile
        </Badge>
      </div>
      <CheckboxComponent />
      <div></div> 
    </div>
  );
}


function CheckboxComponent() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
      setIsChecked(!isChecked);
  };

  return (
      <div>
          <input 
              type="checkbox" 
              id="myCheck" 
              checked={isChecked} 
              onChange={toggleCheckbox} 
          />
          {isChecked && <p id="text">Checkbox is CHECKED!</p>}
      </div>
  );
}
