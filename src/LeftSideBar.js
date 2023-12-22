
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const LeftSidebar = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button>
          <ListItemText primary="Left Sidebar Item 1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Left Sidebar Item 2" />
        </ListItem>
             </List>
    </Drawer>
  );
};

export default LeftSidebar;
