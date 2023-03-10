import Image from "next/image";
import styled from "styled-components";
import { MaxwidthContainer } from "../GlobalStyles";
import LineGradient from "../LineGradient";
import Newsletter from "../Newsletter";
import RedCurve from "../../assets/images/curve-gradient-red.png";
import Button from "../Button";
import { TextWithColor } from "./Practicality";
import { QUERIES } from "../../constants";
import { Animate } from "../Animations/AnimateIn";
import { QualityText, TextContent, SubQualityText } from "./FeaturedSection";

const Newslettersection = () => {
  return (
    <Container>
      <Content>
        <Top>
          <GradientContainer>
            <LineGradient
              colorFrom={`#EA604500 , #EA6045CF, #EA6045`}
              colorTo={`#EA6045D2, #EA604500 `}
            />
            <CurveContainer>
              <Image src={RedCurve} alt="" />
            </CurveContainer>
          </GradientContainer>
          <TextContent>
            <Animate.FadeUp>
              <Button
                title={"Featured Courses"}
                variant={"outline"}
                color={"white"}
                borderColor={"#EA6045"}
                size={`18px`}
                rounded
              />
              <QualityText>
                <TextWithColor color="#EA6045">Stay in Touch</TextWithColor>
              </QualityText>
              <SubHeading>
                for all inquiries as regard our services. Please feel free to
                reach out to us.
              </SubHeading>
            </Animate.FadeUp>
          </TextContent>
        </Top>
        <Bottom>
          <ContactDetail>
            <p>
              <span>Monday - Friday</span> 8:00 AM - 5:00 PM Eastern Time
            </p>
            <p>
              <span>Phone</span> +1-678-209-9780
            </p>
            <p>
              <span>Email</span> info@innovatics.ai
            </p>
          </ContactDetail>
          <Newsletter />
        </Bottom>
      </Content>
    </Container>
  );
};

export default Newslettersection;

const Container = styled.section`
  background: linear-gradient(
      90.44deg,
      rgba(13, 17, 23, 0.3) 0.46%,
      #0d1117 44.88%
    ),
    url("galaxy.png");
`;

const Content = styled(MaxwidthContainer)`
  padding: var(--container-padding);
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`;

const GradientContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CurveContainer = styled.div`
  height: 50%;
  margin-right: -2rem;
  img {
    height: 100%;
    object-fit: contain;
  }
  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`;

const SubHeading = styled(SubQualityText)`
  color: white;
`;

const Bottom = styled.div`
  display: flex;
  /* grid-template-columns: repeat(auto-fill, minmax(500px, 1fr)); */
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
`;

const ContactDetail = styled.div`
  color: white;
  align-self: flex-end;
  span {
    font-weight: 500;
    font-size: 18px;
    color: #8691a6;
  }
`;
