import { makeStyles } from '@mui/styles';
import { BorderBottom } from '@mui/icons-material';

export default makeStyles(() => ({
	income: {
		border: '3px solid  rgba(0, 0, 0, 0.2)',
		backgroundColor: '#f8f8f8',
		marginLeft: '-20px',
		shadows: '24px 24px 24px 24px rgba(0, 0, 0, 1)',
	},

	expense: {
		border: '3px solid rgba(0, 0, 0, 0.2)',
		backgroundColor: ' #f8f8f8 ',
		marginLeft: '-20px',
		shadows: '24px 24px 24px 24px rgba(0, 0, 0, 1)',
	},
}));
