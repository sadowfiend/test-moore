import { Box } from '@mui/material';
import Container from '@mui/material/Container';
import { firstMassive } from '../massives';
import { Adresses } from './Adresses';
import { Auction } from './Auction';
import { Category } from './Category';
import { CircleCard } from './CircleCard';
import { HitSale } from './HitSale';
import { News } from './News';

export const Home = ()=> {
    return(
        <Container maxWidth="xl" className='home'>
            <Box
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
            >
                {
                    firstMassive.map((e, i)=> (
                        <CircleCard key={i} name={e.name} picture={e.img}/>
                    ))
                }
            </Box>

            <Category/>
            <HitSale/>
            <News/>
            <Auction/>
            <Adresses/>
        </Container>
    )
}