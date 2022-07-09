import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

import { usePortal } from '@/hooks/usePortal';

import { DialogContext, DialogOption } from './DialogContext';
import DialogWrapper from './DialogWrapper';

interface Props {
  open?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const Dialog: React.FC<React.PropsWithChildren<Props>> = ({
  open,
  onOpen,
  onClose,
  children,
}) => {
  const portal = usePortal();
  const [visible, setVisible] = useState(false);

  const closeDialog = () => {
    onClose && onClose();
    setVisible(false);
  };

  useEffect(() => {
    if (open === undefined) return;
    if (open) {
      onOpen && onOpen();
    }
    if (!open) {
      onClose && onClose();
    }
    setVisible(open);
  }, [open]);

  const dialogOption: DialogOption = useMemo(
    () => ({
      close: closeDialog,
    }),
    []
  );

  if (!portal) return null;
  return createPortal(
    <DialogContext.Provider value={dialogOption}>
      <DialogWrapper visible={visible}>{children}</DialogWrapper>
    </DialogContext.Provider>,
    portal
  );
};

export default Dialog;
