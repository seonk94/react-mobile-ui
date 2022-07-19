import { Modal } from '@mui/material';
import React from 'react';

interface Props {
  open: boolean;
  onClose?: () => void;
}

const DialogOne: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div>dialog one</div>
    </Modal>
  );
};

export default DialogOne;
