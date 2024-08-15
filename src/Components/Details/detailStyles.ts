import { makeStyles } from '@material-ui/core';
import { BorderBottom } from '@material-ui/icons';
export default makeStyles(() => ({
	income: {
		borderBottom: '5px solid rgba(0, 255, 0, 0.5)',
		backgroundColor: 'white',
		marginLeft: '-20px',
		shadows: 'none',
	},

	expense: {
		borderBottom: '5px solid rgba(255, 0, 0, 0.5)',
		backgroundColor: 'white',
		marginLeft: '-20px',
	},
}));
