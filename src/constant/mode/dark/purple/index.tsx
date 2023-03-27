import { STYLES } from "./class";

export const PURPLE = {
  queryName: "purple",
  components: {
    album: {
      textColor: STYLES.text.third,
      subTextColor: STYLES.text.second,
      button: {
        backgroundColor: STYLES.backgroundColor.tenth,
      },
    },
    dropdown: {
      backgroundColor: STYLES.backgroundColor.nineth,
      textColor: STYLES.text.third,
      subTextColor: STYLES.text.second,
      borderColor: STYLES.border.third,
      hover: {
        backgroundColor: STYLES.backgroundColor.hover.second,
      },
    },
    button: {
      backgroundColor: STYLES.backgroundColor.tenth,
      border: STYLES.border.third,
    },
    modal: {
      backgroundColor: STYLES.backgroundColor.first,
      textColor: STYLES.text.first,
      button: {
        backgroundColor: STYLES.backgroundColor.second,
        borderColor: STYLES.outline.first,
      },
    },
    scrollBar: {
      color: STYLES.scrollbar.first,
    },
    body: {
      backgroundColor: STYLES.backgroundColor.third,
      textColor: STYLES.text.first,
      subTextColor: STYLES.text.second,
      subBackgroundColor: STYLES.backgroundColor.fourth,
      hover: {
        textColor: STYLES.text.hover.first,
      },
    },
    sideBar: {
      backgroundColor: STYLES.backgroundColor.fifth,
      textColor: STYLES.text.third,
      border: STYLES.border.first,
      hover: {
        text: STYLES.text.hover.second,
        textDark: STYLES.text.hover.fourth,
      },
      active: {
        textColor: STYLES.text.first,
        backgroundColor: STYLES.backgroundColor.sixth,
        borderColor: STYLES.border.second,
      },
      divide: {
        color: STYLES.divide.first,
      },
      navigation: {
        color: STYLES.text.third,
        active: STYLES.text.first,
      },
    },
    audio: {
      backgroundColor: STYLES.backgroundColor.seventh,
      info: {
        textColor: STYLES.text.first,
        textDark: STYLES.text.third,
      },
      player: {
        textColor: STYLES.text.first,
        textDark: STYLES.text.third,
      },
      thumb: {
        color: STYLES.thumb.first,
      },
      track: {
        color: STYLES.track.first,
      },
      controls: {
        color: STYLES.text.first,
        colorHover: STYLES.text.hover.third,
        hoverStyle: STYLES.controls.hover,
      },
      playlist: {
        backgroundColor: STYLES.playlist.backgroundColor,
        hoverColor: STYLES.playlist.hoverColor,
      },
    },
    navbar: {
      textColor: STYLES.text.first,
      item: {
        backgroundColor: STYLES.backgroundColor.eighth,
        hover: {
          backgroundColor: STYLES.backgroundColor.hover.first,
        },
      },
      search: {
        suggest: {
          backgroundColor: STYLES.backgroundColor.first,
          item: {
            hover: {
              textColor: STYLES.text.hover.third,
              backgroundColor: STYLES.backgroundColor.hover.second,
            },
            icon: {
              textColor: STYLES.text.fifth,
            },
          },
        },
        currentResult: {
          deleteColor: STYLES.text.sixth,
          item: {
            textColor: STYLES.text.fifth,
            hover: {
              textColor: STYLES.text.hover.third,
              backgroundColor: STYLES.backgroundColor.hover.second,
            },
          },
        },
      },
      navigation: {
        color: STYLES.text.third,
        active: STYLES.text.first,
      },
    },
  },
};
