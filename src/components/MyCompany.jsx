import { Box } from '@mui/material'
import React from 'react'

export default function MyCompany() {
  return (
    <Box
        sx={{p: 1}}
    >
        MyCompany
        {
            [1,2,3,4,5,6,7,8,9,10].map((_,index) => {
                return <p key={index}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore odit tempora sit. Omnis suscipit amet pariatur. Deleniti minus fugit recusandae illum explicabo ipsum nulla dicta consequuntur. Ut libero minus nulla?</p>
            })
        }
    </Box>
  )
}
