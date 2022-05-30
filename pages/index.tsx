import { Typography } from "../components";
import TypeAnimation from "react-type-animation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (window.screen.availWidth > 767) {
      setTimeout(() => {
        window.location.href = "/happyGraudationDayToYou";
      }, 16700);
    }
  });

  return (
    <div className="md:bg-zinc-900 h-screen">
      <div className="hidden md:block">
        <div className="flex justify-center items-center h-screen">
          <TypeAnimation
            cursor={false}
            sequence={[
              "Сайн уу, хөөрхөнөө?",
              2000,
              "Юу байна даа?",
              2000,
              "За бэлэн үү?",
              2000,
              "3",
              1000,
              "2",
              1000,
              "1",
              1000,
              "Би чамд хайртай",
            ]}
            wrapper="h2"
            className="text-white text-4xl"
          />
        </div>
      </div>
      <div className="md:hidden">
        <h1>{"Утсаар орж болохгүй шүү, хөөрхөнөө. Заавал компьютер <3"}</h1>
      </div>
    </div>
  );
}
