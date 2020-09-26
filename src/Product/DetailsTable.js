import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name) {
    return { name};
}

const rows = [
    createData(`Airfoils – Moso bamboo – 60” diameter`),
    createData(`Airfoil Finishes – Caramel Bamboo or Cocoa Bamboo`),
    createData(`Hardware Finishes – Satin Nickel, Oil-Rubbed Bronze, Black or White`),
    createData(`Motor – EC motor with digital inverter drive`),
    createData(`Exceeds ENERGY STAR fan efficiency requirements by up to 1200%`),
    createData(`Controls – Remote control Remote control (included), Haiku Home mobile app, Haiku Wall Control (optional), or Amazon Alexa-enabled devices (optional)`),
    createData(`Onboard Sensors – Ambient and surface temperature, relative humidity, and passive infrared sensors enable SenseME technology. Technology lets you automate your fan’s operation`),
    createData(`to maximize convenience and energy savings`),
    createData(`Environment – Indoor use only.`),
    createData(`Accessories – Haiku Light Kit and Haiku Wall Control. See respective spec sheets for details. A Tall Ceiling Kit and Stabilizer Kit are available for ceilings 14 feet (4.3 meters) or taller.`),
    createData(`Patented LED light module (optional) seamlessly integrates with the body of the fan`),
    createData(`Made in the U.S.A.`),
];


const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function DetailsTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left" >SERIES INFORMATION</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>

                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
