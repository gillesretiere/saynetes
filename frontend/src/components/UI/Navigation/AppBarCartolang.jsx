// https://codesandbox.io/p/sandbox/material-ui-5-hamburger-menu-navigation-fms85m

import React, { useState, useContext, } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import List from '@mui/material/List';

//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";
import DescriptionIcon from "@mui/icons-material/Description";
import DeckContext from "../../../store/DeckContext";

// import { navLinks, currentVersion, } from "../../../assets/constants/index.js";

// import { LGDK_LOGO_NOTEXT_BLUE, } from "../../../assets/images";

/*
How to enable ListItemButton to use React Router v6 Link?
https://stackoverflow.com/questions/71822728/how-to-enable-listitembutton-to-use-react-router-v6-link

*/

const StyledSearch = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.primary.light, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.primary.light, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto"
    }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch"
        }
    }
}));

//search as JSX
const search = (
    <StyledSearch>
        <SearchIconWrapper>
            <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
            placeholder="Rechercher…"
            inputProps={{ "aria-label": "search" }}
        />
    </StyledSearch>
);


const AppBarCartolang = ({ callBackFunction, }) => {
    //react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed
    const [open, setState] = useState(true);

    let deckContext = useContext(DeckContext);
    
    const handleClick = (event) => {
        callBackFunction(event.currentTarget.id);
    };

    //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        //changes the function state according to the value of open
        setState(open);
    };

    return (
        <AppBar position="static" sx={{ bgcolor: '#fff' }}>
            <Container maxWidth="xl" disableGutters="true">
                <Toolbar>
                    {/* 
          <Typography>
            <a href="/">
              <img src={LGDK_LOGO_NOTEXT_BLUE} alt="logo" width={64} />
            </a>
          </Typography>
          <Typography variant="secondary" sx={{ flexGrow: 1, fontWeight: 700, color: "secondary.contrastText" }}>
            <div>
              {currentVersion.product} | {currentVersion.subProduct}
            </div>
          </Typography>
          */}

                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="home"
                        href="/"
                        sx={{
                            mr: 2,
                            display: {
                                xs: "block",
                                /* md: "none", hidden if device >= md */
                            }
                        }}
                    >
                        <HomeIcon />
                    </IconButton>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer(true)}
                        sx={{
                            mr: 2,
                            display: {
                                xs: "block",
                                /* md: "none", hidden if device >= md */
                            }
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box
                        component="div"
                        sx={{
                            display: {
                                xs: "none",
                                md: "block",
                            }
                        }}
                    >
                        {/* 
            {search}            
            */}
                    </Box>



                    {/* The outside of the drawer */}
                    <Drawer
                        //from which side the drawer slides in
                        anchor="right"
                        //if open is true --> drawer is shown
                        open={open}
                        //function that is called when the drawer should close
                        onClose={toggleDrawer(false)}
                    //function that is called when the drawer should open
                    // onOpen={toggleDrawer(true)}
                    >
                        {/* The inside of the drawer */}
                        <Box
                            className="bg-primary-orange"
                            sx={{
                                p: 2,
                            }}
                        >
                            {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
                            <IconButton sx={{ mb: 2 }}>
                                <CloseIcon onClick={toggleDrawer(false)} />
                            </IconButton>

                            <Divider sx={{ mb: 2 }} />

                            <Box sx={{ overflow: 'auto' }}>
                                {/* on itère sur les liens de navigations intrapage : ajout du lien 
               https://stackoverflow.com/questions/47206639/how-to-add-a-link-to-a-list-in-material-ui-1-0
               */}
                                <List>
                                    {deckContext.current_deck.navlinks && deckContext.current_deck.navlinks.map(
                                        (item, index) => (
                                            <>
                                                <span key={item.label} id={index} onClick={handleClick}>
                                                    {/* on teste si href interne (#) : composant "a" sinon "Link" */}
                                                    <ListItemButton key={index}
                                                        component={item.url.startsWith('#') ? "a" : Link}
                                                        href={`${item.url}`}
                                                        to={`${item.url}`}
                                                        className={!item.enabled && "disabled-link"}  >
                                                        <ListItemIcon key={index} >
                                                            <img src={item.country_national_flag} className='pr-1 max-w-[32px] md:max-w-[32px] object-cover' />
                                                        </ListItemIcon>
                                                        <ListItemText key={`${item.label}`} primary={`${item.label}`} sx={{ color: "primary.contrastText" }} />
                                                        {/* <Chip label={item.enabled ? "disponible" :"prochainement"} size="small"></Chip> */}
                                                    </ListItemButton>
                                                </span>
                                            </>
                                        ))}
                                </List>

                            </Box>

                        </Box>
                    </Drawer>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default AppBarCartolang