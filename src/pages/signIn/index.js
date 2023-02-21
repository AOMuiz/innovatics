import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

import siteMetadata from "../../data/siteMetadata";
import HeadSeo from "../../components/HeadSeo";
import Button from "../../components/Button";
import { QUERIES } from "../../constants";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import UnstyledButton from "../../components/UnstyledButton";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const [error, setError] = useState();
  const [loggedInUser, setLoggedInUser] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(undefined);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setLoading(false);
      setLoggedInUser(userCredential.user);
      if (userCredential.user) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error);
      toast.error("Bad User Credentials");
    }
  };

  return (
    <>
      <HeadSeo
        title={`Sign In | ${siteMetadata.companyName} `}
        description={"Sign in to continue"}
        canonicalUrl={`${siteMetadata.siteUrl}/signIn`}
        ogType={"website"}
      />
      <Container>
        <FormContainer>
          <Title>Sign in to continue</Title>
          <Form>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={onChange}
            />
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
            />
          </Form>
          <FormActions>
            <ForgotContainer>
              <ForgotText>Forgot password?</ForgotText>
              <SignInButton
                onClick={onSubmit}
                title={"Sign In"}
                bgColor={"#979797"}
                color={"#0D1117"}
              />
            </ForgotContainer>
            <OR>OR</OR>
            <FormButton
              variant={"outline"}
              title={"Continue with Google"}
              color={"#8691A6"}
            />
            <NoAccountContainer>
              Don’t Have an account?
              <span>
                <Link href={"signUp"}>Signup for free</Link>
              </span>
            </NoAccountContainer>
          </FormActions>
        </FormContainer>
      </Container>
    </>
  );
};

export default SignIn;

export const Container = styled.section`
  background: linear-gradient(90deg, rgba(13, 17, 23, 0.3) 0%, #0d1117 47.99%),
    url("/galaxy.png");
  display: grid;
  place-items: center;
  padding: 3rem;
  /* height: 100%; */
  @media ${QUERIES.phoneAndSmaller} {
    padding-inline: 2rem;
  }
`;

const FormContainer = styled.div`
  /* width: 40%; */
  /* @media ${QUERIES.tabletAndSmaller} {
    width: 60%;
  }
  @media ${QUERIES.phoneAndSmaller} {
    width: revert;
  } */
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: clamp(1.25rem, 1.429vw + 0.464rem, 1.75rem);
  color: white;
  text-align: center;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  background: rgba(13, 17, 23, 0.5);
  border: 1px solid #8691a6;
  border-radius: 10px;
  padding: 1.3rem;
  width: 100%;
  color: white;
`;

const FormActions = styled.div`
  margin-block: 2rem;
  display: grid;
  place-items: center;
`;

const SignInButton = styled(Button)`
  display: flex;
  align-items: center;
`;

const ForgotContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-block: 1rem;
  width: 100%;
`;

const ForgotText = styled(UnstyledButton)`
  font-weight: 500;
  font-size: var(--font-size-md);
  color: white;
  @media ${QUERIES.phoneAndSmaller} {
    font-size: 14px;
  }
`;

const OR = styled.p`
  text-align: center;
  color: white;
  margin-block: 2rem;
  font-weight: 500;
  font-size: var(--font-size-md);
`;

const FormButton = styled(Button)`
  border-color: #8691a6;
  width: 100%;
`;

const NoAccountContainer = styled.p`
  font-weight: 500;
  font-size: var(--font-size-md);
  color: white;
  text-align: center;
  span {
    color: #8b90ff;
    display: inline-block;
    padding-inline: 1rem;
  }

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 14px;
    span {
      padding-inline: 1rem;
    }
  }
`;
