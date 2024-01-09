import { Box } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import mainLogo from ".././main-logo.png";
import appstore from "../pictures/appstore.png";
import googleplay from "../pictures/googleplay.png";
import whatsup from "../pictures/whatsup.png";

export const Footer = () => {
    return (
        <Container maxWidth="xl" className="footer">
            <Grid container spacing={1} padding="60px 0">
                <Grid item xs={3}>
                    <Box>
                        <img src={mainLogo} alt="logo" width="175px" />
                        <Typography margin="50px 0">
                            Первый отечественный бренд Iskender на рынке
                            сантехники от компании ОсОО «Стройдом.кг»
                        </Typography>
                        <Box display="flex" justifyContent="space-between">
                            <img src={appstore} alt="appstore" />
                            <img src={googleplay} alt="googleplay" />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box className="footer-adresses">
                        <Typography paddingInlineStart="40px">
                            Адресса
                        </Typography>
                        <ul style={{ listStyleType: "none" }}>
                            <li>
                                <Typography color="#E0E0E0">
                                    ЭлитСтрой
                                </Typography>
                                <Typography>ул. Ден-Сяопина 18/1</Typography>
                            </li>
                            <li>
                                <Typography color="#E0E0E0">Баткен</Typography>
                                <Typography>ул. Льва-Толстого 19</Typography>
                            </li>
                            <li>
                                <Typography color="#E0E0E0">ТааТан</Typography>
                                <Typography>ул. Лермонтова 6</Typography>
                            </li>
                        </ul>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box className="footer-adresses">
                        <Typography paddingInlineStart="40px">
                            Компания
                        </Typography>
                        <ul style={{ listStyleType: "none" }}>
                            <li>
                                <Typography color="#E0E0E0">Каталог</Typography>
                            </li>
                            <li>
                                <Typography color="#E0E0E0">
                                    Избранное
                                </Typography>
                            </li>
                            <li>
                                <Typography color="#E0E0E0">
                                    Личный кабинет
                                </Typography>
                            </li>
                        </ul>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box className="footer-adresses">
                        <Typography paddingInlineStart="40px">
                            Контакты
                        </Typography>
                        <ul style={{ listStyleType: "none" }}>
                            <li>
                                <Typography color="#E0E0E0">e-mail</Typography>
                                <Typography>iskender.kg@gmail.com</Typography>
                            </li>
                            <li>
                                <Typography color="#E0E0E0">
                                    Избранное
                                </Typography>
                                <Typography>+996 (500) 000-104</Typography>
                                <Typography>+996 (997) 000-104</Typography>
                                <Typography>+996 (222) 000-104</Typography>
                            </li>
                            <li>
                                <img src={whatsup} alt="" />
                            </li>
                        </ul>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};
