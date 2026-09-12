import type { SxProps, Theme } from "@mui/material/styles";

// Migrated off the deprecated @mui/styles `makeStyles` to MUI v6's `sx` API.
// Returns a map of `SxProps` objects; apply with `sx={classes.<key>}`.
const useStyles = (): Record<string, SxProps<Theme>> => ({
  radioGroup: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "-10px",
  },
  button: {
    marginTop: "20px",
    backgroundColor: "skyblue",
    color: "white",
  },
  Grid2: {
    //paddingTop: 0,
    //paddingLeft: "20px",
    //paddingRight: "20px",
  },
});

export default useStyles;
