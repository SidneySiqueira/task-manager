import styled from "styled-components";

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

  background-color: #7878cc;
  border: 0.125rem solid #fff;
  border-radius: 0.625rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const Back = styled.span`
  display: flex;
  align-items: center;

  width: 100%;
  margin: 0.625rem;

  font-family: sans-serif;
  font-weight: bold;
  text-align: start;

  color: white;

  cursor: pointer;
`;

export const BoxButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
`;

export const Edit = styled.button`
  margin: 0.625rem;
  padding: 0.625rem;

  border-radius: 1.25rem;
  border: 0.063rem solid white;
  color: white;
  background: transparent;

  text-transform: capitalize;

  cursor: pointer;

  :hover {
    background: darkorange;

    transition: background 0.5s;
  }
`;

export const Delete = styled.button`
  margin: 0.625rem;
  padding: 0.625rem;

  border-radius: 1.25rem;
  border: 0.063rem solid white;
  color: white;
  background: red;
  text-transform: capitalize;

  cursor: pointer;

  :hover {
    background: darkorange;

    transition: background 0.5s;
  }
`;

export const BoxName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;

  border: 0.063rem solid white;
  border-radius: 1.25rem;
  background: #fff;
`;

export const Title = styled.h2`
  width: 100%;
  margin: 0.625rem;

  font-family: sans-serif;
  font-weight: bold;
  text-align: center;
`;

export const Description = styled.p`
  width: 100%;
  margin: 0.625rem;

  font-size: 1.25rem;
  font-family: sans-serif;
  text-align: center;
`;
