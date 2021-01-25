import styled from 'styled-components';
import { ILoadingItem, ILoadingBox, ILoadingWrapper } from './interfaces';

export const LoadingWrapper = styled.div<ILoadingWrapper>`
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  transition-duration: 1s;
  opacity: ${({ finished }) => (finished ? '0' : '1')};
`;

export const LoadingBox = styled.div<ILoadingBox>`
  display: flex;
  gap: ${({ finished }) => (finished ? '4rem' : '2rem')};
  align-items: center;
  height: 100%;
`;

export const LoadingItem = styled.div<ILoadingItem>`
  transition-duration: 1s;
  position: relative;
  height: ${({ activated }) => (activated ? `9rem` : `7rem`)};
  background-color: ${({ activated }) => (activated ? `#F0F0F2` : '#435C73')};
  width: 2rem;
`;
