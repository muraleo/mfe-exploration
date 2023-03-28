import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MaterialLink from '@material-ui/core/Link';
import { Create, Search, ListAlt, Person, Link as LinkIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MaterialLink component={Link} to="/" color="inherit">
        MFE Hackathon Team
      </MaterialLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    a: {
      textDecoration: 'none',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardIcon: {
    marginBototm: '10px',
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

// TODO: Is there a better way to share these links
// or maintain a centralized way to reference them?
const cards = [
  {
    text: "Form",
    url: "/form",
    description: "Project Delivery team owns this app",
    iconComponent: Create
  },
  {
    text: "Pitchboard",
    url: "/pitchboard",
    description: "Integrated services owns this app",
    iconComponent: ListAlt
  },
  {
    text: "Search",
    url: "/search",
    description: "Search team owns this app",
    iconComponent: Search
  },
  {
    text: 'Expert',
    url: '/expert',
    description: "You guessed it... Expert team owns this app",
    iconComponent: Person
  },
  {
    text: 'Pricing',
    url: '/pricing',
    description: "A demo page that is part of the same app as the current (home) page"
  },
];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Dashboard
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Check out our different pages below.<br/>Each is a standalone app!
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card, idx) => (
              <Grid item key={card.url} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.cardContent}>
                    <div className={classes.cardIcon}>
                      {card.iconComponent ? <card.iconComponent className={classes.cardIcon} /> : <LinkIcon />}
                    </div>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.text}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={card.url}>
                      <Button size="small" color="primary">
                        View
                      </Button>
                    </Link>
                    <Link to={{
                      pathname: `/details/${idx}`,
                      state: card,
                    }}>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
