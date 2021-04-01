import styled from 'styled-components';

const Background = () => (
  <Container>
    <div className="stars" />
    <div className="stars2" />
    <div className="stars3" />
  </Container>
);

const Container = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
`;

export default Background;