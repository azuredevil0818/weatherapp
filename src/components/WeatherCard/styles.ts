import styled from 'styled-components';
import { motion } from 'framer-motion';
import cloudTexture from '@assets/images/cloud_texture.png';

export const CloudElement = styled(motion.img)`
  height: 4rem;
  left: -3rem;
  position: absolute;
  top: 4rem;
  z-index: 30;

  &:hover {
    cursor: pointer;
  }
`;

export const Container = styled(motion.div)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 10%),
    0 2px 4px -2px rgb(0 0 0 / 10%);
  display: flex;
  flex-flow: column;
  height: 24rem;
  justify-content: center;
  overflow: hidden;
  position: relative;
  transition: 0.8s background-color;
  width: 20rem;
  z-index: 10;

  &::after {
    @keyframes paralax {
      0% {
        scale: 1;
        transform: translateX(0);
      }

      50% {
        scale: 1.5;
        transform: translateX(50);
      }

      100% {
        scale: 1;
        transform: translateX(0);
      }
    }

    animation: 30s paralax infinite ease-in-out;
    background-image: ${`url(${cloudTexture})`};
    background-size: cover;
    content: '';
    height: 100%;
    mix-blend-mode: multiply;
    object-fit: cover;
    pointer-events: none;
    transition: 0.8s background-color;
    user-select: none;
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    font-size: 4rem;
    font-weight: 600;
    margin-left: 0.75rem;
    position: absolute;
    top: 35%;
    z-index: 10;
  }

  h2 {
    bottom: 4rem;
    font-size: 1.5rem;
    font-weight: 700;
    position: absolute;
    text-align: center;
    width: 80%;
    word-wrap: break-word;
    z-index: 10;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    position: absolute;
    top: 55%;
    z-index: 10;
  }

  p {
    font-size: 1rem;
    font-weight: 600;
    max-width: 10rem;
    padding: 0.25rem;
    position: absolute;
    text-align: center;
    top: 15%;
  }

  img {
    margin-right: 0.15rem;
    position: absolute;
    top: 5%;
    z-index: 20;
  }
`;

export const SunElement = styled(motion.img)`
  height: 4rem;
  left: -2rem;
  position: absolute;
  top: 4rem;
  z-index: 20;
`;

export const Wrapper = styled.div`
  margin-bottom: 2rem;
  position: relative;
  z-index: 10;
`;
