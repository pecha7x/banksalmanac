import React, {PropTypes} from 'react';
import Avatar from 'material-ui/Avatar';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {grey400, grey300, black} from 'material-ui/styles/colors';
import {typography} from 'material-ui/styles';
import Wallpaper from 'material-ui/svg-icons/device/wallpaper';

const RecentlyOperations = (props) => {

  const styles = {
    subheader: {
      fontSize: 20,
      fontWeight: typography.fontWeightLight,
      backgroundColor: grey300,
      color: black,
      lineHeight: '40px'
    }
  };

  const iconButtonElement = (
    <IconButton
      touch={true}
      tooltipPosition="bottom-left"
    >
      <MoreVertIcon color={grey400} />
    </IconButton>
  );

  const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem>View</MenuItem>
    </IconMenu>
  );

  return (
    <Paper>
      <List>
        <Subheader style={styles.subheader}>Recent Operations</Subheader>
        {props.data.map(item =>
          <div key={item.id}>
            <ListItem
              leftAvatar={<Avatar icon={<Wallpaper />} />}
              primaryText={item.title}
              secondaryText={item.text}
              rightIconButton={rightIconMenu}
            />
            <Divider inset={true} />
          </div>
        )}
      </List>
    </Paper>
  );
};

RecentlyOperations.propTypes = {
  data: PropTypes.array
};

export default RecentlyOperations;
