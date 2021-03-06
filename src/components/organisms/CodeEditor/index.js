import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getCodeFileAPI } from "../../../apis";
import { fileSliceActions } from "../../../modules/slices/fileSlice";

const CodeEditor = () => {
  const dispatch = useDispatch();
  const currentFile = useSelector((state) => state.file.currentFile);
  const highlightLine = useSelector((state) => state.file.highlightLines);
  const modalDirection = useSelector((state) => state.scenario.current?.modalDirection);
  const [codes, setCodes] = useState(null);
  const [codeLines, setCodeLines] = useState(null);

  useEffect(() => {
    const getCodes = async () => {
      const result = await getCodeFileAPI();
      setCodes(result);
    };

    getCodes();
  }, []);

  useEffect(() => {
    if (currentFile) {
      codes && setCodeLines(codes[currentFile].code.split("\n"));
    }
  }, [currentFile, setCodeLines]);

  useEffect(() => {
    if (highlightLine && codeLines && modalDirection && highlightLine.length > 0) {
      if (modalDirection === "right") {
        const $li = document.querySelector(`#line1`);
        const rect = $li.getBoundingClientRect();

        dispatch(fileSliceActions.setModalCoordinate({ top: rect.y + rect.bottom, left: rect.x - 320 }));
        return;
      }

      const lastLine = highlightLine === "all" ? codeLines.length : highlightLine[highlightLine.length - 1];
      const $li = document.querySelector(`#line${lastLine}`);
      const rect = $li.getBoundingClientRect();

      dispatch(fileSliceActions.setModalCoordinate({ top: rect.top + 30, left: rect.left + 50 }));
    }
  }, [highlightLine, codeLines]);

  const isSelectedLine = (lineNumber) => {
    if (highlightLine && (highlightLine === "all" || highlightLine.includes(lineNumber))) {
      return "selected";
    }
  };

  return (
    <Container>
      <LineWrapper>
        {codeLines &&
          codeLines.map((line, index) => {
            const number = index + 1;
            const id = `line${number}`;

            return (
              <li id={id} key={id}>
                <span>{number}</span>
                <pre className={isSelectedLine(index + 1)}>{line}</pre>
              </li>
            );
          })}
      </LineWrapper>
    </Container>
  );
};

export default CodeEditor;

const Container = styled.div`
  display: flex;
  padding: 0.8rem;
  width: calc(100% - 21.6rem);
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  color: ${({ theme }) => theme.colors.white_1};
`;

const LineWrapper = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    min-height: 2rem;

    span {
      width: 3rem;
      line-height: 2rem;
      text-align: left;
    }
  }

  pre.selected {
    background: ${({ theme }) => theme.opacityColors.gray_1};
  }

  pre {
    width: 100%;
    padding: 0;
    margin: 0;
    line-height: 2rem;
    white-space: pre-wrap;
  }

  p {
    width: 100%;
    padding: 0;
    margin: 0;
    line-height: 2rem;
    white-space: pre-wrap;
  }
`;
