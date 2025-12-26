import { Modal, SegmentedControl, Toggle, CircularButton } from '../common';
import type { CleaningStrategy } from '../../types/homeassistant';
import './CleaningModeModal.scss';

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
  const isCleanGenius = cleaningMode === 'CleanGenius';

  const modeOptions = [
    { value: 'CleanGenius', label: 'CleanGenius' },
    { value: 'Custom', label: 'Custom' },
  ];

  return (
    <Modal opened={opened} onClose={onClose}>
      <div className="cleaning-mode-modal">
        {/* Mode Toggle */}
        <div className="cleaning-mode-modal__header">
          <SegmentedControl
            value={cleaningMode}
            onChange={(value) => onModeChange(value as CleaningStrategy)}
            options={modeOptions}
          />
        </div>

        {isCleanGenius ? (
          <div className="cleaning-mode-modal__content">
            {/* Free your hands section - CleanGenius only */}
            <section className="cleaning-mode-modal__section">
              <h3 className="cleaning-mode-modal__section-title">Free your hands</h3>
              <div className="cleaning-mode-modal__room-map">
                <span className="cleaning-mode-modal__placeholder">Room map visualization</span>
              </div>
            </section>

            {/* Cleaning Mode */}
            <section className="cleaning-mode-modal__section">
              <h3 className="cleaning-mode-modal__section-title">Cleaning Mode</h3>
              <div className="cleaning-mode-modal__mode-grid">
                <div className="cleaning-mode-modal__mode-card cleaning-mode-modal__mode-card--selected">
                  <div className="cleaning-mode-modal__mode-icon cleaning-mode-modal__mode-icon--vac-mop">
                    <span>💧</span>
                  </div>
                  <span className="cleaning-mode-modal__mode-label">Vac & Mop</span>
                  <div className="cleaning-mode-modal__mode-checkmark">
                    <span>✓</span>
                  </div>
                </div>
                <div className="cleaning-mode-modal__mode-card">
                  <div className="cleaning-mode-modal__mode-icon cleaning-mode-modal__mode-icon--mop-after">
                    <span>➜</span>
                  </div>
                  <span className="cleaning-mode-modal__mode-label">Mop after Vac</span>
                </div>
              </div>
            </section>

            {/* Deep Cleaning */}
            <div className="cleaning-mode-modal__setting">
              <span className="cleaning-mode-modal__setting-label">Deep Cleaning</span>
              <Toggle checked={false} onChange={() => {}} />
            </div>
          </div>
        ) : (
          <div className="cleaning-mode-modal__content">
            {/* Custom Mode - Cleaning Mode */}
            <section className="cleaning-mode-modal__section">
              <h3 className="cleaning-mode-modal__section-title">Cleaning Mode</h3>
              <div className="cleaning-mode-modal__horizontal-scroll">
                {[
                  { icon: '🌀', label: 'Vacuum' },
                  { icon: '💧', label: 'Mop' },
                  { icon: '🔄', label: 'Vac & Mop', selected: true },
                  { icon: '➜', label: 'Mop after Vac' },
                  { icon: '⚙️', label: 'Custom...' },
                ].map((mode, idx) => (
                  <div key={idx} className="cleaning-mode-modal__mode-option">
                    <CircularButton
                      size="large"
                      selected={mode.selected}
                      onClick={() => {}}
                      icon={mode.icon}
                    />
                    <span className="cleaning-mode-modal__mode-option-label">{mode.label}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Suction Power */}
            <section className="cleaning-mode-modal__section">
              <h3 className="cleaning-mode-modal__section-title">Suction Power</h3>
              <div className="cleaning-mode-modal__power-grid">
                {[
                  { icon: '🌙', label: 'Quiet' },
                  { icon: '🔄', label: 'Standard' },
                  { icon: '🌀', label: 'Turbo', selected: true },
                  { icon: '⚡', label: 'Max' },
                ].map((power, idx) => (
                  <div key={idx} className="cleaning-mode-modal__power-option">
                    <CircularButton
                      size="large"
                      selected={power.selected}
                      onClick={() => {}}
                      icon={power.icon}
                    />
                    <span className="cleaning-mode-modal__power-label">{power.label}</span>
                  </div>
                ))}
              </div>

              {/* Max+ toggle */}
              <div className="cleaning-mode-modal__max-plus">
                <div className="cleaning-mode-modal__max-plus-header">
                  <span className="cleaning-mode-modal__max-plus-title">Max+</span>
                  <Toggle checked={false} onChange={() => {}} />
                </div>
                <p className="cleaning-mode-modal__max-plus-description">
                  The suction power will be increased to the highest level, which is a single-use mode.
                </p>
              </div>
            </section>

            {/* Wetness */}
            <section className="cleaning-mode-modal__section">
              <h3 className="cleaning-mode-modal__section-title">Wetness</h3>

              {/* Slider */}
              <div className="cleaning-mode-modal__slider-container">
                <input
                  type="range"
                  min="0"
                  max="30"
                  defaultValue="20"
                  className="cleaning-mode-modal__slider"
                />
                <div className="cleaning-mode-modal__slider-value">20</div>
              </div>

              {/* Labels */}
              <div className="cleaning-mode-modal__slider-labels">
                <span className="cleaning-mode-modal__slider-label cleaning-mode-modal__slider-label--inactive">
                  Slightly dry
                </span>
                <span className="cleaning-mode-modal__slider-label cleaning-mode-modal__slider-label--active">
                  Moist
                </span>
                <span className="cleaning-mode-modal__slider-label cleaning-mode-modal__slider-label--inactive">
                  Wet
                </span>
              </div>
            </section>

            {/* Mop-washing frequency */}
            <div className="cleaning-mode-modal__setting cleaning-mode-modal__setting--clickable">
              <span className="cleaning-mode-modal__setting-label">Mop-washing frequency</span>
              <div className="cleaning-mode-modal__setting-value">
                <span>By Area 20m²</span>
                <span className="cleaning-mode-modal__setting-arrow">›</span>
              </div>
            </div>

            {/* Route */}
            <section className="cleaning-mode-modal__section">
              <div className="cleaning-mode-modal__section-header">
                <h3 className="cleaning-mode-modal__section-title">Route</h3>
                <span className="cleaning-mode-modal__help-icon">?</span>
              </div>

              <div className="cleaning-mode-modal__route-grid">
                {[
                  { icon: '⌇', label: 'Quick' },
                  { icon: '≡', label: 'Standard', selected: true },
                  { icon: '⋮⋮', label: 'Intensive' },
                  { icon: '⫴', label: 'Deep' },
                ].map((route, idx) => (
                  <div key={idx} className="cleaning-mode-modal__route-option">
                    <CircularButton
                      size="large"
                      selected={route.selected}
                      onClick={() => {}}
                      icon={route.icon}
                    />
                    <span className="cleaning-mode-modal__route-label">{route.label}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </Modal>
  );
}
