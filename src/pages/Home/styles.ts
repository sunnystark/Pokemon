import styled from 'styled-components';


export const Container = styled.div`
  width: 80vw;
  animation: loadAnimation;
  animation-duration: 500ms;
  margin: 0 auto;
  

  > p {
    margin-top: 40px;
    margin-bottom: 25px;
  }

  p {
    color: #fff;
    font-size: 32px;
    font-family: 'Roboto', Helvetica, serif;
    font-weight: bold;
  }

  @media (max-width: 700px) {
    width: 90vw;
  }
`;

export const MainTitle = styled.main`
padding-bottom: 100px;
text-align: center;  
padding-top: 100px;
  

  @media (max-width: 900px) {
    img {
      width: 100%;
    }
  }
`;



export const Pokemon = styled.div`
  margin: 0 auto;
  max-width: 300px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 5px 10px 18px #888888;
  background-color: #ffffff;
  

  div + & {
    margin-top: 19px;
  }

  h2 {
    padding-bottom: 9px;
    padding-top: 11px;
    color: #000000;
  }
`;

export const Loading = styled.div`
  text-align: center;

  img {
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    width: 48px;
    animation-name: spinner;
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

export const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.50em 2em;
  border: 2px solid palevioletred;
  border-radius: 10px;
`;

export const Pagination = styled.div<{ isFirstPage: boolean }>`
  display: flex;
  margin-bottom: 69px;
  justify-content: center;
  margin-top: 51px;
  

  Button:first-child {
    // margin-right: 9px;
    display: ${(props) => (props.isFirstPage ? 'none' : 'block')};
  }

  // Button {
  //   cursor: pointer;
  // }
`;


