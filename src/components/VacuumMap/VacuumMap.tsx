import type { Hass, RoomPosition, CleaningMode } from '../../types/homeassistant';
import './VacuumMap.scss';

interface VacuumMapProps {
  hass: Hass;
  mapEntityId: string;
  selectedMode: CleaningMode;
  selectedRooms: Map<number, string>;
  rooms: RoomPosition[];
  onRoomToggle: (roomId: number, roomName: string) => void;
}

export function VacuumMap({
  hass,
  mapEntityId,
  selectedMode,
  selectedRooms,
  rooms,
  onRoomToggle,
}: VacuumMapProps) {
  const mapEntity = hass.states[mapEntityId];
  const mapUrl = mapEntity?.attributes?.entity_picture;

  return (
    <div className="vacuum-map">
      {mapUrl ? (
        <img
          src={hass.hassUrl(mapUrl)}
          alt="Vacuum Map"
          className="vacuum-map__image"
        />
      ) : (
        <div className="vacuum-map__placeholder">
          No map available
          <br />
          <small>Looking for: {mapEntityId}</small>
        </div>
      )}

      {selectedMode === 'room' && (
        <>
          <div className="vacuum-map__overlay">
            Click on room numbers to select rooms for cleaning
          </div>

          <div className="vacuum-map__rooms">
            {rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => onRoomToggle(room.id, room.name)}
                className={`vacuum-map__room ${
                  selectedRooms.has(room.id) ? 'vacuum-map__room--selected' : ''
                }`}
                style={{
                  left: `${room.x}%`,
                  top: `${room.y}%`,
                }}
                title={room.name}
              >
                {room.id}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
