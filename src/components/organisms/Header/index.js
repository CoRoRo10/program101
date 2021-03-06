import React from "react";

import { useDispatch } from "react-redux";
import styled from "styled-components";

import { scenarioId, mode } from "../../../constant";
import { scenarioSliceActions } from "../../../modules/slices/scenarioSlice";
import themes from "../../../styles/theme";
import { Button, Icon } from "../../atoms";

const Header = () => {
  const dispatch = useDispatch();

  const handleTutorialRestart = () => {
    dispatch(scenarioSliceActions.resetVisualizeAction());
    dispatch(scenarioSliceActions.updateMode(mode.TUTORIAl));
    dispatch(scenarioSliceActions.updateCurrentScenario(scenarioId.TUTORIAL_1ST));
  };

  const handlePracticeStartButtonClick = () => {
    dispatch(scenarioSliceActions.resetVisualizeAction());
    dispatch(scenarioSliceActions.updateMode(mode.PRACTICE));
    dispatch(scenarioSliceActions.updateCurrentScenario(scenarioId.PRACTICE_1ST));
  };

  return (
    <Container>
      <Logo />
      <ButtonWrapper>
        <Button
          text=" Tutorial"
          color={themes.colors.lightblue_1}
          startIcon={<Icon type="undo" size="xxs" />}
          hasHover={false}
          onClick={handleTutorialRestart}
        />
        <Button
          text=" Practice"
          color={themes.colors.green_1}
          startIcon={<Icon type="undo" size="xxs" />}
          hasHover={false}
          onClick={handlePracticeStartButtonClick}
        />
      </ButtonWrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black_1};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 15%;
`;

const Logo = styled.img.attrs({
  src: "/assets/program101_logo.png",
  alt: "logo",
})`
  width: 11.5rem;
  height: 3rem;
  margin: ${({ theme }) => theme.space.md};
  cursor: pointer;
`;
