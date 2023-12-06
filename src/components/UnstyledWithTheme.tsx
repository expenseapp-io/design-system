import React from "react";
import { Unstyled } from "@storybook/blocks";
import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  height?: number;
  vertical?: boolean;
  padding?: number;
}

function UnstyledWithTheme(props: Props) {
  function renderChild() {
    return (
      <div
        style={{
          position: "relative",
          boxSizing: "border-box",
          padding: props.padding !== undefined ? props.padding : 24,
          border: "2px solid #eee",
          background: "var(--body-background)",
          height: props.height,
        }}
      >
        {props.children}
      </div>
    );
  }

  // function renderHeader(title: string) {
  //   return (
  //     <div style={{ marginBottom: "12px", fontWeight: "bold" }}>{title}</div>
  //   );
  // }

  return (
    <Unstyled style={{ paddingBlockEnd: 32 }}>
      <div
        style={{
          display: "grid",
          maxWidth: "100%",
          gap: 16,
          gridTemplateColumns: props.vertical ? "100%" : "50% 50%",
        }}
      >
        <div className="light-theme">
          {/* {renderHeader("Light Theme")} */}
          {renderChild()}
        </div>
        <div className="dark-theme">
          {/* {renderHeader("Dark Theme")} */}
          {renderChild()}
        </div>
      </div>
    </Unstyled>
  );
}

export { UnstyledWithTheme };
