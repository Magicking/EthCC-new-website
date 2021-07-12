/* eslint-disable prefer-destructuring */

const breakpoints: string[] & {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
} = [`512px`, `850px`, `1080px`, `1280px`, `1440px`, `1920px`];

breakpoints.xs = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints.xxl = breakpoints[5];

export const theme = {
  breakpoints,
  useCustomProperties: true,
  initialColorMode: `light`,
  colors: {
    text: `#262a56`,
    background: `#e6e6e6`,
    primary: `#b30602`,
    secondary: `#609`,
    tracks: {
      eth2: `#F46036`,
      Scalability: `#5B85AA`,
      devtools: `#414770`,
      dapp: `#372248`,
      defi: `#171123`,
      eco: `#CB48B7`,
      bfg: `#6D9F71`,
      webt: `#E4E3D3`,
      dao: `#F7EE7F`,
      Gaming: `#C9CBA3`,
      Security: `#FFC15E`,
      Privacy: `#CC5803`,
      Enterprise: `#90F1EF`,
      EthCC: `#D63230`,
    },
  },
  fontSizes: {
    body: `1rem`,
  },
  fonts: {
    body: `Roboto Mono, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji`,
    heading: `inherit`,
  },
  lineHeights: {
    body: 1.7,
    heading: 1.7,
  },
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 700,
  },
  styles: {
    root: {
      fontFamily: `body`,
      fontSize: `1rem`,
      fontWeight: `body`,
      lineHeight: `body`,
      scrollbar: {
        width: `1em`,
      },
      '::-webkit-scrollbar': {
        width: `10px`,
      },
      '::-webkit-scrollbar-track': {
        background: `#e6e6e6`,
        borderShadow: `none`,
      },
      '::-webkit-scrollbar-thumb': {
        background: `#b30602`,
      },
      li: {
        mb: `2rem`,
      },
    },
    a: {
      color: `text`,
      textDecoration: `none`,
      ':hover': {
        color: `primary`,
      },
    },
  },
  layout: {
    container: {
      my: `5em`,
      display: `flex`,
      flexDirection: `column`,
      px: `15px`,
      maxWidth: [`480px`, `720px`, `1140px`],
    },
  },
  text: {
    bigHeading: {
      fontSize: [`3rem`, `5rem`, `6rem`],
      background: `linear-gradient(to right, #262a56, #b30602 70%)`,
      WebkitBackgroundClip: `text`,
      WebkitTextFillColor: `transparent`,
      lineHeight: `1.2`,
    },
    subHeading: {
      color: `primary`,
      textTransform: `uppercase`,
      fontSize: `16px`,
      mb: `1rem`,
    },
    title: {
      fontSize: `3rem`,
      position: `relative`,
      color: `text`,
      pb: `30px`,
      ':after': {
        content: `' '`,
        left: [0, null, `-20%`],
        bottom: 0,
        position: `absolute`,
        width: `100px`,
        height: `2px`,
        background: `linear-gradient(to right, #262a56, #b30602 70%)`,
      },
    },
    headerLink: {
      padding: `10px 0px`,
      textTransform: `uppercase`,
      fontSize: `14px`,
      fontWeight: 400,
      color: `text`,
      textDecoration: `none`,
      position: `relative`,
      ':hover': {
        color: `primary`,
      },
      ':after': {
        content: `' '`,
        background: `linear-gradient(to right, #262a56, #b30602 70%)`,
        width: 0,
        fontWeight: `heading`,
        height: `2px`,
        position: `absolute`,
        left: 0,
        bottom: 0,
        transition: `.3s all ease-in-out`,
      },
      ':hover:after': {
        width: `100%`,
      },
    },
  },
  links: {
    primary: {
      textAlign: `center`,
      textTransform: `uppercase`,
      textDecoration: `none`,
      color: `text`,
      fontWeight: 400,
      background: `transparent`,
      border: `2px solid #262a56`,
      padding: `10px 20px`,
      position: `relative`,
      cursor: `pointer`,
      transition: `.3s all ease-in-out`,
      ':before': {
        background: `linear-gradient(to right, #262a56, #b30602 70%)`,
        content: `' '`,
        position: `absolute`,
        left: 0,
        bottom: 0,
        top: 0,
        width: 0,
        transition: `.3s all ease-in-out`,
        zIndex: -1,
      },
      ':hover': {
        color: `#fff`,
      },
      ':hover:before': {
        width: `100%`,
      },
    },
    inverted: {
      textDecoration: `none`,
      color: `primary`,
      transition: `.3s all ease-in-out`,
      ':hover': {
        color: `text`,
      },
    },
  },
  forms: {
    input: {
      ':focus': { outline: `none` },
    },
    label: {
      color: `text`,
    },
  },
  variants: {
    inputWrapper: {
      py: `10px`,
    },
  },
};
