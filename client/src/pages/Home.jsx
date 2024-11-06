import styled from "styled-components";
import Grid from "../components/Grid";
import Banner from "../components/Banner";
import BestSellers from "../components/BestSellers";

const Home = () => {
  return (
    <Container>
      <Banner />
      <BestSellers />
      <Grid />
    </Container>
  );
};

export default Home;

const Container = styled.div``;
