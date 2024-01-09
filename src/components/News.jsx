import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import picture from "../pictures/illustration.png";

export const News = () => {
    return (
        <Box marginTop="65px">
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h4" gutterBottom>
                    Новости
                </Typography>
                <Typography color="#3186C3">
                    все
                </Typography>
            </Box>
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
            >
                <NewsContent />
                <NewsContent />
                <NewsContent />
            </Box>
        </Box>
    );
};

const NewsContent = () => {
    return (
        <Box
            className="news-content"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
        >
            <Box>
                <Typography variant="h5">-50%</Typography>
                <Typography>На кухонную мебель</Typography>
                <Button variant="contained">Подробнее</Button>
            </Box>
            <Box>
                <img src={picture} alt="" />
            </Box>
        </Box>
    );
};
