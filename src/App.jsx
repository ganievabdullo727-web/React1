import { useState } from "react";
import GreenButton from "./GreenButton";
import Card from "./Card";
import CardFood from "./CardFood";
import CardCooker from "./CardCooker";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");
  const [idx, setIdx] = useState(null);

  const filteredData = data.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase()),
  );

  function handleAdd(ev) {
    ev.preventDefault();
    const form = ev.target;
    const fd = new FormData(form);
    const newUser = {
      id: Date.now(),
      name: fd.get("name"),
      age: fd.get("age"),
      status: fd.get("status") === "true",
    };
    setData((prev) => [...prev, newUser]);
    form.reset();
  }

  function Delete(id) {
    setData((prev) => prev.filter((el) => el.id !== id));
  }

  function Edit(ev) {
    ev.preventDefault();
    setData((prev) =>
      prev.map((el) =>
        el.id === idx ? { ...el, name: editName, age: editAge } : el,
      ),
    );
    setOpen(false);
  }

  return (
    <div>
      <header>
        <div className="flex items-center xl:justify-around bg-[#A98C64] p-[10px]">
          <div className="flex gap-[10px] m-auto xl:m-[0px]">
            <img className="w-[24px]" src="/Vector.png" alt="" />
            <h2 className="text-[white] font-bold ">
              Скидка 20% на первый заказ
            </h2>
          </div>
          <p className="underline hidden xl:flex items-center text-[white] font-bold">
            Заказать{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </p>
        </div>

        <div className="flex items-center gap-[30px] justify-around mt-[15px]">
          <img src="/Group 161.png" alt="" />

          <div className="hidden xl:flex text-gray-500 gap-[20px] font-bold ">
            <p>Подбор рациона</p>
            <p>Программы питания</p>
            <p>О нас</p>
            <p>Доставка</p>
            <p>Акции</p>
            <p>FAQ</p>
            <p>Отзывы</p>
          </div>

          <div className="hidden xl:flex flex-col text-right">
            <p className="text-[#4D8F76] underline">Перезвоните мне</p>
            <h1 className="text-[#493E3E] font-bold text-[30px]">
              +7 988 500-1-700
            </h1>
            <p className="text-gray-500 ">c 09:00 до 21:00</p>
          </div>

          <img className="xl:hidden w-[60px]" src="/Group 82.png" alt="" />
        </div>

        <div className="flex flex-col xl:flex xl:flex-row justify-evenly items-center">
          <div className="flex flex-col  gap-[20px] xl:gap-[100px]">
            <h1 className="text-[30px] xl:text-left text-center mt-[30px] xl:text-[50px] font-bold xl:w-[750px]">
              Доставка прогрессивного питания для гурманов
            </h1>
            <div className="flex gap-[15px] ml-[5px]">
              <GreenButton text="Подобрать питание" />
              <button className="text-[#4D8F76] border rounded-2xl p-[5px] font-medium border-[#4D8F76]">
                Получить консультацию
              </button>
            </div>
          </div>

          <img
            className="w-[80%]   mt-[20px] xl:w-[475px]"
            src="/porapoest-top 1.png"
            alt=""
          />
        </div>
      </header>

      <section>
        <div className="flex flex-col xl:flex xl:flex-row items-center justify-around mt-[100px]">
          <img className="w-[80%] xl:w-[400px]" src="/public/Group (2).svg" alt="" />

          <div className="flex flex-col gap-[20px] mt-[20px]">
            <h1 className="xl:text-[40px] font-medium text-center text-[28px]">
              Еда, которая сделает тебя лучше!
            </h1>
            <p className="xl:w-[500px] xl:text-left text-center text-[#493E3E] font-medium">
              Мы помогаем создавать новое качество жизни для наших клиентов,
              чтоб каждый человек был счастливым, здоровым и не отвлекался на
              рутинные процессы.
              <br />
              Для этого мы создали новый уникальный продукт на рынке доставки
              еды и приглашаем вас окунуться в гастрономический шик уже сегодня.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse xl:flex xl:flex-row  items-center justify-around mt-[100px]">
          <div className="flex flex-col gap-[20px] mt-[20px]">
            <h1 className="xl:text-[40px] font-medium text-center text-[28px]">
              Изысканное меню высокой кухни
            </h1>
            <p className="xl:w-[500px]  xl:text-left text-center text-[#493E3E] font-medium">
              В наших блюдах мы продумали каждую деталь, все ингредиенты
              тщательно подобраны и создают неповторимый вкус.
              <br />
              Качественные продукты, деликатесы и суперфуды, которые помогают
              поддерживать здоровье и обмен веществ. Мы используем крафтовые
              ингредиенты: с любовью выращиваем микрозелень, делаем соусы и
              масла, маринуем мясо, рыбу и морепродукты.
            </p>
          </div>

          <img className="w-[80%] xl:w-[400px]" src="/Frame.svg" alt="" />
        </div>
      </section>

      <div className="mt-[75px] flex flex-col gap-[50px]  bg-[#E2DDC0] xl:w-[98%] xl:p-[25px] rounded-2xl m-auto">
        <h1 className="xl:text-[35px] text-[30px] text-center xl:text-left font-medium pt-[20px]">
          Подберите рацион для своих целей
        </h1>

        <div className="flex flex-wrap items-center gap-[25px] justify-center xl:justify-normal pb-[20px]">
          <div className="flex flex-col items-center gap-[2px]">
            {/* <p className='text-[#756D6D]'>Пол</p> */}
            <div className="flex gap-[7px] p-[10px] justify-center rounded-[20px] bg-[white] w-[65px]">
              <p className="text-[#493E3E] font-medium">Ж</p>
              <p className="text-[#493E3E] font-medium">М</p>
            </div>
          </div>

          <div className="flex gap-[7px] p-[10px] justify-center rounded-[20px] bg-[white] w-[100px]">
            <p className="font-medium text-[#493E3E]">Ваш вес</p>
          </div>

          <div className="flex gap-[7px] p-[10px] justify-center rounded-[20px] bg-[white] w-[100px]">
            <p className="font-medium text-[#493E3E]">Ваш рост</p>
          </div>
          <div className="flex gap-[7px] p-[10px] justify-center rounded-[20px] bg-[white] w-[120px]">
            <p className="font-medium text-[#493E3E]">Ваш возраст</p>
          </div>
          <div className="flex gap-[7px] p-[10px] justify-center rounded-[20px] bg-[white] w-[100px]">
            <p className="font-medium text-[#493E3E]">Активность</p>
          </div>
          <div className="flex gap-[7px] p-[10px] justify-center rounded-[20px] bg-[white] w-[150px]">
            <p className="font-medium text-[#493E3E]">Выберите цель</p>
          </div>

          <div className="flex gap-[7px] p-[10px] justify-center rounded-[20px] bg-[#4D8F76] w-[200px]">
            <p className="font-medium text-[white]">Рассчитать рацион</p>
          </div>
        </div>
      </div>

      <section>
        <div className="flex flex-col gap-[50px] rounded-2xl shadow-md m-[15px] p-[13px]">
          <div className="mt-[20px] flex flex-col xl:flex xl:flex-row justify-between ">
            <h1 className="text-[25px] text-center xl:text-[40px] font-medium">
              Программа ПремиумБоул
            </h1>
            <div className=" flex items-center justify-center xl:justify-normal mt-[10px] gap-[5px]">
              <img src="/Group 76.png" alt="" />
              <p className="text-[#4D8F76] font-medium">
                Каждый день новое меню
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[20px]  ">
            <p className="text-[20px] text-center xl:text-left font-medium text-[#493E3E]">
              Калорийность
            </p>
            <p className="text-[#A98C64] font-medium xl:hidden">
              Норма калорий позволяет достигать цели. Как расчитать? На сайте
              есть калькулятор
            </p>
            <div className="flex gap-[30px] flex-wrap">
              <Card textH={"900 ккал"} textP={"3 блюда"} />
              <Card textH={"1250 ккал"} textP={"4 блюда"} />
              <Card
                className="hidden xl:block"
                textH={"1600 ккал"}
                textP={"5 блюда"}
              />
              <Card
                className="hidden xl:block"
                textH={"2050 ккал "}
                textP={"6 блюда"}
              />
              <Card
                className="hidden xl:block"
                textH={"Индивидуально"}
                textP={"подобрать"}
              />
            </div>
          </div>

          <div className="flex flex-col gap-[20px]  ">
            <p className="text-[20px] text-center xl:text-left font-medium text-[#493E3E]">
              Продолжительность
            </p>
            <div className="flex gap-[30px] flex-wrap">
              <Card textH={"Пробные 2 "} textP={"за 2 900 ₽"} />
              <Card textH={"1 неделя"} textP={"1 700 ₽ в день"} />
              <Card
                className="hidden xl:block"
                textH={"2 недели"}
                textP={"1 600 ₽ в день"}
              />
              <Card
                className="hidden xl:block"
                textH={"3 недели"}
                textP={"1 520 ₽ в день"}
              />
              <Card
                className="hidden xl:block"
                textH={"4 недели"}
                textP={"1 450 ₽  в день"}
              />
            </div>
          </div>
          <div className="flex">
            <h2 className="w-[220px]">
              Выберите, сколько дней в неделю вы хотите питаться
            </h2>

            <div className="border border-[#DFCCB7] flex items-center gap-[10px] p-[5px] rounded-[30px] w-[100px] justify-center font-medium">
              <p>5</p>
              <p>6</p>
              <p>7</p>
            </div>
          </div>

          <div className="flex flex-col gap-[17px]">
            <h1 className="font-medium">Пример дневного рациона</h1>
            <p className="text-[#A98C64] font-medium">
              6 блюд. Калорийность — 1 235 ккал. Белки — 103 г; жиры — 37 г;
              углеводы — 120 г
            </p>

            <div className="flex gap-[20px] m-auto xl:m-[0]">
              <button className="text-[#493E3E] border border-[#493E3E] font-medium rounded-[30px] px-[6px]">
                понедельник
              </button>
              <button className="text-[#493E3E] border border-[#493E3E] font-medium rounded-[30px] px-[6px]">
                вторник
              </button>
              <button className="xl:block hidden text-[#493E3E] border border-[#493E3E] font-medium rounded-[30px] px-[6px]">
                среда
              </button>
              <button className="xl:block hidden  text-[#493E3E] border border-[#493E3E] font-medium rounded-[30px] px-[6px]">
                четверг
              </button>
              <button className="xl:block hidden text-[#493E3E] border border-[#493E3E] font-medium rounded-[30px] px-[6px]">
                пятница
              </button>
              <button className="xl:block hidden text-[#493E3E] border border-[#493E3E] font-medium rounded-[30px] px-[6px]">
                суббота
              </button>
              <button className="xl:block hidden text-[#493E3E] border border-[#493E3E] font-medium rounded-[30px] p-[6px]">
                воскресенье
              </button>
            </div>

            <div></div>
          </div>

          <div className="flex justify-evenly">
            <CardFood
              img={"image_1_1.png"}
              type={"Завтрак"}
              type2={"230/250гр"}
              h2={"Утренний боул с перепелиным яйцом, киноа и лососем"}
            />
            <CardFood
              className="xl:flex hidden"
              img={"image_2_1.png"}
              type={"Обед"}
              type2={"320/30гр"}
              h2={"Боул с куриными фрикадельками в кунжуте, брокколи"}
            />
            <CardFood
              className="xl:flex hidden"
              img={"image_3.png"}
              type={"Полдник"}
              type2={"50/30гр"}
              h2={
                "Кукурузные блинчики с кокосовым припеком и фруктовым тар-таром"
              }
            />
            <CardFood
              className="xl:flex hidden"
              img={"image_4.png"}
              type={"Ужин"}
              type2={"100/100гр"}
              h2={"Морепродукты в соусе Гарсия со стручковой фасолью"}
            />
          </div>

          <div className="bg-[#A2BE95] m-[-12px] flex flex-col xl:flex xl:flex-row justify-around items-center p-[25px] text-[white] ">
            <div className="flex flex-col gap-[10px]  items-center font-medium">
              <GreenButton text="Заказать 10 дней питания за 16 000 ₽" />
              <p>1 250 ккал за 1 600 ₽ в день</p>
            </div>

            <div className="font-medium flex flex-col xl:flex xl:flex-row xl:mt-0 mt-[25px] gap-[20px] xl:gap-[40px] items-center">
              <img src="/Group 62.png" alt="" />
              <div className="text-white flex flex-col gap-[20px] xl:gap-[5px]">
                <h1 className="xl:text-[25px] xl:text-left text-center">
                  Будем доставлять наборы каждый день.
                </h1>
                <p className="xl:w-[690px]  xl:text-left text-center">
                  Доставка осуществляется каждый день с 06:00 до 12:00. Выбор
                  интервала — 2 часа. Заявки принимаются не позднее, чем за день
                  до предполагаемой доставки.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[20px] mt-[30px]">
          <h1 className="text-center xl:text-left text-[25px] p-[10px] xl:text-[45px] font-medium">
            О нашем сервисе
          </h1>
          <div className="flex flex-wrap gap-[30px] justify-center ">
            <CardCooker
              img={"/Group 39.png"}
              h1={"Мы используем деликатные технологии приготовления блюд"}
              p={
                "Сухой гриль без прямого контакта продукта с жарочной поверхностью, запекание, су-вид"
              }
            />
            <CardCooker
              img={"/Group 40.png"}
              h1={"Меню из 90 блюд на две недели без повтора"}
              p={
                "Сбалансированные блюда, содержащие в себе все необходимые элементы за счёт большого количества компонентов"
              }
            />
            <CardCooker
              img={"/Group 41.png"}
              h1={"Здоровые рецепты"}
              p={
                "Без молочки, белой муки, сахара, консервантов, усилителей вкуса и глубокой прожарки. А также мы испольузем сыродавленные масла собственного производства"
              }
            />
            <CardCooker
              img={"/Group.png"}
              h1={"Гарантия возврата"}
              p={
                "100%-ная гарантия возврата денежных средств за предоплаченные дни, если что-то не понравилось в течение первой недели"
              }
            />
            <CardCooker
              img={"/Group 42.png"}
              h1={"Контроль температуры"}
              p={
                "Все курьеры оснащены сумками-холодильниками, что позволяет сохранять температурный режим  от 2°C до 4°C от кухни до ваших рук"
              }
            />
            <CardCooker
              img={"/Groupp.png"}
              h1={"Забота о природе"}
              p={
                "Все блюда доставляем в экоупаковке из крафтового картона со столовыми приборами  из кукурузного крахмала"
              }
            />
          </div>
        </div>

        <div className="flex justify-between items-center m-[20px] mt-[50px]">
          <div className="w-[640px] flex flex-col gap-[20px]">
            <h1 className="font-bold text-[#4D8F76] text-[25px]">
              Попробуйте новый формат рационов — Боулы! Это богатый набор
              полезных веществ и масса вкусовых впечатлений!
            </h1>

            <p className="text-[#493E3E] font-medium">
              Боулы — это сбалансированный вариант блюда, содержащего в себе все
              необходимые элементы за счёт большого количества компонентов.
              Ингредиенты блюда не смешиваются между собой, а не спеша поедаются
              по отдельности.
            </p>
            <p className="text-[#493E3E] font-medium">
              Мы готовим полноценное здоровое питание на день и ежедневно
              доставляем утром к вашим дверям.
            </p>
            <p className="text-[#493E3E] font-medium">
              Наш сервис помогает экономить время, поддерживать стройность,
              работоспособность и укреплять здоровье
            </p>
          </div>

          <div className="hidden xl:flex items-center gap-[30px]">
            <img src="/Group 169.png" alt="" />
            <img className="xl:w-[300px]" src="/Mask Group.png" alt="" />
            <img src="/Group 44.png" alt="" />
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#F8F4EE] rounded-2xl m-[15px] p-[15px] xl:p-[25px] flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[28px] xl:text-[40px] font-medium">
              Карта доставки
            </h1>
            <p className="text-[#493E3E] font-medium">
              Доставка осуществляется каждый день с 06:00 до 12:00.
              <br />
              Выбор интервала — 2 часа.
            </p>
          </div>

          <div className="flex flex-col xl:flex-row items-center justify-around gap-[25px]">
            <img
              className="w-[95%] xl:w-[700px] rounded-2xl"
              src="/image 2.png"
              alt=""
            />

            <div className="flex flex-col gap-[25px] xl:w-[300px] w-full">
              <div className="flex flex-col gap-[15px]">
                <div className="border-2 border-[#2EB84D] rounded-[30px] py-[8px] text-center text-[14px] font-medium text-[#493E3E]">
                  По городу бесплатно
                </div>
                <div className="border-2 border-[#2D8CF0] rounded-[30px] py-[8px] text-center text-[14px] font-medium text-[#493E3E]">
                  Пригород 25 км — 100 ₽
                </div>
                <div className="border-2 border-[#F5A524] rounded-[30px] py-[8px] text-center text-[14px] font-medium text-[#493E3E]">
                  Пригород 35 км — 300 ₽
                </div>
                <div className="border-2 border-[#F5533D] rounded-[30px] py-[8px] text-center text-[14px] font-medium text-[#493E3E]">
                  Пригород 50 км — 500 ₽
                </div>
              </div>

              <div className="flex flex-col gap-[5px] items-center xl:items-start">
                <p className="text-gray-500 text-[12px]">
                  Уточните стоимость и время доставки
                </p>
                <h2 className="text-[#493E3E] font-bold text-[20px]">
                  +7 988 500-1-700
                </h2>
                <p className="text-gray-500 text-[10px]">с 09:00 до 21:00</p>
              </div>

              <button className="bg-[#4D8F76] text-white font-medium rounded-[30px] py-[10px]">
                Перезвоните мне
              </button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-[#F8F4EE] rounded-2xl m-[15px] p-[15px] xl:p-[40px] flex flex-col gap-[25px] mt-[75px]">
          <h1 className="text-[28px] xl:text-[40px] font-medium">
            Частые вопросы
          </h1>

          <div className="flex flex-wrap gap-[10px]">
            <button className="border border-[#DFCCB7] rounded-[30px] px-[20px] py-[4px] font-medium text-[#493E3E]">
              Продукты
            </button>
            <button className="border border-[#DFCCB7] rounded-[30px] px-[20px] py-[4px] font-medium text-[#493E3E]">
              Программы
            </button>
            <button className="border border-[#DFCCB7] rounded-[30px] px-[20px] py-[4px] font-medium text-[#493E3E] ">
              Оплата и доставка
            </button>
            <button className="border border-[#DFCCB7] rounded-[30px] px-[20px] py-[4px] font-medium text-[#493E3E]">
              Хранение
            </button>
          </div>

          <div className="flex flex-col gap-[15px]">
            <div className="bg-white rounded-2xl px-[20px] xl:px-[28px] py-[18px] flex items-center justify-between">
              <h2 className="font-bold text-[#493E3E]">
                Как я могу оплатить заказ?
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>

            <div className="bg-white rounded-2xl px-[20px] xl:px-[28px] py-[18px] flex flex-col gap-[10px]">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-[#493E3E]">
                  Могу ли я изменить адрес и время доставки?
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </div>
              <p className="text-[12px] text-[#493E3E]">
                Каждый вечер, в день доставки, с вами связывается курьер,
                ориентировочно с 19:00 до 20:00 для уточнения адреса и времени
                доставки.
                <br />
                При необходимости, вы можете их изменить, сообщив об этом
                курьеру при звонке.
              </p>
            </div>

            <div className="bg-white rounded-2xl px-[20px] xl:px-[28px] py-[18px] flex items-center justify-between">
              <h2 className="font-bold text-[#493E3E]">
                Могу ли я перенести день доставки?
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>

            <div className="bg-white rounded-2xl px-[20px] xl:px-[28px] py-[18px] flex items-center justify-between">
              <h2 className="font-bold text-[#493E3E]">
                Могу ли я приостановить доставку, на какой срок?
              </h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-[#B89683] rounded-[30px] m-[15px] p-[25px] xl:px-[50px] xl:py-[30px] flex flex-col xl:flex-row xl:items-center xl:justify-between gap-[20px]">
          <div className="flex flex-col gap-[12px]">
            <h2 className="text-white text-[28px] xl:text-[32px] font-medium">
              Будьте всегда в курсе!
            </h2>
            <p className="text-white text-[12px]">
              Подпишитесь на рассылку и будьте всегда в курсе новинок, акций и
              новостей!
            </p>
          </div>

          <div className="flex flex-col xl:flex-row gap-[10px] xl:w-[480px]">
            <input
              className="flex-1 rounded-[30px] bg-white px-[20px] py-[10px] text-[12px]"
              type="email"
              placeholder="Укажите вашу почту"
            />
            <button className="rounded-[30px] bg-[#4D8F76] px-[22px] py-[10px] text-[12px] font-medium text-white">
              Подписаться
            </button>
          </div>
        </div>

        <footer>
          <div className="bg-[#F8F4EE] rounded-2xl m-[15px] p-[20px] xl:px-[40px] xl:py-[30px] flex flex-col gap-[25px]">
            <div className="flex flex-col xl:flex-row xl:justify-between items-center gap-[20px]">
              <div className="flex flex-col xl:flex-row items-center gap-[20px] xl:gap-[80px]">
                <div className="flex flex-col items-center xl:items-start">
                  <h2 className="text-[#493E3E] font-bold text-[18px]">
                    +7 988 500-1-700
                  </h2>
                  <p className="text-gray-500 text-[10px]">
                    Ежедневно с 09:00 до 21:00
                  </p>
                </div>
                <h2 className="text-[#493E3E] font-bold text-[18px]">
                  hello@pora-poest.com
                </h2>
              </div>

              <div className="flex gap-[15px]">
                <div className="w-[35px] h-[35px] rounded-full bg-[#4D8F76] "></div>
                <div className="w-[35px] h-[35px] rounded-full bg-[#4D8F76] "></div>
                <div className="w-[35px] h-[35px] rounded-full bg-[#4D8F76] "></div>
              </div>
            </div>

            <p className="text-[#493E3E] text-[12px] text-center xl:text-left">
              ООО «ПораПоесть», г. Краснодар, ул. Кубанская Набережная улица,
              офис 4
            </p>

            <div className="flex flex-col xl:flex-row xl:justify-between items-center gap-[20px]">
              <div className="flex flex-col gap-[8px] text-center xl:text-left">
                <p className="text-[#493E3E] text-[12px]">
                  © 2021 ПораПоесть — сервис доставки прогрессивного питания.
                </p>
                <p className="text-gray-500 text-[9px] xl:w-[500px]">
                  Фотографии блюд на сайте являются вариантом сервировки блюд.
                  Внешний вид блюда может отличаться от фотографии на сайте.
                  <br />
                  Указывая электронную почту и номер телефона на сайте, вы
                  соглашаетесь с условиями{" "}
                  <span className="text-[#4D8F76]">
                    Публичной оферты
                  </span> и{" "}
                  <span className="text-[#4D8F76]">
                    Политикой конфиденциальности
                  </span>
                </p>
              </div>

              <div className="flex gap-[8px]">
                <img className="h-[22px]" src="/image 13.png" alt="" />
                <img className="h-[22px]" src="/image 14.png" alt="" />
                <img className="h-[22px]" src="/image 15.png" alt="" />
                <img className="h-[22px]" src="/image 16.png" alt="" />
                <img className="h-[22px]" src="/image 17.png" alt="" />
              </div>
            </div>
          </div>
        </footer>
      </section>

      <div className="crud">

        <input className="search" type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
        <div className="add">
          <form className="handleAdd" onSubmit={handleAdd}>
            <input type="text" name="name" placeholder="Name..." />
            <input type="number" name="age" placeholder="Age..." />
            <select style={{ marginTop: 10 }} name="status" id="">
              <option value="true">Active</option>
              <option value="false">Inactive</option>
            </select>
            <button type="submit">Add</button>
          </form>
        </div>

        {filteredData.map((e) => {
          return (
            <div key={e.id}>
              <h1>{e.name}</h1>
              <p>{e.age}</p>
              <p>{e.status ? "Active" : "Inactive"}</p>
              <button onClick={() => Delete(e.id)}>Delete</button> <br />
              <input
                checked={e.status}
                onChange={() =>
                  setData((prev) =>
                    prev.map((el) =>
                      el.id == e.id ? { ...el, status: !el.status } : el,
                    ),
                  )
                }
                type="checkbox"
              />{" "}
              <br />
              <button
                onClick={() => {
                  setOpen(true);
                  setEditName(e.name);
                  setEditAge(e.age);
                  setIdx(e.id);
                }}
              >
                edit
              </button>
              <button type="button" onClick={() => setOpen(false)}>
                Cancel
              </button>
              {open && idx === e.id ? (
                <form onSubmit={Edit}>
                  <input value={editName} onChange={(ev) => setEditName(ev.target.value)} type="text" name="name" />
                  <input value={editAge} onChange={(ev) => setEditAge(ev.target.value)} type="number" name="age" />
                  <button type="submit">edit</button>
                </form>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
