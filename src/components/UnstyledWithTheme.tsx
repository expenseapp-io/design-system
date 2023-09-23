import React from "react";
import { Unstyled } from "@storybook/blocks";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren

function UnstyledWithTheme(props: Props) {
	function renderChild() {
		return (
			<div style={{ padding: 24, border: "2px solid #eee", background: "var(--body-background)" }}>
				{props.children}
			</div>
		);
	}

	function renderHeader(title: string) {
		return (
			<div style={{ marginBottom: "12px", fontWeight: "bold" }}>{title}</div>
		);
	}

	return (
		<Unstyled style={{ paddingBlockEnd: 32 }}>
			<div style={{display: "grid", gap: 16, gridTemplateColumns: "1fr 1fr"}}>
				<div className="light-theme">
					{renderHeader("Light Theme")}
					{renderChild()}
				</div>
				<div className="dark-theme">
					{renderHeader("Dark Theme")}
					{renderChild()}
				</div>
			</div>
		</Unstyled>
	);
}

export { UnstyledWithTheme };
