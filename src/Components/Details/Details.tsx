import React, { Suspense } from "react";
import { ArcElement, Chart as ChartJS, Tooltip } from "chart.js";
import useStyles from "./detailStyles";
import {
  expenseCategoryLabels,
  expenseColors,
  incomeCategoryLabels,
  incomeColors,
} from "../../Constants/categories";

// ---------------- MUI Components ----------------
const Card = React.lazy(async () => {
  const module = await import("@mui/material/Card");
  return { default: module.default };
});

const CardHeader = React.lazy(async () => {
  const module = await import("@mui/material/CardHeader");
  return { default: module.default };
});

const CardContent = React.lazy(async () => {
  const module = await import("@mui/material/CardContent");
  return { default: module.default };
});

const Typography = React.lazy(async () => {
  const module = await import("@mui/material/Typography");
  return { default: module.default };
});

// ---------------- Chart.js Doughnut ----------------
const Doughnut = React.lazy(async () => {
  const module = await import("react-chartjs-2");
  return { default: module.Doughnut }; // Named export → default
});

ChartJS.register(ArcElement, Tooltip);

type DetailsProps = {
  title: string;
  type: string;
};

const Details = ({ title, type }: DetailsProps) => {
  const classes = useStyles();
  const backgroundColors = type === "Income" ? incomeColors : expenseColors;
  const chartLabels =
    type === "Income" ? incomeCategoryLabels : expenseCategoryLabels;
  let totalValue = "$50";
  const dChartData = [12, 19, 3, 5];

  console.log(dChartData);

  const chartData = {
    labels: chartLabels,
    datasets: [
      {
        labels: chartLabels,
        data: dChartData,
        backgroundColor: backgroundColors,
        borderWidth: 6,
        cutout: "80%",
        responsive: true,
      },
    ],
  };

  return (
    <Suspense fallback={<div>Loading chart...</div>}>
      <Card
        className={type === "Income" ? classes.income : classes.expense}
        elevation={24}
      >
        <CardHeader title={title} />
        <CardContent>
          <Typography variant="h5">{totalValue}</Typography>
          <Doughnut data={chartData}></Doughnut>
        </CardContent>
      </Card>
    </Suspense>
  );
};

export default Details;
