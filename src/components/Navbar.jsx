import {
    AppBar,
    Container,
    IconButton,
    Toolbar,
    Typography,
    Grid,
    Box,
} from "@mui/material";
import logo from "../main-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const Navbar = () => {
    return (
        <AppBar position="fixed">
            <Container fixed>
                <Toolbar>
                    <Grid container spacing={1}>
                        <Grid item xs={2}>
                            <img alt="logo" src={logo}></img>
                        </Grid>
                        <Grid item xs={2}>
                                <IconButton ml={10}>
                                    <MenuIcon />
                                    <Typography>Каталог</Typography>
                                </IconButton>
                        </Grid>
                        <Grid item xs={4}>
                            <input
                                className="input-grey-rounded"
                                type="text"
                                placeholder="Поиск"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Box display="flex" justifyContent="space-between">
                                <Box textAlign="right">
                                    <Typography fontSize="0.5rem">
                                        Добро пожаловать
                                    </Typography>
                                    <Typography>Вход/Регистрация</Typography>
                                </Box>
                                <AccountCircleOutlinedIcon />
                                <ShoppingCartOutlinedIcon />
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
