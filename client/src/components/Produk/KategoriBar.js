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
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import KategoriAction from './KategoriAction';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  listItemText:{
    fontSize:'1.0em',//Insert your required size
    color: "red"
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
    bukalaporan: false,
    bukapembelian: false,
    bukaproduk: true
  };

  handleClickLaporan = () => {
   this.setState(state => ({ bukalaporan: !state.bukalaporan }));
 };

 handleClickPembelian = () => {
  this.setState(state => ({ bukapembelian: !state.bukapembelian }));
};

handleClickProduk = () => {
 this.setState(state => ({ bukaproduk: !state.bukaproduk }));
};

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const footerStyle = {
    backgroundColor: "blue",
    fontSize: "20px",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
    };

    const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
    };

    function Footer({ children }) {
    return (
    <div>
      <div style={phantomStyle} />
      <div style={footerStyle}>{children}</div>
    </div>
    );
    }

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
          <ListItem button>
            <NavLink to='/dashboard'><ListItemIcon><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg></ListItemIcon></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to='/dashboard'>Dashboard</NavLink>
          </ListItem>

          <ListItem button>
            <NavLink to='/faktur'><ListItemIcon><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"/></svg></ListItemIcon></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to='/faktur'>Faktur</NavLink>
          </ListItem>

          <ListItem button>
            <NavLink to='/kasir'><ListItemIcon><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg></ListItemIcon></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to='/kasir'>Kasir</NavLink>
          </ListItem>

          <ListItem button onClick={this.handleClickLaporan}>
            <ListItemIcon><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"/></svg></ListItemIcon>
            <ListItemText inset primary="Laporan" classes={{primary:classes.listItemText}} />
            {this.state.bukalaporan ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
            <Collapse in={this.state.bukalaporan} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ListItemIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"/></svg>
                </ListItemIcon>
              &nbsp;&nbsp;&nbsp;&nbsp;<NavLink to='/laporan-penjualan'>Penjualan</NavLink>
              </ListItem>
              <ListItem button className={classes.nested}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ListItemIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>
                </ListItemIcon>
              &nbsp;&nbsp;&nbsp;&nbsp;<NavLink to='/laporan-transaksi'>Transaksi</NavLink>
              </ListItem>
              </List>
            </Collapse>

          <ListItem button>
            <NavLink to='/pelanggan'><ListItemIcon><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"/></svg></ListItemIcon></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to='/pelanggan'>Pelanggan</NavLink>
          </ListItem>

          <ListItem button onClick={this.handleClickPembelian}>
            <ListItemIcon><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg></ListItemIcon>
            <ListItemText inset primary="Pembelian" classes={{primary:classes.listItemText}} />
            {this.state.bukapembelian ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
            <Collapse in={this.state.bukapembelian} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ListItemIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></svg>
                </ListItemIcon>
              &nbsp;&nbsp;&nbsp;&nbsp;<NavLink to='/buat-orderan'>Buat Orderan</NavLink>
              </ListItem>
              <ListItem button className={classes.nested}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ListItemIcon>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"/></svg>
                </ListItemIcon>
              &nbsp;&nbsp;&nbsp;&nbsp;<NavLink to='/data-pembelian'>Data Pembelian</NavLink>
              </ListItem>
              </List>
            </Collapse>

          <ListItem button>
            <NavLink to='/penyuplai'><ListItemIcon><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"/></svg></ListItemIcon></NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
            <NavLink to='/penyuplai'>Penyuplai</NavLink>
          </ListItem>

          <ListItem button onClick={this.handleClickProduk}>
            <ListItemIcon><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/></svg></ListItemIcon>
            <ListItemText inset primary="Produk" classes={{primary:classes.listItemText}} />
            {this.state.bukaproduk ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
            <Collapse in={this.state.bukaproduk} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ListItemIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>
                </ListItemIcon>
              &nbsp;&nbsp;&nbsp;&nbsp;<NavLink to='/data-produk'>Data Produk</NavLink>
              </ListItem>
              <ListItem button className={classes.nested} selected>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ListItemIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"/></svg>
                </ListItemIcon>
              &nbsp;&nbsp;&nbsp;&nbsp;<NavLink to='/kategori-produk'>Kategori Produk</NavLink>
              </ListItem>
              </List>
            </Collapse>

            </List>
          </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <div className="adding-background">
            <KategoriAction />
            <Footer>
              <span>Copyright © 2018 Bams_Corporate</span>
            </Footer>
          </div>
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
