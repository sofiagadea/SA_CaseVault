
import styled, { css } from "styled-components";
import { darkTheme } from "../../styles/theme";

const SidebarButtonsWrapper = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  height: 100vh;
  width: 240px;;
  padding-top: 1rem;
  overflow: auto;
  padding-bottom: 1.5rem;
  transition: all 0.3s;
  z-index: 2;
  background: ${darkTheme.grey};
  &::-webkit-scrollbar {
    width: 0;
  }

  .icon {
    display: flex;
    align-items: center;
    padding: 1rem 0;
    margin-top:1rem;
    padding-left: 1rem;
    margin-bottom: 1rem;
    font-size: 0.2rem;
    font-family: ${darkTheme.font}, sans-serif;
    color: ${darkTheme.primaryColor};
    
  }

  .icon:not(.hover-disable):hover {
    background: ${darkTheme.darkGrey};
    cursor: pointer;
  }

  .active div {
    background: ${darkTheme.darkGrey};
    cursor: pointer;
  }

  h1 {
    color: #fff;
    font-size: 0.2rem;
  }

  .icon span {
    padding-left: 1rem;
    position: relative;
    top: 1px;
    
  }

  @media screen and (max-width: 1093px) {
    transform: translateX(-100%);

    ${(props) =>
      props.open &&
      css`
        transform: translateX(0);
      `}
  }
`;

const HomeSidebarButtons = () => {

  return (
    <div>
      <div className="icon">
        <h1>Home</h1>
      </div>

      <div className="icon">
        <h1>Your Cases</h1>
      </div>

      <div className="icon">
        <h1>Saved Cases</h1>
      </div>
    </div>
  );
};

export default HomeSidebarButtons;
