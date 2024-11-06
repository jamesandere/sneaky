import styled from "styled-components";
import bannerImg from "../images/banner.webp";
import bannerMobileImg from "../images/banner-mobile.webp";

const Banner = () => {
  return (
    <Container>
      <div>
        <img src={bannerImg} alt="" />
      </div>
    </Container>
  );
};

export default Banner;

const Container = styled.section`
  overflow: hidden;

  div {
    img {
      object-fit: cover;
      height: auto;
      width: 100%;
      max-width: 100%;
    }
  }
`;
