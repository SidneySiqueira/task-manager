import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Button = styled.button`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  max-width: 97%;
  margin: 1rem 0 ;
  padding: 6px 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #b4b416;
  }

  @media (min-width: 768px) {
    margin: 0 1rem 0 0;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  width: 100%;
  min-width: 100px;
  max-width: 97%;
  margin: 0 1rem 0 0;
  border-radius: 5px;
  position: absolute;
  top: 100%;
  z-index: 100;

  background-color: #fff;

  @media (min-width: 768px) {
    margin: 0 1rem 0 0;
    text-align: start;
  }
`;

export const Severity = styled.p`
  margin: 0;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #b4b416;
  }
`;
