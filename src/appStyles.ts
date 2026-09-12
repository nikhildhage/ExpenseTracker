import { useTheme } from "@mui/material/styles";
import type { SxProps, Theme } from "@mui/material/styles";

// Migrated off the deprecated @mui/styles `makeStyles` to MUI v6's `sx` API.
// Returns a map of `SxProps` objects; apply with `sx={classes.<key>}`.
//
// Breakpoint note (MUI v6.5.0, default values xs 0 / sm 600 / md 900 px):
//   up("sm")   -> @media (min-width:600px)      screens >= sm
//   down("md") -> @media (max-width:899.95px)   screens <  md
// These rules were written for MUI v4, where `down("sm")` meant "below md".
// Since v5, `down(key)` is exclusive of `key` itself, so the v4 `down("sm")`
// rules are expressed as `down("md")` to keep the original behaviour.
// See https://mui.com/material-ui/migration/v5-component-changes/ (Theme >
// Breakpoints) and https://v6.mui.com/material-ui/customization/breakpoints/.
const useStyles = (): Record<string, SxProps<Theme>> => {
  const theme = useTheme();
  return {
    // Hidden on sm and wider.
    desktop: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    // Hidden below md.
    mobile: {
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    main: {
      [theme.breakpoints.up("sm")]: {
        paddingBottom: "5%",
      },
    },
    last: {
      [theme.breakpoints.down("md")]: {
        marginBottom: theme.spacing(2),
        paddingBottom: "200px",
      },
    },
  };
};

export default useStyles;
