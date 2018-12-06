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
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

import Buttons from '../Buttons/Buttons';
import Data from '../../DataSource/Data';
import IMG from '../../Images/Darjeeling-Hot-Momos-Colourful-veg-momos-Koramangala-Bangalore.jpg';

const styles = theme => ({
  card: {
    maxWidth: 400,
    textAlign:'left',
    boxShadow: '12px 15px 20px rgba(0, 0, 0, 0.1)',
    transition: '0.2s box-shadow ease-in-out, 0.2s background-color ease-in-out, 0.2s border-color ease-in-out',
    borderTop:'2px solid #ebebeb',
    borderLeft:'2px solid #ebebeb',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'30px'
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
});

class Cards extends React.Component {
  constructor(){
    super();
    this.state ={
      expanded: false,
      Datas:Data
    }
    console.log(Data);
  }
  

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    const items =this.state.Datas.foods.map((item,i)=>{
      return(
       {
         'Title':item.title,
         'Location':item.Location,
         'shop-quotes':item["shop-quotes"], 
         'option-title':item["option-title"],
         'options':item.options,
         'description':item.description
       }
      )
    }); 
    console.log(items[0]["shop-quotes"]);
    return (
      <Grid container spacing={20}>
        <Grid item xs={12} lg={6} xl={6} md={6} sm={6} >
            <Card className={classes.card}>
              <CardHeader
                title={items[0].Title}
                subheader={items[0].Location}
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
                <CardContent style={{backgroundColor:'#ebebeb'}}>
                      <Typography paragraph>
                         <i>"{items[0]["shop-quotes"]}"</i>
                      </Typography>
                      <Typography component="h6" variant="h6">{items[0]["option-title"]}</Typography>
                      <Typography paragraph>
                          {items[0].options}
                      </Typography>
                </CardContent>
              </Collapse>

              <CardMedia
                className={classes.media}
                image={IMG}
                title={items[0].Title}
              />
              <CardContent>
                <Typography component="p">
                  {items[0].description}
                </Typography>
              </CardContent>
            </Card>
        </Grid>
      <Grid item xs={12} lg={6} xl={6} md={6} sm={6}>
            <Card className={classes.card}>
            <CardContent>
              <Typography component="p">
                  {items[1].description}
              </Typography>
              <hr style={{marginTop:'30px',display:'block', height:'1px',border:'0',borderTop:'1px solid #ebebeb'}}/>
              <Typography component="h6" variant="h6" gutterBottom>{items[1]["option-title"]}</Typography>
                  <Typography paragraph>
                    {items[1].options}
                  </Typography>
                  <Buttons/>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

Cards.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Cards);
