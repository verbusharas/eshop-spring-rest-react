import {
    AppBar,
    CssBaseline,
    Link,
    Toolbar,
    Typography,
    Badge,
    IconButton,
    makeStyles,
    MenuItem
} from "@material-ui/core";
import {NavLink, Link as RouterLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, {useContext} from "react";
import {CartContext} from "../../App";
import {useTranslation} from "react-i18next";
import Menu from '@material-ui/core/Menu';
import {connect} from "react-redux";

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));


const Header = ({productCount}) => {

    // i18n -> ----
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const setLanguageAndClose = (langCode) => {
        i18n.changeLanguage(langCode);
        setAnchorEl(null);
    }

    const {t, i18n} = useTranslation();
    // i18n <- -----

    const classes = useStyles();

    // CONTEXT -------
    // const {products} = useContext(CartContext);

    return (
        <header>
            <CssBaseline/>
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        ePardė
                    </Typography>
                    <nav>
                        <Link className={classes.link} component={NavLink} to="/products">{t("link-products")}</Link>
                        <Link className={classes.link} component={NavLink} to="/about">{t("link-about")}</Link>
                        <RouterLink to="/cart">
                            <IconButton aria-label="cart">
                                <Badge badgeContent={productCount} color="secondary">
                                    <ShoppingCartIcon/>
                                </Badge>
                            </IconButton>
                        </RouterLink>
                    </nav>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        {i18n.language}
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => setLanguageAndClose("lt")}>LT</MenuItem>
                        <MenuItem onClick={() => setLanguageAndClose("en")}>EN</MenuItem>
                    </Menu>

                    <Button href="#" color="primary" variant="outlined" className={classes.link}>
                        {t("button-login")}
                    </Button>

                </Toolbar>
            </AppBar>
        </header>
    )
}

const mapStateToProps = ({cart}) => ({
    productCount: cart.length
})


export default connect(mapStateToProps, null)(Header);
