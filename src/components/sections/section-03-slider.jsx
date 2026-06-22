import { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';

const MARKS = [
  { value: 0, label: '0' },
  { value: 25, label: '25' },
  { value: 50, label: '50' },
  { value: 75, label: '75' },
  { value: 100, label: '100' },
];

/**
 * Section03Slider 컴포넌트
 * 0~100 범위의 MUI Slider, 실시간 값 표시 + marks 구간 표시
 *
 * Props: 없음
 */
function Section03Slider() {
  const [value, setValue] = useState(50);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={1} sx={{ p: { xs: 3, md: 4 } }}>
      <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
        Slider
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 1 }}>
        <Typography variant="body1" color="text.secondary">
          현재 값
        </Typography>
        <Typography variant="h4" color="primary" sx={{ fontWeight: 700, minWidth: 56 }}>
          {value}
        </Typography>
      </Box>

      <Box sx={{ px: { xs: 1, md: 2 }, pt: 2 }}>
        <Slider
          value={value}
          onChange={handleChange}
          min={0}
          max={100}
          step={1}
          marks={MARKS}
          valueLabelDisplay="auto"
        />
      </Box>
    </Paper>
  );
}

export default Section03Slider;
