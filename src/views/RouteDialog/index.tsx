import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import DialogOne from './DialogOne';

function RouteDialog() {
  const [dialogOne, setDialogOne] = useState(false);

  const catchBrowserBack = (...args: any) => {
    console.log('hihi', args);
  };
  useEffect(() => {
    window.onhashchange = catchBrowserBack;
  }, []);

  return (
    <div>
      <Button onClick={() => setDialogOne(true)}>Dialog one</Button>
      <DialogOne open={dialogOne} onClose={() => setDialogOne(false)} />
    </div>
  );
}

export default RouteDialog;
