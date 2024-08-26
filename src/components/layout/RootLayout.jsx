import React from "react";
import styled from "styled-components";

const RootLayout = ({ children }) => {
  return (
    <RootLayoutMain>
      <RootLayoutContents>{children}</RootLayoutContents>
    </RootLayoutMain>
  );
};

export default RootLayout;

const RootLayoutMain = styled.main`
  background-color: #f7f6f9;
  min-height: 100vh;
`;

const RootLayoutContents = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
`;
