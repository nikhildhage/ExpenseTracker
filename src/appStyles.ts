import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles((theme: any) => ({
	desktop: {
		[theme.breakpoints.up('sm')]: {
			display: 'none',
		},
	},
	mobile: {
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	},
	main: {
		[theme.breakpoints.up('sm')]: {
			paddingBottom: '5%',
		},
	},
	last: {
		[theme.breakpoints.down('sm')]: {
			marginBottom: theme.spacing(2),
			paddingBottom: '200px',
		},
	},
	Grid2: {
		'& > *': {
			margin: theme.spacing(3),
		},
	},
}));
