import styled from "styled-components";

const Section = styled.div`
  height: 100vh !important;
  width: 100% !important;
  display: flex;
  overflow: auto;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  scroll-snap-align: start;
  animation: fadeIn 5s;
  -webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
  -ms-animation: fadeIn 5s;
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-padding: 40px;
  background-color: rgba(255, 255, 255, 0.192);
`;

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 50%;
  margin-top: 2rem;
  min-height: 50%;
  padding: 1rem;
`;

const Card = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(3px);
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 45%;

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }

  &:hover,
  &:focus,
  &:active {
    color: #00a6f3e1;
    border-color: #00a6f3e1;
  }
`;

export { Card, Section, Container, GlassCard };
