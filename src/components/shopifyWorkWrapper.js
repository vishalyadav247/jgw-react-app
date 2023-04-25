import React from 'react';
import { Box } from '@mui/material'
import ShopifyWork from './shopifyWork';

export default function ShopifyWorkWrapper() {
    return (
        <Box>
            <Box sx={{ maxWidth: '1200px', margin: 'auto' }}>
                <ShopifyWork />
            </Box>
        </Box>
    )
}
