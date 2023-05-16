import React, { ComponentProps, forwardRef } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";

const Button = forwardRef<HTMLButtonElement, ComponentProps<"button">>((props, ref) => {
	const {className, ...rest} = props;

	return <button ref={ref} className={classNames(styles.button, className)} {...rest} />;
});

Button.displayName = "Button";

export { Button };