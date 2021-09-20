import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import front from '../pictures/front.jpg'
import What from './What';
import When from './When';
import How from './How';
import Who from './Who';
import beer from '../pictures/beer.jpg';
import wine from '../pictures/wine.jpg';
import beertap from '../pictures/beertap.jpg';




const useStyles = makeStyles((theme) => ({


    //Jos mobiililla, laitetaan sinne ilman backgroundia

    div: {

        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',

        [theme.breakpoints.down('sm')]:{
            backgroundImage: "url(" + front + ")",
            backgroundSize: '200vh',
        },

        [theme.breakpoints.up('md')]: {
            backgroundImage: "url(" + front + ")",
            backgroundSize: '200vh',
        },
        [theme.breakpoints.up('lg')]: {
            backgroundImage: "url(" + front + ")",
            backgroundSize: '200vh',
            padding: '6vh',
        },
    },

    div2: {

        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',

        [theme.breakpoints.down('sm')]: {
            backgroundImage: "url(" + beer + ")",
            backgroundSize: '300vh',
        },

        [theme.breakpoints.up('md')]: {
            backgroundImage: "url(" + beer + ")",
            backgroundSize: '200vh',
        },
        [theme.breakpoints.up('lg')]: {
            backgroundImage: "url(" + beer + ")",
            backgroundSize: '200vh',
            padding: '6vh',
        },
    },

    div3: {

        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',

        [theme.breakpoints.down('sm')]: {
            backgroundImage: "url(" + wine + ")",
            backgroundSize: '300vh',
        },
        [theme.breakpoints.up('md')]: {
            backgroundImage: "url(" + wine + ")",
            backgroundSize: '200vh',
        },
        [theme.breakpoints.up('lg')]: {
                backgroundImage: "url(" + wine + ")",
                backgroundSize: '200vh',
                padding: '6vh',
        },
    },

        div4: {

            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',

            [theme.breakpoints.down('sm')]: {
                backgroundImage: "url(" + beertap + ")",
                backgroundSize: '300vh',
            },

            [theme.breakpoints.up('md')]: {
                backgroundImage: "url(" + beertap + ")",
                backgroundSize: '200vh',
            },
            [theme.breakpoints.up('lg')]: {
                backgroundImage: "url(" + beertap + ")",
                backgroundSize: '200vh',
                padding: '6vh',
            },
        },
        test: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            [theme.breakpoints.up('md')]: {
                paddingBottom: 350,
            },
            [theme.breakpoints.up('xl')]: {
                paddingBottom: 500,
            }
        },
    }));




export default function FrontPage() {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.div}>
                <div className={classes.test}>
                    <What />
                </div>
            </div>
            <div className={classes.div2}>
                <div className={classes.test}>
                    <How />
                </div>
            </div>
            <div className={classes.div3}>
                <div className={classes.test}>
                    <When />
                </div>
            </div>
            <div className={classes.div4}>
                <div className={classes.test}>
                    <Who />
                </div>
            </div>

        </div>
    );
}