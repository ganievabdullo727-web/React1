import React from "react";

const Glavnaya = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <section className="bg-[#2E7D32] rounded-3xl h-[300px] flex justify-between items-center p-[40px] mt-[10px]">
        <div className="flex flex-col gap-[20px] w-[50%]">
          <h1 className="text-[24px] text-white">
            Бренд MEDO - российское производство транспортных лент, прутковых
            транспортеров для сельхозтехники по уборке урожая овощных культур
          </h1>
          <button className="bg-white text-[#2E7D32] rounded-[5px] w-[180px] p-[10px] text-[12px]">
            ОСТАВИТЬ ЗАЯВКУ
          </button>
        </div>
        <img className="w-[30%] h-[90%]" src="/public/img (2).png" alt="" />
      </section>

      <section className="mt-[60px] p-[10px] text-center">
        <h1 className="text-[28px] font-bold">Каталог товаров</h1>
        <p className="text-[12px] text-[#777777] mt-[5px]">
          Небольшое описание блока, <br /> размерна в два строки
        </p>
        <div className="grid grid-cols-3 gap-[20px] mt-[30px]">
          <div className="bg-[#2E7D32] text-white rounded-[20px] p-[20px] flex flex-col justify-between h-[200px]">
            <h2 className="text-[18px] text-left">
              Свеклоуборочная <br /> техника
            </h2>
            <img
              className="w-[60%] self-end"
              src="/public/img (3).png"
              alt=""
            />
          </div>
          <div className="border border-[#EEEEEE] bg-white rounded-[20px] p-[20px] flex items-center gap-[10px] h-[200px]">
            <img className="w-[50%]" src="/public/img (4).png" alt="" />
            <h2 className="text-[18px] text-left">
              Картофелеуборочная <br /> техника
            </h2>
          </div>
          <div className="border border-[#EEEEEE] bg-white rounded-[20px] p-[20px] flex flex-col justify-between h-[200px]">
            <h2 className="text-[18px] text-left">Транспортеры MEDO</h2>
            <img
              className="w-[60%] self-end"
              src="/public/img (2).png"
              alt=""
            />
          </div>
        </div>
        <button className="bg-[#2E7D32] text-white rounded-full w-[160px] p-[10px] text-[12px] mt-[30px]">
          ПЕРЕЙТИ В КАТАЛОГ
        </button>
      </section>

      <section className="mt-[60px] p-[10px]">
        <h1 className="text-[28px] font-bold text-center">О компании</h1>
        <p className="text-[12px] mt-[20px]">
          ООО «КД-ГРУПП» — это команда единомышленников и инженеров, как
          сельскохозяйственной и специальной техники. Основной состав состоит из
          дорожников и инженеров-производственников, которые не поняли на
          практике трудности и проблемы, с которыми приходится сталкиваться при
          уборке урожая.
        </p>
        <p className="text-[12px] mt-[10px]">
          А также, наша компания предлагает к поставке прутковые транспортеры и
          конвейерные ленты собственного производства под брендом MEDO. В
          ассортименте нашей компании также есть изготовление транспортёров для
          уборки урожая овощных культур. Дополнительно, мы выполняем услуги по
          восстановлению машин, обработке, закалке и ремонту.
        </p>
        <div className="flex justify-around text-center mt-[30px]">
          <div>
            <h2 className="text-[36px] font-bold">500</h2>
            <p className="text-[12px]">товаров</p>
          </div>
          <div>
            <h2 className="text-[36px] font-bold">300+</h2>
            <p className="text-[12px]">клиентов</p>
          </div>
          <div>
            <h2 className="text-[36px] font-bold">15</h2>
            <p className="text-[12px]">специалистов</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-[10px] mt-[40px]">
        <img
          className="w-full h-[200px] object-cover rounded-3xl"
          src="/public/img (5).png"
          alt=""
        />
        <img
          className="w-full h-[200px] object-cover rounded-3xl"
          src="/public/img (6).png"
          alt=""
        />
        <img
          className="w-full h-[200px] object-cover rounded-3xl"
          src="/public/img (2).png"
          alt=""
        />
      </section>

      <footer className="bg-[#F4F4F4] p-[40px] mt-[40px]">
        <div className="grid grid-cols-5 gap-[20px]">
          <div className="flex flex-col gap-[8px]">
            <h2 className="text-[16px] font-bold">КД-ГРУПП</h2>
            <p className="text-[10px]">Транспортёры MEDO</p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <h3 className="text-[14px] font-bold">Информация</h3>
            <p className="text-[11px]">О нас</p>
            <p className="text-[11px]">Партнерам</p>
            <p className="text-[11px]">Новости</p>
            <p className="text-[11px]">Контакты</p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <h3 className="text-[14px] font-bold">Каталог</h3>
            <p className="text-[11px]">Свеклоуборочная техника</p>
            <p className="text-[11px]">Картофелеуборочная техника</p>
            <p className="text-[11px]">Транспортеры MEDO</p>
            <p className="text-[11px]">Конвейерные ленты MEDO</p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <h3 className="text-[14px] font-bold">Блог</h3>
            <p className="text-[11px]">Новости</p>
            <p className="text-[11px]">События</p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <h3 className="text-[14px] font-bold">Адрес</h3>
            <p className="text-[11px]">г. Рязань, Московский проезд, д. 2/5в</p>
            <p className="text-[11px] font-bold">8 800 505 72 32</p>
            <p className="text-[11px]">info@kd-grupp.com</p>
            <button className="bg-[#2E7D32] text-white rounded-full p-[8px] text-[11px]">
              НАПИСАТЬ НАМ
            </button>
          </div>
        </div>
        <div className="flex justify-between text-[10px] mt-[30px]">
          <p>© 2022 КД-Групп. Все права защищены.</p>
          <p>Модернизация, разработка Skin Host</p>
        </div>
      </footer>
    </div>
  );
};

export default Glavnaya;
