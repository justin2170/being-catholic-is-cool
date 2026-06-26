import { useEffect, useState } from 'react';
import { Sun, Moon, BookOpen, ChevronLeft, ChevronRight, Columns2, Rows2 } from 'lucide-react';
import { passages } from './data';

type Theme = 'light' | 'dark';
type Layout = 'side' | 'stack';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function getInitialLayout(): Layout {
  if (typeof window === 'undefined') return 'side';
  return localStorage.getItem('layout') === 'stack' ? 'stack' : 'side';
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [layout, setLayout] = useState<Layout>(getInitialLayout);
  const [activeId, setActiveId] = useState(passages[0].id);

  const active = passages.find((p) => p.id === activeId)!;
  const activeIndex = passages.findIndex((p) => p.id === activeId);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('layout', layout);
  }, [layout]);

  const goPrev = () => {
    if (activeIndex > 0) setActiveId(passages[activeIndex - 1].id);
  };
  const goNext = () => {
    if (activeIndex < passages.length - 1) setActiveId(passages[activeIndex + 1].id);
  };

  return (
    <div className="min-h-screen bg-ink-50 text-ink-900 dark:bg-ink-950 dark:text-ink-100 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-20 backdrop-blur-md bg-ink-50/80 dark:bg-ink-950/80 border-b border-ink-200/60 dark:border-ink-800/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent-500 flex items-center justify-center shadow-md shadow-accent-500/30">
              <BookOpen className="w-5 h-5 text-white" strokeWidth={2} />
            </div>
            <div>
              <h1 className="font-serif text-xl sm:text-2xl font-semibold leading-none tracking-tight">
                Latinum
              </h1>
              <p className="text-xs text-ink-500 dark:text-ink-400 mt-1 font-sans">
                English &amp; Latin Reader
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Layout toggle */}
            <button
              onClick={() => setLayout(layout === 'side' ? 'stack' : 'side')}
              className="hidden sm:flex items-center justify-center w-10 h-10 rounded-lg border border-ink-200 dark:border-ink-800 hover:bg-ink-100 dark:hover:bg-ink-900 transition-colors"
              aria-label="Toggle layout"
              title={layout === 'side' ? 'Side by side' : 'Stacked'}
            >
              {layout === 'side' ? (
                <Columns2 className="w-4 h-4" />
              ) : (
                <Rows2 className="w-4 h-4" />
              )}
            </button>

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-ink-200 dark:border-ink-800 hover:bg-ink-100 dark:hover:bg-ink-900 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4 text-accent-300" />
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Passage selector */}
        <nav className="flex flex-wrap gap-2 mb-10">
          {passages.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                p.id === activeId
                  ? 'bg-accent-500 text-white shadow-md shadow-accent-500/30'
                  : 'bg-ink-100 text-ink-600 dark:bg-ink-900 dark:text-ink-300 hover:bg-ink-200 dark:hover:bg-ink-800'
              }`}
            >
              {p.title}
            </button>
          ))}
        </nav>

        {/* Passage header */}
        <div key={active.id} className="animate-fade-in mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-600 dark:text-accent-400 font-sans font-semibold mb-3">
            {active.source} · {active.year}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-2">
            {active.title}
          </h2>
          <p className="font-serif text-lg italic text-ink-500 dark:text-ink-400">
            by {active.author}
          </p>
        </div>

        {/* Bilingual content */}
        <div
          key={active.id + layout}
          className={`grid gap-6 sm:gap-8 ${
            layout === 'side' ? 'sm:grid-cols-2' : 'grid-cols-1'
          }`}
        >
          {active.paragraphs.map((para, i) => (
            <div
              key={i}
              className={`${
                layout === 'stack'
                  ? 'grid grid-cols-1 gap-4'
                  : 'contents'
              }`}
            >
              {/* Latin */}
              <article
                className="group relative rounded-2xl p-6 sm:p-7 bg-white dark:bg-ink-900 border border-ink-200/60 dark:border-ink-800/60 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[0.65rem] uppercase tracking-[0.18em] font-sans font-bold text-accent-600 dark:text-accent-400">
                    Latin
                  </span>
                  <span className="text-ink-300 dark:text-ink-700 text-xs font-sans">
                    §{i + 1}
                  </span>
                </div>
                {para.title && (
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold leading-tight mb-3 text-accent-700 dark:text-accent-300">
                    {para.title}
                  </h3>
                )}
                <p className="font-serif text-lg sm:text-xl leading-[1.7] text-red-700 dark:text-red-400">
                  {para.la}
                </p>
              </article>

              {/* English */}
              <article
                className="group relative rounded-2xl p-6 sm:p-7 bg-ink-100/60 dark:bg-ink-900/40 border border-ink-200/40 dark:border-ink-800/40 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[0.65rem] uppercase tracking-[0.18em] font-sans font-bold text-ink-500 dark:text-ink-400">
                    English
                  </span>
                  <span className="text-ink-300 dark:text-ink-700 text-xs font-sans">
                    §{i + 1}
                  </span>
                </div>
                {para.title && (
                  <h3 className="font-serif text-xl sm:text-2xl font-semibold leading-tight mb-3 text-accent-700 dark:text-accent-300">
                    {para.title}
                  </h3>
                )}
                <p className="font-serif text-lg sm:text-xl leading-[1.7] text-ink-700 dark:text-ink-200">
                  {para.en}
                </p>
              </article>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-ink-200/60 dark:border-ink-800/60">
          <button
            onClick={goPrev}
            disabled={activeIndex === 0}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-ink-100 dark:hover:bg-ink-900"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous</span>
          </button>

          <span className="text-sm text-ink-400 dark:text-ink-500 font-sans">
            {activeIndex + 1} / {passages.length}
          </span>

          <button
            onClick={goNext}
            disabled={activeIndex === passages.length - 1}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-ink-100 dark:hover:bg-ink-900"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </main>

      <footer className="border-t border-ink-200/60 dark:border-ink-800/60 mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-center">
          <p className="text-xs text-ink-400 dark:text-ink-600 font-sans">
            Latinum · A bilingual reader of classical Latin literature
          </p>
        </div>
      </footer>
    </div>
  );
}
