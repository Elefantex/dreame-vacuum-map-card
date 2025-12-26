import type { HassEntity } from '../../types/homeassistant';
import './Header.scss';

interface HeaderProps {
  entity: HassEntity;
  deviceName: string;
}

export function Header({ entity, deviceName }: HeaderProps) {
  const getStatusText = (state: string) => {
    const statusMap: Record<string, string> = {
      cleaning: 'Cleaning',
      returning: 'Returning to dock',
      docked: 'Docked',
      idle: 'Idle',
      paused: 'Paused',
      error: 'Error',
      drying: 'Drying',
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
    <div className="header">
      <h2 className="header__title">{deviceName}</h2>
      <p className="header__status">{getStatusText(entity.state)}</p>

      {isDrying && (
        <div className="header__progress">
          <div className="header__progress-bar">
            <div
              className="header__progress-fill"
              style={{ width: `${dryingProgress}%` }}
            />
          </div>
          <p className="header__progress-text">{dryingProgress}%</p>
        </div>
      )}

      <div className="header__stats">
        <div className="header__stat">
          <span className="header__stat-icon">🏠</span>
          <span className="header__stat-value">{getCleanedArea()} m²</span>
        </div>
        <div className="header__stat">
          <span className="header__stat-icon">⏱️</span>
          <span className="header__stat-value">{getCleaningTime()} min</span>
        </div>
        <div className="header__stat">
          <span className="header__stat-icon">🔋</span>
          <span className="header__stat-value">{getBatteryLevel()} %</span>
        </div>
      </div>
    </div>
  );
}
