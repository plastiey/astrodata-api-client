import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#ffffff", "_black_blue_gradient")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#FFD117",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#B9FF17", "#FFD117")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const colors = {
  grassTeal: "#FFD117",
  _yellow: "#FFD117",
  _red: "#FF5D17",
  _green: "#B9FF17",
  _black: "#041116",
  _black_blue_gradient: "linear-gradient(90deg, #041116 0%, #172C33 100%)",
  _yellow_red_gradient: "linear-gradient(90deg, #FFD117 0%, #FF5D17 100%)",
  _yellow_green_gradient: "linear-gradient(90deg, #FFD117 0%, #B9FF17 100%)",
  _white: "#ffffff",

};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
