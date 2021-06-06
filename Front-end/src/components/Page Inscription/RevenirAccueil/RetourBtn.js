import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function RetourBtnInscription() {
    const classes = useStyles();
    return (
    <div className={classes.root}>
        <Link to='/'>
            <Button color="primary">
                Revenir à l'Accueil
            </Button> {/* ou on peut utiliser : variant="contained" color="primary" */}
        </Link>
    </div>
    );
}