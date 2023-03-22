import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
    return createStyles({
        bar: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2)
            }
        }
    })
})

export default () => {
    const classes = useStyles();

    return (
        <div className={classes.bar}>
            Loading
        </div>
    )
}