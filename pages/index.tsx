import { Typography } from "../components";
import TypeAnimation from "react-type-animation";

export default function Home() {
  setTimeout(() => {
    window.location.href = "/happyGraudationDayToYou";
  }, 16700);

  return (
    <div className="bg-zinc-900 h-screen hidden md:block">
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
  );
}
