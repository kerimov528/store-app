import { Button } from '@mui/material'
import { addToCart } from '../features/card/cardSliceM';
import { useAppDispatch } from '../hooks/hook';

const AddCart = ({ product }: { product: any }) => {
    const dispatch = useAppDispatch()

    const handleAddToCart = (product: any) => {
        dispatch(addToCart(product));
    };
    return (
        <>
            <Button size="small" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
        </>
    )
}

export default AddCart