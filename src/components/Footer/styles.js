import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const ImgFooter = styled.img`
  margin-left: 50px;
  height: 70px;
  padding-bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`



