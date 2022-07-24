import { Button, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { routeMap } from '@/App';

function Home() {
  const navigate = useNavigate();

  const buttonClickHandler = (path: string) => {
    navigate(path);
  };
  return (
    <main>
      <div style={{ marginBottom: '24px' }}>
        <Typography variant="h2">React UI/UX Lab</Typography>
      </div>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
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
        </Grid>
      </Grid>
    </main>
  );
}

export default Home;
