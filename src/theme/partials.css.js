import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingBottom: theme.spacing(1.5)
        },
        footer: {
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            background: theme.palette.primary.light,
            color: theme.palette.common.white,
            padding: theme.spacing(1.5),
            marginTop:"50px"
        },
        text: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        },
    }),
);

export default useStyles;