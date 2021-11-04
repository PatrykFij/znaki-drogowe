import "./App.css";
import React, { useState } from "react";
import { Button, Collapse, Dialog, Typography } from "@mui/material";
import * as S from "./styles";
import data from "./data/znaki-drogowe.json";
import BadAnswerImage from "./img/zla_kasienka.png";
import GoodAnswerImage from "./img/wesola_kasienka.png";

function App() {
  const [expanded, setExpanded] = useState(false);
  const [sign, setSign] = useState(data[Math.floor(Math.random() * 268)]);
  const [isDialogSuccessOpen, setIsDialogSuccessOpen] = useState(false);
  const [isDialogFailOpen, setIsDialogFailsOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsDialogSuccessOpen(false);
    setIsDialogFailsOpen(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleOpenDialogGoodAnswer = () => {
    setIsDialogSuccessOpen(true);
    setTimeout(() => setIsDialogSuccessOpen(false), 1500);
  };

  const handleOpenDialogWrongAnswer = () => {
    setIsDialogFailsOpen(true);
    setTimeout(() => setIsDialogFailsOpen(false), 1500);
  };

  const handleChangeSign = () => {
    if (expanded) {
      setExpanded(false);
    }
    setSign(data[Math.floor(Math.random() * 268)]);
  };

  return (
    <div className="App">
      <S.Header className="App-header">
        <h2>TEST NA ZNAJENIE DAROGI KATARINY JADASLOWEJ</h2>
        <h6>PAJECHALI W PIZDJET !</h6>
      </S.Header>
      <S.PageWrapper>
        <S.CardWrapper>
          <S.ImageWrapper>
            <img src={`${sign.base64}`} alt="Red dot" />
          </S.ImageWrapper>
          <S.ActionsContainer>
            <S.LotteryButton onClick={handleChangeSign} size="large" variant="contained">
              Losuj
            </S.LotteryButton>
            <S.ButtonsWrapper>
              <Button onClick={handleOpenDialogGoodAnswer} size="large" variant="contained" color="success">
                Znaju
              </Button>
              <Button onClick={handleExpandClick} variant="outlined" size="large">
                Sprawdź
              </Button>
              <Button onClick={handleOpenDialogWrongAnswer} size="large" variant="contained" color="error">
                Nie znaju
              </Button>
            </S.ButtonsWrapper>
          </S.ActionsContainer>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <S.Details>
              <Typography variant="h6">{sign.serial}</Typography>
              <Typography variant="h5">{sign.title}</Typography>
              <Typography paragraph>{sign.percentage}</Typography>
            </S.Details>
          </Collapse>
        </S.CardWrapper>
      </S.PageWrapper>
      <Dialog open={isDialogSuccessOpen} onClose={handleCloseDialog}>
        <img src={GoodAnswerImage} alt="Good answer" />
      </Dialog>
      <Dialog open={isDialogFailOpen} onClose={handleCloseDialog}>
        <img src={BadAnswerImage} alt="Wrong answer" />
      </Dialog>
    </div>
  );
}

export default App;
