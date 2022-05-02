import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {black, grey400, grey300} from 'material-ui/styles/colors';
import {LineChart, Line, ResponsiveContainer} from 'recharts';
import {typography} from 'material-ui/styles';

const Withdraws = (props) => {

  const styles = {
    paper: {
      // backgroundColor: grey300,
      height: 150
    },
    div: {
      height: 95,
      padding: '5px 15px 0 15px'
    },
    header: {
      fontSize: 20,
      fontWeight: typography.fontWeightLight,
      color: black,
      backgroundColor: grey300,
      padding: 10,
      lineHeight: '20px'
    }
  };

  return (
    <Paper style={styles.paper}>
      <div style={{...styles.header}}>Withdraws</div>
      <div style={styles.div}>
        <ResponsiveContainer >
          <LineChart data={props.data}>
            <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

Withdraws.propTypes = {
  data: PropTypes.array
};

export default Withdraws;
