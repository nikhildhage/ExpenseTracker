import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './detailStyles';
import { incomeColors, expenseColors, incomeCategoryLabels, expenseCategoryLabels } from '../../Constants/categories';
                                                                                  
ChartJS.register(ArcElement, Tooltip, Legend);

type DetailsProps = {
	title: string
	type: string
};



const Details = ({title , type }: DetailsProps) => {
	const classes = useStyles();
	const backgroundColors = type==='Income' ? incomeColors : expenseColors;
	const chartLabels = type==='Income'? incomeCategoryLabels : expenseCategoryLabels;
	let totalValue="$50"
	const dChartData = [12, 19, 3, 5, 2, 3];

	console.log(dChartData);

	const chartData = {
		labels: chartLabels,
		datasets: [
			{
				labels: chartLabels,
				data: dChartData,
				backgroundColor: backgroundColors,
				borderWidth: 5,
				cutout: '75%',
				responsive: true,
			},
		],
	};

	return (
		<Card className={type==='Income' ? classes.income : classes.expense} elevation={24}>
			<CardHeader title={title} />
			<CardContent>
				<Typography variant="h5">{totalValue}</Typography>
				<Doughnut data={chartData}></Doughnut>
			</CardContent>
		</Card>
	);
};

export default Details;
