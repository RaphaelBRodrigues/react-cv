import styled from 'styled-components';

export const Icon = styled.i`
  align-items: center;
  height: 100%;
  display: flex;
  cursor: pointer;

  &:hover span,
  &:hover svg {
    color: ${({ theme }) => theme.colors.gray};
    fill: ${({ theme }) => theme.colors.gray} !important;
    & path:last-of-type {
      fill: ${({ theme }) => theme.colors.white};
      transform: scale(1.3);
    }
  }

  svg {
    height: 2rem;
    color: ${({ theme }) => theme.colors.white};
  }

  span {
    transition-duration: 0.6s;
    position: relative;
    height: 100%;
    width: 4rem;

    &:first-of-type {
      transform: scale(-1, 1);
    }

    padding: 0.5rem;

    font-family: ${({ theme }) => theme.font.family.secondary};
    font-size: 2.5rem;
  }
`;
