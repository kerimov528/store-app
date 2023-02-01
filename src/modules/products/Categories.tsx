import { Box, Button, Container, Typography } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { getProducts } from '../../features/product/productSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/hook'
import { Product } from '../../types'
import Products from './Products'

const Categories = () => {
    const categories = ['all', 'electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing']

    const { products } = useAppSelector(state => state.product)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const [productList, setProductList] = useState<Product[]>()

    const [selectedCategory, setSelectedCategory] = useState()

    useEffect(() => {
        setProductList(products)
    }, [selectedCategory, products]);

    const getFilteredList = (): Product[] | undefined => {
        if (!selectedCategory || selectedCategory === 'all') {
            return productList
        }

        return productList && productList.filter((item: any) => item.category === selectedCategory)
    }

    const filteredList = useMemo(getFilteredList, [selectedCategory, productList]);

    const handleClick = (category: any) => {
        setSelectedCategory(category)
    }

    return (
        <>
            <Container maxWidth='md'>
                <Typography variant='h4'>Category List</Typography>
                <Box display={'flex'} alignItems='center' justifyContent={'space-between'} mt='1.2rem'>
                    {categories.map((category, key) => {
                        return (
                            <Button key={key} variant='outlined' sx={{ width: '10rem', p: '0.2rem .5rem', ':focus': { bgcolor: 'tomato', color: '#fff' }, color: 'black', outlineColor: 'black' }} onClick={() => handleClick(category)} > {category}
                            </Button>
                        )
                    })}
                </Box>
                <Typography variant='h4' mt={'1rem'}>{selectedCategory}</Typography>

                <Box>
                    <Products filteredList={filteredList} />
                </Box>

            </Container>
        </>
    )
}

export default Categories