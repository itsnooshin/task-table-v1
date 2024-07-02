import type { ThemeConfig } from "antd";
import localFont from "next/font/local";

const dana = localFont({
  src: [
    {
      path: "../../public/fonts/DanaFaNum-Regular.woff2",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/fonts/DanaFaNum-Medium.woff2",
      style: "normal",
      weight: "500",
    },
    {
      path: "../../public/fonts/DanaFaNum-Bold.woff2",
      style: "normal",
      weight: "600",
    },
    {
      path: "../../public/fonts/DanaFaNum-DemiBold.woff2",
      style: "normal",
      weight: "700",
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
    borderRadius: 9,
    fontFamily: dana.style.fontFamily,
  },
  components: {
    Typography: {
      fontSize: 16,
      fontWeightStrong: 500,
      titleMarginTop: 0,
      titleMarginBottom: 0,
      fontFamily: dana.style.fontFamily,
    },
    Table: {
      colorText: "#000000",
      headerBg: "#F0F0F0",
      fontFamily: dana.style.fontFamily,
    },
  },
};

export default themeConfig;
