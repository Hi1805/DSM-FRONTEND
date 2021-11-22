import React from "react";
import ContainerListStyle from "styles/ContainerListStyle";

export const Container: React.FC = ({ children }) => {
  return (
    <div className="layout__content__listing">
      <ContainerListStyle>
        <div className={`td-listing`}>{children}</div>
      </ContainerListStyle>
    </div>
  );
};
