import React from 'react';
import { Grid } from '@material-ui/core';
import Details from './Components/Details/Details';
import Main from './Components/Main/Main';
import useStyles from './appStyles';

const App = () => {
	const classes = useStyles();

	return (
		<div>
			<Grid
				container
				className={classes.grid}
				spacing={2}
				alignContent="center"
				justifyContent="center"
				style={{
					height: '100vh',
				}}
			>
				<Grid item={true} sm={12} md={3}>
					<Details title="Income" />
				</Grid>
				<Grid item={true} sm={12} md={3}>
					<Main title="Form" />
				</Grid>
				<Grid item={true} sm={12} md={3}>
					<Details title="Expense" />
				</Grid>
			</Grid>
		</div>
	);
};

export default App;
