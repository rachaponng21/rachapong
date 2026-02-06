"use client"
import { useState } from "react";

function LightPage() {
    const [isLightOn, setIsLightOn] = useState(false);
    return (
        <div>
            <div className="text-center mt-6 p-4">
                <h1 className="text-3xl">บทเรียน 1 State ของการเปิด / ปิด หลอดไฟ</h1>
            </div>
            <div className="flex justify-center">
                <button 
                type="button" 
                className="bg-emerald-400 p-5 rounded-2xl text-xl bg-amber-400 cursor-pointer"
                onClick={() => setIsLightOn(!isLightOn)}
                >
        
                    เปิด / ปิด หลอดไฟ
                </button>
            </div>
            <div className="text-cemter text-3xl mt-2">
                <h1>สถานะของหลอดไฟ:{isLightOn ? "เปิด" : "ปิด"}</h1>
                {isLightOn ? (
          <img src="https://www.w3schools.com/js/pic_bulbon.gif" />
        ) : (
          <img src="https://www.w3schools.com/js/pic_bulboff.gif" />
        )}
            </div>
        </div>
    );
}

export default LightPage;