
import React from 'react'
import {Grid2 ,Paper} from '@mui/material';
import Details from './Components/Details/Details';
import Main from './Components/Main/Main';



const DashBoard = () => {
  return (
    <Grid2 container spacing={3} alignItems="center" justifyContent="center"
        sx={{
            minHeight: '100vh',padding: 2,
            '& > *': {
                margin: (theme) => theme.spacing(3), // replaces classes.Grid2
            },
        }}
    >
        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 3, xl: 3 }}>
            <Details title="Income" type="Income" />
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 3, xl: 3 }} sx={{ textAlign: 'center' }}>
            <Main title="Form" subheader="Powered by Speechify" />
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 3, xl: 3 }}>
            <Details title="Expense" type="Expense" />
        </Grid2>
    </Grid2>
  )
}

export default DashBoard