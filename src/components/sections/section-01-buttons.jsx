import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const VARIANTS = ['contained', 'outlined', 'text'];
const COLORS = ['primary', 'secondary', 'error'];

/**
 * Section01Buttons 컴포넌트
 * MUI Button의 variant × color 조합 9가지를 표시한다.
 *
 * Props: 없음
 */
function Section01Buttons() {
  const handleClick = (variant, color) => {
    alert(`variant: ${variant} / color: ${color}`);
  };

  return (
    <Paper elevation={1} sx={{ p: { xs: 3, md: 4 } }}>
      <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
        Button
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {VARIANTS.map((variant) => (
          <Box key={variant}>
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                mb: 1.5,
                color: 'text.secondary',
                textTransform: 'uppercase',
                letterSpacing: 1,
                fontWeight: 600,
              }}
            >
              {variant}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              {COLORS.map((color) => (
                <Button
                  key={color}
                  variant={variant}
                  color={color}
                  onClick={() => handleClick(variant, color)}
                >
                  {color}
                </Button>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  );
}

export default Section01Buttons;
