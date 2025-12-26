import type { CleaningMode } from '../types/homeassistant';

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
    <div style={{ display: 'flex', gap: '12px', marginTop: '15px' }}>
      <button
        onClick={onClean}
        style={{
          flex: 1,
          border: 'none',
          borderRadius: '15px',
          padding: '14px',
          fontSize: '16px',
          fontWeight: 500,
          background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
          color: '#fff',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(255,165,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
        }}
      >
        <span>▶️</span>
        <span>{getCleanButtonText()}</span>
      </button>
      <button
        onClick={onDock}
        style={{
          flex: 1,
          border: 'none',
          borderRadius: '15px',
          padding: '14px',
          fontSize: '16px',
          fontWeight: 500,
          background: '#e8e8e8',
          color: '#1a1a1a',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px',
        }}
      >
        <span>🏠</span>
        <span>Dock</span>
      </button>
    </div>
  );
}
