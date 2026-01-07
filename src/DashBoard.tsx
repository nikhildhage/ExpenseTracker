
import React from 'react'
import "./index.css";
import {Grid2, Typography} from '@mui/material';
import Details from './Components/Details/Details';
import Main from './Components/Main/Main';

type DashBoardProps ={
    title: string,
};

const DashBoard = ({title} :DashBoardProps) => {
  return (
    <>
        <Typography
            align="center"
            variant="h2"  // or "h1" depending on how big you want
            gutterBottom
            sx={{ margin: 2 }}
        >
            {title}
        </Typography>
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
    </>
  )
}

export default DashBoard