import React from "react";

const Novosti = () => {
  return (
    <div className="max-w-[1200px] mx-auto text-left">
      <p className="text-[12px] mt-[30px] p-[10px]">header on scroll</p>

      <section className="p-[10px] mt-[20px]">
        <p className="text-[12px] mb-[10px]">buttons</p>
        <div className="flex gap-[15px] flex-wrap">
          <div className="border border-dashed border-[#B794F4] rounded-[10px] p-[10px] flex flex-col gap-[10px]">
            <button className="border border-[#2E7D32] text-[#2E7D32] rounded-full w-[160px] p-[8px] text-[11px]">
              НАПИСАТЬ НАМ
            </button>
            <button className="bg-gradient-to-r from-[#4C8C5A] to-[#1F5A2E] text-white rounded-full w-[160px] p-[8px] text-[11px]">
              НАПИСАТЬ НАМ
            </button>
          </div>
          <div className="border border-dashed border-[#B794F4] rounded-[10px] p-[10px] flex flex-col gap-[10px]">
            <button className="bg-gradient-to-r from-[#4C8C5A] to-[#1F5A2E] text-white rounded-full w-[160px] p-[8px] text-[11px]">
              УЗНАТЬ СТОИМОСТЬ
            </button>
            <button className="border border-[#2E7D32] text-[#2E7D32] rounded-full w-[160px] p-[8px] text-[11px]">
              УЗНАТЬ СТОИМОСТЬ
            </button>
          </div>
          <div className="border border-dashed border-[#B794F4] rounded-[10px] p-[10px] flex flex-col gap-[10px]">
            <button className="bg-white shadow-md text-[#2E7D32] rounded-full w-[160px] p-[8px] text-[11px]">
              ОСТАВИТЬ ЗАЯВКУ
            </button>
            <button className="border border-[#2E7D32] text-[#2E7D32] rounded-full w-[160px] p-[8px] text-[11px]">
              ОСТАВИТЬ ЗАЯВКУ
            </button>
          </div>
          <div className="border border-dashed border-[#B794F4] rounded-[10px] p-[10px] flex flex-col gap-[10px]">
            <button className="bg-gradient-to-r from-[#4C8C5A] to-[#1F5A2E] text-white rounded-full w-[200px] p-[8px] text-[11px]">
              ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
            </button>
            <button className="border border-[#2E7D32] text-[#2E7D32] rounded-full w-[200px] p-[8px] text-[11px]">
              ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
            </button>
          </div>
          <div className="border border-dashed border-[#B794F4] rounded-[10px] p-[10px] flex flex-col gap-[10px]">
            <button className="bg-gradient-to-r from-[#4C8C5A] to-[#1F5A2E] text-white rounded-full w-[160px] p-[8px] text-[11px]">
              ПЕРЕЙТИ В КАТАЛОГ
            </button>
            <button className="border border-[#2E7D32] text-[#2E7D32] rounded-full w-[160px] p-[8px] text-[11px]">
              ПЕРЕЙТИ В КАТАЛОГ
            </button>
          </div>
        </div>
      </section>

      <section className="p-[10px] mt-[20px] flex gap-[30px]">
        <div>
          <p className="text-[12px] mb-[10px]">cards</p>
          <div className="border border-dashed border-[#B794F4] rounded-[10px] p-[15px] flex flex-col gap-[15px] w-[280px]">
            <div className="bg-white shadow-md rounded-[20px] p-[20px] h-[180px] flex flex-col justify-between">
              <h2 className="text-[18px] font-bold text-[#2E7D32]">
                Картофелеуборочная <br /> техника
              </h2>
              <img
                className="w-[60%] self-end"
                src="/public/img (4).png"
                alt=""
              />
            </div>
            <div className="bg-gradient-to-br from-[#4C8C5A] to-[#1F5A2E] text-white rounded-[20px] p-[20px] h-[180px] flex flex-col justify-between">
              <h2 className="text-[18px] font-bold">
                Картофелеуборочная <br /> техника
              </h2>
              <img
                className="w-[60%] self-end"
                src="/public/img (4).png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          <div>
            <p className="text-[12px] mb-[10px]">icons</p>
            <div className="flex gap-[15px]">
              <div className="border border-dashed border-[#B794F4] rounded-[10px] p-[10px] flex flex-col gap-[10px]">
                <button className="bg-[#2D8CFF] text-white rounded-full w-[30px] h-[30px] text-[11px]">
                  VK
                </button>
                <button className="border border-[#2D8CFF] text-[#2D8CFF] rounded-full w-[30px] h-[30px] text-[11px]">
                  VK
                </button>
              </div>
              <div className="border border-dashed border-[#B794F4] rounded-[10px] p-[10px] flex flex-col gap-[10px]">
                <button className="bg-[#4CAF50] text-white rounded-full px-[15px] h-[30px] text-[11px]">
                  WhatsApp
                </button>
                <button className="border border-[#4CAF50] text-[#4CAF50] rounded-full px-[15px] h-[30px] text-[11px]">
                  WhatsApp
                </button>
              </div>
              <div className="border border-dashed border-[#B794F4] rounded-[10px] p-[10px] flex flex-col gap-[10px]">
                <button className="bg-[#3B82C4] text-white rounded-full px-[15px] h-[30px] text-[11px]">
                  Telegram
                </button>
                <button className="border border-[#3B82C4] text-[#3B82C4] rounded-full px-[15px] h-[30px] text-[11px]">
                  Telegram
                </button>
              </div>
              <div className="border border-dashed border-[#B794F4] rounded-[10px] p-[10px] flex flex-col gap-[10px]">
                <button className="bg-[#3B82C4] text-white rounded-full w-[30px] h-[30px] text-[11px]">
                  T
                </button>
                <button className="border border-[#3B82C4] text-[#3B82C4] rounded-full w-[30px] h-[30px] text-[11px]">
                  T
                </button>
              </div>
              <div className="border border-dashed border-[#B794F4] rounded-[10px] p-[10px] flex flex-col gap-[10px]">
                <button className="bg-[#4CAF50] text-white rounded-full w-[30px] h-[30px] text-[11px]">
                  W
                </button>
                <button className="border border-[#4CAF50] text-[#4CAF50] rounded-full w-[30px] h-[30px] text-[11px]">
                  W
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-[30px]">
            <div>
              <p className="text-[12px] mb-[10px]">input</p>
              <div className="border border-dashed border-[#B794F4] rounded-[10px] p-[10px] flex flex-col gap-[10px] w-[240px]">
                <input
                  type="search"
                  className="bg-[#F4F4F4] rounded-full px-[15px] py-[8px] text-[12px]"
                  placeholder="Поиск по каталогу..."
                />
                <input
                  type="search"
                  className="border border-[#DDDDDD] rounded-full px-[15px] py-[8px] text-[12px]"
                  placeholder="Свеклоуборка..."
                />
              </div>
            </div>
            <div>
              <p className="text-[12px] mb-[10px]">imges</p>
              <div className="border border-dashed border-[#B794F4] rounded-[10px] p-[10px] flex flex-col gap-[10px]">
                <img
                  className="w-[60px] h-[60px] object-cover rounded-[5px]"
                  src="/public/img (7).png"
                  alt=""
                />
                <img
                  className="w-[60px] h-[60px] object-cover rounded-[5px]"
                  src="/public/Property 1=not active.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-[10px] mt-[20px]">
        <p className="text-[12px] mb-[10px]">points</p>
        <div className="border border-dashed border-[#B794F4] rounded-[10px] p-[15px] flex flex-col gap-[15px] w-[450px]">
          <div className="flex justify-between text-[12px]">
            <a href="#">ГЛАВНАЯ</a>
            <a href="#">КАТАЛОГ ⌄</a>
            <a href="#">О НАС</a>
            <a href="#">НОВОСТИ</a>
            <a href="#">ПАРТНЕРЫ</a>
            <a href="#">КОНТАКТЫ</a>
          </div>
          <div className="flex justify-between text-[12px] font-bold text-[#2E7D32]">
            <a href="#">ГЛАВНАЯ</a>
            <a href="#">КАТАЛОГ ⌄</a>
            <a href="#">О НАС</a>
            <a href="#">НОВОСТИ</a>
            <a href="#">ПАРТНЕРЫ</a>
            <a href="#">КОНТАКТЫ</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Novosti;
