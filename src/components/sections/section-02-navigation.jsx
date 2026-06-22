import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const MENU_ITEMS = ['홈', '소개', '서비스', '연락처'];

/**
 * Section02Navigation 컴포넌트
 * AppBar + 데스크톱 메뉴 버튼 / 모바일 햄버거 + Drawer
 *
 * Props: 없음
 */
function Section02Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuClick = (item) => {
    alert(`메뉴 클릭: ${item}`);
    setDrawerOpen(false);
  };

  return (
    <Paper elevation={1} sx={{ p: { xs: 3, md: 4 } }}>
      <Typography variant="h5" component="h2" sx={{ mb: 3, fontWeight: 600 }}>
        Navigation
      </Typography>

      <AppBar position="static" color="primary" sx={{ borderRadius: 1 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Logo
          </Typography>

          {isMobile ? (
            <IconButton
              color="inherit"
              onClick={() => setDrawerOpen(true)}
              aria-label="메뉴 열기"
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {MENU_ITEMS.map((item) => (
                <Button
                  key={item}
                  color="inherit"
                  onClick={() => handleMenuClick(item)}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 220 }} role="presentation">
          <List>
            {MENU_ITEMS.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton onClick={() => handleMenuClick(item)}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Paper>
  );
}

export default Section02Navigation;
