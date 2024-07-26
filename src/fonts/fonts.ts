import localFont from "next/font/local";

export const lineSeedJP = localFont({
  src: [
    {
      path: "../fonts/LINESeedJP_OTF_Th.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/LINESeedJP_OTF_Bd.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/LINESeedJP_OTF_Eb.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});