import React from "react";
import DashBoard from "./DashBoard";
import useStyles from "./appStyles";

const App = () => {
  const classes = useStyles();

  return <DashBoard title="DashBoard" />;
};

export default App;
