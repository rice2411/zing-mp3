import { STYLES } from "./class";

export const LIGHTGREEN = {
  queryName: "light green",
  components: {
    album: {
      textColor: STYLES.text.third,
      subTextColor: STYLES.text.second,
      button: {
        backgroundColor: STYLES.backgroundColor.eighth,
      },
    },
    dropdown: {
      backgroundColor: STYLES.backgroundColor.first,
      textColor: STYLES.text.third,
      subTextColor: STYLES.text.second,
      borderColor: STYLES.border.third,
      hover: {
        backgroundColor: STYLES.backgroundColor.hover.second,
      },
    },
    button: {
      backgroundColor: STYLES.backgroundColor.nineth,
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
      subTextColor: STYLES.text.first,
      hover: {
        textColor: STYLES.text.hover.first,
      },
    },
    sideBar: {
      backgroundColor: STYLES.backgroundColor.fourth,
      textColor: STYLES.text.second,
      border: STYLES.border.first,
      hover: {
        text: STYLES.text.hover.first,
        textDark: STYLES.text.hover.second,
      },
      active: {
        textColor: STYLES.text.third,
        backgroundColor: STYLES.backgroundColor.fifth,
        borderColor: STYLES.border.second,
      },
      divide: {
        color: STYLES.divide.first,
      },
    },
    audio: {
      backgroundColor: STYLES.backgroundColor.sixth,
      info: {
        textColor: STYLES.text.second,
        textDark: STYLES.text.fourth,
      },
      player: {
        textColor: STYLES.text.second,
        textDark: STYLES.text.fourth,
      },
      thumb: {
        color: STYLES.thumb.first,
      },
      track: {
        color: STYLES.track.first,
      },
      controls: {
        color: STYLES.text.second,
        colorHover: STYLES.text.hover.first,
        hoverStyle: " ",
      },
      playlist: {
        backgroundColor: STYLES.playlist.backgroundColor,
        hoverColor: STYLES.playlist.hoverColor,
      },
    },
    navbar: {
      textColor: STYLES.text.second,
      item: {
        backgroundColor: STYLES.backgroundColor.fourth,
        hover: {
          backgroundColor: STYLES.backgroundColor.hover.first,
        },
      },
      search: {
        suggest: {
          backgroundColor: STYLES.backgroundColor.first,
          item: {
            hover: {
              textColor: "",
              backgroundColor: STYLES.backgroundColor.hover.second,
            },
            icon: {
              textColor: STYLES.text.second,
            },
          },
        },
        currentResult: {
          deleteColor: STYLES.text.fifth,
          item: {
            textColor: STYLES.text.fourth,

            hover: {
              textColor: STYLES.text.hover.first,
              backgroundColor: STYLES.backgroundColor.hover.second,
            },
          },
        },
      },
      navigation: {
        color: STYLES.text.sixth,
        active: STYLES.text.second,
      },
    },
  },
};
