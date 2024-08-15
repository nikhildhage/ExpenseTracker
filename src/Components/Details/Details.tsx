import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './detailStyles';
import { incomeColors, expenseColors } from '../../Constants/categories';

ChartJS.register(ArcElement, Tooltip, Legend);

export const chartData = {
	labels: ['Business', 'Investments', 'Deposits', 'Lottery', 'Gifts', 'Salary'],
	datasets: [
		{
			labels: ['Business', 'Investments', 'Deposits', 'Lottery', 'Gifts', 'Salary'],
			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e'],
			borderWidth: 5,
			cutout: '75%',
			responsive: true,
		},
	],
};

type DetailsProps = {
	title: string;
};
const Details = (props: DetailsProps) => {
	const classes = useStyles();

	return (
		<Card className={props.title === 'Income' ? classes.income : classes.expense} elevation={24}>
			{' '}
			<CardHeader title={props.title} />
			<CardContent>
				<Typography variant="h5">$50</Typography>
				<Doughnut data={chartData}></Doughnut>
			</CardContent>
		</Card>
	);
};

export default Details;
