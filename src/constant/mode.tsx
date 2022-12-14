export const MODE = [
  {
    queryName: "dark",
    children: [
      {
        queryName: "purple",
        components: {
          modal: {
            backgroundColor: "bg-[#432275]",
            textColor: "text-white",
            button: {
              backgroundColor: "bg-[#5D0082]",
              borderColor: "outline-[#5D0082]",
            },
          },
          scrollBar: {
            color: "#6c6474",
          },
          body: {
            backgroundColor: "bg-[#170F23]",
            textColor: "text-white",
            subTextColor: "text-[#86828C]",
            hover: {
              textColor: "hover:text-[#c662ef]",
            },
          },
          sideBar: {
            backgroundColor: "bg-[#2A213A]",
            textColor: "text-[#dadada]",
            border: "none",
            hover: {
              text: "hover:text-white",
              textDark: "hover:text-[#dadada]",
            },
            active: {
              textColor: "text-white",
              backgroundColor: "bg-[#393243]",
              borderColor: "#7200a1",
            },
            divide: {
              color: "rgba(255,255,255,0.1)",
            },
            navigation: {
              color: "text-[#dadada]",
              active: "text-white",
            },
          },
          audio: {
            backgroundColor: "bg-[#120C1C] ",
            info: {
              textColor: "text-white",
              textDark: "text-[#dadada]",
            },
            player: {
              textColor: "text-white",
              textDark: "text-[#dadada]",
            },
            thumb: {
              color: "white",
            },
            track: {
              color: "#fff",
            },
            controls: {
              color: "text-white",
              colorHover: "hover:text-[#c662ef]",
              hoverStyle: "hover:bg-[#282231] hover:rounded-[50%] ",
            },
            playlist: {
              backgroundColor: "rgba(255,255,255,0.1)",
              hoverColor: "rgba(255,255,255,0.2)",
            },
          },
          navbar: {
            textColor: "text-white",
            item: {
              backgroundColor: "bg-[#2F2739]",
              hover: {
                backgroundColor: "hover:bg-[#2C2436]",
              },
            },
            search: {
              suggest: {
                backgroundColor: "bg-[#432275]",
                item: {
                  hover: {
                    textColor: "hover:text-[#c662ef]",
                    backgroundColor: "hover:bg-[#ffffff1a]",
                  },
                  icon: {
                    textColor: "text-[#ffffff80]",
                  },
                },
              },
              currentResult: {
                deleteColor: "text-[#c662ef] ",
                item: {
                  textColor: "text-[#ffffff80]",
                  hover: {
                    textColor: "hover:text-[#c662ef]",
                    backgroundColor: "hover:bg-[#ffffff1a]",
                  },
                },
              },
            },
            navigation: {
              color: "text-[#dadada]",
              active: "text-white",
            },
          },
        },
      },
    ],
  },
  {
    queryName: "light",
    children: [
      {
        queryName: "light green",
        components: {
          modal: {
            backgroundColor: "bg-[#E1E8E8]",
            textColor: "text-black",
            button: {
              backgroundColor: "bg-[#239292]",
              borderColor: "outline-[#239292]",
            },
          },
          scrollBar: {
            color: "#c3c1be",
          },
          body: {
            backgroundColor: "bg-[#CED9D9]",
            textColor: "text-black",
            subTextColor: "text-black",
            hover: {
              textColor: "hover:text-[#239292]",
            },
          },
          sideBar: {
            backgroundColor: "bg-[#DDE4E4]",
            textColor: "text-[#32323D]",
            border: "none",
            hover: {
              text: "hover:text-[#239292]",
              textDark: "hover:text-[#32323D]",
            },
            active: {
              textColor: "text-[#239292]",
              backgroundColor: "bg-[#E7ECEC]",
              borderColor: "#239292",
            },
            divide: {
              color: "#C6CDCD",
            },
          },
          audio: {
            backgroundColor: "bg-[#B4D0D0] ",
            info: {
              textColor: "text-[#32323d]",
              textDark: "text-[#696969]",
            },
            player: {
              textColor: "text-[#32323d]",
              textDark: "text-[#696969]",
            },
            thumb: {
              color: "#239292",
            },
            track: {
              color: "#239292",
            },
            controls: {
              color: "text-[#32323d]",
              colorHover: "hover:text-[#239292]",
              hoverStyle: " ",
            },
            playlist: {
              backgroundColor: "#BCD5D5",
              hoverColor: "",
            },
          },
          navbar: {
            textColor: "text-[#32323D]",
            item: {
              backgroundColor: "bg-[#DDE4E4]",
              hover: {
                backgroundColor: "hover:bg-[#D5DCDC]",
              },
            },
            search: {
              suggest: {
                backgroundColor: "bg-[#E1E8E8]",
                item: {
                  hover: {
                    textColor: "",
                    backgroundColor: "hover:bg-[#EAEFEF]",
                  },
                  icon: {
                    textColor: "text-[#32323D]",
                  },
                },
              },
              currentResult: {
                deleteColor: "text-[#239292] ",
                item: {
                  textColor: "text-[#696969]",

                  hover: {
                    textColor: "hover:text-[#239292]",
                    backgroundColor: "hover:bg-[#EAEFEF]",
                  },
                },
              },
            },
            navigation: {
              color: "text-[#AAB2B4]",
              active: "text-[#32323D]",
            },
          },
        },
      },
    ],
  },
];
