"use client"
import { useState } from "react";

function HideseekPage() {
  const [isLightOn, setIsLightOn] = useState(false);
  return (
    <div>
      <div className="text-center mt-6 p-4">
        <h1 className="text-3xl">แสดง/ซ่อนข้อความshow-hide</h1>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="bg-pink-700 p-5 rounded-2xl text-xl bg-amber-400 cursor-pointer"
          onClick={() => setIsLightOn(!isLightOn)}
        >

          เปิด / ซ่อน ข้อความ
        </button>
      </div>
      <div className="text-cemter text-3xl mt-2">
        <h1 className="flex-justify text-center">:{isLightOn ? "ซ่อนข้อความ" : "เปิดข้อความ"}</h1>
        {isLightOn ? (
         <h2 className="flex-justify text-center text-4xl">
          hello
         </h2>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}

export default HideseekPage;