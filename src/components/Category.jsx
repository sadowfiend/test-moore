import Typography from "@mui/material/Typography";
import { secondMassive } from "../massives";
import { Box } from "@mui/material";

export const Category = () => {
    return (
        <Box
            marginTop="65px"
        >
            <Typography variant="h4" gutterBottom>
                Категории
            </Typography>
            <Box
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            flexWrap='wrap'>
                {secondMassive.map((e, i) => (
                    <CategoryElement
                        title={e.title}
                        subtitle={e.subtitle}
                        picture={e.img}
                        alt={i}
                        key={i}
                    />
                ))}
            </Box>
        </Box>
    );
};

const CategoryElement = ({ title, subtitle, picture, alt }) => {
    return (
        <Box className="category-element">
            <Typography variant="h6">{title}</Typography>
            <Typography>{subtitle}</Typography>
            <img src={picture} alt={`category-element-${alt}`} />
        </Box>
    );
};
