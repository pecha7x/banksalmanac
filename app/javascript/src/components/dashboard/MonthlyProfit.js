import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import {black, grey300, greenA700} from 'material-ui/styles/colors';
import {BarChart, Bar, ResponsiveContainer, XAxis} from 'recharts';
import GlobalStyles from '../../styles';

const MonthlyProfit = (props) => {

  const styles = {
    paper: {
      height: 150
    },
    div: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '95%',
      height: 85
    },
    header: {
      color: black,
      backgroundColor: grey300,
      padding: 10,
      fontSize: 20,
      lineHeight: '20px'
    }
  };

  return (
    <Paper style={styles.paper}>
      <div style={{...GlobalStyles.title, ...styles.header}}>Monthly Profit</div>
      <div style={styles.div}>
        <ResponsiveContainer>
          <BarChart data={props.data} >
            <Bar dataKey="uv" fill={greenA700}/>
            <XAxis dataKey="name" stroke="none" tick={{fill: black}}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Paper>
  );
};

MonthlyProfit.propTypes = {
  data: PropTypes.array
};

export default MonthlyProfit;
