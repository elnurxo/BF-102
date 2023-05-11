import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useBasketContext } from '../../context/BasketContext';

const Footer = () => {
  const [value, setValue] = React.useState(0);
  const{basket} = useBasketContext();
  return (
    <Box style={{'boxShadow': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px','borderRadius':'10px',width:'450px',position:'fixed',bottom:0,left:'50%',transform:'translate(-50%,-50%)'}}>
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      {/* find me */}
      <BottomNavigationAction label={`Favorites ${basket.length}`} icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  </Box>
  )
}

export default Footer