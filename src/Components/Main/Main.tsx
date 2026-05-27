import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid2,
  Typography,
} from "@mui/material";
import Form from "./Form/Form";
import useStyles from "./mainStyles";

type MainProps = {
  title: string;
  subheader: string;
};

const Main = ({ title, subheader }: MainProps) => {
  const classes = useStyles();
  let totalBalance = "$100";
  return (
    <Card className={classes.main} elevation={24}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography align="center" variant="h5">
          {totalBalance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "10px" }}
        >
          {/** Info Card */}
          Try saying :add income for $100
        </Typography>
        <br />
        <Divider />
        <br />
        <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12 }}>{/**List */}</Grid2>
        </Grid2>
      </CardContent>
    </Card>
  );
};

export default Main;
