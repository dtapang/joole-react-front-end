import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function ProductAccordion(props) {
    const classes = useStyles();

    const sections = Array.from(props.accordionSections.sections);
    console.log(sections);

    const accordionItems = sections.map(
        (d) =>
            (<Accordion key={"Accordion-"+d.name} component={'span'} variant={'elevation'}>
                <AccordionSummary
                                        key={props.key}
                    component={'span'} variant={'body2'}
                >
                    <Typography key={d.name+"Typo"} className={classes.heading} component={'span'} variant={'body2'}>{d.name}</Typography>
                </AccordionSummary>
                <AccordionDetails key={d.name+"AccordionDetails"} component={'span'} variant={'body2'}>
                    <Typography key={d.name+"typography"} component={'span'} variant={'body2'}>
                        {d.content}
                    </Typography>
                </AccordionDetails>
            </Accordion>)
    );




    return (
        <div key={"productsAccordion"}  className={classes.root}>
            {accordionItems}
        </div>
    );
}
