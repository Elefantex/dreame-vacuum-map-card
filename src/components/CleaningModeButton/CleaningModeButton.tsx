import type { CleaningStrategy } from '../../types/homeassistant';
import './CleaningModeButton.scss';

interface CleaningModeButtonProps {
  cleaningMode: CleaningStrategy;
  onClick: () => void;
}

export function CleaningModeButton({ cleaningMode, onClick }: CleaningModeButtonProps) {
  return (
    <button onClick={onClick} className="cleaning-mode-button">
      <div className="cleaning-mode-button__content">
        <span className="cleaning-mode-button__icon">💧</span>
        <span className="cleaning-mode-button__text">{cleaningMode}</span>
      </div>
      <span className="cleaning-mode-button__arrow">›</span>
    </button>
  );
}
