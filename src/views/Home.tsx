import { Button, Grid, Stack } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { routeMap } from '@/App';

function Home() {
  const navigate = useNavigate();

  const buttonClickHandler = (path: string) => {
    navigate(path);
  };
  return (
    <div>
      <Stack spacing={2} direction="column">
        {routeMap.map((item) => (
          <Button
            fullWidth
            key={item.name}
            onClick={() => buttonClickHandler(item.path)}
            variant="contained"
          >
            {item.name}
          </Button>
        ))}
      </Stack>
    </div>
  );
}

export default Home;
