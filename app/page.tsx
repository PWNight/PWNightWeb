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

const BotCard = ({ title, iconSrc, href, description }: { title: string, iconSrc: string, href: string, description: string }) => (
    <div className="group p-5 bg-card/60 backdrop-blur-md border rounded-3xl hover:border-blue-500/50 transition-all flex flex-col h-full shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full overflow-hidden transition-all shrink-0">
          <img src={iconSrc} alt={title} className="w-full h-full object-cover" />
        </div>
        <h4 className="font-bold text-xl tracking-tight">{title}</h4>
      </div>

      <p className="text-muted-foreground text-sm leading-relaxed mb-6 grow">
        {description}
      </p>

      <Link href={href} target="_blank" className="inline-flex items-center gap-2 text-blue-500 font-semibold text-sm hover:underline mt-auto">
        <ExternalLink size={16} /> Исходный код
      </Link>
    </div>
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

        <main className="flex flex-col flex-1 p-4 sm:p-6 max-w-6xl mx-auto w-full gap-12 py-20 relative z-10">
          <section className="flex flex-col md:flex-row gap-8 items-start animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="w-32 h-32 rounded-full overflow-hidden shrink-0 shadow-inner">
              <img src="/avatar.url" alt="Родион Гошев" className="w-full h-full object-cover" />
            </div>
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
              <GraduationCap className="absolute right-0 bottom-0 text-blue-500/10 group-hover:scale-110 transition-transform" size={150} />
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-2xl font-bold mb-3 flex items-center sm:justify-between gap-2">
                    Shat Docs <span className="text-[10px] bg-blue-500 text-white py-1 px-4 rounded-full uppercase">Диплом</span>
                  </h2>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    Система управления образовательной документацией. Автоматизация учета посещаемости, успеваемости и генерация отчетов из Excel/PDF файлов.
                  </p>
                </div>
                <div className={'flex flex-col gap-2'}>
                  <Link href="https://github.com/PWNight/shat_docs" target="_blank" className="inline-flex items-center gap-2 text-blue-500 font-semibold text-sm hover:underline">
                    <ExternalLink size={18} /> Исходный код
                  </Link>
                  <Link href="https://shat.pwnight.ru" target="_blank" className="inline-flex items-center gap-2 text-blue-500 font-semibold text-sm hover:underline">
                    <ExternalLink size={18} /> Сайт приложения
                  </Link>
                </div>
              </div>
            </section>

            <section className="group relative overflow-hidden rounded-3xl border border-orange-500/40 bg-orange-500/5 backdrop-blur-2xl p-8 transition-all hover:shadow-2xl hover:border-orange-500 hover:shadow-orange-500/10 flex flex-col h-full">
              <Globe className="absolute right-0 bottom-0 text-orange-500/10 group-hover:scale-110 transition-transform" size={150} />
              <div className="relative z-10 flex flex-col justify-between h-full grow">
                <div>
                  <h2 className="text-2xl font-bold mb-3 flex items-center sm:justify-between gap-2">
                    FoxWorldWeb <span className="text-[10px] bg-orange-500 text-white py-1 px-4 rounded-full uppercase font-bold">Проект завершён</span>
                  </h2>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed grow">
                    Веб-интерфейс для игрового проекта. Интеграция с серверной частью, личный кабинет пользователя и система мониторинга игровых процессов.
                  </p>
                </div>
                <Link href="https://github.com/PWNight/FoxWorldWeb" target="_blank" className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm hover:underline mt-auto">
                  <ExternalLink size={18} /> Исходный код
                </Link>
              </div>
            </section>
          </div>

          <section className="mt-4">
            <div className="flex items-center gap-3 mb-8">
              <Bot className="text-blue-500" />
              <h2 className="text-3xl font-bold tracking-tight">Экосистема Discord ботов</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <BotCard
                  title="Tickets"
                  iconSrc="/bots/tickets.png"
                  href="https://github.com/PWNight/Tickets"
                  description="Бот службы поддержки Discord сервера, позволяет пользователям открывать тикеты для решения проблем."
              />
              <BotCard
                  title="Guilds"
                  iconSrc="/bots/guilds.png"
                  href="https://github.com/PWNight/Guilds"
                  description="Бот управления гильдиями Discord сервера, позволяет создавать собственные гильдии, управлять ими и приглашать туда пользователей."
              />
              <BotCard
                  title="Banker"
                  iconSrc="/bots/banker.png"
                  href="https://github.com/PWNight/Banker"
                  description="Бот управления экономикой Discord сервера, позволяет пользователям открывать свои банковские карты, выполнять переводы, оплачивать штрафы и счета, пополнять и снимать деньги на Minecraft сервере."
              />
              <BotCard
                  title="Judge"
                  iconSrc="/bots/judge.png"
                  href="https://github.com/PWNight/Judge"
                  description="Бот управления наказаниями Discord сервера, включает в себя предупреждения и штрафы."
              />
            </div>
          </section>

          <footer className="mt-auto pt-12 border-t border-border/40 flex justify-between items-center text-muted-foreground text-sm">
            <p>© 2026 Rodion Goshev (PWNight)</p>
            <div className="flex gap-6">
              <Link href="https://github.com/PWNight" className="hover:text-blue-500 transition-colors">Github</Link>
              <Link href="/cv" className="hover:text-blue-500 transition-colors">Резюме</Link>
            </div>
          </footer>
        </main>
      </div>
  );
}