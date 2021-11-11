import { useState } from 'react';

import "./Accordion.scss"

const Accordion: React.FC<any> = ({ title, content }) => {
  // Open/close the accordion
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <p>{title}</p>
        <p>{isActive ? '-' : '+'}</p>
      </div>
      {/* conditional rendering */}
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;