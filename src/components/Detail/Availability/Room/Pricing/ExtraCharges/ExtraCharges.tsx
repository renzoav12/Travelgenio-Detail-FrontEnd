import React, {FunctionComponent, useState} from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Price } from '../Pricing';
import Popover from '@material-ui/core/Popover';

export interface ExtraChargesProps {
  total: Price;
  description: string;
  details: Array<ExtraChargeDetail>;
}

export interface ExtraChargeDetail {
  price: Price;
  description: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    extraCharge: {
      cursor: "pointer"
    }
  }),
);

const ExtraCharges: FunctionComponent<ExtraChargesProps> = props => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const extraChargeDescription = props.description ? props.description : "";
  
const detailsDescriptions = props.details ? props.details.map((detail, index) => {return <Box key={index}>{detail.description}</Box>}) : null;

  return <Box>
    <Box className={classes.extraCharge} onClick={handleClick}>{extraChargeDescription}</Box>
    
    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        {detailsDescriptions}
      </Popover>
  </Box>;
}

export default ExtraCharges;
