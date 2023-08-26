import { Button, Grid } from "@mui/material";
import styled from "styled-components";

interface Props {
  concluded?: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 90%;
  margin-top: 3.125rem;

  @media (min-width: 768px) {
    margin: 3.125rem;
  }
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-width: 100%;
`;

export const ButtonBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column-reverse;

  @media (min-width: 768px) {
    justify-content: end;
    flex-direction: row;
  }
`;

export const AddTask = styled(Button)`
 background-color: #fff !important;
 color: #000 !important;

 &:hover {
    background-color: #b4b416 !important;
 }
`;

export const Content = styled.div`
  width: 100%;
`;

export const Lines = styled(Grid)<Props>`
  width: 100%;
  margin: 1rem 0;

  background-color: ${props => props.concluded ? 'gray' : '#7878cc'};
  border: 0.125rem solid #fff;
  border-radius: 0.625rem;
  opacity: ${props => props.concluded ? '30%' : ''};

  @media (min-width: 768px) {
    margin: 1rem;
  }
`;

export const Title = styled(Grid)`
  width: 100%;
  padding: 1rem;

  font-size: 1.563rem;
  font-weight: bold;
`;


