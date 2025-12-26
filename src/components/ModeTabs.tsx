import type { CleaningMode } from '../types/homeassistant';

interface ModeTabsProps {
  selectedMode: CleaningMode;
  onModeChange: (mode: CleaningMode) => void;
}

export function ModeTabs({ selectedMode, onModeChange }: ModeTabsProps) {
  const modes: { value: CleaningMode; label: string }[] = [
    { value: 'room', label: 'Room' },
    { value: 'all', label: 'All' },
    { value: 'zone', label: 'Zone' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        gap: '4px',
        background: '#e8e8e8',
        borderRadius: '15px',
        padding: '4px',
        marginBottom: '15px',
      }}
    >
      {modes.map((mode) => (
        <button
          key={mode.value}
          onClick={() => onModeChange(mode.value)}
          style={{
            flex: 1,
            border: 'none',
            borderRadius: '11px',
            padding: '10px',
            fontWeight: 500,
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            backgroundColor: selectedMode === mode.value ? 'white' : 'transparent',
            color: selectedMode === mode.value ? '#000' : '#666',
            boxShadow: selectedMode === mode.value ? '0 2px 4px rgba(0,0,0,0.1)' : 'none',
          }}
        >
          {mode.label}
        </button>
      ))}
    </div>
  );
}
