import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-monts",
  weight: ["100", "200", "300", "400", "600",'800', "900"],
  style:['normal','italic',],
  display:'swap'
});

export {montserrat}