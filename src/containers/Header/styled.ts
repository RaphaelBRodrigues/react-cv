import styled from 'styled-components';

export const Header = styled.header`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.alpha.oneQuarter.darkBlue};
`;

export const LogoWrapper = styled.div`
  flex: 6;
`;
export const Logo = styled.img``;
export const LinksList = styled.ul`
  flex: 1;
  justify-content: center;
`;

export const LinkItem = styled.li`
  display: inline;
  padding: 1rem;
  a svg {
    height: 2rem;
  }
`;
