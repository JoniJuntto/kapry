import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    
    }));


export default function Sidebar(){

    const classes = useStyles();

    return(
        <List sx={{padding: '10vh'}}>
        <ListItem>
            <ListItemAvatar >
            <a href="/face">
            <Avatar>
                <FacebookIcon/>
            </Avatar>
            </a>
            </ListItemAvatar>
        </ListItem>
      <ListItem>
        <ListItemAvatar>
            <a href='/twitter'>
          <Avatar>
          <TwitterIcon/>
          </Avatar>
          </a>
        </ListItemAvatar>
      </ListItem>
      <ListItem>
        <ListItemAvatar>
            <a href='/instagram'>
          <Avatar>
            <InstagramIcon/>
          </Avatar>
          </a>
        </ListItemAvatar>
      </ListItem>
    </List>
    );
}