import Link from "next/link";
import Typography from "../typography";

const Mendchilgee = () => {
  return (
    <div className="flex justify-center items-center h-[100%]">
      <div
        className="w-[1000px] h-[500px] bg-gradient-to-r from-violet-500 to-indigo-800 z-10 flex rounded-xl overflow-hidden relative"
        style={{
          border: "3px solid white",
          boxShadow: "0 0 15px 10px #a271e2",
        }}
      >
        <Link href="hairtai">
          <img
            src="\assets\cutie.jpg"
            alt=""
            className="w-[278px] cursor-pointer"
          />
        </Link>
        <div className="w-[100%] flex flex-col items-center box-border py-[20px] px-[8%] bg-gradient-to-t from-indigo-700 to-indigo-500 overflow-y-hidden">
          <h1
            className="font-bold text-3xl text-white text-center bg-indigo-700 rounded-xl py-[5px] mb-[5px] px-[5px]"
            style={{ border: "2px solid white" }}
          >
            Мөнгөн хонхны баярын мэнд хүргэе!
          </h1>
          <p
            className="text-md text-white opacity980 font-bold text-justify bg-gradient-to-t from-violet-500 to-indigo-800 rounded-xl px-[15px] py-[7px]"
            style={{ border: "2px solid white" }}
          >
            Сайн уу, хөөрхөнөө? 9-р ангиа төгссөнд нь баяр хүргэе! Яахав яг ч
            бүрэн төгсөөгүй ч чи минь өөрийн хүссэн хэмжээндээ төгссөн гэдэгт
            итгэлтэй байна. Чи минь өнөөдөр буюу 5 сарын 30-нд маш үзэсгэлэнтэй
            харагдаж байна. Гадна төрхөөсөө илүү чиний минь авч буй мэдрэмж,
            ялангуяа чиний минь хөөрхөн инээмсэглэл. Яг л ямар нэгэн цэцэг
            дэлбээгээ нээн мишээж буй мэт үзэсгэлэнтэй. Үргэлж чи минь инээж
            яваарай. Чамдаа зориулж энэ бяцхан сайтыг хийлээ. Хугацаа бага
            байсан болохоор би онцгой гоё зүйл хийж чадсангүй ээ, уучлаарай.
            Гэхдээ таалагдана гэдэгт итгэлтэй байна. Чамдаа амлах зүйлс надад
            байна. Би чамд чин сэтгэлээсээ хайртай, хэзээ ч орхиж чадахгүй ээ,
            хүмүүс аймар тийм зүйл байдаггүй юм, угаасаа үүрдийн хайр гэж
            худлаа, тийм зүйл гэж байхгүй гэдэг. Гэхдээ би чамд чин сэтгэлээсээ
            амлаж чаднаа. Би чамайгаа орхихгүй, үргэлж ганцхан чамайгаа л
            хайрлах болноо, амлаж байна.
          </p>
          <a href=""></a>
          {/* <h2 className="font-semibold text-l text-white opacity-70 ">
            Хайртдаа зориуллаа.
          </h2> */}
        </div>
      </div>
    </div>
  );
};
export default Mendchilgee;
