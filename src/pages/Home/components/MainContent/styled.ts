import styled from 'styled-components';

export const HomeWrapper = styled.main``;

export const MainTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.family.title};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 14rem;
  line-height: 10rem;

  span {
    font-size: 8rem;
  }
`;

export const MainContentWrapper = styled.section`
  margin: 6rem 0;
`;
