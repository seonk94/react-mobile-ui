import React, { useState } from 'react';

import Dialog from '@/components/dialog/Dialog';

function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      home
      <button onClick={() => setOpen(!open)}>toggle</button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        body
      </Dialog>
    </div>
  );
}

export default Home;
