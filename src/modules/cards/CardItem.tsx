import { Avatar, Box, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { useAppDispatch } from '../../hooks/hook';

import {
    addToCart,
    decreaseCart,
    increaseCart,
    removeFromCart,
} from '../../features/card/cardSliceM'

const CardItem = ({ cartItem }: { cartItem: any }) => {
    const dispatch = useAppDispatch()

    const handleDecreaseCart = (cartItem: any) => {
        dispatch(decreaseCart(cartItem));
    };

    const handleIncreaseCart = (cartItem: any) => {
        dispatch(increaseCart(cartItem));
    };

    return (
        <Box mt='1rem' p='1rem'>
            <Divider variant="inset" />
            <List sx={{ width: '100%', bgcolor: 'background.paper', p: '1rem 2rem' }}>
                <ListItem alignItems='flex-start'>
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={cartItem.image} />
                    </ListItemAvatar>
                    <ListItemText primary='Product'
                        secondary={
                            <>
                                <Typography variant='subtitle1' display='block'>
                                    {cartItem.title}
                                </Typography>
                                <Typography variant='caption' display='block' sx={{ maxWidth: '28rem' }}>
                                    {cartItem.description}
                                </Typography>
                                <Button onClick={() => removeFromCart(cartItem)}>Remove</Button>
                            </>
                        } />
                    <ListItemText primary='Price' secondary={
                        <>
                            <Typography>
                                {cartItem.price}$
                            </Typography>
                        </>
                    } />

                    <ListItemText primary='Quantity'
                        secondary={
                            <Box display='flex' alignItems='center'>
                                <Button onClick={() => handleDecreaseCart(cartItem)}> - </Button>
                                <Typography>{cartItem.cartQuantity}</Typography>
                                <Button onClick={() => handleIncreaseCart(cartItem)}>+</Button>
                            </Box>
                        }
                    />

                    <ListItemText primary='Total'
                        secondary={
                            <>
                                <Typography>${cartItem.price * cartItem.cartQuantity}</Typography>
                            </>
                        }
                    />

                </ListItem>
            </List>
            <Divider variant="inset" />
        </Box>
    )
}

export default CardItem