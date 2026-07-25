import { useTheme } from "@mui/material/styles";
import type { SxProps, Theme } from "@mui/material/styles";

// Migrated off the deprecated @mui/styles `makeStyles` to MUI v6's `sx` API.
// Returns a map of `SxProps` objects; apply with `sx={classes.<key>}`.
const useStyles = (): Record<string, SxProps<Theme>> => {
  const theme = useTheme();
  return {
    desktop: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    mobile: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    main: {
      [theme.breakpoints.up("sm")]: {
        paddingBottom: "5%",
      },
    },
    last: {
      [theme.breakpoints.down("sm")]: {
        marginBottom: theme.spacing(2),
        paddingBottom: "200px",
      },
    },
  };
};

export default useStyles;
