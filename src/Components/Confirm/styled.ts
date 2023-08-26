import styled from "styled-components";
import { Button } from "@mui/material";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  padding: 0.625rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 500px;
  max-height: 650px;
  padding: 0.625rem;
  position: fixed;
  top: 50%;
  left: 50%;

  background-color: #7878cc;
  border: 0.125rem solid #fff;
  border-radius: 0.625rem;
  transform: translate(-50%, -50%);
  z-index: 99;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h2`
  width: 100%;
  margin: 0.625rem;

  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
`;

export const BoxButtons = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
  margin: 0.625rem;
`;

export const Yes = styled(Button)`
 width: 30%;
 margin-top: 1.25rem;

 background-color: green !important;
 color: #000 !important;

 &:hover {
    background-color: #fff !important;
 }
`;

export const No = styled(Button)`
 width: 30%;
 margin-top: 1.25rem;

 background-color: red !important;
 color: #000 !important;

 &:hover {
    background-color: #fff !important;
 }
`;
