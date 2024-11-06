import styled from "styled-components";
import GridItem from "./GridItem";
import { categs } from "../data";

const Grid = () => {
  return (
    <Container>
      {categs.map((item, i) => (
        <GridItem item={item} key={i} />
      ))}
    </Container>
  );
};

export default Grid;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1px;
`;
