import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import AxleIcon from "../../assets/svg/Services/AxleIcon";
import BreakIcon from "../../assets/svg/Services/BreakIcon";
import WheelIcon from "../../assets/svg/Services/WheelIcon";
import CheckMark from "../../assets/svg/Checkmark";

import { API_URL } from '../../constant/apiConstant';

export default function PricingTable({ icon, priceFrom, title, text, action }) {
  let getIcon;

  switch (icon) {
    case "axle":
      getIcon = <AxleIcon />;
      break;
    case "break":
      getIcon = <BreakIcon />;
      break;
    case "wheel":
      getIcon = <WheelIcon />;
      break;
    default:
      getIcon = "";
      break;
  }

  const [services, setServices] = useState([ ])

  // useEffect(() => {
  //   fetch(API_URL+"szolgaltatasok")
  //   .then(res => res.json())
  //   .then(data => {
  //     setServices(data)
  //     console.log(data)
  //   })
  // }, [ ])

  return (
    <Wrapper className="whiteBg radius8 shadow">
      <div className="flexSpaceCenter">
        {getIcon}
        <p style={{ fontVariant: "all-small-caps" }} className="font30 extraBold">{priceFrom}</p>
      </div>
      <div style={{ margin: "30px 0" }}>
        <h4 style={{ fontVariant: "all-small-caps" }} className="font30 extraBold">{title}</h4>
        <p className="font13">{text}</p>
      </div>
      <div>
        {services
          ? services.map((item, index) => (
            <div>
              {item.neve}
            </div>
            ))
          : null}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
