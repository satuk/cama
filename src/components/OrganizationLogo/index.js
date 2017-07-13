/**
 * Created by satuk on 13.07.17.
 */
import React from "react";
import {gradients} from "../../utils/theme";


const OrganizationLogo = (props) => {
  let imageStyle = Object.assign(
    {},
    {
      padding: 20,
      width: 125,
      height: 125,
      objectFit: 'scale-down',
      background: gradients.dark3ToDark2,
      margin: 20,
    },
    props.style,
  );

  return (
    <img src={props.src} alt={props.alt} style={imageStyle}/>
  );
};

export default OrganizationLogo;
