import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InsertChart from '@material-ui/icons/InsertChart';
import Store from '@material-ui/icons/Store';
import History from '@material-ui/icons/History';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

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
    const { anchorEl, mobileMoreAnchorEl } = this.state
    const isMenuOpen = Boolean(anchorEl)
    const styles = {
      Toolbar: {
        minHeight: 80,
        // backgroundColor: 'blue'
      },
      Filter: {
        display: 'flex',
        position: 'relative',
        left: '30px',
        backgroundColor: '#349fda',
        borderRadius: '7px'
      },
      filterInput: {
        position: 'relative',
        left: '10px',
        color: 'white'
      },
      searchIcon: {
        position: 'relative',
        top: '3px'
      },
      list: {
        width: 250
      }
    }

    const sideList = (
      <div style={styles.list}>
        <List>
          {['Profile', 'History', 'Stats', 'Store'].map(text => (
            <ListItem button key={text}>
              <ListItemIcon>{text==='Profile'?<AccountCircle />:
                text==='History'?<History />:
                text==='Stats'?<InsertChart />:
                text==='Store'?<Store />:<InsertChart />}
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
            <div style={styles.Filter}>
              <div>
                <SearchIcon style={styles.searchIcon} />
              </div>
              <InputBase onChange={this.props.filterChange} style={styles.filterInput} placeholder="Filter..." value={this.props.filter} />
            </div>
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
