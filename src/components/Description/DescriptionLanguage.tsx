import React, {FunctionComponent} from 'react';
import Keys from "@hotels/translation-keys";
import Translation from "@hotels/translation";
import { Grid } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Status } from '../../model/search';
import Skeleton from 'react-loading-skeleton';


export interface DescriptionLanguageProps {
    languages: Array<SpokenLanguagesProps>;
    status: string;
}

export interface SpokenLanguagesProps {
    id: string;
    name: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "20px",
    },
    checkTitle: {
      marginBottom: "0px",
      fontWeight: 700,
      marginTop: 20
    },
    skeleton:{
        '& span': {
            marginTop: 10
          }
    }
  }),
);


const DescriptionLanguage: FunctionComponent<DescriptionLanguageProps> = (props) => {
    const classes = useStyles();

  const spokenLanguages = props.languages.map(languages => 
    <Grid item xs={12} sm={6} md={4} lg={3} key={languages.id}>{languages.name}.</Grid>);    
    return (
        <Grid container justify="flex-start" spacing={2}>
              <Grid item xs={12} className={classes.checkTitle}><Translation tkey={Keys.detail.accommodation_languages_spoken}/></Grid>
              {props.status === Status.LOADING ? <Grid item xs={12} className = {classes.skeleton}><Skeleton height={30} count={3}/> </Grid>: spokenLanguages}
        </Grid>
    );
}
export default DescriptionLanguage;