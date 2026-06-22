import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Section01Buttons from './components/sections/section-01-buttons';
import Section02Navigation from './components/sections/section-02-navigation';

/**
 * 새 섹션 추가 시: import 추가 → sections 배열에 추가
 */
const sections = [Section01Buttons, Section02Navigation];

function App() {
  return (
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      bgcolor: 'grey.50',
      py: { xs: 4, md: 8 },
    }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: { xs: 4, md: 6 },
            textAlign: 'center',
            color: 'text.primary',
          }}
        >
          MUI UI Components
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 4, md: 6 } }}>
          {sections.length === 0 ? (
            <Box sx={{
              textAlign: 'center',
              py: 10,
              color: 'text.secondary',
              border: '2px dashed',
              borderColor: 'divider',
              borderRadius: 2,
            }}>
              <Typography variant="h6" sx={{ mb: 1 }}>
                섹션을 추가할 준비가 되었습니다
              </Typography>
              <Typography variant="body2">
                src/components/sections/ 에 섹션 컴포넌트를 추가하세요
              </Typography>
            </Box>
          ) : (
            sections.map((SectionComponent, index) => (
              <SectionComponent key={index} />
            ))
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default App;
