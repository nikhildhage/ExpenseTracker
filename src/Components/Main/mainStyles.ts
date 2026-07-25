import { useTheme } from "@mui/material/styles";
import type { SxProps, Theme } from "@mui/material/styles";

// Migrated off the deprecated @mui/styles `makeStyles` to MUI v6's `sx` API.
// Returns a map of `SxProps` objects; apply with `sx={classes.<key>}`.
const useStyles = (): Record<string, SxProps<Theme>> => {
  const theme = useTheme();
  return {
    main: {
      backgroundColor: "#fafafa",
      marginTop: 0,
      paddingTop: 0,
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    cardContent: {
      paddingTop: 0,
    },
    divider: {
      margin: "20px 20px, 0, 0",
      padding: "0",
    },
  };
};

export default useStyles;
