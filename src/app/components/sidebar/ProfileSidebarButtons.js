
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
    padding-left: 1.5rem;
    margin-bottom: 1rem;
    font-size: 0.4rem;
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

  .active h1 {
    color: #fff;
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

const ProfileSidebarButtons = () => {

  return (
    <div>
      <div className="icon">
        <h1>Profile</h1>
      </div>

      <div className="icon">
        <h1>Profile</h1>
      </div>

      <div className="icon">
        <h1>Profile</h1>
      </div>
    </div>
  );
};

export default ProfileSidebarButtons;
