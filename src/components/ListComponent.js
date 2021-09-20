import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import LiquorIcon from '@mui/icons-material/Liquor'
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function ListComponent() {
  return (
    <List sx={{padding: '10vh', bgcolor: 'background.paper'}}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <LiquorIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Sitsit" secondary="9. Syyskuuta 2021" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Hallituksen kokous" secondary="10. Tammikuuta 2021" />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <BeachAccessIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Vapun suuret panot" secondary="TBA" />
      </ListItem>
    </List>
  );
}