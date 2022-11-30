import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  animation: loadAnimation;
  animation-duration: 500ms;

  margin-bottom: 69px;
  margin-top: 18px;

  p {
    color: #fff;
    font-size: 30px;
    font-family: 'Roboto', Helvetica, serif;
    font-weight: bold;
   
  }

  a > img {
    width: 40px;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    width: 90vw;
  }
`;

export const Main = styled.main`
  padding-bottom: 60px;
  text-align: center;

  h1 {
    font-size: 50px;
    color: #fff;
    text-transform: uppercase;
  }

  @media (max-width: 580px) {
    img {
      width: 100%;
    }
  }
`;

export const Info = styled.section`
  border-radius: 10px;
  text-align: center;
  padding: 15px;
  margin: 0 auto;
  background-color: #ffffff;
  box-shadow: 5px 10px 18px #888888;
  width: 50%;

  section + & {
    margin-top: 20px;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const Loading = styled.div`
  text-align: center;

  img {
    width: 50px;
    animation-name: spinner;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
