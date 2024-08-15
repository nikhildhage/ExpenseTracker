import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import Form from './Form/Form';
import useStyles from './mainStyles';
type Props = {
	title: string;
};

const Main = (props: Props) => {
	const classes = useStyles();
	return (
		<Card className={classes.main} elevation={24}>
			<CardHeader title={props.title} subheader="Powered by Speechly" />
			<CardContent>
				<Typography align="center" variant="h5">
					Total Balance $100
				</Typography>
				<Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
					{/** Info Card */}
					Try saying :add income for $100
				</Typography>
				<Divider />
				<Form />
			</CardContent>
			<CardContent className={classes.cardContent}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						{/**List */}
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default Main;
