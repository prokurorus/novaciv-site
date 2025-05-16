export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="p-6 shadow-md">
        <h1 className="text-3xl font-bold">NovaCiv</h1>
        <p className="text-sm text-gray-600">Новая цифровая цивилизация</p>
      </header>

      <main className="p-6 space-y-8 max-w-3xl mx-auto">
        <section>
          <h2 className="text-xl font-semibold">Устав</h2>
          <p>Краткое описание идеологии, принципов и целей NovaCiv.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Цели и Идеи</h2>
          <p>Манифест проекта и вектор развития. Прямое самоуправление, свобода, научность, ненасилие.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Сообщество</h2>
          <p>Информация об участниках, взаимодействие, будущие инструменты прямой демократии.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Инструменты</h2>
          <p>Список разрабатываемых или доступных цифровых решений, помогающих участникам.</p>
        </section>
      </main>

      <footer className="p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NovaCiv. Все права принадлежат свободе.
      </footer>
    </div>
  );
}
