import React, { useContext } from 'react'
import styled, { ThemeContext } from 'styled-components'

const TopBar: React.FC = () => {
  const theme = useContext(ThemeContext)
  return (
    <StyledTopBar>
      <div style={{fontSize: "40px", color: theme.colors.text, textAlign: "center"}}>Gold Mining</div>
      <div style={{fontSize: "16px", color: theme.colors.text, textAlign: "center", marginTop: "1em"}}>The first Space based Auto Liquidity Aquisition Yield Farm</div>
    </StyledTopBar>
  )
}

const StyledTopBar = styled.div`
  height: 200px;
  width: 100%;
  background-image: url('/images/header.jpg');
  background-size: 100% 100%;
  background-position: top;
  background-repeat: no-repeat;
  position: relative;
  padding-top: 50px;
  margin-top: 64px;
  z-index: 1;
  @media (max-width: 968px) {
    background-size: auto 100%;
    background-position: center;
  }
  & > div{
    position: relative;
    z-index: 1;
  }
`

export default TopBar
