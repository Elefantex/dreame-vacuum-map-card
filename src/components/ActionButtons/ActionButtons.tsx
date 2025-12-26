import type { CleaningMode } from '../../types/homeassistant';
import './ActionButtons.scss';

interface ActionButtonsProps {
  selectedMode: CleaningMode;
  selectedRoomsCount: number;
  onClean: () => void;
  onDock: () => void;
}

export function ActionButtons({
  selectedMode,
  selectedRoomsCount,
  onClean,
  onDock,
}: ActionButtonsProps) {
  const getCleanButtonText = () => {
    switch (selectedMode) {
      case 'room':
        return selectedRoomsCount > 0
          ? `Clean ${selectedRoomsCount} Room${selectedRoomsCount > 1 ? 's' : ''}`
          : 'Select Rooms';
      case 'all':
        return 'Clean All';
      case 'zone':
        return 'Zone Clean';
      default:
        return 'Clean';
    }
  };

  return (
    <div className="action-buttons">
      <button onClick={onClean} className="action-buttons__clean">
        <span className="action-buttons__icon">▶️</span>
        <span>{getCleanButtonText()}</span>
      </button>
      <button onClick={onDock} className="action-buttons__dock">
        <span className="action-buttons__icon">🏠</span>
        <span>Dock</span>
      </button>
    </div>
  );
}
