import type { SxProps, Theme } from "@mui/material/styles";

// Migrated off the deprecated @mui/styles `makeStyles` to MUI v6's `sx` API.
// Returns a map of `SxProps` objects; apply with `sx={classes.<key>}`.
const useStyles = (): Record<string, SxProps<Theme>> => ({
  income: {
    border: "3px solid  rgba(0, 0, 0, 0.2)",
    backgroundColor: "#f8f8f8",
    marginLeft: "-20px",
    shadows: "24px 24px 24px 24px rgba(0, 0, 0, 1)",
  } as SxProps<Theme>,

  expense: {
    border: "3px solid rgba(0, 0, 0, 0.2)",
    backgroundColor: " #f8f8f8 ",
    marginLeft: "-20px",
    shadows: "24px 24px 24px 24px rgba(0, 0, 0, 1)",
  } as SxProps<Theme>,
});

export default useStyles;
