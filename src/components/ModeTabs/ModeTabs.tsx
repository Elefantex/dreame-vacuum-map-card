import type { CleaningMode } from '../../types/homeassistant';
import './ModeTabs.scss';

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
    <div className="mode-tabs">
      {modes.map((mode) => (
        <button
          key={mode.value}
          onClick={() => onModeChange(mode.value)}
          className={`mode-tabs__button ${
            selectedMode === mode.value ? 'mode-tabs__button--active' : ''
          }`}
        >
          {mode.label}
        </button>
      ))}
    </div>
  );
}
