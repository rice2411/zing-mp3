import { AiOutlinePlayCircle } from "react-icons/ai";
import { BiCategory, BiLineChart } from "react-icons/bi";
import { BsMusicNoteBeamed, BsNewspaper, BsStar } from "react-icons/bs";
import { FiDisc, FiRadio } from "react-icons/fi";
import { MdOutlineLibraryMusic, MdOutlineOndemandVideo } from "react-icons/md";
import { iconStyles } from "../../styles";

export const data = {
  noScroll: [
    {
      id: 1,
      icon: <MdOutlineLibraryMusic className={`${iconStyles}`} />,
      title: "Thư Viện",
      route: "/mymusic",
      canPlay: <AiOutlinePlayCircle />,
    },
    {
      id: 2,
      icon: <FiDisc className={`${iconStyles}`} />,
      title: "Khám phá",
      route: "/",
    },
    {
      id: 3,
      icon: <BiLineChart className={`${iconStyles}`} />,
      title: "#zingchart",
      route: "/zing-chart",
      canPlay: <AiOutlinePlayCircle />,
    },
    {
      id: 4,
      icon: <FiRadio className={`${iconStyles}`} />,
      title: "Radio",
      route: "/radio",
      canPlay: <AiOutlinePlayCircle />,
    },
    {
      id: 5,
      icon: <BsNewspaper className={`${iconStyles}`} />,
      title: "Theo dõi",
      route: "/the-loai-nghe-si",
    },
  ],
  scroll: [
    {
      id: 1,
      icon: <BsMusicNoteBeamed className={`${iconStyles}`} />,
      title: "Nhạc mới",
      route: "/moi-phat-hanh",
      canPlay: <AiOutlinePlayCircle />,
    },
    {
      id: 2,
      icon: <BiCategory className={`${iconStyles}`} />,
      title: "Thể loại",
      route: "/hub",
    },
    {
      id: 3,
      icon: <BsStar className={`${iconStyles}`} />,
      title: "Top 100",
      route: "/top100",
    },
    {
      id: 4,
      icon: <MdOutlineOndemandVideo className={`${iconStyles}`} />,
      title: "MV",
      route: "/the-loai-video",
    },
  ],
};
