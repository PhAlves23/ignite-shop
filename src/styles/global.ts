import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },

  body: {
    "-webkit-font-smoothing": "antialised",
    backgroundColor: "$gray900",
    color: "$gray100",
  },

  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
  },
});

// const Button = styled("button", {
//   backgroundColor: "$green500",
//   borderRadius: 4,
//   border: 0,
//   padding: "4px 8px",
//   cursor: "pointer",

//   span: {
//     fontWeight: "bold",
//   },

//   "&:hover": {
//     filter: "brightness(0.8)",
//   },
// });
