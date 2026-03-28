"use client";

import {
  ExternalLink,
  Terminal,
  Globe,
  Bot,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import LineWaves from '@/components/ui/LineWaves';

const BotCard = ({ title, iconSrc, href }: { title: string, iconSrc: string, href: string }) => (
    <Link href={href} className="group p-4 bg-card/40 backdrop-blur-md border rounded-2xl hover:border-blue-500/50 transition-all flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-muted mb-3 overflow-hidden border-2 border-transparent transition-all">
        <img src={iconSrc} alt={title} className="w-full h-full object-cover" />
      </div>
      <h4 className="font-medium text-sm">{title}</h4>
    </Link>
);

export default function PortfolioPage() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
      <div className="relative min-h-screen w-full overflow-hidden flex flex-col">
        {mounted && (
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
              <LineWaves
                  speed={0.3}
                  innerLineCount={32}
                  outerLineCount={36}
                  warpIntensity={1}
                  rotation={-45}
                  edgeFadeWidth={0}
                  colorCycleSpeed={1}
                  brightness={isDark ? 0.1 : 0.4}
                  color1={isDark ? "#3b82f6" : "#bfdbfe"}
                  color2={isDark ? "#ffffff" : "#60a5fa"}
                  color3={isDark ? "#1e40af" : "#a78bfa"}
                  enableMouseInteraction
                  mouseInfluence={1.0}
              />
              {!isDark && <div className="absolute inset-0 bg-background/80 backdrop-blur-[1px]" />}
            </div>
        )}

        <main className="flex flex-col flex-1 p-6 max-w-6xl mx-auto w-full gap-12 py-20 relative z-10">

          <section className="flex flex-col md:flex-row gap-8 items-start animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-wider mb-4">
                <Terminal size={14} /> Full-stack Developer
              </div>
              <h1 className="text-5xl font-bold tracking-tight mb-4">Родион Гошев</h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed mb-6">
                Студент и разработчик. Специализируюсь на создании масштабируемых веб-приложений и настройке рабочих окружений.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Next.js', 'TypeScript', 'React', 'Tailwind', 'Docker', 'Python'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-card/60 border rounded-lg text-sm font-medium">
                      {tech}
                    </span>
                ))}
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section className="group relative overflow-hidden rounded-3xl border border-blue-500/30 bg-blue-500/5 backdrop-blur-xl p-8 transition-all hover:shadow-2xl hover:shadow-blue-500/10">
              <GraduationCap className="absolute -right-4 -top-4 text-blue-500/10 group-hover:scale-110 transition-transform" size={160} />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  Shat Docs <span className="text-[10px] bg-blue-500 text-white py-1 px-4 rounded-full uppercase">Диплом</span>
                </h2>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Система управления образовательной документацией. Автоматизация учета посещаемости, успеваемости и генерация отчетов из Excel/PDF файлов.
                </p>
                <div className={'flex flex-col gap-2'}>
                  <Link href="https://github.com/PWNight/shat_docs" target="_blank" className="inline-flex items-center gap-2 text-blue-500 font-semibold text-sm hover:underline">
                    <ExternalLink size={18} /> Подробнее в GitHub
                  </Link>
                  <Link href="https://shat.pwnight.ru" target="_blank" className="inline-flex items-center gap-2 text-blue-500 font-semibold text-sm hover:underline">
                    <ExternalLink size={18} /> Сайт приложения
                  </Link>
                </div>
              </div>
            </section>

            <section className="group relative overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur-xl p-8 transition-all hover:shadow-xl">
              <Globe className="absolute -right-4 -top-4 text-foreground/5 group-hover:scale-110 transition-transform" size={160} />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">FoxWorldWeb</h2>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  Веб-интерфейс для игрового проекта. Интеграция с серверной частью, личный кабинет пользователя и система мониторинга игровых процессов.
                </p>
                <Link href="https://github.com/PWNight" target="_blank" className="inline-flex items-center gap-2 text-foreground font-semibold text-sm hover:underline">
                  <ExternalLink size={18} /> Подробнее в GitHub
                </Link>
              </div>
            </section>
          </div>

          <section className="mt-4">
            <div className="flex items-center gap-3 mb-8">
              <Bot className="text-blue-500" />
              <h2 className="text-3xl font-bold tracking-tight">Пример экосистемы из Discord ботов</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <BotCard title="Tickets" iconSrc="/bots/tickets.png" href={"https://github.com/PWNight/Tickets"} />
              <BotCard title="Guilds" iconSrc="/bots/guilds.png" href={"https://github.com/PWNight/Guilds"}/>
              <BotCard title="Banker" iconSrc="/bots/banker.png" href={"https://github.com/PWNight/Banker"}/>
              <BotCard title="Judge" iconSrc="/bots/judge.png" href={"https://github.com/PWNight/Judge"}/>
            </div>
          </section>

          <footer className="mt-auto pt-12 border-t border-border/40 flex justify-between items-center text-muted-foreground text-sm">
            <p>© 2026 Rodion Goshev (PWNight)</p>
            <div className="flex gap-6">
              <Link href="https://github.com/PWNight" className="hover:text-blue-500 transition-colors">GitHub</Link>
              <Link href="/cv" className="hover:text-blue-500 transition-colors">Резюме</Link>
            </div>
          </footer>
        </main>
      </div>
  );
}