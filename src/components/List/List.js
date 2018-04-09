import React from 'react';
import {View} from 'react-native';

import ListItem from '../ListItem/ListItem'

const list = (props) => {

   return props.places.map((place)=>(
    <ListItem  placeName={place} />
  ));
  }



export default list;
