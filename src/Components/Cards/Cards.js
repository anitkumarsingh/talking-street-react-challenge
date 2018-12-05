import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import Buttons from '../Buttons/Buttons';
import IMG from '../../Images/Darjeeling-Hot-Momos-Colourful-veg-momos-Koramangala-Bangalore.jpg';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
      marginTop:-100
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={24}>
      <Grid item xs={6}>
      <Card className={classes.card}>
       
        <CardHeader
          // avatar={
          //   <Avatar aria-label="Recipe" className={classes.avatar}>
          //     R
          //   </Avatar>
          // }
          action={
            <IconButton>
              {/* <MoreVertIcon /> */}
              {/* <ExpandMoreIcon /> */}
              
        
            </IconButton>
          }
          title="Darjeeling Hot Momos"
          subheader="Koramangala, Bengaluru"
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              "Streets are an integral part of how a city and its culture has evolved."
            </Typography>
            <Typography paragraph> Must-try Dishes</Typography>
            <Typography paragraph>
            Filter coffee, Mini Idly, Keer Vada, Sabudan Vada, Special Kozhukattal
            </Typography>
          </CardContent>
        </Collapse>
        
        <CardMedia
          className={classes.media}
          image={IMG}
          title="Darjeeling Hot Momos"
         
        />
        <CardContent>
          <Typography component="p">
            This stall looks like any other momo stall but has a lot more to offer. Saneeta serves a wide varity of momos with different stuffings.Although there is only one Non-veg momo(chicken),which is also great, this stall is a treat for the vegetarians.
            There are kinds of veg momos with a different stuffing in each, to add to that, they add natural colouring from vegetables to the dough to
            make them more appealing and nutritious.
          </Typography>
        </CardContent>
      </Card>
      </Grid>
      <Grid item xs={6}>
      <Card className={classes.card}>
       <CardContent>
         <Typography component="p">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         </Typography>
         <Typography component="h2" variant="h6" gutterBottom> Attending curators</Typography>
            <Typography paragraph>
            Filter coffee, Mini Idly, Keer Vada, Sabudan Vada, Special Kozhukattal
            </Typography>
            <Buttons/>
       </CardContent>
       
     </Card>
        </Grid>
      </Grid>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);
