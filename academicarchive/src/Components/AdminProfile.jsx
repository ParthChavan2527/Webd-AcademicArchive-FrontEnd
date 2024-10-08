import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

export default function ProfileDrawer() {
  const [state, setState] = React.useState({ right: false });
  const navigate = useNavigate();

  const toggleDrawer =
    (open) =>
    (event) => {
      if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, right: open });
    };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem key="Profile" disablePadding>
          <ListItemButton onClick={() => navigate('/profile')}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        {/* Email */}

        <ListItem key="Email" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Email" />
          </ListItemButton>
        </ListItem>

        {/* Phone Number */}

        <ListItem key="Phone Number" disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Phone Number" />
          </ListItemButton>
        </ListItem>

        {/* contributions */}

        <ListItem key="Contributions" disablePadding>
          <ListItemButton onClick={()=>{navigate('/admin/contribution')}}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary=" Your Contributions"/>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />

        {/* Settings  */}

      <List>
        <ListItem key="Settings" disablePadding>
          <ListItemButton onClick={() => navigate('/settings')}>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>

        {/* Logout */}

        <ListItem key="Logout" disablePadding>
          <ListItemButton onClick={() => navigate('/')}>  {/* Redirect to login */}
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)} style = {{position : "absolute" , top : '1vmin' , right : '2vmin'}}>
        <Avatar alt="Profile" src="/path-to-your-profile-image.jpg" />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
