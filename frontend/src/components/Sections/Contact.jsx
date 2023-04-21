import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Select from '@mui/material/Select';
import TimeDatePicker from "../Elements/TimeDatePicker"
import Slider from '@mui/material/Slider';

import { API_URL } from "../../constant/apiConstant";
import { FilledInput, FormControl, Input, InputLabel, TextField } from "@mui/material";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  const [value, setValue] = React.useState(getCurrentYear);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const [vmake, setVmake] = React.useState('');

  const handleChange = (event) => {
    setVmake(event.target.value);
  };


  const [name, setName] = useState([ ])
  const [email, setEmail] = useState([ ])
  const [phone, setPhone] = useState([ ])
  const [service, setService] = useState([ ])
  const [vehicleYear, setVehicleYear] = useState([ ])
  const [vehicleMake, setVehicleMake] = useState([ ])

  
function sendClient() { 
  let data = {
    "nev":name,
    "telefonszam":phone,
    "email":email,
    "auto":1,
    "szolgaltatas":[1, 2]
    }
  
  fetch(API_URL+"megrendelo",{
    method: 'POST',
    headers: {
                'Content-Type': "application/json; charset=utf-8",
    },
    body: JSON.stringify(data)
        })
        .then(response => response.json())
        .catch(error =>{
        console.log(error)
})}

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Book an appointment</h1>
            <p className="font13">
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <FormControl fullWidth>
                <TextField id="name" label="Name" onChange={(event) => {setName(event.target.value)}} variant="standard" />
                <TextField id="email" type={"email"}  label="Email" onChange={(event) => {setEmail(event.target.value)}} variant="standard" />
                <TextField id="phone" type={"phone"} label="Phone" onChange={(event) => {setPhone(event.target.value)}} variant="standard" />
                <TextField id="service" label="Service" onChange={(event) => {setService(event.target.value)}} variant="standard" />
                <Input 
                  id="vehicleYear" 
                  value={value}
                  label="Vehicle year"
                  disabled
                  size="small"
                  variant="filled"
                  inputProps={{
                    step: 1,
                    min: 1950,
                    max: 2023,
                    }
                  }
                  onChange={(event) => {setVehicleYear(event.target.value)}}
                />
                <Slider
                  value={typeof value === 'number' ? value : 0}
                  onChange={handleSliderChange}       
                  size="small"
                  defaultValue={2023}
                  marks
                  min={1950}
                  max={2023}
                  >
              </Slider>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Vehicle make</InputLabel>
                <Select
                  id="vehicleMake"
                  label="Vehicle make"
                  value={vmake}
                  size="10px"
                  onChange={(event) => {setVehicleMake(event.target.value)}}
                  >
                </Select>
              </FormControl>
              <SumbitWrapper className="flex">
                <ButtonInput type="submit" value="Book appointment" className="pointer animate radius8" onClick={() => {sendClient()}} style={{ maxWidth: "220px" }} />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <CalendarBox>
                <TimeDatePicker />
              </CalendarBox>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const CalendarBox = styled.div`
    align-self: right;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;





