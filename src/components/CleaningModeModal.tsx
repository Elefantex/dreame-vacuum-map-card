import type { CleaningStrategy } from '../types/homeassistant';

interface CleaningModeModalProps {
  opened: boolean;
  onClose: () => void;
  cleaningMode: CleaningStrategy;
  onModeChange: (mode: CleaningStrategy) => void;
}

export function CleaningModeModal({
  opened,
  onClose,
  cleaningMode,
  onModeChange,
}: CleaningModeModalProps) {
  const cleaningModes = [
    { id: 'vac-mop', label: 'Vac & Mop', color: '#34C759' },
    { id: 'vac-then-mop', label: 'Vac then Mop', color: '#5AC8FA' },
    { id: 'vacuum', label: 'Vacuum', color: '#FF9500' },
    { id: 'mop', label: 'Mop', color: '#00C7BE' },
  ];

  if (!opened) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.4)',
          zIndex: 999,
        }}
      />
      
      {/* Modal */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: '#f5f5f7',
          borderRadius: '20px 20px 0 0',
          padding: '0 20px 20px',
          zIndex: 1000,
          maxHeight: '80vh',
          overflowY: 'auto',
        }}
      >
        {/* Handle */}
        <div
          style={{
            width: '36px',
            height: '5px',
            background: 'rgba(0,0,0,0.15)',
            borderRadius: '3px',
            margin: '12px auto',
          }}
        />

        {/* Mode Toggle */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
          <button
            onClick={() => onModeChange('CleanGenius')}
            style={{
              flex: 1,
              border: 'none',
              borderRadius: '12px',
              padding: '12px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              backgroundColor: cleaningMode === 'CleanGenius' ? 'white' : '#e8e8e8',
              color: cleaningMode === 'CleanGenius' ? '#1a1a1a' : '#666',
              boxShadow: cleaningMode === 'CleanGenius' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
            }}
          >
            CleanGenius
          </button>
          <button
            onClick={() => onModeChange('Custom')}
            style={{
              flex: 1,
              border: 'none',
              borderRadius: '12px',
              padding: '12px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              backgroundColor: cleaningMode === 'Custom' ? 'white' : '#e8e8e8',
              color: cleaningMode === 'Custom' ? '#1a1a1a' : '#666',
              boxShadow: cleaningMode === 'Custom' ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
            }}
          >
            Custom
          </button>
        </div>

        {/* Free your hands section */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '13px', color: '#666', fontWeight: 500, margin: '0 0 12px' }}>
            Free your hands
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {cleaningModes.map((mode) => (
              <div
                key={mode.id}
                style={{
                  aspectRatio: '1',
                  border: '2px solid rgba(0,0,0,0.1)',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  background: 'white',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: mode.color,
                    marginBottom: '8px',
                  }}
                />
                <span style={{ fontSize: '13px', fontWeight: 500 }}>{mode.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Intelligent Recommended Cleaning Parameters */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '13px', color: '#666', fontWeight: 500, margin: '0 0 12px' }}>
            Intelligent Recommended Cleaning Parameters
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px',
              background: 'white',
              borderRadius: '12px',
            }}
          >
            <span style={{ fontSize: '14px' }}>Reclean dirty rooms/zones (Optional)</span>
            <label style={{ position: 'relative', display: 'inline-block', width: '51px', height: '31px' }}>
              <input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} />
              <span
                style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: '#ccc',
                  transition: '0.4s',
                  borderRadius: '31px',
                }}
              />
            </label>
          </div>
        </div>

        {/* Cleaning Mode */}
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '13px', color: '#666', fontWeight: 500, margin: '0 0 12px' }}>
            Cleaning Mode
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div
              style={{
                aspectRatio: '1',
                border: '2px solid #FFD700',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                background: 'white',
                boxShadow: '0 0 0 3px rgba(255, 215, 0, 0.2)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: '#34C759',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: '24px' }}>💧</span>
              </div>
              <span style={{ fontSize: '13px', fontWeight: 500 }}>Vac & Mop</span>
              <div
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: '#FFD700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: '12px' }}>✓</span>
              </div>
            </div>
            <div
              style={{
                aspectRatio: '1',
                border: '2px solid rgba(0,0,0,0.1)',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                background: 'white',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: '#5AC8FA',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: '20px' }}>→</span>
              </div>
              <span style={{ fontSize: '13px', fontWeight: 500 }}>Mop after Vac</span>
            </div>
          </div>
        </div>

        {/* Deep Cleaning */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px',
            background: 'white',
            borderRadius: '12px',
          }}
        >
          <span style={{ fontSize: '14px' }}>Deep Cleaning</span>
          <label style={{ position: 'relative', display: 'inline-block', width: '51px', height: '31px' }}>
            <input type="checkbox" style={{ opacity: 0, width: 0, height: 0 }} />
            <span
              style={{
                position: 'absolute',
                cursor: 'pointer',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: '#ccc',
                transition: '0.4s',
                borderRadius: '31px',
              }}
            />
          </label>
        </div>
      </div>
    </>
  );
}
