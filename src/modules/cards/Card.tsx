import {  Box, Button, Container,  Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import CardItem from './CardItem';
import {
    clearCart,
    getTotals,
} from '../../features/card/cardSliceM'

const Card = () => {
    const { cartItems, cartTotalAmount } = useAppSelector((state): any => state.card)
    const dispatch = useAppDispatch()

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    useEffect(() => {
        dispatch(getTotals());
    }, [cartItems, dispatch]);

    return (
        <>
            <Container maxWidth='lg'>
                <Typography variant="h3" textAlign='center' mt='2rem'>
                    Your Cart
                </Typography>
                {cartItems.length === 0 ? (
                    <Box textAlign='center'>
                        <Typography variant="h3" my='2rem'>
                            Currently Empty
                        </Typography>
                        <Link to='/'>Start Shopping</Link>
                    </Box>
                ) : (
                    <Container maxWidth='lg' sx={{ p: '1rem' }}>
                        {
                            cartItems && cartItems.map((cartItem: any) => {
                                return <CardItem cartItem={cartItem} key={cartItem.id} />
                            })
                        }

                        <Box display='flex' alignItems='center' justifyContent='space-around'>
                            <Typography variant='h5'>
                                Totoal Amount : ${cartTotalAmount}
                            </Typography>
                            <Button onClick={() => handleClearCart()}>
                                Clear Cart
                            </Button>
                        </Box>
                    </Container>
                )}
            </Container>
        </>
    )
}

export default Card
