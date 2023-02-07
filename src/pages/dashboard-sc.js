import React from "react";
import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import Link from "next/link";

import GradientIcon from "../components/GradientIcon";
import LineGradient from "../components/LineGradient";
import JoinCohort from "../components/JoinCohort";
import Button from "../components/Button";
import InstructorCard from "../components/InstructorCard";
import CourseCard from "../components/CourseCard";

const Dashboardsc = () => {
  return (
    <div>
      <CourseDetailSection>
        <GradientContainer>
          <LineGradient
            colorFrom={"#10C75900"}
            colorTo={"#10C759"}
            height={"54px"}
          />
          <GradientIcon
            IconComponent={<FaReact size={30} color="#44E986" />}
            bgColor={"#44E986"}
          />
          <LineGradient colorFrom={"#10C759"} colorTo={"#10C75900"} />
        </GradientContainer>
        <DetailContainer>
          <Detail>
            <p>Course Description</p>
            <Title>Step 1 to become a Data Scientist</Title>
            <Description>
              Data science is an ever-evolving field, which is growing in
              popularity at an exponential rate. Data science includes
              techniques and theories extracted from the fields of statistics;
              computer science, and, most importantly, machine learning,
              databases, data visualization, and so on. Data science is an
              ever-evolving field, which is growing in popularity at an
              exponential rate. Data science includes techniques and theories
              extracted from the fields of statistics; computer science, and,
              most importantly, machine learning, databases, data visualization,
              and so on.
            </Description>
            <ProgressContainer>
              <label htmlFor="course-completion">
                Progress: <span>0% Complete</span>
              </label>
              <Progress id="course-completion" max="100" value="70">
                70%
              </Progress>
            </ProgressContainer>
            <Button
              as={Link}
              href="/dashboard-sc"
              title={"Start"}
              bgColor="white"
              color={"#0D1117"}
            />
          </Detail>
        </DetailContainer>
      </CourseDetailSection>
      <CourseHighlightSection>
        <GradientContainer>
          <LineGradient
            colorFrom={"#10C75900"}
            colorTo={"#10C759"}
            height={"54px"}
          />
          <GradientIcon
            IconComponent={<VscGraph size={30} color="#44E986" />}
            bgColor={"#44E986"}
          />
          <LineGradient colorFrom={"#10C759"} colorTo={"#10C75900"} />
        </GradientContainer>
        <HighLightContent>
          <HighlightTitle>Course Highlights</HighlightTitle>
          <DurationLevel>
            <Duration>
              <GrayTitle>DURATION</GrayTitle>: 7h 20min
            </Duration>
            <Level>
              <GrayTitle>LEVEL:</GrayTitle> BEGINNER
            </Level>
          </DurationLevel>
          <Activities>
            <GrayTitle>ACTIVITIES:</GrayTitle> 1 section, 4 courses, 8 videos, 5
            quizzes, 3 labs, 15 exercises
          </Activities>
          <InstructorsContainer>
            <IntructorSectionTitle>
              <GrayTitle>Instructors</GrayTitle>
            </IntructorSectionTitle>
            <InstructorsList>
              <InstructorCard
                instructorName="Muhammad Medwani"
                isLeadInstructor
              />
              <InstructorCard instructorName="Muhammad Medwani" />
              <InstructorCard instructorName="Muhammad Medwani" />
            </InstructorsList>
          </InstructorsContainer>
        </HighLightContent>
      </CourseHighlightSection>
      <CourseListSection>
        <GradientContainer>
          <LineGradient
            colorFrom={"#10C75900"}
            colorTo={"#10C759"}
            height={"54px"}
          />
          <GradientIcon
            IconComponent={<VscGraph size={30} color="#44E986" />}
            bgColor={"#44E986"}
          />
          <LineGradient colorFrom={"#10C759"} colorTo={"#10C75900"} />
        </GradientContainer>
        <CourseListContainer>
          <CourseListHeading>
            Section 1 | Data Science Crash Course
          </CourseListHeading>
          <CourseList>
            <CourseCard />
            <CourseCard />
            <CourseCard />
          </CourseList>
        </CourseListContainer>
      </CourseListSection>
      <JoinCohort />
    </div>
  );
};

export default Dashboardsc;

const CourseDetailSection = styled.section`
  padding: 2rem var(--container-padding);
  display: flex;
  gap: 3rem;
  color: white;
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.9) 5.87%,
      rgba(0, 0, 0, 0.6) 30%,
      rgba(0, 0, 0, 0.35) 70%
    ),
    url("/data-globe.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

const GradientContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-rows: 50px auto 1fr;
`;

const DetailContainer = styled.div`
  display: flex;
  gap: 4rem;
  margin-top: 1rem;
  margin-bottom: 4rem;
`;

const Detail = styled.div`
  margin-top: 2.5rem;
  font-weight: 500;
  font-size: 1.12rem;

  a {
    display: inline-block;
  }
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 3.25rem;
  margin-block: 10px;
`;

const Description = styled.p`
  line-height: 28px;
  width: 70ch;
`;

const ProgressContainer = styled.div`
  font-weight: 500;
  font-size: 1rem;
  margin-block: 1rem;

  label {
    color: #8691a6;
    display: block;
    text-transform: uppercase;

    span {
      color: white;
    }
  }
`;

const Progress = styled.progress`
  width: 100%;
  height: 8px;
  border-radius: 100px;

  ::-webkit-progress-bar {
    background-color: #505151;
    border-radius: 4px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
  }

  ::-webkit-progress-value {
    background-image: -webkit-linear-gradient(
        -45deg,
        transparent 33%,
        rgba(0, 0, 0, 0.1) 33%,
        rgba(0, 0, 0, 0.1) 66%,
        transparent 66%
      ),
      -webkit-linear-gradient(top, rgba(255, 255, 255, 0.25), rgba(0, 0, 0, 0.25)),
      -webkit-linear-gradient(left, #09c, #f44);

    border-radius: 2px;
    background-size: 35px 20px, 100% 100%, 100% 100%;
  }
`;

const CourseHighlightSection = styled.section`
  padding: 2rem var(--container-padding);
  display: flex;
  gap: 3rem;
  color: white;
  background: linear-gradient(
    -286deg,
    rgba(4, 13, 33, 0.9) 40%,
    rgba(62, 63, 73, 0.8) 98.21%
  );
`;

const HighLightContent = styled.div`
  margin-block: 2rem;
`;

const HighlightTitle = styled.p`
  font-weight: 600;
  font-size: 32px;
`;

export const GrayTitle = styled.span`
  display: inline-block;
  font-weight: 500;
  color: #8691a6;
  text-transform: uppercase;
`;

const DurationLevel = styled.div`
  display: flex;
  gap: 2rem;
`;

const IntructorSectionTitle = styled.p``;

const Duration = styled.p`
  border-right: 2px solid gray;
  padding-right: 2rem;
`;

const Level = styled.p``;
const Activities = styled.p``;

const InstructorsContainer = styled.div`
  margin-top: 2rem;
`;

const InstructorsList = styled.div`
  display: flex;
  align-items: start;
  gap: 30px;
`;

const CourseListSection = styled.div`
  display: flex;
  gap: 2.5rem;
  padding: 2rem var(--container-padding);
  background: #0d1117;
`;

const CourseListContainer = styled.div`
  width: 100%;
  margin-top: 2rem;
`;

const CourseList = styled.div`
  display: grid;
  gap: 2rem;
`;

const CourseListHeading = styled.p`
  font-weight: 600;
  font-size: 2rem;
  color: white;
  margin-bottom: 3rem;
`;
