import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import {PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import GlobalStyles from '../../styles';
import {typography} from "material-ui/styles";
import {black, grey300} from "material-ui/styles/colors";

const BankUsage = (props) => {

  const styles = {
    paper: {
      minHeight: 344,
    },
    pieChartDiv: {
      height: 290,
      textAlign: 'center'
    },
    header: {
      display: 'block',
      boxSizing: 'border-box',
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
      <span style={styles.header}>Bank's Usage</span>

      <div style={GlobalStyles.clear}/>

      <div className="row">

        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">
          <div style={styles.pieChartDiv}>
            <ResponsiveContainer>
              <PieChart >
                <Pie
                  innerRadius={80}
                  outerRadius={130}
                  data={props.data}
                  fill="#8884d8">
                  {
                    props.data.map((item) => <Cell key={item.name} fill={item.color}/>)
                  }
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <div style={styles.legend}>
            <div style={styles.legend}>
              <List>
                {props.data.map((item) =>
                  <ListItem
                    key={item.name}
                    leftAvatar={
                      <Avatar icon={item.icon}
                              backgroundColor={item.color}/>
                    }>
                    {item.name}
                  </ListItem>
                )}
              </List>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

BankUsage.propTypes = {
  data: PropTypes.array
};

export default BankUsage;
