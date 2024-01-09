import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import { fourthMassive } from "../massives"
import { SaleElement } from "./HitSale"

export const Auction = ()=> {
    return(
        <Box marginTop="65px">
            <Box display="flex" justifyContent="space-between">
                <Typography variant="h4" gutterBottom>
                    Аукционные товары
                </Typography>
                <Typography color="#3186C3">
                    перейти в каталог
                </Typography>
            </Box>

            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
            >
                {fourthMassive.map((e, i) => (
                    <SaleElement title={e.title} price={e.price} subtitle={e.subtitle} set={e.set} sale={e.sale} key={i}/>
                ))}
            </Box>
        </Box>
    )
}