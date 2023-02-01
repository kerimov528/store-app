import Categories from '../products/Categories'
import { Container } from '@mui/material'

const Home = () => {
    return (
        <Container maxWidth='lg' sx={{ m: '1rem auto', p: '2rem' }}>
            <Categories />
        </Container>
    )
}

export default Home