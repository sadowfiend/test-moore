import { Box } from "@mui/material"

export const CircleCard = ({name, picture}) => {
    return(
        <Box>
            <img src={picture} alt="" />
            <p>{name}</p>
        </Box>
    )
}