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

  width: 90%;
  height: 90%;
  padding: 0.625rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  background-color: #7878cc;
  border: 0.125rem solid #fff;
  border-radius: 0.625rem;

  @media (min-width: 768px) {
    width: 500px;
    height: fit-content;
    max-height: 650px;
  }
`;

export const Close = styled.span`
  font-family: sans-serif;
  font-weight: bold;
  text-align: end;
  padding-right: 2rem;

  width: 100%;
  margin: 0.625rem;

  cursor: pointer;

  @media (min-width: 768px) {
    padding-right: 0;
  }
`;

export const Title = styled.h2`
  font-family: sans-serif;
  font-weight: bold;
  text-align: center;

  width: 100%;
  margin: 0.625rem;
`;

export const Form = styled.form`
  width: 100%;
  margin: 0.625rem;

  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 0.25rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #aaa;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;
  margin: 0.625rem;
`;

export const Atribute = styled.label`
  font-family: sans-serif;
  font-weight: bold;

  margin: 0.625rem 0.938rem 0.625rem 0px;
`;

export const Input = styled.input`
  width: 95%;
  min-height: 30px;
  max-height: 100px;

  border: 0.063rem solid black;
  border-radius: 0.313rem;

  overflow-y: auto;
  word-wrap: break-word;
  resize: none;

  @media (min-width: 768px) {
    padding: 0.313rem;
  }
`;

export const Add = styled(Button)`
  width: 97%;
  margin-top: 1.875rem !important;

  background-color: #fff !important;
  color: #000 !important;

  &:hover {
    background-color: #b4b416 !important;
  }
`;

export const Cancel = styled(Button)`
  width: 97%;
  margin-top: 1.25rem !important;

  background-color: #fff !important;
  color: #000 !important;

  &:hover {
    background-color: red !important;
  }
`;
