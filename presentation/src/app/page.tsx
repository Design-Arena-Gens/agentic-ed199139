export default function Home() {
  const slides = [
    {
      title: "Элли Михайлович Юрьев",
      subtitle:
        "Советский и российский художник, график-иллюстратор, медальер. Презентация для студентов 1 курса медицинского института.",
      points: [
        "Народный художник Чувашской Республики",
        "Лауреат Государственной премии Чувашской Республики им. К. В. Иванова",
        "Автор герба и флага Чувашской Республики, герба города Чебоксары",
      ],
    },
    {
      title: "Биографическая справка",
      subtitle: "Корни и образование мастера",
      points: [
        "Родился 28 июля 1931 года в селе Ямбулатово, Чувашская АССР",
        "Окончил Чувашское художественное училище в 1950 году",
        "Продолжил обучение в Московском художественном институте им. В. И. Сурикова",
      ],
    },
    {
      title: "Формирование мастера",
      subtitle: "Учителя и прорывные годы",
      points: [
        "Учился у Сергея Герасимова и Евгения Кибрика",
        "Ранние работы — портреты и тематические композиции о современниках",
        "С 1960-х годов активно участвовал во всесоюзных выставках",
      ],
    },
    {
      title: "Художественный язык",
      subtitle: "Эстетика, важная для будущих врачей",
      points: [
        "Сочетает академическую школу и национальные мотивы Чувашии",
        "Выверенная линия и внимание к символике помогают точнее передавать смысл",
        "Ограниченная палитра усиливает эмоциональное воздействие образа",
      ],
    },
    {
      title: "Геральдические проекты",
      subtitle: "Новая визуальная идентичность региона",
      points: [
        "Разработал герб и флаг Чувашской Республики (1992)",
        "Создал герб столицы Чувашии — города Чебоксары",
        "Консультировал по созданию муниципальной символики и наград",
      ],
    },
    {
      title: "Медальерное искусство",
      subtitle: "Пластика малых форм и память о человеке",
      points: [
        "Автор серий юбилейных и памятных медалей для региона",
        "Работал над наградами к 1000-летию Чебоксар",
        "Произведения хранятся в музеях и частных коллекциях России",
      ],
    },
    {
      title: "Графика и иллюстрация",
      subtitle: "Книга как просветительская платформа",
      points: [
        "Оформлял произведения К. В. Иванова, М. Юхмы, Г. Айги",
        "Создал серию литографий о труде и культуре чувашского народа",
        "Визуализировал фольклорные и исторические сюжеты для широкого круга читателей",
      ],
    },
    {
      title: "Связь с медициной",
      subtitle: "Образы здоровья и ответственности",
      points: [
        "В плакатах подчёркивал значимость профилактики и здорового образа жизни",
        "Создавал медали, посвящённые развитию спорта и санитарной культуре",
        "Использовал эмблематику, близкую к медицинскому сообществу",
      ],
    },
    {
      title: "Вклад в культурную идентичность",
      subtitle: "Символы, объединяющие сообщество",
      points: [
        "Кодифицировал традиционный орнамент и девиз «Мы родом из труда»",
        "Продвигал образ Чувашии на всесоюзных и международных выставках",
        "Показывал связь творчества с региональной историей и языком",
      ],
    },
    {
      title: "Признание и награды",
      subtitle: "Официальная оценка заслуг",
      points: [
        "Народный художник Чувашской Республики (1990)",
        "Лауреат Государственной премии Чувашской Республики им. К. В. Иванова",
        "Почётный гражданин города Чебоксары",
      ],
    },
    {
      title: "Наследие",
      subtitle: "Музеи и ученики",
      points: [
        "Работы находятся в Чувашском национальном музее и частных собраниях",
        "Участвовал в международных биеннале графики и гобелена",
        "Передавал опыт молодым художникам и дизайнерам республики",
      ],
    },
    {
      title: "Профессиональные уроки",
      subtitle: "Ценности для будущих медиков",
      points: [
        "Пример служения обществу через визуальный образ",
        "Внимание к исторической достоверности и уважение к человеку",
        "Синтез науки, культуры и гражданской ответственности",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-black text-slate-100">
      <header className="relative overflow-hidden border-b border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-16 sm:py-24">
          <div className="flex flex-col gap-3">
            <span className="w-fit rounded-full border border-slate-400/30 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-slate-200">
              Презентация
            </span>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[44px]">
              Элли Михайлович Юрьев: художник, создавший образ современной
              Чувашии
            </h1>
            <p className="max-w-3xl text-base text-slate-200 sm:text-lg">
              10–15 слайдов для студентов первого курса медицинского института,
              посвящённых биографии, творчеству и наследию Народного художника
              Чувашской Республики.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <span className="rounded-md border border-slate-700 bg-slate-900/60 px-3 py-1">
              Формат: PowerPoint (.pptx)
            </span>
            <span className="rounded-md border border-slate-700 bg-slate-900/60 px-3 py-1">
              Тематика: искусство, культурология, профессиональная этика
            </span>
            <a
              href="/elliyuryev.pptx"
              className="group inline-flex items-center gap-2 rounded-md bg-amber-400 px-4 py-2 font-medium text-slate-900 transition hover:bg-amber-300"
            >
              Скачать презентацию
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-950">
                .pptx
              </span>
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <div className="grid gap-8 sm:grid-cols-2">
          {slides.map((slide, index) => (
            <article
              key={slide.title}
              className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-slate-900/50 p-6 shadow-2xl shadow-slate-950/70 transition hover:border-amber-400/60 hover:bg-slate-900/70"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-amber-300">
                <span>Слайд {index + 1}</span>
                <span className="font-semibold text-amber-200">Юрьев</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold text-white sm:text-2xl">
                {slide.title}
              </h2>
              <p className="mt-2 text-sm text-slate-300 sm:text-base">
                {slide.subtitle}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200 sm:text-[15px]">
                {slide.points.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-amber-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80 py-10">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Подготовлено для учебного обсуждения на первом курсе медицинского
            института.
          </p>
          <a
            href="/elliyuryev.pptx"
            className="rounded-md border border-amber-400/60 px-4 py-2 font-medium text-amber-300 transition hover:bg-amber-300 hover:text-slate-900"
          >
            Повторно скачать .pptx
          </a>
        </div>
      </footer>
    </div>
  );
}
