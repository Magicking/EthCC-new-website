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
      scrollbarThumb: {
        backgroundColor: `darkgrey`,
        outline: `1px solid slategrey`,
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
  sizes: {
    container: `1140px`,
  },
  layout: {
    container: {
      my: `10em`,
      display: `flex`,
      flexDirection: `column`,
      px: `20px`,
    },
  },
  text: {
    bigHeading: {
      fontSize: `6em`,
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
