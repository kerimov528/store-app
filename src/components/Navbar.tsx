import React from 'react'
import { Box, Typography, Button } from '@mui/material'
import CustomizedBadges from './Badge'
import { Link } from 'react-router-dom'
import '@fontsource/roboto/700.css';

const Navbar = () => {
    const user = true
    return (
        <Box bgcolor={'#fff'} display={'flex'} alignItems={'center'} justifyContent={'space-around'} boxShadow={'-1px 3px 10px -2px rgba(0,0,0,0.55)'} p='.5rem' position={'sticky'} top='0' zIndex={'999'}>
            <Box display={'flex'} alignItems={'center'}>
                <img width={'70px'} src="https://firebearstudio.com/blog/wp-content/uploads/2015/03/Top-E-Commerce-Website-Design-Trends-2015.png" alt="logo" />
                <Typography variant='h5' px={'1rem'}>StoreApp</Typography>
                <Link to='/'> <Typography variant='button' color={'#000'} sx={{ ':hover': { color: 'tomato' } }}>Home</Typography></Link>
            </Box>
            <Box display='flex' alignItems='center'>
                {
                    user ? (
                        <>
                            <Button sx={{ ':hover': { bgcolor: 'transparent' } }}>
                                <Link to='/profile'>
                                    <Typography variant='button' color={'#000'} sx={{ ':hover': { color: 'tomato' } }}>Profile</Typography>
                                </Link>
                            </Button>
                            <Link to='/cart'>
                                <Typography sx={{ ':hover': { color: 'tomato' } }}><CustomizedBadges /></Typography>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Button sx={{ ':hover': { bgcolor: 'transparent' } }}>
                                <Link to='/login'>
                                    <Typography variant='button' color={'#000'} sx={{ ':hover': { color: 'tomato' } }}>Login</Typography>
                                </Link>
                            </Button>
                            <Button variant='contained' sx={{ bgcolor: '#000', ml: '1rem', ":hover": { bgcolor: 'tomato' } }}>
                                <Link to='/signup'>
                                    <Typography variant='button' color={'#fff'}>Sign Up</Typography>
                                </Link>
                            </Button>
                        </>
                    )
                }
            </Box>
        </Box >
    )
}

export default Navbar