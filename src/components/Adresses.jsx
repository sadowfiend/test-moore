import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { fifthMassive } from "../massives";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import Grid from "@mui/material/Grid";

export const Adresses = () => {
    return (
        <Box marginTop="65px">
            <Typography variant="h4" gutterBottom>
                Адресса магазинов
            </Typography>

            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
            >
                {fifthMassive.map((e, i) => (
                    <AdressElement adress={e.adress} picture={e.img} key={i}/>
                ))}
            </Box>
        </Box>
    );
};

const AdressElement = ({ adress, picture }) => {
    return (
        <Box className="adress-element">
            <Box
                display="flex"
                justifyContent="space-between"
                borderBottom="1px solid #E3E3E3"
                paddingBottom="20px"
            >
                <Box display="flex">
                    <img src={picture} alt="" />
                    <Box marginLeft="10px">
                        <Typography>Iskender home</Typography>
                        <Typography color="#0062D5" textDecoration="underline">
                            открыть в карте
                        </Typography>
                    </Box>
                </Box>
                <ArrowForwardIcon />
            </Box>
            <Box sx={{ flexGrow: 1 }} padding="8px">
                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <Box display="flex">
                            <FmdGoodOutlinedIcon />
                            <Typography>{adress}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={0}></Grid>
                    <Grid item xs={6}>
                        <Box display="flex">
                            <AccessTimeOutlinedIcon />
                            <Typography>08:00 - 22:00</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box display="flex">
                            <LocalPhoneOutlinedIcon />
                            <Typography>+996 500 345 345</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};
