import { Button, Card, CardActions, CardContent, CardMedia, Paper } from "@mui/material";
import styled, { css } from "styled-components";

export const Header = styled.header`
  h2 {
    margin: 15px;
  }
  h6 {
    margin: 5px;
  }
`;
export const PageWrapper = styled(Paper)`
  && {
    display: flex;
    justify-content: center;
    height: 80vh;
    flex-direction: column;
    align-items: center;
    background-color: #ddd;
  }
`;
export const CardWrapper = styled(Card)`
  min-width: 50vw;
  max-width: 50vw;
  min-height: 85%;
`;
export const Details = styled(CardContent)`
  && .MuiTypography-root {
    margin-bottom: 12px;
  }
`;

export const ActionsContainer = styled(CardActions)`
  && {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const ImageWrapper = styled(CardMedia)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60%;
  }
`;
export const ButtonsWrapper = styled.div`
  && {
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    min-height: 70%;
  }

  button {
    height: 50px;
    width: 200px;
  }
`;
export const LotteryButton = styled(Button)`
  && {
    display: block;
    width: 100%;
    height: 60px;
    font-size: 20px;
    letter-spacing: 12px;
    margin-bottom: 15px;
  }
`;
