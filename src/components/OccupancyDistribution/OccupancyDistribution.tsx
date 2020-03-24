import React, {FunctionComponent} from 'react';
import { SearchBoxOccupancyState } from '@hotels/search-box';
import { Grid, Box } from '@material-ui/core';
import { Person }  from '@material-ui/icons';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { BedGroup } from '../Detail/Availability/Room/Room';

export const serializeOccupancy = (occupancy: SearchBoxOccupancyState) : string => {
  return occupancy.rooms.map(room => room.adults + ((room.childrenAges.length === 0) ? "" : "-") +room.childrenAges.join("-")).join("!");
}

export const parseOccupancy = (searchOccupancy: string): SearchBoxOccupancyState => {
  let rooms = searchOccupancy.split("!")
      .map(room => {
        let guests = room.split("-"); 
        return {
          adults: parseInt(guests[0]),
          childrenAges: guests.slice(1,guests.length).map(age => parseInt(age))
        };
      });
  return { rooms };
}

export interface OccupancyProps {
  occupancy: SearchBoxOccupancyState;
  bedGroup: BedGroup;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    room: {
      verticalAlign: "middle",
      display: "flex"
    },
    roomText: {
      paddingTop: 4
    },
    people: {
      marginLeft: 5
    }
  })
);

const OccupancyDistribution: FunctionComponent<OccupancyProps> = props => {
  
  const classes = useStyles();

  const rooms: Array<number> = props.occupancy.rooms.map(room => room.adults + room.childrenAges.length);
  
  const guests = (quantity: number): JSX.Element => {
    let people: Array<JSX.Element> = [];

    for(let index = 0; index < quantity; index++) {
      people.push(<Person key={index}/>)
    }

  return <Box className={classes.room}><Box className={classes.roomText}>1 habitación con {props.bedGroup.description} para</Box> <Box className={classes.people}>{people}</Box></Box>;
  }

  return <Grid container>
    {rooms.map((room, index) => <Grid item xs={12} key={index}>{guests(room)}</Grid>)}
  </Grid>;
}

export default OccupancyDistribution;

