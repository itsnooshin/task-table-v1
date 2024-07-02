import type { ThemeConfig } from "antd";
import localFont from "next/font/local";

const dana = localFont({
  src: [
    {
      path: "../../public/fonts/Dana-Regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/fonts/Dana-Medium.woff2",
      style: "normal",
      weight: "500",
    },
    {
      path: "../../public/fonts/Dana-Bold.woff2",
      style: "normal",
      weight: "700",
    },
    {
      path: "../../public/fonts/DanaFaNum-Medium.woff2",
      style: "normal",
      weight: "500",
    },
  ],
  variable: "--font-dana",
  display: "swap",
});

const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: "#3A3AE4",
    colorError: "#B81F1E",
    colorSuccess: "#22983C",
    colorTextBase: "#000000",
    fontFamily: dana.style.fontFamily,
    borderRadius: 9,
  },
  components: {
    Typography: {
      fontSize: 17,
      fontFamily: dana.style.fontFamily,
      fontWeightStrong: 500,
      titleMarginTop: 0,
      titleMarginBottom: 0,
    },
  },
};

export default themeConfig;
