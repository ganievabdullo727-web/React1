import React from "react";

const Sozdatzakaz = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-center mt-[150px]">
        <img src="/public/Frame 84.png" alt="" />
      </div>

      <div className="w-[600px] ml-[120px] mt-[70px] text-left">
        <h2 className="text-[16px]">Описание</h2>
        <div className="bg-[#E9E6FB] rounded-[8px] p-[8px] flex gap-[15px] mt-[10px]">
          <img className=" h-[18px]" src="/public/Frame 123.png" alt="" />
        </div>
        <textarea
          className="w-full h-[120px] p-[10px] text-[12px] bg-[#F7F6FF]"
          placeholder="Кратко опишите свой ворк"
        ></textarea>

        <h2 className="text-[16px] mt-[50px]">Часто задаваемые вопросы</h2>
        <div className="flex gap-[20px] mt-[20px]">
          <div className="border border-[#F2F0FE] bg-white rounded-[15px] p-[20px] w-[320px] flex flex-col gap-[10px]">
            <p className="text-[12px]">Вопрос</p>
            <input
              className="border border-[#F2F0FE] rounded-[8px] p-[8px] text-[12px]"
              type="text"
              placeholder="Placeholder"
            />
            <p className="text-[12px]">Ответ</p>
            <input
              className="border border-[#F2F0FE] rounded-[8px] p-[8px] text-[12px]"
              type="text"
              placeholder="Placeholder"
            />
            <button className="bg-[#FADADD] text-[#E5484D] rounded-full p-[10px] mt-[10px]">
              Удалить
            </button>
          </div>
          <div className="bg-[#F2F0FE] rounded-[15px] w-[250px] flex flex-col justify-center items-center gap-[15px]">
            <span className="bg-[#FBA457] text-white rounded-full w-[40px] h-[40px] flex justify-center items-center text-[28px]">
              +
            </span>
            <p className="text-[#FBA457] text-[12px]">Добавить вопрос-ответ</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-[600px] ml-[120px] mt-[50px]">
        <button className="bg-[#F2F0FE] rounded-full px-[40px] py-[10px]">
          Назад
        </button>
        <button className="bg-[#1DBF73] text-white rounded-full px-[40px] py-[10px]">
          Дальше
        </button>
      </div>

      <footer className="bg-[#F2F0FE] p-[40px] text-left mt-[100px]">
        <div className="grid grid-cols-4 gap-[20px]">
          <div className="flex flex-col gap-[8px]">
            <h3 className="text-[18px]">Топ категории</h3>
            <p className="text-[12px]">Тексты и переводы</p>
            <p className="text-[12px]">Разработка</p>
            <p className="text-[12px]">Дизайн</p>
            <p className="text-[12px]">Аудио, видео монтаж</p>
            <p className="text-[12px]">Соцсети и реклама</p>
            <p className="text-[12px]">Бизнес и жизнь</p>
            <p className="text-[12px]">SEO и оптимизация</p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <h3 className="text-[18px]">О Проекте</h3>
            <p className="text-[12px]">О Нас</p>
            <p className="text-[12px]">Как Это Работает</p>
            <p className="text-[12px]">Политика Приватности</p>
            <p className="text-[12px]">Правила Пользования</p>
            <p className="text-[12px]">Пресса о нас</p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <h3 className="text-[18px]">Поддержка</h3>
            <p className="text-[12px]">Контакты</p>
            <p className="text-[12px]">Политика Безопасности</p>
            <p className="text-[12px]">FAQ</p>
          </div>
          <div className="flex flex-col gap-[8px]">
            <h3 className="text-[18px]">Follow</h3>
            <div className="flex gap-[10px]">
              <img
                className="w-[25px] h-[25px]"
                src="/public/akar-icons_facebook-fill.png"
                alt=""
              />
              <img
                className="w-[25px] h-[25px]"
                src="/public/ant-design_twitter-circle-filled.png"
                alt=""
              />
              <img
                className="w-[25px] h-[25px]"
                src="/public/Group 35.png"
                alt=""
              />
              <img
                className="w-[25px] h-[25px]"
                src="/public/entypo-social_linkedin-with-circle.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <p className="text-center text-[12px] mt-[40px]">
          Copyright @ 2021 | WorkTap – Worktap.KZ. All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Sozdatzakaz;
