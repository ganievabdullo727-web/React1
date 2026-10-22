import React from "react";

const Birjha = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="border-2 p-[20px] h-[550px] bg-[#F7F6FF] border-dashed  border-[black] flex justify-around items-center mt-[100px]">
        <div className="flex flex-col gap-[20px] text-left">
          <h1 className="text-[40px]">
            Покупайте фриланс-услуги в <br />{" "}
            <span className="text-[#1DBF73]">два клика</span>
          </h1>
          <p>
            Ворк — единица работы продавца, которую <br /> можно купить как
            товар в магазине
          </p>
          <div className="flex bg-[#F2F0FE] p-[3px] gap-[10px]  w-[420px] rounded-full">
            <input
              type="search"
              className=" bg-[#F2F0FE] p-[15px] w-[400px] rounded-full"
              placeholder="Что нужно сделать?"
            />
            <button className="bg-[#FBA457] text-[#F2F0FE] w-[120px] rounded-full p-[15px]">
              Найти
            </button>
          </div>
          <h1 className="text-[18px]">Выберите рубрику, чтобы начать</h1>
          <div className="w-[450px] gap-[15px] flex flex-wrap justify-around text-left">
            <button className="border border-[#F2F0FE] text-[#222222] rounded-full p-[3px]">
              Тексты и переводы{" "}
            </button>
            <button className="border border-[#F2F0FE] text-[#222222] rounded-full p-[3px]">
              Разработка{" "}
            </button>
            <button className="border border-[#F2F0FE] text-[#222222] rounded-full p-[3px]">
              Дизайн
            </button>
            <button className="border border-[#F2F0FE] text-[#222222] rounded-full p-[3px]">
              Аудио, видео монтаж{" "}
            </button>
            <button className="border border-[#F2F0FE] text-[#222222] rounded-full p-[3px]">
              SEO и оптимизация
            </button>
            <button className="border border-[#F2F0FE] text-[#222222] rounded-full p-[3px]">
              Бизнес и жизнь{" "}
            </button>
            <button className="border border-[#F2F0FE] text-[#222222] rounded-full p-[3px]">
              Соцсети и реклама
            </button>
            <button className="border border-[#FBA457] text-[#FBA457] rounded-full p-[3px]">
              Все категории
            </button>
          </div>
        </div>
        <img
          className="w-[35%] h-[85%]"
          src="/public/Group 11 (1).png"
          alt=""
        />
      </div>

      <section className="mt-[100px] p-[10px]">
        <h1 className="text-[25px]">Актуальные ворки</h1>
        <div className="grid grid-cols-3 gap-[20px] mt-[20px]">
          <div className="border border-[#F2F0FE] bg-white rounded-[20px] p-[15px]">
            <div className="flex items-center gap-[10px]">
              <img className="w-[40px] h-[40px] rounded-full" src="/public/Ellipse 54.png" alt="" />
              <h2 className="text-[16px]">Сделать дизайн интернет-магазина</h2>
            </div>
            <p className="text-[14px] mt-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sed leo at hendrerit dictum diam, enim. Dolor in imperdiet
              ultrices mauris. Est vitae vulputate est nec cras.
            </p>
            <button className="border border-[#1DBF73] text-[#1DBF73] rounded-full w-full p-[5px] mt-[15px]">
              Посмотреть
            </button>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[20px] p-[15px]">
            <div className="flex items-center gap-[10px]">
              <img className="w-[40px] h-[40px] rounded-full" src="/public/Ellipse 54 (1).png" alt="" />
              <h2 className="text-[16px]">Верстка landing page</h2>
            </div>
            <p className="text-[14px] mt-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sed leo at hendrerit dictum diam, enim. Dolor in imperdiet
              ultrices mauris. Est vitae vulputate est nec cras.
            </p>
            <button className="bg-[#1DBF73] text-white rounded-full w-full p-[5px] mt-[15px]">
              Посмотреть
            </button>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[20px] p-[15px]">
            <div className="flex items-center gap-[10px]">
              <img className="w-[40px] h-[40px] rounded-full" src="/public/Ellipse 54 (2).png" alt="" />
              <h2 className="text-[16px]">Сделать дизайн сайта-каталога</h2>
            </div>
            <p className="text-[14px] mt-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sed leo at hendrerit dictum diam, enim. Dolor in imperdiet
              ultrices mauris. Est vitae vulputate est nec cras.
            </p>
            <button className="border border-[#1DBF73] text-[#1DBF73] rounded-full w-full p-[5px] mt-[15px]">
              Посмотреть
            </button>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[20px] p-[15px]">
            <div className="flex items-center gap-[10px]">
              <img className="w-[40px] h-[40px] rounded-full" src="/public/Ellipse 54 (3).png" alt="" />
              <h2 className="text-[16px]">Продвижение instagram</h2>
            </div>
            <p className="text-[14px] mt-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sed leo at hendrerit dictum diam, enim. Dolor in imperdiet
              ultrices mauris. Est vitae vulputate est nec cras.
            </p>
            <button className="border border-[#1DBF73] text-[#1DBF73] rounded-full w-full p-[5px] mt-[15px]">
              Посмотреть
            </button>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[20px] p-[15px]">
            <div className="flex items-center gap-[10px]">
              <img className="w-[40px] h-[40px] rounded-full" src="/public/Ellipse 54 (4).png" alt="" />
              <h2 className="text-[16px]">Срочно! Нужен веб дизайнер!</h2>
            </div>
            <p className="text-[14px] mt-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sed leo at hendrerit dictum diam, enim. Dolor in imperdiet
              ultrices mauris. Est vitae vulputate est nec cras.
            </p>
            <button className="border border-[#1DBF73] text-[#1DBF73] rounded-full w-full p-[5px] mt-[15px]">
              Посмотреть
            </button>
          </div>
          <div className="bg-[#F2F0FE] rounded-[20px] flex justify-center items-center text-[#1DBF73] text-[18px]">
            Смотреть все ворки
          </div>
        </div>
      </section>

      <section className="mt-[60px] p-[10px]">
        <h1 className="text-[25px]">Топ фрилансеров</h1>
        <div className="grid grid-cols-3 gap-[20px] mt-[20px]">
          <div className="border border-[#F2F0FE] bg-white rounded-[20px] p-[15px] flex gap-[15px]">
            <img className="w-[100px] h-[100px] rounded-full" src="/public/Ellipse 54 (3).png" alt="" />
            <div className="flex flex-col gap-[5px] text-left">
              <h2 className="text-[16px]">Марина Королёва</h2>
              <p className="text-[#FBA457]">Разработчик PHP</p>
              <p className="text-[12px]">Выполнено проектов: 65</p>
              <p className="text-[#FBA457]">★★★★★</p>
              <button className="bg-[#1DBF73] text-white w-[200px] m-auto rounded-full p-[5px]">
                Написать
              </button>
            </div>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[20px] p-[15px] flex gap-[15px]">
            <img className="w-[100px] h-[100px] rounded-full" src="/public/Group 18.png" alt="" />
            <div className="flex flex-col gap-[5px] text-left">
              <h2 className="text-[16px]">Семён Сергеев</h2>
              <p className="text-[#FBA457]">Копирайтер</p>
              <p className="text-[12px]">Выполнено проектов: 104</p>
              <p className="text-[#FBA457]">★★★★★</p>
              <button className="border border-[#1DBF73] w-[200px] m-auto text-[#1DBF73] rounded-full p-[5px]">
                Написать
              </button>
            </div>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[20px] p-[15px] flex gap-[15px]">
            <img className="w-[100px] h-[100px] rounded-full" src="/public/Group 18 (3).png" alt="" />
            <div className="flex flex-col gap-[5px] text-left">
              <h2 className="text-[16px]">Ангелина Сорокина</h2>
              <p className="text-[#FBA457]">Дизайнер сайтов</p>
              <p className="text-[12px]">Выполнено проектов: 25</p>
              <p className="text-[#FBA457]">★★★★★</p>
              <button className="border border-[#1DBF73] w-[200px] m-auto text-[#1DBF73] rounded-full p-[5px]">
                Написать
              </button>
            </div>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[20px] p-[15px] flex gap-[15px]">
            <img className="w-[100px] h-[100px] rounded-full" src="/public/Group 18 (1).png" alt="" />
            <div className="flex flex-col gap-[5px] text-left">
              <h2 className="text-[16px]">Никита Зайцев</h2>
              <p className="text-[#FBA457]">Маркетолог</p>
              <p className="text-[12px]">Выполнено проектов: 144</p>
              <p className="text-[#FBA457]">★★★★★</p>
              <button className="border border-[#1DBF73] w-[200px] m-auto text-[#1DBF73] rounded-full p-[5px]">
                Написать
              </button>
            </div>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[20px] p-[15px] flex gap-[15px]">
            <img className="w-[100px] h-[100px] rounded-full" src="/public/Group 18 (2).png" alt="" />
            <div className="flex flex-col gap-[5px] text-left">
              <h2 className="text-[16px]">Наталья Захарова</h2>
              <p className="text-[#FBA457]">Motion дизайнер</p>
              <p className="text-[12px]">Выполнено проектов: 71</p>
              <p className="text-[#FBA457]">★★★★★</p>
              <button className="border border-[#1DBF73] w-[200px] m-auto text-[#1DBF73] rounded-full p-[5px]">
                Написать
              </button>
            </div>
          </div>
          <div className="bg-[#F2F0FE] rounded-[20px] flex justify-center items-center text-[#1DBF73] text-[18px] text-center p-[20px]">
            Посмотреть всех ТОП фрилансеров
          </div>
        </div>
      </section>

      <section className="mt-[60px] p-[10px] text-left">
        <h1 className="text-[25px]">Как решать задачи на WorkTap?</h1>
        <p className="mt-[5px]">Идеально подходит для бизнеса и частных лиц</p>
        <div className="grid grid-cols-3 gap-[20px] mt-[30px]">
          <div className="flex flex-col gap-[10px]">
            <img className="w-[60px] h-[60px]" src="/public/Group (4).svg" alt="" />
            <h3 className="text-[18px]">Выберите услугу</h3>
            <p className="text-[14px]">
              В супермаркете WorkTap представлен широкий выбор услуг от
              квалифицированных специалистов.
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <img className="w-[60px] h-[60px]" src="/public/Group 23.svg" alt="" />
            <h3 className="text-[18px]">Оплатите</h3>
            <p className="text-[14px]">
              Деньги будут перечислены продавцу после того, как он выполнит
              работу, и вы её одобрите.
            </p>
          </div>
          <div className="flex flex-col gap-[10px]">
            <img className="w-[60px] h-[60px]" src="/public/Group (5).svg" alt="" />
            <h3 className="text-[18px]">Получите результат</h3>
            <p className="text-[14px]">
              Наш супермаркет гарантирует вам возврат средств в полном объёме в
              случае невыполнения заказа.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-[60px] bg-[#EFB400] p-[40px] flex justify-between items-center">
        <div className="flex flex-col gap-[20px] text-left w-[45%]">
          <h2 className="text-[22px] text-white">
            Как WorkTap помогает бизнесу?
          </h2>
          <div className="bg-white rounded-[15px] p-[15px] flex items-center gap-[15px]">
            <img className="w-[30px] h-[30px]" src="/public/credit-card 1.svg" alt="" />
            <p className="text-[14px]">Оплачивайте с р/с или карты компании</p>
          </div>
          <div className="bg-white rounded-[15px] p-[15px] flex items-center gap-[15px]">
            <img className="w-[30px] h-[30px]" src="/public/money (1) 1.svg" alt="" />
            <p className="text-[14px]">Экономьте до 87% бюджета на фрилансе</p>
          </div>
          <div className="bg-white rounded-[15px] p-[15px] flex items-center gap-[15px]">
            <img className="w-[30px] h-[30px]" src="/public/clock 1.svg" alt="" />
            <p className="text-[14px]">
              Экономьте до 75% времени на решении фриланс задач
            </p>
          </div>
          <p className="text-white">WorkTap — быстро, просто и безопасно!</p>
          <button className="bg-[#5D50E3] text-white rounded-full w-[150px] p-[12px]">
            Начать!
          </button>
        </div>
        <img className="w-[50%]" src="/public/workspace-with-office-supplies 1.png" alt="" />
      </section>

      <footer className="bg-[#F2F0FE] p-[40px] text-left">
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
              <img className="w-[25px] h-[25px]" src="/public/akar-icons_facebook-fill.png" alt="" />
              <img className="w-[25px] h-[25px]" src="/public/ant-design_twitter-circle-filled.png" alt="" />
              <img className="w-[25px] h-[25px]" src="/public/Group 35.png" alt="" />
              <img className="w-[25px] h-[25px]" src="/public/entypo-social_linkedin-with-circle.png" alt="" />
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

export default Birjha;
