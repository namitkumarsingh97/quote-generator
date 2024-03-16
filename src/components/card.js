import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 25 }} color="text.secondary" gutterBottom>
        Quote of the Day
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        variant="outlined"
        sx={{
          backgroundColor: 'LightBlue',
          color: 'Black',
          opacity: 0.6,
        }}
      >
        {card}&quot; {props.name} &quot; <br />
        <br />- {props.hisName}
        <br />
        <br />
      </Card>
    </Box>
  );
}

OutlinedCard.propTypes = {
  name: PropTypes.string,
  hisName: PropTypes.string,
};
