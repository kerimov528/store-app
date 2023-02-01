import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import { useAppSelector } from '../../hooks/hook'
import { Link } from 'react-router-dom'
import Loading from '../../components/Loading'
import AddCart from '../../components/AddCart'

const Products = ({ filteredList }: { filteredList: any }) => {

    const { loading } = useAppSelector((state: any) => state.product)

    return (
        <>
            {
                loading
                    ? (<Loading />)
                    : (
                        <Grid container>
                            {
                                filteredList?.map((product: any) => {
                                    return (
                                        <Grid item lg={4} md={6} p={'.5rem'} key={product.id}>
                                            <Card sx={{ p: '.3rem' }}>
                                                <Box sx={{ width: '100%', height: '15rem' }}>
                                                    <CardMedia
                                                        component={'img'}
                                                        height='250'
                                                        sx={{ objectFit: 'contain' }}
                                                        image={product.image}
                                                    />
                                                </Box>
                                                <CardContent sx={{ height: '16rem' }}>
                                                    <Box height={'12rem'}>
                                                        <Typography gutterBottom variant="h6" component="div">
                                                            {product.title}
                                                        </Typography>
                                                    </Box>
                                                    <Box height={'3rem'}>
                                                        <Typography variant="h6" color={'text.secondary'}>
                                                            {product.price + ' $'}
                                                        </Typography>
                                                    </Box>
                                                </CardContent>
                                                <CardActions>
                                                    <Button size="small">
                                                        <Link to={`/productDetail/${product.id}`}>Product Detail
                                                        </Link>
                                                    </Button>
                                                    <AddCart product={product} />
                                                </CardActions>
                                            </Card>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    )
            }
        </>
    )
}

export default Products