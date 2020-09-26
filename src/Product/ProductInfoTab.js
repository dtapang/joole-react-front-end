import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DetailsTable from "./DetailsTable";
import GenericTable from "./GenericTable";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    span:{
        display: "flex"
    }
}));

function createData(name, value) {
    return { name, value};
}

const descriptionRows = [
    createData(`Manufacturer`, `Big Ass`),
    createData(`Series`, ` Haiku H`),
    createData(`Model`, ` S3150-S0-BC-04-01-C-01`)
];

const typeRows = [
    createData(`Use Type`, ` Commercial`),
    createData(`Application`, ` Indoor`),
    createData(`Mounting Location`, ` Roof`),
    createData(`Accessories`, `With light`),
    createData(`Model year`, ` 2016`)
];

const salesRepRows = [
    createData(`Name`, ` Marty McFly`),
    createData(`Phone`, ` +1 650 889 6222`),
    createData(`Email`, ` marty@mcfly.com`),
    createData(`Web`, ` http://www.test.com`)
];

const manufacturerRows = [
    createData(`Department`, ` Technical Support`),
    createData(`Phone`, ` +1 800 466 8200`),
    createData(`Email`, ` techsupport@bigass.com`),
    createData(`Web`, ` http://www.bigassfans.com`)
];

const techRows =[
    createData(`Airflow (CFM)`, `  5,467`),
    createData(`Power (W)`, `  Min 1.95 Max 21.14`),
    createData(`Operating voltage (VAC)`, `  Min 100 Max 240`),
    createData(`Fan speed (RPM)`, `  Min 35 Max 200`),
    createData(`Number of fan speeds`, `  7`),
    createData(`Sound at max speed (dBA)`, `  35`),
    createData(`Fan sweep diameter (in)`, `  60`),
    createData(`Height (in)`, `  Min 12.3 Max 57`),
    createData(`Weight (lbs) `, ` 13`)
];
/*
*
*TYPE
createData(`Use Type`, ` Commercial`),
*
createData(`Airflow (CFM)`, `  5,467`),
createData(`Power (W)`, `  Min 1.95 Max 21.14`),
createData(`Operating voltage (VAC)`, `  Min 100 Max 240`),
createData(`Fan speed (RPM)`, `  Min 35 Max 200`),
createData(`Number of fan speeds`, `  7`),
createData(`Sound at max speed (dBA)`, `  35`),
createData(`Fan sweep diameter (in)`, `  60`),
createData(`Height (in)`, `  Min 12.3 Max 57`),
createData(`Weight (lbs) `, ` 13`)
*
* */

export default function ProductInfoTab(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Summary" {...a11yProps(0)} />
                    <Tab label="Details" {...a11yProps(1)} />
                    <Tab label="Documents" {...a11yProps(2)} />
                    <Tab label="Contact" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <h4>Product Summary</h4>

                <span className={classes.span}>

                <div>
                    <GenericTable rows={descriptionRows} title={"DESCRIPTION"}/>
                    <GenericTable rows={typeRows} title={"TYPE"}/>
                </div>

                <GenericTable rows={techRows} title={"TECHNICAL SPECIFICATIONS"}/>
                </span>
            </TabPanel>
            <TabPanel value={value} index={1} >
                <h4>Product Details</h4>

                <DetailsTable />
            </TabPanel>

            <TabPanel value={value} index={2}>
                <h4>Documents</h4>

            </TabPanel>
            <TabPanel value={value} index={3}>
                <h4>Contacts</h4>
                <span className={classes.span}>
                    <GenericTable rows={salesRepRows} title={"SALES REPRESENTATIVE"}/>
                    <GenericTable rows={manufacturerRows} title={"MANUFACTURER"}/>
                </span>

            </TabPanel>

        </div>
    );
}
