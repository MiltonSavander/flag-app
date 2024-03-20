import * as React from 'react';
import Button from '@mui/material/Button';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons() {
  return (
    <Stack
      direction="row"
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Button
        style={{
          color: '#FFFFFF',
        }}
        variant="text"
        startIcon={<BrightnessHighIcon />}
        sx={{ fontWeight: 300, fontSize: '16px' }}
      >
        DARK MODE
      </Button>
    </Stack>
  );
}
