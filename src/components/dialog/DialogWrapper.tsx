import React, { CSSProperties } from 'react';

interface Props {
  visible?: boolean;
}

const wrapperStyle: CSSProperties = {
  position: 'fixed',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const DialogWrapper: React.FC<React.PropsWithChildren<Props>> = ({
  visible,
  children,
}) => {
  return <>{visible ? <div style={wrapperStyle}>{children}</div> : null}</>;
};

export default DialogWrapper;
