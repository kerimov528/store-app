import * as React from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppSelector } from '../hooks/hook';

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

export default function CustomizedBadges() {
    const { cartItems } = useAppSelector((state): any => state.card)
    return (
        <IconButton aria-label="cart">
            <StyledBadge badgeContent={cartItems.length} color="secondary">
                <ShoppingCartIcon />
            </StyledBadge>
        </IconButton>
    );
}