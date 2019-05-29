import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import Home from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InsertChart from '@material-ui/icons/InsertChart';
import Store from '@material-ui/icons/Store';
import History from '@material-ui/icons/History';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {Link} from 'react-router-dom'

export default class Header extends Component {

  state = {
    // anchorEl: null,
    // mobileMoreAnchorEl: null,
    open: false
  }

  menuToggle = (event) => {
    this.setState({
      open: !this.state.open
    })
    // console.log(event.target)
  }

  render() {
    // const { anchorEl, mobileMoreAnchorEl } = this.state
    // const isMenuOpen = Boolean(anchorEl)
    const styles = {
      Toolbar: {
        minHeight: 80,
        // backgroundColor: 'blue'
      },
      list: {
        width: 250
      }
    }

    const sideList = (
      <div style={styles.list}>
        <List>
          {['Home', 'Profile', 'History', 'Stats', 'Store'].map(text => (
            <ListItem button key={text}>
              <ListItemIcon>{
                text==='Home'?<Link to="/"><Home /></Link>:
                text==='Profile'?<Link to="/profile"><AccountCircle /></Link>:
                text==='History'?<Link to="/history"><History /></Link>:
                text==='Stats'?<Link to="/stats"><InsertChart /></Link>:
                text==='Store'?<Link to="/store"><Store /></Link>:null}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    )

    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar style={styles.Toolbar} >
            <IconButton onClick={this.menuToggle} color="inherit">
              <MenuIcon />
            </IconButton>
            <Typography color="inherit" variant="h5">
              Welcome to FitDECKS
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.open} onClose={this.menuToggle}>
          <div
            tabIndex={0}
            role="button"
            // onClick={this.menuToggle}
            // onKeyDown={this.menuToggle}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    )
  }
}
