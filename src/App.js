import React from "react";

import "./App.css";

import Countdown from "./Count2.js";
import YoutubeBackground from "react-youtube-background";
import {
  Button,
  TextField,
  Typography,
  Grid,
  IconButton,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const ValidationTextField = withStyles({
  root: {
    // width: "20.8vw",
    fontSize: "1.5vw",
    "& input:valid + fieldset": {
      border: "0.35vw solid #55B563",
      borderWidth: "0.139vw",
      borderRadius: "2.2vw",
    },
    "& input:invalid + fieldset": {
      border: "0.4vw solid #55B563",
      borderWidth: "0.139vw",
      borderRadius: "32px",
    },
    "& input:valid:focus + fieldset": {
      border: "0.4vw solid #55B563",
      borderLeftWidth: "0.42vw",
      padding: "0.28vw !important",
      borderRadius: "2.2vw", // override inline-style
    },
  },
})(TextField);

const ColorButton = withStyles((theme) => ({
  root: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "2vw",
    lineHeight: "2.56vw",

    color: "#FFFFFF",
    borderRadius: "2vw",
    backgroundColor: "#55B563",
    "&:hover": {
      backgroundColor: "green",
    },
  },
}))(Button);
const ColorIconButton = withStyles((theme) => ({
  root: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    marginLeft: "1vw",
    marginRight: "1.38vw",

    // fontSize: "30px",
    // lineHeight: "37px",

    color: "#FFFFFF",
    // borderRadius: "32px",
    backgroundColor: "#white",
    "&:hover": {
      transform: "matrix(-1, 0, 0, 1, 0, 0)",
    },
  },
}))(IconButton);

function App() {
  const currentDate = new Date();
  const year =
    currentDate.getMonth() === 11 && currentDate.getDate() > 23
      ? currentDate.getFullYear() + 1
      : currentDate.getFullYear();

  return (
    <YoutubeBackground videoId={"Aj2ffdSkuiQ"}>
      <div className="App">
        {/* <h1 className="title">Mega Green Fest</h1> */}
        <div className="fest">
          <img src="/img/fest.png" alt="fest" />
        </div>
        <span className="festDate">19-20 СЕНТЯБРЯ</span>
        {/* <VideoBg poster={poster}>
        {/* <VideoBg.Source src={ogg} type="video/ogg" />
        <VideoBg.Source src={webm} type="video/webm" /> */}
        {/* <VideoBg.Source src={mp4} type="video/mp4" />
      </VideoBg> */}

        <div style={{ position: "absolute", top: "50vh", left: "13.5vW" }}>
          <Countdown date={`${year}-09-19T10:00:00`} />
        </div>
        {/* <Timer /> */}
        {/* <div className="form"> */}
        <div className="inputForm">
          <form
            action="https://festyline.us17.list-manage.com/subscribe/post?u=40fc2bc94eaa68b71519dda87&amp;id=e3ffda6771"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <ValidationTextField
              position="start"
              label="Введите email"
              required
              variant="outlined"
              id="validation-outlined-input"
            />
            <ColorButton color="primary" type="submit" variant="contained">
              Подписаться
            </ColorButton>
          </form>
          {/* <ColorButton color="primary" variant="contained">
            Расписание
          </ColorButton> */}
          
        </div>
        <span className="getPost">оставь свою почту и будь вкурсе!</span>
        {/* </div> */}
        <footer className="footer">
          <Grid container direction="row">
            <span className="footerTitle">ON-LINE THE WORLD.</span>
            <span className="footerTitle">
              ВИРТУАЛЬНЫЙ И ЖИВОЙ МЕЖДУНАРОДНЫЙ ЭКОЛОГИЧЕСКИЙ ФЕСТИВАЛЬ
            </span>
          </Grid>
          <Grid container direction="row">
            <Grid item>
              <span className="footerTitle" fontWeight="fontWeightBold" m={1}>
                NEW GREEN REALITY.
              </span>
            </Grid>
            <Grid item>
              <span className="footerTitle">ЗЕЛЕНЫЕ РЕШЕНИЯ ДЛЯ ЖИЗНИ. 19-20 СЕНТЯБРЯ</span>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justify="space-evenly"
            className="partners"
          >
            <img src="/img/MEGA_logo.png" alt="logo" />
            <img src="/img/elcin.png" alt="logo" />
            <img src="/img/mayak.png" alt="logo" />
            <img src="/img/mak.png" alt="logo" />
          </Grid>
        </footer>
      </div>
    </YoutubeBackground>
  );
}

export default App;
