import type { HassEntity } from '../types/homeassistant';

interface HeaderProps {
  entity: HassEntity;
  deviceName: string;
}

export function Header({ entity, deviceName }: HeaderProps) {
  const getStatusText = (state: string) => {
    const statusMap: Record<string, string> = {
      'cleaning': 'Cleaning',
      'returning': 'Returning to dock',
      'docked': 'Docked',
      'idle': 'Idle',
      'paused': 'Paused',
      'error': 'Error',
      'drying': 'Drying',
    };
    return statusMap[state] || state;
  };

  const getCleanedArea = () => entity.attributes.cleaned_area || '--';
  const getCleaningTime = () => {
    const time = entity.attributes.cleaning_time;
    return time ? Math.round(time / 60) : '--';
  };
  const getBatteryLevel = () => entity.attributes.battery_level || '--';

  const isDrying = entity.state === 'drying';
  const dryingProgress = entity.attributes.drying_progress || 0;

  return (
    <div style={{ padding: '20px 20px 10px', textAlign: 'center' }}>
      <h2 style={{ margin: '0 0 8px', fontSize: '20px', fontWeight: 600 }}>{deviceName}</h2>
      <p style={{ margin: '0 0 16px', fontSize: '14px', color: '#666' }}>
        {getStatusText(entity.state)}
      </p>
      
      {/* Drying progress bar */}
      {isDrying && (
        <div style={{ margin: '0 auto 16px', maxWidth: '200px' }}>
          <div
            style={{
              width: '100%',
              height: '4px',
              backgroundColor: '#e8e8e8',
              borderRadius: '2px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${dryingProgress}%`,
                height: '100%',
                backgroundColor: '#007aff',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
          <p style={{ margin: '4px 0 0', fontSize: '12px', color: '#999' }}>
            {dryingProgress}%
          </p>
        </div>
      )}

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '14px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span>🏠</span>
          <span>{getCleanedArea()} m²</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span>⏱️</span>
          <span>{getCleaningTime()} min</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span>🔋</span>
          <span>{getBatteryLevel()} %</span>
        </div>
      </div>
    </div>
  );
}
