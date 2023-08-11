import { cva } from "@styledSystem/css";
import { styled } from "@styledSystem/jsx";

const button = styled(
  "input",
  cva({
    base: {
      border: "none",
      outline: "none",
      "&:hover": {
        borderColor: "none",
      },
    },
    variants: {
      visual: {
        primary: {
          color: "identity.primary",
        },
      },
    },
  })
);

export default button;
