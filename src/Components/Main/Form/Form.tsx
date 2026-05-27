import { useState } from "react";
import {
  Button,
  FormControl,
  Grid2,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import useStyles from "./formStyles";

type FormProps = {
  type: string;
  category: string;
  amount: number;
  date: string;
};

const Form = () => {
  const classes = useStyles();

  // Default values for controlled selects
  const [type, setType] = useState("Income");
  const [category, setCategory] = useState("Business");
  const [amount, setAmount] = useState(50);
  const [date, setDate] = useState("2025-12-10");

  const formData: FormProps = {
    type,
    category,
    amount,
    date,
  };

  const handleSubmit = (e: React.FormEvent | React.MouseEvent) => {
    e.preventDefault(); // prevent page reload
    // Build the object from your form state

    console.log(formData);
  };

  const getFormData = () => {
    return formData;
  };

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 12 }}>
        <Typography align="center" variant="subtitle2" gutterBottom>
          ...
        </Typography>
      </Grid2>

      <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
        <FormControl fullWidth>
          <InputLabel variant="filled">Type</InputLabel>
          <br />
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid2>

      <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
        <FormControl fullWidth>
          <InputLabel variant="filled">Category</InputLabel>
          <br />
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="Salary">Salary</MenuItem>
            <MenuItem value="Shopping">Shopping</MenuItem>
            <MenuItem value="Entertainment">Entertainment</MenuItem>
          </Select>
        </FormControl>
      </Grid2>

      <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
        <InputLabel variant="filled">Amount</InputLabel>
        <br />
        <FormControl fullWidth>
          <TextField
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </FormControl>
      </Grid2>

      <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
        <InputLabel variant="filled">Date</InputLabel>
        <br />
        <FormControl fullWidth>
          <TextField
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormControl>
      </Grid2>

      <Button
        color="primary"
        className={classes.button}
        variant="contained"
        onClick={handleSubmit}
        fullWidth
      >
        <Typography variant="h4">Create</Typography>
      </Button>
    </Grid2>
  );
};

export default Form;
