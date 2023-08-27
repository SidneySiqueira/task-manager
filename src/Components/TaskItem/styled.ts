import styled from "styled-components";
import { Grid } from "@mui/material";

interface Props {
    concluded?: boolean
  }

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

export const Tasks = styled(Grid)`
  width: 100%;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Conclude = styled.button`
  padding: 0.313rem;

  border: 0.063rem solid black;
  border-radius: 0.625rem;

  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;

  color: #fff;
  background-color: #211e4d;

  cursor: pointer;
`;

export const Severity = styled.div`
  width: 1rem;
  height: 1rem;
  margin: 0;
  border-radius: 50%;
  background-color: ${(props) => props.color || 'black'};;
`