import React from 'react';
import { clearAuthToken, isAuthenticated } from "../utils/common";
import { Redirect, Link, Route } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink as RouterLink } from 'react-router-dom';
import { HomeRounded, PeopleAlt, PowerSettingsNew } from '@material-ui/icons';
import * as Styled from './style';
import logo from "../media/logo.png";
import Users from "../Components/Users/Users";
import HomePage from './HomePage';

const drawerWidth = 240;

const handleLogout = history => () => {
    clearAuthToken();
    history.push('/login');
}

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));

const DashBoard = ({history}) => {
  const classes = useStyles();

  if(!isAuthenticated()){
    return <Redirect to="/login" />
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Styled.DasBoardHeader>
            <img src={logo} height="100px" style={{marginRight: "15px"}}/>
            <Typography variant="h5" display="inlineBlock">Global Capital Dashboard</Typography>
         </Styled.DasBoardHeader>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
             <Link to="/users" style={{color: "inherit", textDecoration: "none"}}>
              <ListItem button>
                <ListItemIcon><PeopleAlt /></ListItemIcon>
                <ListItemText primary="User" />
              </ListItem>
              </Link>

              <Link to="/home" style={{color: "inherit", textDecoration: "none"}}>
                <ListItem button>
                  <ListItemIcon><HomeRounded /></ListItemIcon>
                  <ListItemText primary="HomePage" />
                </ListItem>
              </Link>

          </List>
          <Divider />

          <List>
              <ListItem button onClick={handleLogout(history)}>
                <ListItemIcon><PowerSettingsNew /></ListItemIcon>
                <ListItemText primary="Log Out" />
              </ListItem>
          </List>
          <Divider />
          
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <Route path="/users" component={Users} />
        <Route path="/home" component={HomePage} />
      </main>
    </div>
  );
}

export default DashBoard;

