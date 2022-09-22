export const MODE = [
  {
    queryName: "dark",
    children: [
      {
        queryName: "purple",
        components: {
          body: {
            backgroundColor: "bg-[#170F23]",
          },
          sideBar: {
            backgroundColor: "bg-[#2A213A]",
            textColor: "text-[#dadada]",
            border: "none",
            hover: {
              text: "hover:text-[#ffffff]",
              textDark: "hover:text-[#dadada]",
            },
            active: {
              textColor: "text-[#ffffff]",
              backgroundColor: "bg-[#393243]",
              borderColor: "#7200a1",
            },
            divide: {
              color: "rgba(255,255,255,0.1)",
            },
          },
          audio: {
            backgroundColor: "bg-[#120C1C] ",
            info: {
              textColor: "text-[#ffffff]",
              textDark: "text-[#dadada]",
            },
            player: {
              textColor: "text-[#ffffff]",
            },
            thumb: {
              color: "#ffffff",
            },
            controls: {
              color: "text-[#ffffff]",
              colorHover: "hover:text-[#c662ef]",
              hoverStyle: "hover:bg-[#282231] hover:rounded-[50%] ",
            },
            playlist: {
              backgroundColor: "rgba(255,255,255,0.1)",
              hoverColor: "rgba(255,255,255,0.2)",
            },
          },
        },
      },
      {
        queryName: "red",
        components: {
          body: {
            backgroundColor: "bg-[#731717]",
          },
          sideBar: {
            backgroundColor: "bg-[#7A2323]",
            textColor: "text-[#dadada]",
            border: "none",
            hover: {
              text: "hover:text-[#ffffff]",
              textDark: "hover:text-[#dadada]",
            },
            active: {
              textColor: "text-[#ffffff]",
              backgroundColor: "bg-[#883939]",
              borderColor: "#aa1c1c",
            },
            divide: {
              color: "rgba(255,255,255,0.1)",
            },
          },
          audio: {
            backgroundColor: "bg-[#5C1212] ",
            info: {
              textColor: "text-[#ffffff]",
              textDark: "text-[#dadada]",
            },
            player: {
              textColor: "text-[#ffffff]",
            },
            thumb: {
              color: "#ffffff",
            },
            controls: {
              color: "text-[#ffffff]",
              colorHover: "hover:text-[#f36565]",
              hoverStyle: "hover:bg-[#6A2828] hover:rounded-[50%] ",
            },
            playlist: {
              backgroundColor: "rgba(255,255,255,0.1)",
              hoverColor: "rgba(255,255,255,0.2)",
            },
          },
        },
      },
    ],
  },
];
