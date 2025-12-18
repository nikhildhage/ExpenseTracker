import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

export default makeStyles((theme: Theme) => ({
	main: {
		backgroundColor: '#fafafa',
		marginTop: 0,
		paddingTop: 0,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	cardContent: {
		paddingTop: 0,
	},
	divider: {
		margin: '20px 20px, 0, 0',
		padding: '0',
	},
}));
