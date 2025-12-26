import './Modal.scss';

interface ModalProps {
  opened: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ opened, onClose, children }: ModalProps) {
  if (!opened) return null;

  return (
    <>
      <div className="modal__backdrop" onClick={onClose} />
      <div className="modal">
        <div className="modal__handle" />
        <div className="modal__content">{children}</div>
      </div>
    </>
  );
}
