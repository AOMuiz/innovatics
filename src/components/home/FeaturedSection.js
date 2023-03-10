import React from "react";
import styled from "styled-components";
import Image from "next/image";

import InsetSection from "../InsetSection";
import LineGradient from "../LineGradient";
import RedCurve from "../../assets/images/curve-gradient-red.png";
import Button from "../Button";
import { TextWithColor } from "./Practicality";
import { QUERIES } from "../../constants";
import { Animate } from "../Animations/AnimateIn";

const FeaturedSection = () => {
  return (
    <InsetSection bgImage="/galaxy-2.png">
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
            <TextWithColor color="#EA6045">30.9% Discounts</TextWithColor>
          </QualityText>
          <SubQualityText>
            on all courses until August 29th 2023. Hurry Now!
          </SubQualityText>
        </Animate.FadeUp>
      </TextContent>
    </InsetSection>
  );
};

export default FeaturedSection;

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

export const TextContent = styled.div`
  align-self: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  @media ${QUERIES.phoneAndSmaller} {
    margin-left: 2rem;
  }
`;

export const QualityText = styled.p`
  font-weight: 600;
  font-size: clamp(1.5rem, 4.881vw + -0.33rem, 4.063rem);
  margin-block: 10px;
`;

export const SubQualityText = styled.p`
  font-weight: 500;
  font-size: clamp(0.875rem, 1.667vw + 0.25rem, 1.75rem);
  margin-top: 0;
  width: 70%;
`;
