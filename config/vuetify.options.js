import colors from 'vuetify/lib/util/colors'

const palette = {
  colors: {
    primary: colors.green.base, // primary main
    primarylight: colors.green.lighten4, // primary light
    primarydark: colors.green.darken4, // primary dark
    secondary: colors.indigo.accent4, // secondary main
    secondarylight: colors.indigo.lighten4, // secondary light
    secondarydark: colors.indigo.darken4, // secondary dark
    anchor: colors.indigo.base // link
  }
}

export const theme = {
  ...palette.colors
}

export default {
  rtl: false,
  theme: {
    dark: false,
    themes: {
      light: {
        ...theme
      },
      dark: {
        ...theme
      }
    },
    options: {
      customProperties: true
    }
  }
}
