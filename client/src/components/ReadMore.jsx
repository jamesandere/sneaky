import { useState } from "react";
import styled from "styled-components";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <Container>
      <div
        className={!isReadMore ? "p-height" : ""}
        style={{ color: isReadMore ? "transparent" : "" }}
      >
        <p className="text">{text}</p>
      </div>
      <button onClick={toggleReadMore}>
        {isReadMore ? " Read more" : " Show less"}
      </button>
    </Container>
  );
};

export default ReadMore;

const Container = styled.div`
  div {
    background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
    overflow: hidden;
    -webkit-background-clip: text;
    background-clip: text;
    height: 5rem;
    overflow: hidden;
  }

  .p-height {
    height: auto;
  }

  button {
    background: transparent;
    border: none;
    border-bottom: 1px solid;
    outline: none;
    cursor: pointer;
    padding: 2px 0;
    font-weight: 600;
    text-transform: uppercase;
    border-color: rgb(0 0 0 / 1);
    border-bottom-width: 1px;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;
