import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import DaftarProduk from './DaftarProduk';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  listItemText:{
    fontSize:'1.0em',//Insert your required size
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
});


class MiniDrawer extends React.Component {
  state = {
    open: true,
    buka: false
  };

  handleClick = () => {
   this.setState(state => ({ buka: !state.buka }));
 };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Grid justify="space-between" container spacing={24}>
              <Grid item xs={11}>
                <Typography variant="h3" color="inherit" noWrap>
                  POS
                </Typography>
              </Grid>

              <Grid item xs={1}>
                <div>
                  <button className="btn btn-primary">
                    Log Out
                  </button>
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
              <ListItem button selected>
                <NavLink to='/produk'><ListItemIcon><InboxIcon /></ListItemIcon></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to='/produk'>Faktur</NavLink>
              </ListItem>
              <ListItem button>
                <NavLink to='/produk'><ListItemIcon><InboxIcon /></ListItemIcon></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to='/produk'>Kasir</NavLink>
              </ListItem>
              <ListItem button onClick={this.handleClick}>
                <NavLink to='/produk'><ListItemIcon><InboxIcon /></ListItemIcon></NavLink>
                <ListItemText inset primary="Laporan" classes={{primary:classes.listItemText}} />
                {this.state.buka ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
                <Collapse in={this.state.buka} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                  <NavLink to='/'>Penjualan</NavLink>
                  </ListItem>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                  <NavLink to='/'>Transaksi</NavLink>
                  </ListItem>
                  </List>
                </Collapse>
              <ListItem button>
                <NavLink to='/produk'><ListItemIcon><InboxIcon /></ListItemIcon></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to='/produk'>Pelanggan</NavLink>
              </ListItem>
              <ListItem button>
                <NavLink to='/produk'><ListItemIcon><InboxIcon /></ListItemIcon></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to='/produk'>Pembelian</NavLink>
              </ListItem>
              <ListItem button>
                <NavLink to='/produk'><ListItemIcon><InboxIcon /></ListItemIcon></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                <NavLink to='/produk'>Penyuplai</NavLink>
              </ListItem>
            <ListItem button>
              <NavLink to='/produk'><ListItemIcon><InboxIcon /></ListItemIcon></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
              <NavLink to='/produk'>Produk</NavLink>
            </ListItem>
            </List>
          </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <DaftarProduk />
        </main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
