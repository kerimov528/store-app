import { Box, Card, CardActions, CardContent, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AddCart from '../../components/AddCart'
import Loading from '../../components/Loading'
import { getProductsById, clearProduct } from '../../features/product/productSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'

const ProductDetail = () => {
    const { id } = useParams()
    const { item, loading } = useAppSelector(state => state.product)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProductsById(id))

        return () => {
            dispatch(clearProduct())
        }

    }, [dispatch, id])

    return (
        <>
            {loading && <Loading />}
            {
                item && (
                    <Container maxWidth='lg' sx={{ mt: '2rem' }}>
                        <Grid container alignItems='center' justifyContent='space-evenly'>
                            <Grid item lg={6} md={12} mx={'auto'}>
                                <Box p={'2rem'} width='20rem' mx='auto'>
                                    <Box width='100%' component={'img'} src={item.image} />
                                </Box>
                            </Grid>
                            <Grid item lg={6} md={12} p='2rem'>
                                <Card>
                                    <CardContent >
                                        <Box >
                                            <Typography gutterBottom variant="h5" component="div">
                                                {item.title}
                                            </Typography>
                                        </Box>
                                        <Box >
                                            <Typography gutterBottom variant="h6" component="div">
                                                {item.category}
                                            </Typography>
                                        </Box>
                                        <Box >
                                            <Typography variant="body2" color={'text.secondary'}>
                                                {item.description}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography gutterBottom variant="h5" component="div" mt={'1rem'}>
                                                {'$' + item.price}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                    <CardActions>
                                        <AddCart product={item} />
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                    </Container>
                )
            }
        </>
    )
}

export default ProductDetail