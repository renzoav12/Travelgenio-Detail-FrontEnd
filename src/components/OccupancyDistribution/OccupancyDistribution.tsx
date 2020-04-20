import React, { FunctionComponent } from 'react';
import { SearchBoxOccupancyState } from '@hotels/search-box';
import { Grid } from '@material-ui/core';
import { BedGroup } from '../Detail/Availability/Room/Room';
import Occupancy from '@hotels/occupancy';


export const serializeOccupancy = (occupancy: SearchBoxOccupancyState): string => {
  return occupancy.rooms.map(room => room.adults + ((room.childrenAges.length === 0) ? "" : "-") + room.childrenAges.join("-")).join("!");
}

export const parseOccupancy = (searchOccupancy: string): SearchBoxOccupancyState => {
  let rooms = searchOccupancy.split("!")
    .map(room => {
      let guests = room.split("-");
      return {
        adults: parseInt(guests[0]),
        childrenAges: guests.slice(1, guests.length).map(age => parseInt(age))
      };
    });
  return { rooms };
}

export interface OccupancyProps {
  occupancy: SearchBoxOccupancyState;
  bedGroup: BedGroup;
}
 

const OccupancyDistribution: FunctionComponent<OccupancyProps> = props => {

  return <Grid container>
    {props.occupancy.rooms.map((room,index) => 
    <Grid item xs={12} key={index}> 
       <Occupancy  adults={room.adults}
        childrenAges={room.childrenAges}
        description={props.bedGroup.description}
        showText= {false}>
      </Occupancy>
    </Grid>)} </Grid>;
}

export default OccupancyDistribution;

