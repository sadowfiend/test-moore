import Typography from "@mui/material/Typography";
import picture from "../pictures/photo-3.png";
import heart from "../pictures/heart.png";
import { Box } from "@mui/material";
import { thirdMassive } from "../massives";

export const HitSale = () => {
    return (
        <Box marginTop="65px">
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h4" gutterBottom>
                    Хиты продаж
                </Typography>
                <Typography color="#3186C3">Перейти в каталог</Typography>
            </Box>

            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
            >
                {thirdMassive.map((e, i) => (
                    <SaleElement
                        title={e.title}
                        price={e.price}
                        subtitle={e.subtitle}
                        set={e.set}
                        key={i}
                    />
                ))}
            </Box>
        </Box>
    );
};

export const SaleElement = ({ title, price, subtitle, set, sale }) => {
    return (
        <div className="sale-element">
            <span>
                <img src={heart} alt="" />
            </span>
            <img src={picture} alt="" />
            <Typography height="100px">{title}</Typography>
            <Box display="flex" justifyContent="start">
                <Typography variant="h5" color={sale ? "red" : "black"}>{price} c</Typography>
                {sale && <strike>{price} с</strike>}
            </Box>
            <Typography color="#82CF6F">• {subtitle}</Typography>
            <Typography color="#3286C2">{set}</Typography>
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
            >
                <button className="round-button">-</button>
                <p>1</p>
                <button className="round-button">+</button>
            </Box>
        </div>
    );
};
