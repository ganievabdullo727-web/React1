import React from "react";

const Konkursi = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <section className="bg-[#F2F0FE] p-[40px] flex justify-between items-center relative mt-[100px]">
        <button className="absolute left-0 top-[150px] bg-[#FBA457] text-white rounded-r-full p-[10px] w-[130px]">
          Быстрый поиск ворков
        </button>
        <div className="flex flex-col gap-[15px] text-left w-[50%] ml-[100px]">
          <p className="text-[#FBA457]">Дизайнер</p>
          <h1 className="text-[28px]">Ернар Ибрагимов</h1>
          <p className="text-[14px]">
            Работаю дизайнером с 1990 года. Был опыт в газетах, журналах,
            типографиях, рекламных агентствах, издательских домах.
          </p>
          <div className="flex flex-wrap gap-[10px]">
            <span className="bg-white rounded-full px-[15px] py-[5px] text-[12px]">
              Figma
            </span>
            <span className="bg-white rounded-full px-[15px] py-[5px] text-[12px]">
              Adobe photoshop
            </span>
            <span className="bg-white rounded-full px-[15px] py-[5px] text-[12px]">
              Adobe Illustrator
            </span>
            <span className="bg-white rounded-full px-[15px] py-[5px] text-[12px]">
              Corel draw
            </span>
            <span className="bg-white rounded-full px-[15px] py-[5px] text-[12px]">
              Adobe After Effects
            </span>
            <span className="bg-white rounded-full px-[15px] py-[5px] text-[12px]">
              HTML/CSS
            </span>
          </div>
          <button className="border border-[#F2F0FE] bg-white rounded-[15px] p-[12px] text-left">
            Показать подробную информацию
          </button>
        </div>
        <div className="relative w-[300px] h-[300px]">
          <img
            className="w-full h-full rounded-full object-cover"
            src="/public/Ellipse 66.png"
            alt=""
          />
          <span className="absolute top-[20px] left-0 bg-white rounded-full px-[10px] text-[12px] text-[#1DBF73]">
            В сети
          </span>
          <p className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-[10px] px-[10px] text-[#FBA457]">
            ★★★★★
          </p>
        </div>
      </section>

      <section className="p-[20px] mt-[40px] text-left">
        <h1 className="text-[22px]">Мои ворки</h1>
        <div className="grid grid-cols-4 gap-[20px] mt-[20px]">
          <div className="flex flex-col justify-center items-center gap-[10px]">
            <span className="bg-[#1DBF73] text-white rounded-full w-[50px] h-[50px] flex justify-center items-center text-[30px]">
              +
            </span>
            <p className="text-[#1DBF73] text-[18px]">Создать ворк</p>
          </div>

          <div className="border border-[#F2F0FE] bg-white rounded-[15px] overflow-hidden">
            <img className="w-full h-[140px] object-cover" src="/public/Rectangle 20.png" alt="" />
            <div className="p-[10px]">
              <h3 className="text-[14px]">Дизайн сайта</h3>
              <p className="text-[#1DBF73] text-[12px] mt-[10px]">
                50 000 тенге
              </p>
            </div>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[15px] overflow-hidden">
            <img className="w-full h-[140px] object-cover" src="/public/Rectangle 20.png" alt="" />
            <div className="p-[10px]">
              <h3 className="text-[14px]">Дизайн сайта</h3>
              <p className="text-[#1DBF73] text-[12px] mt-[10px]">
                50 000 тенге
              </p>
            </div>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[15px] overflow-hidden">
            <img className="w-full h-[140px] object-cover" src="/public/Rectangle 20.png" alt="" />
            <div className="p-[10px]">
              <h3 className="text-[14px]">Дизайн сайта</h3>
              <p className="text-[#1DBF73] text-[12px] mt-[10px]">
                50 000 тенге
              </p>
            </div>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[15px] overflow-hidden">
            <img className="w-full h-[140px] object-cover" src="/public/Rectangle 20.png" alt="" />
            <div className="p-[10px]">
              <h3 className="text-[14px]">Дизайн сайта</h3>
              <p className="text-[#1DBF73] text-[12px] mt-[10px]">
                50 000 тенге
              </p>
            </div>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[15px] overflow-hidden">
            <img className="w-full h-[140px] object-cover" src="/public/Rectangle 20.png" alt="" />
            <div className="p-[10px]">
              <h3 className="text-[14px]">Дизайн сайта</h3>
              <p className="text-[#1DBF73] text-[12px] mt-[10px]">
                50 000 тенге
              </p>
            </div>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[15px] overflow-hidden">
            <img className="w-full h-[140px] object-cover" src="/public/Rectangle 20.png" alt="" />
            <div className="p-[10px]">
              <h3 className="text-[14px]">Дизайн сайта</h3>
              <p className="text-[#1DBF73] text-[12px] mt-[10px]">
                50 000 тенге
              </p>
            </div>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[15px] overflow-hidden">
            <img className="w-full h-[140px] object-cover" src="/public/Rectangle 20.png" alt="" />
            <div className="p-[10px]">
              <h3 className="text-[14px]">Дизайн сайта</h3>
              <p className="text-[#1DBF73] text-[12px] mt-[10px]">
                50 000 тенге
              </p>
            </div>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[15px] overflow-hidden">
            <img className="w-full h-[140px] object-cover" src="/public/Rectangle 20.png" alt="" />
            <div className="p-[10px]">
              <h3 className="text-[14px]">Дизайн сайта</h3>
              <p className="text-[#1DBF73] text-[12px] mt-[10px]">
                50 000 тенге
              </p>
            </div>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[15px] overflow-hidden">
            <img className="w-full h-[140px] object-cover" src="/public/Rectangle 20.png" alt="" />
            <div className="p-[10px]">
              <h3 className="text-[14px]">Дизайн сайта</h3>
              <p className="text-[#1DBF73] text-[12px] mt-[10px]">
                50 000 тенге
              </p>
            </div>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[15px] overflow-hidden">
            <img className="w-full h-[140px] object-cover" src="/public/Rectangle 20.png" alt="" />
            <div className="p-[10px]">
              <h3 className="text-[14px]">Дизайн сайта</h3>
              <p className="text-[#1DBF73] text-[12px] mt-[10px]">
                50 000 тенге
              </p>
            </div>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[15px] overflow-hidden">
            <img className="w-full h-[140px] object-cover" src="/public/Rectangle 20.png" alt="" />
            <div className="p-[10px]">
              <h3 className="text-[14px]">Дизайн сайта</h3>
              <p className="text-[#1DBF73] text-[12px] mt-[10px]">
                50 000 тенге
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[30px]">
          <button className="border border-[#1DBF73] text-[#1DBF73] rounded-full px-[30px] py-[8px]">
            Загрузить еще
          </button>
        </div>
      </section>

      <section className="p-[20px] mt-[40px] text-left">
        <h1 className="text-[22px]">Отзывы</h1>
        <div className="flex gap-[20px] mt-[10px] text-[12px]">
          <p className="text-[#1DBF73]">Положительные (66)</p>
          <p>Отрицательные (10)</p>
        </div>
        <div className="grid grid-cols-3 gap-[20px] mt-[20px]">
          <div className="border border-[#F2F0FE] bg-white rounded-[15px] p-[15px]">
            <div className="flex gap-[10px] items-center">
              <img
                className="w-[40px] h-[40px] rounded-full bg-gray-300"
                src=""
                alt=""
              />
              <div>
                <h3 className="text-[14px]">Никита Евреев</h3>
                <p className="text-[#FBA457]">★★★★★</p>
              </div>
            </div>
            <p className="text-[12px] mt-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              tincidunt eget eu, eget commodo condimentum non, fringilla
              fermentum.
            </p>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[15px] p-[15px]">
            <div className="flex gap-[10px] items-center">
              <img
                className="w-[40px] h-[40px] rounded-full bg-gray-300"
                src=""
                alt=""
              />
              <div>
                <h3 className="text-[14px]">Никита Евреев</h3>
                <p className="text-[#FBA457]">★★★★★</p>
              </div>
            </div>
            <p className="text-[12px] mt-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              tincidunt eget eu, eget commodo condimentum non, fringilla
              fermentum.
            </p>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[15px] p-[15px]">
            <div className="flex gap-[10px] items-center">
              <img
                className="w-[40px] h-[40px] rounded-full bg-gray-300"
                src=""
                alt=""
              />
              <div>
                <h3 className="text-[14px]">Никита Евреев</h3>
                <p className="text-[#FBA457]">★★★★★</p>
              </div>
            </div>
            <p className="text-[12px] mt-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              tincidunt eget eu, eget commodo condimentum non, fringilla
              fermentum.
            </p>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[15px] p-[15px]">
            <div className="flex gap-[10px] items-center">
              <img
                className="w-[40px] h-[40px] rounded-full bg-gray-300"
                src=""
                alt=""
              />
              <div>
                <h3 className="text-[14px]">Никита Евреев</h3>
                <p className="text-[#FBA457]">★★★★★</p>
              </div>
            </div>
            <p className="text-[12px] mt-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              tincidunt eget eu, eget commodo condimentum non, fringilla
              fermentum.
            </p>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[15px] p-[15px]">
            <div className="flex gap-[10px] items-center">
              <img
                className="w-[40px] h-[40px] rounded-full bg-gray-300"
                src=""
                alt=""
              />
              <div>
                <h3 className="text-[14px]">Никита Евреев</h3>
                <p className="text-[#FBA457]">★★★★★</p>
              </div>
            </div>
            <p className="text-[12px] mt-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              tincidunt eget eu, eget commodo condimentum non, fringilla
              fermentum.
            </p>
          </div>
          <div className="border border-[#F2F0FE] bg-white rounded-[15px] p-[15px]">
            <div className="flex gap-[10px] items-center">
              <img
                className="w-[40px] h-[40px] rounded-full bg-gray-300"
                src=""
                alt=""
              />
              <div>
                <h3 className="text-[14px]">Никита Евреев</h3>
                <p className="text-[#FBA457]">★★★★★</p>
              </div>
            </div>
            <p className="text-[12px] mt-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
              tincidunt eget eu, eget commodo condimentum non, fringilla
              fermentum.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-[30px]">
          <button className="border border-[#1DBF73] text-[#1DBF73] rounded-full px-[30px] py-[8px]">
            Загрузить еще
          </button>
        </div>
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

export default Konkursi;
