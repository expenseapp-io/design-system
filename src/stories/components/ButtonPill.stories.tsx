import React, { useState } from "react";

import { Meta } from "@storybook/react";
import { UnstyledWithTheme } from "../../components/UnstyledWithTheme";

export default {
  title: "Components/ButtonPill",
} as Meta;

export const Default = () => {
  const [value, setValue] = useState<string>("expense");

  return (
    <div style={{ padding: 40 }}>
      <UnstyledWithTheme>
        <div className="box">
          <div className="button-pill">
            <button
              className={value === "expense" ? "button-pill-active" : undefined}
              onClick={() => setValue("expense")}
            >
              Expense
            </button>
            <button
              className={value === "income" ? "button-pill-active" : undefined}
              onClick={() => setValue("income")}
            >
              Income
            </button>
            <button
              className={
                value === "transfer" ? "button-pill-active" : undefined
              }
              onClick={() => setValue("transfer")}
            >
              Transfer
            </button>
          </div>
        </div>
      </UnstyledWithTheme>
    </div>
  );
};
