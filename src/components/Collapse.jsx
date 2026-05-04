import { useState } from 'react';

function Collapse({ title, icon, children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`collapse ${isOpen ? 'collapse--open' : ''}`}>
      <button
        className="collapse__header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="collapse__title">
          <span className="collapse__icon">{icon}</span>
          <span>{title}</span>
        </div>
        <span className="collapse__arrow">▼</span>
      </button>

      <div className="collapse__body">
        <div className="collapse__content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Collapse;