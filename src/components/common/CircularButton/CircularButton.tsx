import './CircularButton.scss';

interface CircularButtonProps {
  icon: string | React.ReactNode;
  label?: string;
  selected?: boolean;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
}

export function CircularButton({ 
  icon, 
  label, 
  selected = false, 
  onClick,
  size = 'medium' 
}: CircularButtonProps) {
  return (
    <div className="circular-button">
      <button
        className={`circular-button__circle circular-button__circle--${size} ${
          selected ? 'circular-button__circle--selected' : ''
        }`}
        onClick={onClick}
      >
        {typeof icon === 'string' ? (
          <span className="circular-button__icon">{icon}</span>
        ) : (
          icon
        )}
      </button>
      {label && <span className="circular-button__label">{label}</span>}
    </div>
  );
}
