import { useState } from "react";
import styled from "styled-components";

const GridItem = ({ item }) => {
  const [hoverState, setHoverState] = useState(false);

  return (
    <Container>
      <img
        style={{ transform: hoverState ? "scale(1.1)" : "" }}
        src={item.url}
        alt={item.title}
      />
      <div
        onMouseOver={() => setHoverState(true)}
        onMouseOut={() => setHoverState(false)}
      >
        <h2>{item.title}</h2>
      </div>
    </Container>
  );
};

export default GridItem;

const Container = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    transition-duration: 0.5s;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    text-align: left;
    padding: 1rem;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity));
    font-size: 1.2rem;
    line-height: 2.25rem;
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 100%;

    h2 {
      opacity: 1;
      color: rgb(255 255 255 / 1);
    }
  }
`;
