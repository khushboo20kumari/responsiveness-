// RightSidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const RightSidebar = () => {
  return (
    <Drawer variant="permanent" anchor="right">
      <List>
        <ListItem button>
          <ListItemText primary="Right Sidebar Item 1" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Right Sidebar Item 2" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default RightSidebar;
