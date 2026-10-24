import { useEffect, useMemo, useRef, useState } from "react";

/* ================= DATA ================= */
const CLOTH = ["S", "M", "L", "XL"];
const SHOE = ["40", "41", "42", "43", "44"];
const ONE = ["ONE"];

const CATS = ["Все", "Рубашки", "Верхняя одежда", "Брюки", "Трикотаж", "Обувь", "Сумки", "Аксессуары"];
const EMOJI = { Рубашки: "👔", "Верхняя одежда": "🧥", Брюки: "👖", Трикотаж: "🧶", Обувь: "👞", Сумки: "👜", Аксессуары: "🧣" };

const P = (id, slug, name, cat, price, sizes, rating, isNew = false) => ({ id, slug, name, cat, price, sizes, rating, isNew });

const PRODUCTS = [
  P(1, "oxford-shirt", "Рубашка Oxford", "Рубашки", 89, CLOTH, 4.8, true),
  P(2, "white-shirt", "Белая классическая рубашка", "Рубашки", 79, CLOTH, 4.7),
  P(3, "linen-shirt", "Льняная рубашка", "Рубашки", 95, CLOTH, 4.6),
  P(4, "denim-shirt", "Джинсовая рубашка", "Рубашки", 85, CLOTH, 4.5),
  P(5, "navy-blazer", "Синий блейзер", "Верхняя одежда", 249, CLOTH, 4.9, true),
  P(6, "trench-coat", "Тренчкот", "Верхняя одежда", 329, CLOTH, 4.9),
  P(7, "wool-overcoat", "Шерстяное пальто", "Верхняя одежда", 399, CLOTH, 4.8),
  P(8, "leather-jacket", "Кожаная куртка", "Верхняя одежда", 459, CLOTH, 4.7, true),
  P(9, "selvedge-jeans", "Джинсы Selvedge", "Брюки", 129, CLOTH, 4.8),
  P(10, "cotton-chinos", "Хлопковые чиносы", "Брюки", 99, CLOTH, 4.6),
  P(11, "wool-trousers", "Шерстяные брюки", "Брюки", 139, CLOTH, 4.7),
  P(12, "cargo-pants", "Брюки карго", "Брюки", 109, CLOTH, 4.4),
  P(13, "merino-sweater", "Свитер из мериноса", "Трикотаж", 119, CLOTH, 4.9),
  P(14, "cashmere-cardigan", "Кашемировый кардиган", "Трикотаж", 189, CLOTH, 4.8, true),
  P(15, "turtleneck", "Водолазка", "Трикотаж", 79, CLOTH, 4.5),
  P(16, "cotton-tee", "Базовая футболка", "Трикотаж", 39, CLOTH, 4.6),
  P(17, "leather-loafers", "Кожаные лоферы", "Обувь", 179, SHOE, 4.8),
  P(18, "white-sneakers", "Белые кеды", "Обувь", 119, SHOE, 4.7, true),
  P(19, "chelsea-boots", "Ботинки Челси", "Обувь", 219, SHOE, 4.9),
  P(20, "oxford-shoes", "Туфли Oxford", "Обувь", 239, SHOE, 4.8),
  P(21, "leather-briefcase", "Кожаный портфель", "Сумки", 279, ONE, 4.7),
  P(22, "canvas-tote", "Сумка-тоут", "Сумки", 69, ONE, 4.4),
  P(23, "silk-scarf", "Шёлковый шарф", "Аксессуары", 59, ONE, 4.6),
  P(24, "leather-belt", "Кожаный ремень", "Аксессуары", 49, ONE, 4.7),
  P(25, "wool-hat", "Шерстяная шапка", "Аксессуары", 35, ONE, 4.3),
  P(26, "steel-watch", "Часы Steel Classic", "Аксессуары", 199, ONE, 4.9, true),
];

const PROMOS = { GLASS10: 0.1, MIRROR15: 0.15 };

/* ================= STYLES ================= */
const glass =
  "border border-white/30 bg-white/[0.08] backdrop-blur-2xl backdrop-saturate-200 backdrop-brightness-110 shadow-[inset_0_1px_1px_rgba(255,255,255,0.75),inset_0_-1px_1px_rgba(255,255,255,0.15),inset_0_0_32px_rgba(255,255,255,0.06),0_24px_60px_rgba(0,0,0,0.4)]";
const glassBtn =
  "rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] transition duration-300 hover:bg-white hover:text-black active:scale-95";
const input =
  "w-full rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none backdrop-blur-xl transition focus:border-white/60 focus:bg-white/15";

const css = `
@keyframes sweep { from { transform: translateX(0) skewX(-12deg); } to { transform: translateX(520%) skewX(-12deg); } }
@keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
@keyframes pop { 0% { opacity: 0; transform: scale(.92) translateY(12px); } 100% { opacity: 1; transform: scale(1) translateY(0); } }
@keyframes blob1 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(120px,80px) scale(1.2); } }
@keyframes blob2 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-140px,-60px) scale(1.15); } }
@keyframes blob3 { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(60px,-120px) scale(1.25); } }
@keyframes toastIn { from { opacity: 0; transform: translate(-50%, 20px); } to { opacity: 1; transform: translate(-50%, 0); } }
html { scroll-behavior: smooth; }
select option { background: #18181b; color: #fff; }
input[type=range] { accent-color: #fff; }
`;

/* ================= HOOKS ================= */
const useLocalStorage = (key, initial) => {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* ignore */
    }
  }, [key, value]);
  return [value, setValue];
};

const useReveal = () => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setShown(true), { threshold: 0.1 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, shown];
};

const useEscape = (active, fn) => {
  useEffect(() => {
    if (!active) return;
    const h = (e) => e.key === "Escape" && fn();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [active, fn]);
};

/* ================= SMALL PIECES ================= */
const Photo = ({ product, className = "" }) => {
  const [failed, setFailed] = useState(false);
  if (failed)
    return (
      <div className={`flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-white/20 to-white/0 ${className}`}>
        <span className="text-6xl drop-shadow-lg">{EMOJI[product.cat]}</span>
        <span className="px-4 text-center text-[10px] uppercase tracking-[0.3em] text-white/50">{product.name}</span>
      </div>
    );
  return (
    <img
      src={`/products/${product.slug}.jpg`}
      alt={product.name}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
};

const Heart = ({ filled }) => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6">
    <path d="M12 21s-7.5-4.6-9.5-9.2C1.2 8.4 3 5 6.3 5c2 0 3.5 1.1 4.2 2.4h3C14.2 6.1 15.7 5 17.7 5 21 5 22.8 8.4 21.5 11.8 19.5 16.4 12 21 12 21z" />
  </svg>
);

const Stars = ({ value }) => <span className="text-xs text-white/60">★ {value.toFixed(1)}</span>;

const Toast = ({ text }) =>
  text ? (
    <div
      className={`fixed bottom-8 left-1/2 z-[70] rounded-full px-6 py-3 text-xs uppercase tracking-widest text-white animate-[toastIn_.4s_ease-out_both] ${glass}`}
    >
      {text}
    </div>
  ) : null;

/* ================= HEADER / HERO ================= */
const Header = ({ search, setSearch, cartCount, favCount, onCart, onFav, showFavs }) => (
  <header className={`fixed inset-x-0 top-4 z-30 mx-auto flex w-[94%] max-w-6xl items-center gap-4 rounded-full px-5 py-3 ${glass}`}>
    <a href="#top" className="text-sm font-light uppercase tracking-[0.4em] text-white">Mirror</a>
    <div className="relative mx-auto hidden w-full max-w-sm sm:block">
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Поиск..." className={`${input} !rounded-full !py-2`} />
    </div>
    <div className="ml-auto flex items-center gap-4 text-xs uppercase tracking-widest text-white">
      <button onClick={onFav} className={`flex items-center gap-1 transition hover:opacity-70 ${showFavs ? "text-pink-300" : ""}`}>
        <Heart filled={showFavs} /> {favCount}
      </button>
      <button onClick={onCart} className="transition hover:opacity-70">Корзина ({cartCount})</button>
    </div>
  </header>
);

const Hero = () => (
  <section id="top" className="flex min-h-screen items-center justify-center px-6">
    <div className={`relative w-full max-w-3xl animate-[fadeUp_1.2s_ease-out_both] overflow-hidden rounded-[2.5rem] px-8 py-24 text-center ${glass}`}>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.3)_0%,rgba(255,255,255,0.05)_30%,transparent_31%,transparent_60%,rgba(255,255,255,0.1)_61%,transparent_75%)]" />
      <h1 className="relative bg-gradient-to-b from-white via-zinc-200 to-zinc-400 bg-clip-text text-6xl font-extralight tracking-tight text-transparent sm:text-8xl">
        Classic.
      </h1>
      <p className="relative mt-6 text-sm font-light tracking-wide text-white/70">
        Вечная классика. Одежда, обувь, аксессуары — сквозь стекло.
      </p>
      <a href="#shop" className={`relative mt-10 inline-block px-8 py-3 text-xs uppercase tracking-[0.3em] ${glassBtn}`}>
        В каталог
      </a>
    </div>
  </section>
);

/* ================= CATALOG ================= */
const ProductCard = ({ product, index, fav, onFav, onOpen, onQuickAdd }) => {
  const cardRef = useRef(null);
  const [wrapRef, shown] = useReveal();

  const move = (e) => {
    const el = cardRef.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--x", `${x * 100}%`);
    el.style.setProperty("--y", `${y * 100}%`);
    el.style.transform = `perspective(900px) rotateY(${(x - 0.5) * 8}deg) rotateX(${(0.5 - y) * 8}deg) scale(1.02)`;
  };
  const leave = () => {
    cardRef.current.style.transform = "perspective(900px) rotateY(0) rotateX(0) scale(1)";
  };

  return (
    <div
      ref={wrapRef}
      style={{ transitionDelay: `${(index % 4) * 90}ms` }}
      className={`transition-all duration-700 ease-out ${shown ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
    >
      <div
        ref={cardRef}
        onMouseMove={move}
        onMouseLeave={leave}
        className={`group relative overflow-hidden rounded-[2rem] p-3 transition-transform duration-200 ease-out ${glass}`}
      >
        <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(115deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.04)_28%,transparent_29%)]" />
        <div
          className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(255,255,255,0.3), transparent 45%)" }}
        />
        <div className="pointer-events-none absolute -inset-y-4 -left-1/2 z-20 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:animate-[sweep_1.1s_ease-out] group-hover:opacity-100" />

        <button onClick={() => onOpen(product)} className="relative block w-full overflow-hidden rounded-[1.5rem] text-left">
          <Photo product={product} className="aspect-[3/4] w-full transition-transform duration-700 group-hover:scale-105" />
          {product.isNew && (
            <span className="absolute left-3 top-3 rounded-full border border-white/40 bg-white/20 px-3 py-1 text-[10px] uppercase tracking-widest text-white backdrop-blur-xl">
              New
            </span>
          )}
        </button>
        <button
          onClick={() => onFav(product.id)}
          aria-label="В избранное"
          className={`absolute right-6 top-6 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 backdrop-blur-xl transition hover:scale-110 ${fav ? "text-pink-300" : "text-white"}`}
        >
          <Heart filled={fav} />
        </button>

        <div className="relative z-30 mt-4 flex items-end justify-between px-2 pb-2">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-light tracking-wide text-white">{product.name}</h3>
            <p className="mt-1 flex items-center gap-3 text-sm text-white/70">
              ${product.price} <Stars value={product.rating} />
            </p>
          </div>
          <button onClick={() => onQuickAdd(product)} className={`px-4 py-2 text-[10px] uppercase tracking-[0.25em] ${glassBtn}`}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

const Filters = ({ cat, setCat, sort, setSort, maxPrice, setMaxPrice, size, setSize }) => (
  <div className={`mb-10 rounded-[2rem] p-5 ${glass}`}>
    <div className="flex flex-wrap gap-2">
      {CATS.map((c) => (
        <button
          key={c}
          onClick={() => setCat(c)}
          className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest backdrop-blur-xl transition ${
            cat === c ? "border-white bg-white text-black" : "border-white/25 bg-white/10 text-white hover:bg-white/25"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
    <div className="mt-5 grid gap-4 sm:grid-cols-3">
      <label className="text-xs uppercase tracking-widest text-white/60">
        Сортировка
        <select value={sort} onChange={(e) => setSort(e.target.value)} className={`${input} mt-2`}>
          <option value="pop">По рейтингу</option>
          <option value="asc">Сначала дешевле</option>
          <option value="desc">Сначала дороже</option>
          <option value="new">Новинки</option>
        </select>
      </label>
      <label className="text-xs uppercase tracking-widest text-white/60">
        Цена до ${maxPrice}
        <input type="range" min="30" max="500" step="10" value={maxPrice} onChange={(e) => setMaxPrice(+e.target.value)} className="mt-4 w-full" />
      </label>
      <label className="text-xs uppercase tracking-widest text-white/60">
        Размер
        <select value={size} onChange={(e) => setSize(e.target.value)} className={`${input} mt-2`}>
          <option value="">Любой</option>
          {[...CLOTH, ...SHOE].map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </label>
    </div>
  </div>
);

/* ================= MODALS ================= */
const Backdrop = ({ onClose, children }) => (
  <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-md" onClick={onClose}>
    <div onClick={(e) => e.stopPropagation()} className="w-full animate-[pop_.35s_ease-out_both]">
      {children}
    </div>
  </div>
);

const ProductModal = ({ product, fav, onFav, onClose, onAdd }) => {
  const [size, setSize] = useState(product.sizes.length === 1 ? product.sizes[0] : "");
  const [qty, setQty] = useState(1);
  const [err, setErr] = useState(false);
  useEscape(true, onClose);

  const submit = () => {
    if (!size) return setErr(true);
    onAdd(product, size, qty);
    onClose();
  };

  return (
    <Backdrop onClose={onClose}>
      <div className={`mx-auto grid max-w-4xl overflow-hidden rounded-[2.5rem] p-4 md:grid-cols-2 ${glass}`}>
        <Photo product={product} className="aspect-[3/4] w-full rounded-[2rem]" />
        <div className="flex flex-col p-6 text-white">
          <div className="flex items-start justify-between">
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/50">{product.cat}</p>
            <button onClick={onClose} className="text-white/60 hover:text-white">✕</button>
          </div>
          <h2 className="mt-3 text-3xl font-extralight">{product.name}</h2>
          <p className="mt-2 flex items-center gap-4 text-xl">${product.price} <Stars value={product.rating} /></p>
          <p className="mt-4 text-sm font-light leading-relaxed text-white/60">
            Классический крой, плотные натуральные материалы и аккуратная фурнитура. Вещь, которая не выходит из моды.
          </p>

          <p className={`mt-6 text-xs uppercase tracking-widest ${err ? "text-red-300" : "text-white/50"}`}>
            {err ? "Выберите размер" : "Размер"}
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                onClick={() => { setSize(s); setErr(false); }}
                className={`min-w-[3rem] rounded-full border px-4 py-2 text-xs backdrop-blur-xl transition ${
                  size === s ? "border-white bg-white text-black" : "border-white/25 bg-white/10 hover:bg-white/25"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-3 py-1 backdrop-blur-xl">
              <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-2 text-lg">–</button>
              <span className="w-5 text-center text-sm">{qty}</span>
              <button onClick={() => setQty((q) => Math.min(10, q + 1))} className="px-2 text-lg">+</button>
            </div>
            <button
              onClick={() => onFav(product.id)}
              className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-xl transition hover:scale-110 ${fav ? "text-pink-300" : ""}`}
            >
              <Heart filled={fav} />
            </button>
          </div>

          <button onClick={submit} className="mt-auto w-full rounded-full bg-white py-4 text-xs uppercase tracking-[0.3em] text-black transition hover:bg-zinc-200 active:scale-95">
            В корзину · ${product.price * qty}
          </button>
        </div>
      </div>
    </Backdrop>
  );
};

const CartDrawer = ({ open, items, onClose, onQty, onRemove, promo, setPromo, discount, onCheckout }) => {
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState("");
  useEscape(open, onClose);

  const sub = items.reduce((s, i) => s + i.price * i.qty, 0);
  const total = sub * (1 - discount);

  const apply = () => {
    const rate = PROMOS[code.trim().toUpperCase()];
    if (rate) { setPromo(code.trim().toUpperCase()); setMsg(`Скидка ${rate * 100}% применена`); }
    else setMsg("Неверный промокод");
  };

  return (
    <>
      <div onClick={onClose} className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} />
      <aside className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col rounded-l-[2.5rem] p-6 transition-transform duration-500 ease-out ${glass} ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between text-white">
          <h2 className="text-sm uppercase tracking-[0.3em]">Корзина</h2>
          <button onClick={onClose} className="text-white/60 hover:text-white">✕</button>
        </div>

        <ul className="mt-6 flex-1 space-y-4 overflow-y-auto pr-1">
          {items.length === 0 && <li className="text-sm text-white/50">Корзина пуста</li>}
          {items.map((it) => (
            <li key={it.key} className="flex gap-3 rounded-2xl border border-white/15 bg-white/5 p-2 text-white">
              <Photo product={it} className="h-20 w-16 rounded-xl" />
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between text-sm">
                  <span className="font-light">{it.name}</span>
                  <button onClick={() => onRemove(it.key)} className="text-white/40 hover:text-white">✕</button>
                </div>
                <p className="text-xs text-white/50">Размер: {it.size}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3">
                    <button onClick={() => onQty(it.key, -1)} className="h-6 w-6 rounded-full border border-white/25">–</button>
                    <span>{it.qty}</span>
                    <button onClick={() => onQty(it.key, 1)} className="h-6 w-6 rounded-full border border-white/25">+</button>
                  </div>
                  <span>${it.price * it.qty}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4 space-y-3 text-white">
          <div className="flex gap-2">
            <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Промокод (GLASS10)" className={`${input} !py-2`} />
            <button onClick={apply} className={`px-4 text-xs uppercase tracking-widest ${glassBtn}`}>OK</button>
          </div>
          {(msg || promo) && <p className="text-xs text-white/60">{msg || `Промокод ${promo} активен`}</p>}
          <div className="flex justify-between text-xs uppercase tracking-widest text-white/60">
            <span>Сумма</span><span>${sub.toFixed(2)}</span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-xs uppercase tracking-widest text-emerald-300">
              <span>Скидка</span><span>–${(sub * discount).toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between text-lg">
            <span className="text-xs uppercase tracking-widest text-white/60">Итого</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button
            disabled={!items.length}
            onClick={onCheckout}
            className="w-full rounded-full bg-white py-4 text-xs uppercase tracking-[0.3em] text-black transition hover:bg-zinc-200 active:scale-95 disabled:opacity-40"
          >
            Оформить заказ
          </button>
        </div>
      </aside>
    </>
  );
};

const CheckoutModal = ({ total, onClose, onDone }) => {
  const [form, setForm] = useState({ name: "", phone: "", city: "", address: "", pay: "card" });
  const [errors, setErrors] = useState({});
  const [order, setOrder] = useState(null);
  useEscape(true, onClose);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (form.name.trim().length < 2) er.name = true;
    if (!/^[+\d][\d\s()-]{6,}$/.test(form.phone.trim())) er.phone = true;
    if (!form.city.trim()) er.city = true;
    if (form.address.trim().length < 4) er.address = true;
    setErrors(er);
    if (Object.keys(er).length) return;
    setOrder(`MR-${Math.floor(100000 + Math.random() * 900000)}`);
  };

  const finish = () => { onDone(); onClose(); };
  const cls = (k) => `${input} ${errors[k] ? "!border-red-400" : ""}`;

  return (
    <Backdrop onClose={order ? finish : onClose}>
      <div className={`mx-auto max-w-lg rounded-[2.5rem] p-8 text-white ${glass}`}>
        {order ? (
          <div className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/40 bg-white/15 text-2xl">✓</div>
            <h2 className="mt-6 text-2xl font-extralight">Заказ оформлен</h2>
            <p className="mt-2 text-sm text-white/60">Номер заказа: {order}</p>
            <p className="mt-1 text-sm text-white/60">Мы свяжемся с вами по телефону {form.phone}</p>
            <button onClick={finish} className="mt-8 w-full rounded-full bg-white py-3 text-xs uppercase tracking-[0.3em] text-black">Готово</button>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <div className="flex justify-between">
              <h2 className="text-sm uppercase tracking-[0.3em]">Оформление</h2>
              <button type="button" onClick={onClose} className="text-white/60 hover:text-white">✕</button>
            </div>
            <input className={cls("name")} placeholder="Имя" value={form.name} onChange={set("name")} />
            <input className={cls("phone")} placeholder="Телефон" value={form.phone} onChange={set("phone")} />
            <div className="grid grid-cols-2 gap-3">
              <input className={cls("city")} placeholder="Город" value={form.city} onChange={set("city")} />
              <select className={input} value={form.pay} onChange={set("pay")}>
                <option value="card">Картой</option>
                <option value="cash">Наличными</option>
              </select>
            </div>
            <input className={cls("address")} placeholder="Адрес доставки" value={form.address} onChange={set("address")} />
            {Object.keys(errors).length > 0 && <p className="text-xs text-red-300">Проверьте выделенные поля</p>}
            <button className="w-full rounded-full bg-white py-4 text-xs uppercase tracking-[0.3em] text-black transition hover:bg-zinc-200 active:scale-95">
              Подтвердить · ${total.toFixed(2)}
            </button>
          </form>
        )}
      </div>
    </Backdrop>
  );
};

/* ================= APP ================= */
export default function MirrorStore() {
  const [cart, setCart] = useLocalStorage("mirror-cart", []);
  const [favs, setFavs] = useLocalStorage("mirror-favs", []);
  const [promo, setPromo] = useLocalStorage("mirror-promo", "");
  const [cartOpen, setCartOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const [selected, setSelected] = useState(null);
  const [toast, setToast] = useState("");

  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("Все");
  const [sort, setSort] = useState("pop");
  const [maxPrice, setMaxPrice] = useState(500);
  const [size, setSize] = useState("");
  const [showFavs, setShowFavs] = useState(false);

  const toastTimer = useRef(null);
  const notify = (t) => {
    setToast(t);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2000);
  };

  const discount = PROMOS[promo] || 0;
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0) * (1 - discount);

  const addToCart = (p, sz, qty = 1) => {
    const key = `${p.id}-${sz}`;
    setCart((c) => {
      const found = c.find((i) => i.key === key);
      if (found) return c.map((i) => (i.key === key ? { ...i, qty: Math.min(10, i.qty + qty) } : i));
      return [...c, { key, id: p.id, slug: p.slug, name: p.name, cat: p.cat, price: p.price, size: sz, qty }];
    });
    notify(`${p.name} добавлено`);
  };
  const quickAdd = (p) => (p.sizes.length === 1 ? addToCart(p, p.sizes[0]) : setSelected(p));
  const changeQty = (key, d) =>
    setCart((c) => c.map((i) => (i.key === key ? { ...i, qty: Math.max(1, Math.min(10, i.qty + d)) } : i)));
  const removeItem = (key) => setCart((c) => c.filter((i) => i.key !== key));
  const toggleFav = (id) => setFavs((f) => (f.includes(id) ? f.filter((x) => x !== id) : [...f, id]));
  const clearAfterOrder = () => { setCart([]); setPromo(""); };

  const list = useMemo(() => {
    const q = search.trim().toLowerCase();
    const res = PRODUCTS.filter(
      (p) =>
        (cat === "Все" || p.cat === cat) &&
        p.price <= maxPrice &&
        (!size || p.sizes.includes(size)) &&
        (!q || p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q)) &&
        (!showFavs || favs.includes(p.id))
    );
    const sorters = {
      pop: (a, b) => b.rating - a.rating,
      asc: (a, b) => a.price - b.price,
      desc: (a, b) => b.price - a.price,
      new: (a, b) => Number(b.isNew) - Number(a.isNew),
    };
    return [...res].sort(sorters[sort]);
  }, [search, cat, maxPrice, size, sort, showFavs, favs]);

  const reset = () => { setSearch(""); setCat("Все"); setMaxPrice(500); setSize(""); setShowFavs(false); };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#07070b] font-sans text-white">
      <style>{css}</style>

      {/* colourful background that the glass refracts */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1d2236_0%,#07070b_65%)]" />
        <div className="absolute -left-32 top-10 h-[34rem] w-[34rem] animate-[blob1_18s_ease-in-out_infinite] rounded-full bg-indigo-500/40 blur-3xl" />
        <div className="absolute -right-32 top-1/3 h-[32rem] w-[32rem] animate-[blob2_22s_ease-in-out_infinite] rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-[30rem] w-[30rem] animate-[blob3_20s_ease-in-out_infinite] rounded-full bg-cyan-400/30 blur-3xl" />
      </div>

      <div className="relative z-10">
        <Header
          search={search}
          setSearch={setSearch}
          cartCount={cartCount}
          favCount={favs.length}
          onCart={() => setCartOpen(true)}
          onFav={() => setShowFavs((v) => !v)}
          showFavs={showFavs}
        />
        <Hero />

        <section id="shop" className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="mb-10 text-center text-xs uppercase tracking-[0.5em] text-white/60">Каталог · {list.length}</h2>
          <Filters cat={cat} setCat={setCat} sort={sort} setSort={setSort} maxPrice={maxPrice} setMaxPrice={setMaxPrice} size={size} setSize={setSize} />

          {list.length === 0 ? (
            <div className={`mx-auto max-w-md rounded-[2rem] p-10 text-center ${glass}`}>
              <p className="text-white/70">Ничего не найдено</p>
              <button onClick={reset} className={`mt-6 px-6 py-2 text-xs uppercase tracking-widest ${glassBtn}`}>Сбросить</button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {list.map((p, i) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  index={i}
                  fav={favs.includes(p.id)}
                  onFav={toggleFav}
                  onOpen={setSelected}
                  onQuickAdd={quickAdd}
                />
              ))}
            </div>
          )}
        </section>

        <footer className="mx-auto mb-10 max-w-6xl px-6">
          <div className={`rounded-[2rem] px-8 py-10 text-center text-xs uppercase tracking-[0.4em] text-white/50 ${glass}`}>
            © Mirror · Доставка по всему миру · Возврат 30 дней
          </div>
        </footer>
      </div>

      {selected && (
        <ProductModal
          key={selected.id}
          product={selected}
          fav={favs.includes(selected.id)}
          onFav={toggleFav}
          onClose={() => setSelected(null)}
          onAdd={addToCart}
        />
      )}

      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onQty={changeQty}
        onRemove={removeItem}
        promo={promo}
        setPromo={setPromo}
        discount={discount}
        onCheckout={() => { setCartOpen(false); setCheckout(true); }}
      />

      {checkout && <CheckoutModal total={total} onClose={() => setCheckout(false)} onDone={clearAfterOrder} />}
      <Toast text={toast} />
    </div>
  );
}