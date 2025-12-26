import type { CleaningStrategy } from '../types/homeassistant';

interface CleaningModeButtonProps {
  cleaningMode: CleaningStrategy;
  onClick: () => void;
}

export function CleaningModeButton({ cleaningMode, onClick }: CleaningModeButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        margin: '10px 20px',
        width: 'calc(100% - 40px)',
        background: '#fff',
        border: 'none',
        borderRadius: '12px',
        padding: '12px 16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        color: '#1a1a1a',
        fontWeight: 400,
        fontSize: '15px',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>💧</span>
        <span>{cleaningMode}</span>
      </div>
      <span>›</span>
    </button>
  );
}
