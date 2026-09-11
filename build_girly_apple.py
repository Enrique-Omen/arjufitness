# -*- coding: utf-8 -*-
import os

print("Building Girly Caro Tipo Apple PWA for Araceli Morales x OMEN...")

# 1. HTML GENERATION
html_content = """<!DOCTYPE html>
<html lang="es" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>ARACELI MORALES | Official Fitness App</title>
  <meta name="description" content="Plataforma oficial de entrenamiento y nutrición de Araceli Morales. Powered by OMEN.">
  
  <!-- PWA Settings -->
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#08080C">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="apple-mobile-web-app-title" content="AraceliFit">
  <link rel="apple-touch-icon" href="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=192&auto=format&fit=crop&q=80">

  <!-- Tailwind CSS & Fonts -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            rose: {
              accent: '#FF3B77',
              accentHover: '#E02660',
              soft: '#FB7185',
              champagne: '#FFE4E6',
              darkGlow: '#2A0E1A'
            },
            apple: {
              bg: '#08080C',
              surface: '#101017',
              card: '#161622',
              cardBorder: 'rgba(255, 117, 160, 0.12)',
              muted: '#8E8E9F',
              gold: '#F5D0A9'
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
            display: ['"Outfit"', 'sans-serif']
          },
          boxShadow: {
            'glow-rose': '0 0 30px rgba(255, 59, 119, 0.35)',
            'glow-gold': '0 0 25px rgba(245, 208, 169, 0.25)',
            'device': '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 0 10px #181720, 0 0 0 12px #262432'
          }
        }
      }
    }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/lucide@latest"></script>
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"></script>
  <link rel="stylesheet" href="styles.css">
</head>
<body class="bg-[#050508] text-gray-100 font-sans min-h-screen antialiased flex flex-col items-center justify-start selection:bg-rose-accent selection:text-white">

  <!-- ==================== TOP NAVIGATION BAR (APPLE MINIMALIST) ==================== -->
  <header class="w-full bg-[#0C0B12]/95 border-b border-white/[0.08] backdrop-blur-xl sticky top-0 z-50 py-2.5 px-3 sm:px-8 flex items-center justify-between shadow-2xl">
    <div class="flex items-center gap-3">
      <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-rose-accent to-rose-soft flex items-center justify-center font-display font-black text-white text-xs shadow-glow-rose">
        AM
      </div>
      <div>
        <div class="flex items-center gap-2">
          <span class="font-display font-extrabold text-xs sm:text-sm text-white tracking-widest">ARACELI MORALES</span>
          <span class="bg-rose-accent/15 text-rose-soft text-[9px] font-bold px-2 py-0.5 rounded-full border border-rose-accent/25">STUDIO</span>
        </div>
        <p class="text-[9px] text-gray-400 hidden sm:block">Powered by <span class="text-white font-semibold">OMEN Technologies</span></p>
      </div>
    </div>

    <!-- Apple-Style Dynamic Island User Role Switcher -->
    <div class="flex items-center bg-black/60 p-1 rounded-full border border-white/10 shadow-inner">
      <button onclick="switchUserRole('client')" id="btn-role-client" class="role-btn active flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all bg-rose-accent text-white shadow-glow-rose">
        <i data-lucide="user" class="w-3.5 h-3.5"></i>
        <span>Alumna (Sofía)</span>
      </button>
      <button onclick="switchUserRole('coach')" id="btn-role-coach" class="role-btn flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all text-gray-400 hover:text-white">
        <i data-lucide="crown" class="w-3.5 h-3.5 text-rose-soft"></i>
        <span>Coach (Araceli)</span>
      </button>
    </div>

    <!-- Pitch & Tools CTA -->
    <div class="flex items-center gap-2">
      <button onclick="openPitchModal()" class="flex items-center gap-1.5 bg-gradient-to-r from-rose-accent to-pink-600 hover:brightness-110 text-white font-extrabold text-xs px-3 py-1.5 rounded-xl shadow-glow-rose transition active:scale-95">
        <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
        <span class="hidden md:inline">Propuesta OMEN ($)</span>
      </button>
    </div>
  </header>

  <!-- ==================== IPHONE 16 PRO DEVICE WRAPPER ==================== -->
  <main class="w-full flex-1 flex items-center justify-center p-0 sm:p-4 lg:p-6">
    <div id="device-container" class="w-full max-w-[420px] min-h-screen sm:min-h-[880px] sm:max-h-[910px] bg-apple-bg sm:rounded-[48px] sm:shadow-device border-0 sm:border-[8px] sm:border-[#1A1924] relative flex flex-col overflow-hidden transition-all duration-300">
      
      <!-- Apple Dynamic Island & Live Status -->
      <div class="w-full pt-2 px-6 flex justify-between items-center text-xs font-semibold text-gray-300 z-40 bg-apple-bg/95 backdrop-blur-md select-none">
        <span id="live-time" class="text-[11px] font-mono">9:41</span>
        <div class="w-24 h-4 bg-black rounded-full mx-auto hidden sm:flex items-center justify-center gap-1">
          <span class="w-1.5 h-1.5 rounded-full bg-rose-soft animate-ping"></span>
          <span class="text-[8px] text-gray-400 font-mono" id="island-badge">AM Club</span>
        </div>
        <div class="flex items-center gap-1.5 text-gray-300">
          <i data-lucide="signal" class="w-3.5 h-3.5"></i>
          <i data-lucide="wifi" class="w-3.5 h-3.5"></i>
          <i data-lucide="battery" class="w-4 h-4 text-rose-soft"></i>
        </div>
      </div>

      <!-- User Active Context Bar -->
      <div class="w-full px-4 py-2 flex items-center justify-between border-b border-white/[0.06] bg-apple-surface/90 backdrop-blur-md z-30 sticky top-0">
        <div class="flex items-center gap-2.5">
          <div class="relative">
            <img id="nav-avatar" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80" class="w-8 h-8 rounded-full object-cover ring-2 ring-rose-accent/60">
            <span class="absolute bottom-0 right-0 w-2 h-2 bg-emerald-400 rounded-full border border-black"></span>
          </div>
          <div>
            <span id="nav-name" class="font-display font-bold text-xs text-white block leading-tight">Sofía Ramírez</span>
            <span id="nav-badge" class="text-[10px] text-rose-soft font-medium">Coach: Araceli Morales ✓</span>
          </div>
        </div>

        <button onclick="showToast('Tienes 1 check-in programado para este domingo con Araceli.')" class="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:text-white">
          <i data-lucide="bell" class="w-3.5 h-3.5"></i>
        </button>
      </div>

      <!-- Main Scrollable Body -->
      <div id="content-scrollable" class="flex-1 overflow-y-auto overflow-x-hidden pb-20 text-sm relative scroll-smooth">

        <!-- ************************************************************ -->
        <!-- ****************** 1. PORTAL ALUMNA (SOFÍA) **************** -->
        <!-- ************************************************************ -->
        <div id="portal-client" class="space-y-4">
          
          <!-- SCREEN 1: NUTRICIÓN CON APPLE RINGS -->
          <section id="client-view-nutrition" class="client-screen active p-4 space-y-4">
            
            <div class="flex items-center justify-between">
              <div>
                <span class="text-[10px] font-extrabold uppercase tracking-widest text-rose-soft">PLAN NUTRICIONAL</span>
                <h2 class="font-display font-black text-lg text-white">Mis Macros & Comidas</h2>
              </div>
              <button onclick="openAddFoodModal()" class="px-3 py-1 bg-rose-accent/15 text-rose-accent border border-rose-accent/30 rounded-full text-xs font-bold flex items-center gap-1 hover:bg-rose-accent hover:text-white transition">
                <i data-lucide="plus" class="w-3.5 h-3.5"></i>
                <span>Registrar</span>
              </button>
            </div>

            <!-- Apple Watch Style Activity Rings Card -->
            <div class="p-5 rounded-3xl bg-gradient-to-br from-apple-card via-apple-surface to-[#120D18] border border-apple-cardBorder shadow-xl space-y-4">
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-[10px] text-gray-400 uppercase font-semibold">Calorías del Día</span>
                  <div class="flex items-baseline gap-1 mt-0.5">
                    <span class="font-display text-3xl font-black text-white" id="client-cal-val">1,380</span>
                    <span class="text-xs text-gray-400">/ 1,800 kcal</span>
                  </div>
                  <span class="text-[11px] text-rose-soft font-semibold">Te quedan 420 kcal para cenar</span>
                </div>

                <!-- Apple Style Concentric Rings Visualizer -->
                <div class="relative w-20 h-20 flex items-center justify-center">
                  <!-- Outer Ring (Calories: Rose) -->
                  <svg class="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path class="text-white/10" stroke-width="3.5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path class="text-rose-accent" stroke-dasharray="76, 100" stroke-width="3.5" stroke-linecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <!-- Middle Ring (Protein: Gold) -->
                  <svg class="w-14 h-14 absolute transform -rotate-90" viewBox="0 0 36 36">
                    <path class="text-white/10" stroke-width="4" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path class="text-apple-gold" stroke-dasharray="82, 100" stroke-width="4" stroke-linecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <!-- Inner Ring (Water: Cyan) -->
                  <svg class="w-8 h-8 absolute transform -rotate-90" viewBox="0 0 36 36">
                    <path class="text-white/10" stroke-width="5" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path class="text-emerald-400" stroke-dasharray="70, 100" stroke-width="5" stroke-linecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                </div>
              </div>

              <!-- Macros Cards -->
              <div class="grid grid-cols-3 gap-2 pt-2 border-t border-white/[0.06]">
                <div class="bg-white/[0.03] p-2.5 rounded-2xl border border-white/[0.04]">
                  <span class="text-[10px] text-rose-soft font-bold block">Proteína</span>
                  <div class="font-mono font-bold text-xs text-white mt-0.5">110g <span class="text-[9px] text-gray-400">/ 135g</span></div>
                  <span class="text-[8px] text-gray-500">Músculo magro</span>
                </div>

                <div class="bg-white/[0.03] p-2.5 rounded-2xl border border-white/[0.04]">
                  <span class="text-[10px] text-apple-gold font-bold block">Carbos</span>
                  <div class="font-mono font-bold text-xs text-white mt-0.5">148g <span class="text-[9px] text-gray-400">/ 180g</span></div>
                  <span class="text-[8px] text-gray-500">Energía gym</span>
                </div>

                <div class="bg-white/[0.03] p-2.5 rounded-2xl border border-white/[0.04]">
                  <span class="text-[10px] text-purple-300 font-bold block">Grasas</span>
                  <div class="font-mono font-bold text-xs text-white mt-0.5">40g <span class="text-[9px] text-gray-400">/ 48g</span></div>
                  <span class="text-[8px] text-gray-500">Hormonal</span>
                </div>
              </div>
            </div>

            <!-- Interactive Water Intake -->
            <div class="p-3.5 rounded-2xl bg-gradient-to-r from-blue-950/20 to-apple-card border border-blue-500/20 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
                  <i data-lucide="droplets" class="w-5 h-5"></i>
                </div>
                <div>
                  <h4 class="font-bold text-xs text-white">Hidratación Diaria: <span id="client-water-text" class="text-blue-400">1,750 ml</span></h4>
                  <span class="text-[10px] text-gray-400">Meta: 2,500 ml recomendada por Ara</span>
                </div>
              </div>
              <button onclick="addClientWater()" class="px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-xs font-bold transition shadow-md active:scale-95">
                +250 ml
              </button>
            </div>

            <!-- Daily Aesthetic Meals Checklist -->
            <div class="space-y-2.5">
              <h4 class="font-display font-bold text-xs text-white uppercase tracking-wider">Menú Recomendado de Araceli:</h4>

              <!-- Breakfast -->
              <div class="p-3 rounded-2xl bg-apple-card border border-apple-cardBorder flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=120&auto=format&fit=crop&q=80" class="w-12 h-12 rounded-xl object-cover" alt="Breakfast">
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] uppercase font-bold text-rose-soft">Desayuno (410 kcal)</span>
                    <span class="text-xs text-emerald-400 font-bold">✓ Comido</span>
                  </div>
                  <h5 class="font-bold text-xs text-white truncate mt-0.5">Pancakes de Avena & Prote con Berries</h5>
                  <span class="text-[10px] text-gray-400">32g P • 45g C • 7g G</span>
                </div>
              </div>

              <!-- Lunch -->
              <div class="p-3 rounded-2xl bg-apple-card border border-apple-cardBorder flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=120&auto=format&fit=crop&q=80" class="w-12 h-12 rounded-xl object-cover" alt="Lunch">
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] uppercase font-bold text-rose-soft">Almuerzo (540 kcal)</span>
                    <span class="text-xs text-emerald-400 font-bold">✓ Comido</span>
                  </div>
                  <h5 class="font-bold text-xs text-white truncate mt-0.5">Bowl Fitness de Salmón con Quinoa & Aguacate</h5>
                  <span class="text-[10px] text-gray-400">42g P • 50g C • 16g G</span>
                </div>
              </div>

              <!-- Dinner -->
              <div class="p-3 rounded-2xl bg-apple-card border border-apple-cardBorder flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=120&auto=format&fit=crop&q=80" class="w-12 h-12 rounded-xl object-cover" alt="Dinner">
                <div class="flex-1 min-w-0">
                  <div class="flex items-center justify-between">
                    <span class="text-[10px] uppercase font-bold text-gray-400">Cena (430 kcal)</span>
                    <button onclick="markMealDone(this)" class="px-2.5 py-0.5 rounded-full bg-white/10 hover:bg-rose-accent hover:text-white text-[10px] font-bold text-gray-300">
                      Registrar
                    </button>
                  </div>
                  <h5 class="font-bold text-xs text-white truncate mt-0.5">Omelette de Claras con Espinaca & Cottage</h5>
                  <span class="text-[10px] text-gray-400">36g P • 14g C • 6g G</span>
                </div>
              </div>
            </div>
          </section>

          <!-- SCREEN 2: RUTINAS & WORKOUT TRACKER -->
          <section id="client-view-workout" class="client-screen p-4 space-y-4 hidden">
            <!-- Active Routine Card -->
            <div class="p-4 rounded-3xl bg-gradient-to-br from-[#1C0E16] via-apple-card to-apple-bg border border-rose-accent/25 shadow-xl space-y-2">
              <div class="flex items-center justify-between">
                <span class="text-[10px] font-black uppercase tracking-wider text-rose-soft bg-rose-accent/10 px-2.5 py-0.5 rounded-full border border-rose-accent/20">
                  PROGRAMA ACTIVO
                </span>
                <span class="flex items-center gap-1 text-xs font-bold text-apple-gold">
                  <i data-lucide="flame" class="w-3.5 h-3.5 fill-apple-gold"></i> Día 8 de 21
                </span>
              </div>
              <h2 class="font-display font-black text-xl text-white">Booty Sculpt & Glúteos de Acero 🍑</h2>
              <p class="text-xs text-gray-400">Diseñada por <strong class="text-white">Araceli Morales</strong> • Hipertrofia y Moldeado</p>

              <!-- Session Progress Bar -->
              <div class="pt-2 space-y-1">
                <div class="flex justify-between text-[11px]">
                  <span class="text-gray-400">Avance de la sesión:</span>
                  <span class="text-rose-soft font-bold">2 de 4 ejercicios completados</span>
                </div>
                <div class="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div class="bg-gradient-to-r from-rose-accent to-pink-400 h-full rounded-full w-[50%]"></div>
                </div>
              </div>
            </div>

            <!-- Rest Timer Card -->
            <div class="p-3.5 rounded-2xl bg-apple-card border border-apple-cardBorder flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl bg-rose-accent/15 text-rose-soft flex items-center justify-center">
                  <i data-lucide="timer" class="w-5 h-5"></i>
                </div>
                <div>
                  <span class="text-[10px] text-gray-400 uppercase font-bold">Temporizador de Descanso</span>
                  <div class="font-mono font-bold text-lg text-white" id="timer-display">00:45</div>
                </div>
              </div>
              <button onclick="toggleTimer()" id="btn-timer" class="px-4 py-2 rounded-xl bg-white/10 hover:bg-rose-accent hover:text-white text-xs font-bold text-white transition">
                Iniciar
              </button>
            </div>

            <!-- Exercises with Real Weight & Reps Logging -->
            <div class="space-y-3">
              <h3 class="font-display font-bold text-xs text-white uppercase tracking-wider flex items-center gap-2">
                <i data-lucide="dumbbell" class="w-4 h-4 text-rose-accent"></i>
                <span>Ejercicios Programados (Anota tus Pesos)</span>
              </h3>

              <!-- Ex 1: Hip Thrust -->
              <div class="p-3.5 rounded-2xl bg-apple-card border border-apple-cardBorder space-y-3">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2.5">
                    <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=120&auto=format&fit=crop&q=80" class="w-12 h-12 rounded-xl object-cover" alt="Hip Thrust">
                    <div>
                      <h4 class="font-display font-bold text-xs text-white">1. Hip Thrust con Barra</h4>
                      <span class="text-[10px] text-gray-400">4 Series × 10-12 Reps • 2 seg pausa</span>
                    </div>
                  </div>
                  <button onclick="showTip('Hip Thrust: Aprieta glúteos arriba 2 segundos antes de bajar lentamente.')" class="text-rose-soft text-xs">
                    <i data-lucide="info" class="w-4 h-4"></i>
                  </button>
                </div>

                <!-- Sets Row -->
                <div class="grid grid-cols-4 gap-1.5 text-center text-[11px]">
                  <div class="bg-white/[0.03] p-2 rounded-xl border border-white/5">
                    <span class="text-[9px] text-gray-400 block mb-1">Set 1</span>
                    <input type="number" value="60" class="w-full bg-black/50 text-center text-xs font-bold text-white rounded p-1 border border-white/10">
                    <span class="text-[8px] text-gray-500">kg × 12</span>
                    <button onclick="toggleSetCheck(this)" class="w-full mt-1.5 py-1 rounded bg-rose-accent text-white font-bold text-[10px]">✓ Hecho</button>
                  </div>

                  <div class="bg-white/[0.03] p-2 rounded-xl border border-white/5">
                    <span class="text-[9px] text-gray-400 block mb-1">Set 2</span>
                    <input type="number" value="65" class="w-full bg-black/50 text-center text-xs font-bold text-white rounded p-1 border border-white/10">
                    <span class="text-[8px] text-gray-500">kg × 12</span>
                    <button onclick="toggleSetCheck(this)" class="w-full mt-1.5 py-1 rounded bg-rose-accent text-white font-bold text-[10px]">✓ Hecho</button>
                  </div>

                  <div class="bg-white/[0.03] p-2 rounded-xl border border-white/5">
                    <span class="text-[9px] text-gray-400 block mb-1">Set 3</span>
                    <input type="number" value="70" class="w-full bg-black/50 text-center text-xs font-bold text-white rounded p-1 border border-white/10">
                    <span class="text-[8px] text-gray-500">kg × 10</span>
                    <button onclick="toggleSetCheck(this)" class="w-full mt-1.5 py-1 rounded bg-white/10 text-gray-300 font-bold text-[10px]">Marcar</button>
                  </div>

                  <div class="bg-white/[0.03] p-2 rounded-xl border border-white/5">
                    <span class="text-[9px] text-gray-400 block mb-1">Set 4</span>
                    <input type="number" value="70" class="w-full bg-black/50 text-center text-xs font-bold text-white rounded p-1 border border-white/10">
                    <span class="text-[8px] text-gray-500">kg × 10</span>
                    <button onclick="toggleSetCheck(this)" class="w-full mt-1.5 py-1 rounded bg-white/10 text-gray-300 font-bold text-[10px]">Marcar</button>
                  </div>
                </div>
              </div>

              <!-- Ex 2: Sentadilla Búlgara -->
              <div class="p-3.5 rounded-2xl bg-apple-card border border-apple-cardBorder flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                  <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=120&auto=format&fit=crop&q=80" class="w-12 h-12 rounded-xl object-cover" alt="Búlgaras">
                  <div>
                    <h4 class="font-display font-bold text-xs text-white">2. Sentadilla Búlgara</h4>
                    <span class="text-[10px] text-gray-400">3 Series × 12 reps / pierna • Con mancuernas</span>
                  </div>
                </div>
                <button onclick="toggleSetCheck(this)" class="px-3 py-1.5 rounded-xl bg-white/10 text-xs font-bold text-gray-300 hover:bg-rose-accent hover:text-white transition">
                  Marcar
                </button>
              </div>

              <!-- Ex 3: Peso Muerto Rumano -->
              <div class="p-3.5 rounded-2xl bg-apple-card border border-apple-cardBorder flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                  <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=120&auto=format&fit=crop&q=80" class="w-12 h-12 rounded-xl object-cover" alt="Rumano">
                  <div>
                    <h4 class="font-display font-bold text-xs text-white">3. Peso Muerto Rumano</h4>
                    <span class="text-[10px] text-gray-400">4 Series × 12 reps • Enfoque isquiotibiales</span>
                  </div>
                </div>
                <button onclick="toggleSetCheck(this)" class="px-3 py-1.5 rounded-xl bg-white/10 text-xs font-bold text-gray-300 hover:bg-rose-accent hover:text-white transition">
                  Marcar
                </button>
              </div>
            </div>

            <!-- Finish Workout Button -->
            <button onclick="completeClientSession()" class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-accent to-pink-600 hover:brightness-110 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-glow-rose transition active:scale-98">
              <i data-lucide="check-circle" class="w-4 h-4"></i>
              <span>Completar Entrenamiento de Hoy (+390 Kcal)</span>
            </button>
          </section>

          <!-- SCREEN 3: CHAT DIRECTO CON ARA & CHECK-IN -->
          <section id="client-view-chat" class="client-screen p-4 flex flex-col h-full space-y-3 hidden">
            <!-- Chat Head -->
            <div class="p-3 rounded-2xl bg-apple-card border border-apple-cardBorder flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <div class="relative">
                  <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=100&auto=format&fit=crop&q=80" class="w-10 h-10 rounded-full object-cover ring-2 ring-rose-accent">
                  <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border border-black rounded-full"></span>
                </div>
                <div>
                  <h3 class="font-display font-bold text-xs text-white flex items-center gap-1">
                    Araceli Morales <i data-lucide="badge-check" class="w-3.5 h-3.5 text-blue-400 fill-blue-400"></i>
                  </h3>
                  <span class="text-[10px] text-emerald-400 font-medium">En línea para ti</span>
                </div>
              </div>

              <!-- Send Check-in Button -->
              <button onclick="openClientCheckinModal()" class="px-2.5 py-1.5 bg-rose-accent/15 border border-rose-accent/30 text-rose-soft rounded-xl text-xs font-bold flex items-center gap-1 hover:bg-rose-accent hover:text-white transition">
                <i data-lucide="camera" class="w-3.5 h-3.5"></i>
                <span>Enviar Check-in</span>
              </button>
            </div>

            <!-- Voice Note Simulation Bubble -->
            <div class="p-3 rounded-2xl bg-gradient-to-r from-rose-darkGlow to-apple-card border border-rose-accent/30 space-y-1.5 shadow-sm">
              <span class="text-[10px] text-rose-soft font-bold uppercase tracking-wider flex items-center gap-1">
                <i data-lucide="mic" class="w-3.5 h-3.5"></i> Nota de voz de Araceli (0:22)
              </span>
              <div class="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-xl cursor-pointer hover:bg-black/60 transition" onclick="playVoiceAudio()">
                <button class="w-7 h-7 rounded-full bg-rose-accent text-white flex items-center justify-center flex-shrink-0">
                  <i data-lucide="play" class="w-3.5 h-3.5 fill-white"></i>
                </button>
                <div class="flex-1 flex items-center gap-1">
                  <span class="w-1 h-3 bg-rose-accent rounded-full animate-pulse"></span>
                  <span class="w-1 h-5 bg-rose-soft rounded-full"></span>
                  <span class="w-1 h-2 bg-rose-soft/60 rounded-full"></span>
                  <span class="w-1 h-6 bg-rose-accent rounded-full animate-pulse"></span>
                  <span class="w-1 h-4 bg-rose-soft rounded-full"></span>
                  <span class="w-1 h-3 bg-rose-soft/60 rounded-full"></span>
                  <span class="w-1 h-5 bg-rose-accent rounded-full"></span>
                </div>
                <span class="text-[10px] text-gray-400 font-mono">0:22</span>
              </div>
            </div>

            <!-- Synchronized Messages Stream -->
            <div id="shared-chat-stream-client" class="flex-1 space-y-2.5 overflow-y-auto min-h-[320px] max-h-[380px] pr-1">
              <!-- Rendered by JS -->
            </div>

            <!-- Client Message Input -->
            <form onsubmit="clientSendMessage(event)" class="flex items-center gap-2 pt-1">
              <input id="client-msg-input" type="text" placeholder="Escríbele tu duda o avance a Ara..." class="flex-1 bg-apple-card border border-apple-cardBorder rounded-2xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-rose-accent">
              <button type="submit" class="w-10 h-10 rounded-2xl bg-rose-accent hover:bg-rose-accentHover text-white flex items-center justify-center flex-shrink-0 shadow-glow-rose transition">
                <i data-lucide="send" class="w-4 h-4"></i>
              </button>
            </form>
          </section>

          <!-- Client Bottom Navigation Bar (Apple Clean Minimal) -->
          <nav class="w-full h-16 bg-apple-bg/95 backdrop-blur-xl border-t border-white/[0.08] px-6 flex items-center justify-around z-40 absolute bottom-0">
            <button onclick="switchClientTab('nutrition')" id="btn-client-nav-nutrition" class="client-nav-btn active flex flex-col items-center gap-1 text-rose-accent transition">
              <i data-lucide="salad" class="w-4 h-4"></i>
              <span class="text-[10px] font-bold">Nutrición</span>
            </button>
            <button onclick="switchClientTab('workout')" id="btn-client-nav-workout" class="client-nav-btn flex flex-col items-center gap-1 text-gray-400 hover:text-white transition">
              <i data-lucide="dumbbell" class="w-4 h-4"></i>
              <span class="text-[10px] font-bold">Rutinas</span>
            </button>
            <button onclick="switchClientTab('chat')" id="btn-client-nav-chat" class="client-nav-btn flex flex-col items-center gap-1 text-gray-400 hover:text-white transition relative">
              <i data-lucide="message-circle" class="w-4 h-4"></i>
              <span class="text-[10px] font-bold">Chat Ara</span>
              <span class="absolute -top-0.5 right-1 w-2 h-2 bg-rose-accent rounded-full animate-ping"></span>
            </button>
          </nav>
        </div>


        <!-- ************************************************************ -->
        <!-- ****************** 2. PORTAL COACH (ARACELI) **************** -->
        <!-- ************************************************************ -->
        <div id="portal-coach" class="space-y-4 hidden">
          
          <!-- COACH SCREEN 1: DASHBOARD & ALUMNAS CRM -->
          <section id="coach-view-crm" class="coach-screen active p-4 space-y-4">
            <!-- Executive Welcome Card -->
            <div class="p-5 rounded-3xl bg-gradient-to-br from-rose-darkGlow via-apple-card to-black border border-rose-accent/30 shadow-xl space-y-3">
              <div class="flex items-center justify-between">
                <div>
                  <span class="text-[10px] font-extrabold uppercase text-rose-soft bg-rose-accent/15 px-2.5 py-0.5 rounded-full border border-rose-accent/30">
                    ESTUDIO VIP OFICIAL
                  </span>
                  <h2 class="font-display font-black text-xl text-white mt-1">Hola, Araceli Morales 👋</h2>
                  <p class="text-xs text-gray-400">Control de tus 44K seguidoras monetizadas</p>
                </div>
                <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=120&auto=format&fit=crop&q=80" class="w-12 h-12 rounded-full object-cover ring-2 ring-rose-accent">
              </div>

              <!-- Revenue & Alumnas KPI Cards -->
              <div class="grid grid-cols-2 gap-2 pt-1">
                <div class="bg-white/[0.04] p-3 rounded-2xl border border-white/[0.06]">
                  <span class="text-[10px] text-gray-400 font-semibold uppercase">Alumnas Activas</span>
                  <div class="font-display text-2xl font-black text-rose-soft">428</div>
                  <span class="text-[10px] text-emerald-400 font-medium">+34 inscritas este mes</span>
                </div>

                <div class="bg-white/[0.04] p-3 rounded-2xl border border-white/[0.06]">
                  <span class="text-[10px] text-gray-400 font-semibold uppercase">Facturación del Mes</span>
                  <div class="font-display text-xl font-black text-white">$149,372 <span class="text-[10px] text-gray-400">MXN</span></div>
                  <span class="text-[10px] text-emerald-400 font-medium">Cobro automático Stripe</span>
                </div>
              </div>
            </div>

            <!-- Check-ins to Review Banner -->
            <div class="p-3.5 rounded-2xl bg-rose-accent/10 border border-rose-accent/30 flex items-center justify-between cursor-pointer hover:bg-rose-accent/15 transition" onclick="coachReviewStudent('sofia')">
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-xl bg-rose-accent/20 text-rose-soft flex items-center justify-center">
                  <i data-lucide="bell-ring" class="w-4 h-4"></i>
                </div>
                <div>
                  <h4 class="font-bold text-xs text-white">4 Check-ins por revisar</h4>
                  <span class="text-[10px] text-gray-400">Sofía R. y 3 chicas más enviaron fotos</span>
                </div>
              </div>
              <button class="px-3 py-1 bg-rose-accent text-white rounded-xl text-xs font-bold shadow-glow-rose">
                Revisar
              </button>
            </div>

            <!-- Alumnas List (CRM) -->
            <div class="space-y-2.5">
              <div class="flex items-center justify-between">
                <h3 class="font-display font-bold text-xs text-white uppercase tracking-wider">Tus Alumnas Activas</h3>
                <span class="text-[11px] text-gray-400">428 inscritas</span>
              </div>

              <!-- Student 1: Sofía -->
              <div onclick="coachReviewStudent('sofia')" class="p-3 rounded-2xl bg-apple-card border border-rose-accent/30 flex items-center justify-between cursor-pointer hover:border-rose-accent transition">
                <div class="flex items-center gap-2.5">
                  <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80" class="w-10 h-10 rounded-full object-cover ring-2 ring-rose-accent/50">
                  <div>
                    <h5 class="font-bold text-xs text-white flex items-center gap-1">
                      Sofía Ramírez <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                    </h5>
                    <span class="text-[10px] text-gray-400">Reto 21 Días Booty • <strong class="text-rose-soft">-3.3 kg</strong></span>
                  </div>
                </div>
                <div class="text-right">
                  <span class="text-[10px] bg-rose-accent/20 text-rose-soft px-2 py-0.5 rounded-full font-bold">Check-in listo</span>
                  <span class="text-[9px] text-gray-400 block mt-0.5">Hace 25 min</span>
                </div>
              </div>

              <!-- Student 2: Valentina -->
              <div class="p-3 rounded-2xl bg-apple-card border border-apple-cardBorder flex items-center justify-between cursor-pointer hover:border-white/20 transition">
                <div class="flex items-center gap-2.5">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" class="w-10 h-10 rounded-full object-cover border border-white/20">
                  <div>
                    <h5 class="font-bold text-xs text-white">Valentina Gómez</h5>
                    <span class="text-[10px] text-gray-400">Pérdida de Grasa 1800K • <strong class="text-emerald-400">-1.8 kg</strong></span>
                  </div>
                </div>
                <div class="text-right">
                  <span class="text-[10px] bg-emerald-500/15 text-emerald-400 px-2 py-0.5 rounded-full font-bold">Al día</span>
                  <span class="text-[9px] text-gray-400 block mt-0.5">Semana 3</span>
                </div>
              </div>

              <!-- Student 3: Camila -->
              <div class="p-3 rounded-2xl bg-apple-card border border-apple-cardBorder flex items-center justify-between cursor-pointer hover:border-white/20 transition">
                <div class="flex items-center gap-2.5">
                  <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80" class="w-10 h-10 rounded-full object-cover border border-white/20">
                  <div>
                    <h5 class="font-bold text-xs text-white">Camila Torres</h5>
                    <span class="text-[10px] text-gray-400">Aumento Glúteo Magro • <strong class="text-rose-soft">+1.2 kg</strong></span>
                  </div>
                </div>
                <div class="text-right">
                  <span class="text-[10px] bg-emerald-500/15 text-emerald-400 px-2 py-0.5 rounded-full font-bold">Al día</span>
                  <span class="text-[9px] text-gray-400 block mt-0.5">Semana 4</span>
                </div>
              </div>
            </div>
          </section>

          <!-- COACH SCREEN 2: INBOX CON ALUMNAS -->
          <section id="coach-view-inbox" class="coach-screen p-4 flex flex-col h-full space-y-3 hidden">
            <div class="p-3 rounded-2xl bg-apple-card border border-rose-accent/30 flex items-center justify-between">
              <div class="flex items-center gap-2.5">
                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80" class="w-9 h-9 rounded-full object-cover ring-2 ring-rose-soft">
                <div>
                  <h3 class="font-bold text-xs text-white">Chat con: Sofía Ramírez</h3>
                  <span class="text-[10px] text-rose-soft">Alumna Reto 21 Días</span>
                </div>
              </div>
              <button onclick="switchUserRole('client')" class="text-[10px] bg-white/10 hover:bg-white/20 text-gray-300 px-2.5 py-1 rounded-lg">
                Ver como Alumna
              </button>
            </div>

            <!-- Shared Chat Messages Stream (Coach view) -->
            <div id="shared-chat-stream-coach" class="flex-1 space-y-2.5 overflow-y-auto min-h-[320px] max-h-[380px] pr-1">
              <!-- Rendered by JS -->
            </div>

            <!-- Coach Message Input -->
            <form onsubmit="coachSendMessage(event)" class="flex items-center gap-2 pt-1">
              <input id="coach-msg-input" type="text" placeholder="Escribe tu respuesta a Sofía como su coach..." class="flex-1 bg-apple-card border border-rose-accent/40 rounded-2xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-rose-accent">
              <button type="submit" class="w-10 h-10 rounded-2xl bg-rose-accent hover:bg-rose-accentHover text-white flex items-center justify-center flex-shrink-0 shadow-glow-rose transition">
                <i data-lucide="send" class="w-4 h-4"></i>
              </button>
            </form>
          </section>

          <!-- Coach Bottom Navigation Bar -->
          <nav class="w-full h-16 bg-apple-bg/95 backdrop-blur-xl border-t border-white/[0.08] px-8 flex items-center justify-around z-40 absolute bottom-0">
            <button onclick="switchCoachTab('crm')" id="btn-coach-nav-crm" class="coach-nav-btn active flex flex-col items-center gap-1 text-rose-accent transition">
              <i data-lucide="users" class="w-4 h-4"></i>
              <span class="text-[10px] font-bold">Alumnas</span>
            </button>
            <button onclick="switchCoachTab('inbox')" id="btn-coach-nav-inbox" class="coach-nav-btn flex flex-col items-center gap-1 text-gray-400 hover:text-white transition relative">
              <i data-lucide="message-square" class="w-4 h-4"></i>
              <span class="text-[10px] font-bold">Mensajes</span>
              <span class="absolute -top-0.5 right-1 w-2 h-2 bg-rose-accent rounded-full"></span>
            </button>
          </nav>
        </div>

      </div>
    </div>
  </main>

  <!-- ==================== MODAL 1: REVISIÓN DE CHECK-IN (PARA LA COACH ARACELI) ==================== -->
  <div id="modal-review-checkin" class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 hidden">
    <div class="w-full max-w-[400px] bg-apple-bg rounded-3xl border border-rose-accent/30 overflow-hidden shadow-2xl p-5 space-y-4 max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80" class="w-9 h-9 rounded-full object-cover ring-2 ring-rose-accent">
          <div>
            <h3 class="font-display font-bold text-sm text-white">Check-in: Sofía Ramírez</h3>
            <span class="text-[10px] text-gray-400">Semana 2 • Reto 21 Días Booty</span>
          </div>
        </div>
        <button onclick="closeModal('modal-review-checkin')" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>

      <!-- Measurements Submitted -->
      <div class="grid grid-cols-3 gap-2 text-center text-xs">
        <div class="bg-white/[0.04] p-2.5 rounded-xl border border-white/5">
          <span class="text-[10px] text-gray-400 block">Peso</span>
          <strong class="text-rose-soft text-sm">58.2 kg</strong>
          <span class="text-[9px] text-emerald-400 block">-3.3 kg bajados</span>
        </div>
        <div class="bg-white/[0.04] p-2.5 rounded-xl border border-white/5">
          <span class="text-[10px] text-gray-400 block">Cintura</span>
          <strong class="text-white text-sm">66 cm</strong>
          <span class="text-[9px] text-emerald-400 block">-4 cm reducción</span>
        </div>
        <div class="bg-white/[0.04] p-2.5 rounded-xl border border-white/5">
          <span class="text-[10px] text-gray-400 block">Cadera</span>
          <strong class="text-apple-gold text-sm">98 cm</strong>
          <span class="text-[9px] text-apple-gold block">+2 cm magro</span>
        </div>
      </div>

      <!-- Photos Submitted -->
      <div class="space-y-1.5">
        <span class="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Fotos de Progreso Enviadas:</span>
        <div class="grid grid-cols-2 gap-2">
          <div class="h-36 rounded-xl overflow-hidden bg-black/40 border border-white/10">
            <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=400&auto=format&fit=crop&q=80" class="w-full h-full object-cover">
          </div>
          <div class="h-36 rounded-xl overflow-hidden bg-black/40 border border-white/10">
            <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&auto=format&fit=crop&q=80" class="w-full h-full object-cover">
          </div>
        </div>
      </div>

      <!-- Coach Feedback Input -->
      <div class="space-y-1.5">
        <label class="text-xs font-bold text-rose-soft block">Tu Mensaje de Retroalimentación:</label>
        <textarea id="coach-feedback-text" rows="3" class="w-full bg-apple-card border border-white/15 rounded-xl p-3 text-xs text-white focus:border-rose-accent outline-none" placeholder="Escribe tu feedback para Sofía...">¡Vas espectacular Sofi! Se nota mucho la reducción en cintura y tus glúteos están tomando esa forma redonda que buscabas. Mantenemos mismos pesos para esta semana 3 🔥🍑</textarea>
      </div>

      <button onclick="coachApproveCheckin()" class="w-full py-3 rounded-2xl bg-gradient-to-r from-rose-accent to-pink-600 hover:brightness-110 text-white font-extrabold text-xs uppercase tracking-wider shadow-glow-rose transition">
        Aprobar y Enviar Retroalimentación a Sofía ✨
      </button>
    </div>
  </div>

  <!-- ==================== MODAL 2: CLIENTE ENVIAR CHECK-IN ==================== -->
  <div id="modal-client-checkin" class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 hidden">
    <div class="w-full max-w-[400px] bg-apple-bg rounded-3xl border border-rose-accent/30 overflow-hidden shadow-2xl p-5 space-y-3 max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between">
        <h3 class="font-display font-bold text-base text-white">Enviar Check-in Semanal a Ara</h3>
        <button onclick="closeModal('modal-client-checkin')" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>

      <div class="space-y-2.5 text-xs">
        <div>
          <label class="text-gray-400 block mb-1">Peso en ayunas hoy (kg):</label>
          <input type="number" step="0.1" value="58.2" class="w-full bg-apple-card border border-white/15 rounded-xl px-3 py-2 text-white">
        </div>

        <div class="grid grid-cols-2 gap-2">
          <div>
            <label class="text-gray-400 block mb-1">Cintura (cm):</label>
            <input type="number" value="66" class="w-full bg-apple-card border border-white/15 rounded-xl px-3 py-2 text-white">
          </div>
          <div>
            <label class="text-gray-400 block mb-1">Cadera (cm):</label>
            <input type="number" value="98" class="w-full bg-apple-card border border-white/15 rounded-xl px-3 py-2 text-white">
          </div>
        </div>

        <div>
          <label class="text-gray-400 block mb-1">Fotos de Progreso (Frente, Perfil, Espalda):</label>
          <div onclick="simulatePhotoSelect()" class="border-2 border-dashed border-rose-accent/30 rounded-xl p-4 text-center cursor-pointer hover:border-rose-accent transition">
            <i data-lucide="camera" class="w-6 h-6 text-rose-soft mx-auto mb-1"></i>
            <span class="text-xs text-gray-200 block font-bold" id="photo-upload-label">✓ 3 Fotos Seleccionadas</span>
            <span class="text-[10px] text-gray-500">Privadas y solo visibles para Araceli</span>
          </div>
        </div>
      </div>

      <button onclick="clientSubmitCheckin()" class="w-full py-3 rounded-2xl bg-rose-accent hover:bg-rose-accentHover text-white font-extrabold text-xs uppercase tracking-wider shadow-glow-rose transition">
        Enviar a Araceli Morales 💌
      </button>
    </div>
  </div>

  <!-- ==================== MODAL 3: PITCH DECK & CALCULADORA OMEN EN VIVO ==================== -->
  <div id="modal-pitch" class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 hidden">
    <div class="w-full max-w-[420px] bg-apple-bg rounded-3xl border-2 border-rose-accent/50 overflow-hidden shadow-2xl p-5 space-y-4 max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between">
        <div>
          <span class="text-[10px] font-black text-rose-soft uppercase tracking-wider bg-rose-accent/15 px-2 py-0.5 rounded">OMEN TECH × ARACELI MORALES</span>
          <h3 class="font-display font-black text-xl text-white mt-1">Calculadora para tus 44K Fans</h3>
        </div>
        <button onclick="closeModal('modal-pitch')" class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-gray-300">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>

      <p class="text-xs text-gray-300">
        ¿Qué pasa si convertimos tus seguidores de Instagram en una membresía recurrente mensual en tu app oficial?
      </p>

      <!-- Sliders -->
      <div class="space-y-3 bg-apple-card p-4 rounded-2xl border border-apple-cardBorder">
        <div class="space-y-1">
          <div class="flex justify-between text-xs">
            <span class="text-gray-300">Seguidoras que se suscriben (% de 44,000):</span>
            <span id="pitch-rate-val" class="text-rose-soft font-bold font-mono">1.5% (660 alumnas)</span>
          </div>
          <input type="range" id="pitch-rate-slider" min="0.5" max="5.0" step="0.1" value="1.5" oninput="updatePitchCalc()" class="w-full accent-rose-accent cursor-pointer">
        </div>

        <div class="space-y-1">
          <div class="flex justify-between text-xs">
            <span class="text-gray-300">Membresía mensual:</span>
            <span id="pitch-price-val" class="text-apple-gold font-bold font-mono">$349 MXN</span>
          </div>
          <input type="range" id="pitch-price-slider" min="199" max="699" step="25" value="349" oninput="updatePitchCalc()" class="w-full accent-apple-gold cursor-pointer">
        </div>

        <!-- Result -->
        <div class="p-3.5 rounded-xl bg-gradient-to-r from-rose-darkGlow to-black border border-rose-accent/40 text-center space-y-0.5">
          <span class="text-[10px] text-gray-400 uppercase font-semibold">Tus Ganancias Mensuales Estimadas:</span>
          <div class="font-display text-3xl font-black text-rose-soft" id="pitch-monthly-result">$230,340 MXN</div>
          <span class="text-xs text-gray-300 block">Al año representa: <strong class="text-white font-mono" id="pitch-annual-result">$2,764,080 MXN</strong></span>
        </div>
      </div>

      <!-- OMEN Partnership Perks -->
      <div class="space-y-2 text-xs text-gray-300">
        <div class="flex items-start gap-2">
          <i data-lucide="check" class="w-4 h-4 text-rose-soft flex-shrink-0 mt-0.5"></i>
          <span><strong>Cero inversión para Araceli:</strong> OMEN absorbe el 100% de los costos de servidores, código y pasarelas de pago.</span>
        </div>
        <div class="flex items-start gap-2">
          <i data-lucide="check" class="w-4 h-4 text-rose-soft flex-shrink-0 mt-0.5"></i>
          <span><strong>Modelo Revenue Share ganar-ganar:</strong> Tú eres la cara y dueña de tu comunidad; nosotros nos encargamos de que la tecnología nunca falle.</span>
        </div>
      </div>

      <button onclick="celebratePitch()" class="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-accent to-pink-600 hover:brightness-110 text-white font-extrabold text-xs uppercase tracking-wider shadow-glow-rose transition">
        ¡Hacer Alianza OMEN × Araceli! 🚀
      </button>
    </div>
  </div>

  <!-- Toast System -->
  <div id="toast" class="fixed top-4 z-50 bg-[#14121E] border border-rose-accent/40 text-white text-xs px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2 opacity-0 transform -translate-y-4 pointer-events-none transition-all duration-300 max-w-[340px]">
    <i data-lucide="sparkles" class="w-4 h-4 text-rose-soft flex-shrink-0"></i>
    <span id="toast-text">Notificación</span>
  </div>

  <!-- App Script -->
  <script src="app.js"></script>
  <script>
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
          .then(reg => console.log('PWA Service Worker registered:', reg.scope))
          .catch(err => console.log('SW registration failed:', err));
      });
    }
  </script>
</body>
</html>
"""

with open(r'C:\Users\kique\arjufitness\index.html', 'w', encoding='utf-8') as f:
    f.write(html_content)
print("index.html written! Bytes:", len(html_content))

# 2. STYLES CSS
styles_content = """/* ARACELI MORALES - GIRLY CARO TIPO APPLE STYLING */

/* Hide scrollbars */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

#content-scrollable::-webkit-scrollbar { width: 4px; }
#content-scrollable::-webkit-scrollbar-track { background: transparent; }
#content-scrollable::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.08); border-radius: 9999px; }
#content-scrollable::-webkit-scrollbar-thumb:hover { background: rgba(255, 59, 119, 0.3); }

/* View transitions */
.client-screen, .coach-screen {
  animation: appleFadeIn 0.22s ease-out forwards;
}

@keyframes appleFadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Active tab buttons */
.client-nav-btn.active, .coach-nav-btn.active {
  color: #FF3B77 !important;
}

.client-nav-btn.active i, .coach-nav-btn.active i {
  filter: drop-shadow(0 0 8px rgba(255, 59, 119, 0.6));
}

/* Range slider Apple style */
input[type=range] {
  -webkit-appearance: none;
  background: rgba(255, 255, 255, 0.1);
  height: 5px;
  border-radius: 9999px;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  background: #FF3B77;
  cursor: pointer;
  box-shadow: 0 0 12px rgba(255, 59, 119, 0.8);
  transition: transform 0.15s ease;
}

input[type=range]::-webkit-slider-thumb:hover {
  transform: scale(1.18);
}

@media (max-width: 640px) {
  #device-container {
    border: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    max-width: 100% !important;
    height: 100vh !important;
  }
}
"""

with open(r'C:\Users\kique\arjufitness\styles.css', 'w', encoding='utf-8') as f:
    f.write(styles_content)
print("styles.css written! Bytes:", len(styles_content))

# 3. APP.JS
app_js_content = """// ARACELI MORALES - PWA Application & Synchronized Messaging State
// Powered by OMEN

const AppState = {
  currentRole: 'client', // 'client' or 'coach'
  clientTab: 'nutrition', // 'nutrition', 'workout', 'chat'
  coachTab: 'crm',        // 'crm', 'inbox'
  waterMl: 1750,
  waterGoal: 2500,
  timerSeconds: 45,
  timerInterval: null,
  timerRunning: false,
  
  // Shared Synchronized Conversation
  messages: [
    {
      sender: 'coach',
      text: '¡Hola hermosa! Vi que ayer rompiste récord en hip thrust con 65kg. ¡Qué emoción! Recuerda que hoy nos toca registrar check-in de medidas y fotos en tu app 💪🍑',
      time: '10:15 AM'
    },
    {
      sender: 'client',
      text: '¡Hola Ara! Sí, sentí el trabajo en glúteo increíble. Hoy le subí a 70kg! Ya te mandé las fotos del check-in, ¿las pudiste ver? 🙌',
      time: '10:30 AM'
    },
    {
      sender: 'coach',
      text: '¡Siii Sofi! Ya las estoy revisando en mi panel. Tu cintura bajó 4 cm y el glúteo subió 2 cm magro. ¡Vas volando! ✨🔥',
      time: '10:42 AM'
    }
  ]
};

// --- USER ROLE SWITCHER ---
function switchUserRole(role) {
  AppState.currentRole = role;

  const btnClient = document.getElementById('btn-role-client');
  const btnCoach = document.getElementById('btn-role-coach');
  const portalClient = document.getElementById('portal-client');
  const portalCoach = document.getElementById('portal-coach');
  const navAvatar = document.getElementById('nav-avatar');
  const navName = document.getElementById('nav-name');
  const navBadge = document.getElementById('nav-badge');
  const islandBadge = document.getElementById('island-badge');

  if (role === 'client') {
    btnClient.className = "role-btn active flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all bg-rose-accent text-white shadow-glow-rose";
    btnCoach.className = "role-btn flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all text-gray-400 hover:text-white";
    portalClient.classList.remove('hidden');
    portalCoach.classList.add('hidden');

    if (navAvatar) navAvatar.src = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80";
    if (navName) navName.textContent = "Sofía Ramírez";
    if (navBadge) navBadge.textContent = "Coach: Araceli Morales ✓";
    if (islandBadge) islandBadge.textContent = "Alumna: Sofi";

    showToast("👤 Cambiaste a: Vista de Alumna (Sofía Ramírez)");
  } else {
    btnCoach.className = "role-btn active flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all bg-rose-accent text-white shadow-glow-rose";
    btnClient.className = "role-btn flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold transition-all text-gray-400 hover:text-white";
    portalCoach.classList.remove('hidden');
    portalClient.classList.add('hidden');

    if (navAvatar) navAvatar.src = "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=120&auto=format&fit=crop&q=80";
    if (navName) navName.textContent = "Araceli Morales";
    if (navBadge) navBadge.textContent = "Coach & Creadora VIP (428 Alumnas)";
    if (islandBadge) islandBadge.textContent = "Coach: Ara";

    showToast("👑 Cambiaste a: Panel de Entrenadora (Araceli Morales)");
  }

  renderSharedChat();
  if (window.lucide) lucide.createIcons();
}

// --- CLIENT TABS ---
function switchClientTab(tabKey) {
  AppState.clientTab = tabKey;

  document.querySelectorAll('.client-screen').forEach(s => s.classList.add('hidden'));
  const target = document.getElementById(`client-view-${tabKey}`);
  if (target) target.classList.remove('hidden');

  document.querySelectorAll('.client-nav-btn').forEach(b => {
    b.classList.remove('active', 'text-rose-accent');
    b.classList.add('text-gray-400');
  });

  const activeBtn = document.getElementById(`btn-client-nav-${tabKey}`);
  if (activeBtn) {
    activeBtn.classList.add('active', 'text-rose-accent');
    activeBtn.classList.remove('text-gray-400');
  }

  if (tabKey === 'chat') renderSharedChat();
  if (window.lucide) lucide.createIcons();
}

// --- COACH TABS ---
function switchCoachTab(tabKey) {
  AppState.coachTab = tabKey;

  document.querySelectorAll('.coach-screen').forEach(s => s.classList.add('hidden'));
  const target = document.getElementById(`coach-view-${tabKey}`);
  if (target) target.classList.remove('hidden');

  document.querySelectorAll('.coach-nav-btn').forEach(b => {
    b.classList.remove('active', 'text-rose-accent');
    b.classList.add('text-gray-400');
  });

  const activeBtn = document.getElementById(`btn-coach-nav-${tabKey}`);
  if (activeBtn) {
    activeBtn.classList.add('active', 'text-rose-accent');
    activeBtn.classList.remove('text-gray-400');
  }

  if (tabKey === 'inbox') renderSharedChat();
  if (window.lucide) lucide.createIcons();
}

// --- SHARED CHAT RENDERER ---
function renderSharedChat() {
  const clientStream = document.getElementById('shared-chat-stream-client');
  const coachStream = document.getElementById('shared-chat-stream-coach');

  if (clientStream) {
    clientStream.innerHTML = AppState.messages.map(msg => {
      const isMe = msg.sender === 'client';
      return `
        <div class="flex items-end ${isMe ? 'justify-end' : 'justify-start'} gap-2">
          ${!isMe ? '<img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=80&auto=format&fit=crop&q=80" class="w-7 h-7 rounded-full object-cover ring-1 ring-rose-accent flex-shrink-0 mb-1">' : ''}
          <div class="max-w-[80%] ${isMe ? 'bg-rose-accent text-white' : 'bg-apple-card text-white border border-apple-cardBorder'} p-3 rounded-2xl ${isMe ? 'rounded-br-sm shadow-glow-rose' : 'rounded-tl-sm'} text-xs">
            <p class="leading-relaxed font-medium">${escapeHtml(msg.text)}</p>
            <span class="text-[9px] ${isMe ? 'text-white/70' : 'text-gray-400'} block text-right mt-1 font-mono">${msg.time} ${isMe ? '✓✓' : ''}</span>
          </div>
        </div>
      `;
    }).join('');
    clientStream.scrollTop = clientStream.scrollHeight;
  }

  if (coachStream) {
    coachStream.innerHTML = AppState.messages.map(msg => {
      const isMe = msg.sender === 'coach';
      return `
        <div class="flex items-end ${isMe ? 'justify-end' : 'justify-start'} gap-2">
          ${!isMe ? '<img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&auto=format&fit=crop&q=80" class="w-7 h-7 rounded-full object-cover ring-1 ring-rose-accent flex-shrink-0 mb-1">' : ''}
          <div class="max-w-[80%] ${isMe ? 'bg-rose-accent text-white shadow-glow-rose' : 'bg-apple-card text-white border border-white/10'} p-3 rounded-2xl ${isMe ? 'rounded-br-sm' : 'rounded-tl-sm'} text-xs">
            <p class="leading-relaxed font-medium">${escapeHtml(msg.text)}</p>
            <span class="text-[9px] ${isMe ? 'text-white/70' : 'text-gray-400'} block text-right mt-1 font-mono">${msg.time} ${isMe ? '✓✓' : ''}</span>
          </div>
        </div>
      `;
    }).join('');
    coachStream.scrollTop = coachStream.scrollHeight;
  }
}

function clientSendMessage(event) {
  event.preventDefault();
  const input = document.getElementById('client-msg-input');
  if (!input || !input.value.trim()) return;

  const now = new Date();
  const timeStr = `${now.getHours() % 12 || 12}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()} ${now.getHours() >= 12 ? 'PM' : 'AM'}`;

  AppState.messages.push({
    sender: 'client',
    text: input.value.trim(),
    time: timeStr
  });

  input.value = '';
  renderSharedChat();
  showToast("Mensaje enviado a Araceli. Cambia a Vista Coach para responderle.");
}

function coachSendMessage(event) {
  event.preventDefault();
  const input = document.getElementById('coach-msg-input');
  if (!input || !input.value.trim()) return;

  const now = new Date();
  const timeStr = `${now.getHours() % 12 || 12}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()} ${now.getHours() >= 12 ? 'PM' : 'AM'}`;

  AppState.messages.push({
    sender: 'coach',
    text: input.value.trim(),
    time: timeStr
  });

  input.value = '';
  renderSharedChat();
  showToast("Respuesta enviada a Sofía Ramírez ✓");
}

// --- WORKOUT TRACKING ---
function toggleSetCheck(btn) {
  btn.classList.toggle('bg-rose-accent');
  btn.classList.toggle('text-white');
  btn.classList.toggle('bg-white/10');
  btn.classList.toggle('text-gray-300');

  if (btn.textContent.includes('Marcar')) {
    btn.textContent = '✓ Hecho';
    showToast("¡Serie completada! Descanso de 45s iniciado.");
    resetWorkoutTimer();
    toggleTimer();
  } else {
    btn.textContent = 'Marcar';
  }
}

function completeClientSession() {
  triggerConfetti();
  showToast("🎉 ¡Entrenamiento completado! +390 Kcal registradas en tus anillos Apple.");
}

function showTip(tip) {
  showToast(`💡 Tip de Araceli: ${tip}`);
}

// --- TIMER ---
function toggleTimer() {
  const btn = document.getElementById('btn-timer');
  const display = document.getElementById('timer-display');

  if (AppState.timerRunning) {
    clearInterval(AppState.timerInterval);
    AppState.timerRunning = false;
    if (btn) btn.textContent = 'Reanudar';
  } else {
    AppState.timerRunning = true;
    if (btn) btn.textContent = 'Pausar';

    AppState.timerInterval = setInterval(() => {
      AppState.timerSeconds--;
      if (AppState.timerSeconds < 0) {
        clearInterval(AppState.timerInterval);
        AppState.timerRunning = false;
        AppState.timerSeconds = 45;
        showToast("⏰ ¡Descanso terminado! Dale con todo a la siguiente serie.");
        if (btn) btn.textContent = 'Iniciar';
      }
      const secs = AppState.timerSeconds < 10 ? '0' + AppState.timerSeconds : AppState.timerSeconds;
      if (display) display.textContent = `00:${secs}`;
    }, 1000);
  }
}

function resetWorkoutTimer() {
  clearInterval(AppState.timerInterval);
  AppState.timerRunning = false;
  AppState.timerSeconds = 45;
  const display = document.getElementById('timer-display');
  const btn = document.getElementById('btn-timer');
  if (display) display.textContent = '00:45';
  if (btn) btn.textContent = 'Iniciar';
}

// --- NUTRITION ---
function addClientWater() {
  AppState.waterMl += 250;
  if (AppState.waterMl > AppState.waterGoal) AppState.waterMl = AppState.waterGoal;
  const text = document.getElementById('client-water-text');
  if (text) text.textContent = `${AppState.waterMl} ml`;
  showToast(`💧 +250ml de agua registrados (${AppState.waterMl} / 2,500 ml)`);
}

function markMealDone(btn) {
  btn.className = "text-xs text-emerald-400 font-bold";
  btn.textContent = "✓ Comido";
  showToast("Cena registrada en tu balance calórico.");
}

function openAddFoodModal() {
  showToast("Registrador de alimentos personalizado activo.");
}

// --- CHECKIN ---
function openClientCheckinModal() {
  document.getElementById('modal-client-checkin').classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

function simulatePhotoSelect() {
  const lbl = document.getElementById('photo-upload-label');
  if (lbl) lbl.textContent = "✓ 3 Fotos Cargadas (Frente, Perfil, Espalda)";
  showToast("Fotos de progreso seleccionadas.");
}

function clientSubmitCheckin() {
  closeModal('modal-client-checkin');
  triggerConfetti();
  showToast("💌 ¡Check-in enviado a Araceli! Ya lo puede revisar en su panel de coach.");

  AppState.messages.push({
    sender: 'client',
    text: '📸 Ara, ya te mandé mi Check-in semanal con fotos y peso (58.2 kg)!',
    time: 'Justo ahora'
  });
  renderSharedChat();
}

function coachReviewStudent(studentKey) {
  document.getElementById('modal-review-checkin').classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

function coachApproveCheckin() {
  closeModal('modal-review-checkin');
  const feedback = document.getElementById('coach-feedback-text').value;

  AppState.messages.push({
    sender: 'coach',
    text: `🎉 Check-in Aprobado: ${feedback}`,
    time: 'Justo ahora'
  });

  triggerConfetti();
  showToast("✅ Check-in calificado y retroalimentación enviada a Sofía.");
  renderSharedChat();
}

// --- PITCH CALCULATOR ---
function openPitchModal() {
  document.getElementById('modal-pitch').classList.remove('hidden');
  updatePitchCalc();
  if (window.lucide) lucide.createIcons();
}

function updatePitchCalc() {
  const rateSlider = document.getElementById('pitch-rate-slider');
  const priceSlider = document.getElementById('pitch-price-slider');
  if (!rateSlider || !priceSlider) return;

  const rate = parseFloat(rateSlider.value);
  const price = parseInt(priceSlider.value, 10);
  const subscribers = Math.round((44000 * rate) / 100);
  const monthly = subscribers * price;
  const annual = monthly * 12;

  document.getElementById('pitch-rate-val').textContent = `${rate.toFixed(1)}% (${subscribers.toLocaleString()} alumnas)`;
  document.getElementById('pitch-price-val').textContent = `$${price} MXN`;
  document.getElementById('pitch-monthly-result').textContent = `$${monthly.toLocaleString('es-MX')} MXN`;
  document.getElementById('pitch-annual-result').textContent = `$${annual.toLocaleString('es-MX')} MXN`;
}

function celebratePitch() {
  triggerConfetti();
  showToast("🚀 ¡Alianza lista! OMEN × Araceli Morales");
}

function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('hidden');
}

function playVoiceAudio() {
  showToast("▶ Reproduciendo nota de voz de Araceli Morales...");
}

function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.65 },
      colors: ['#FF3B77', '#FB7185', '#FFE4E6', '#F5D0A9']
    });
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  const text = document.getElementById('toast-text');
  if (!toast || !text) return;

  text.textContent = msg;
  toast.classList.remove('opacity-0', '-translate-y-4', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', '-translate-y-4', 'pointer-events-none');
  }, 2800);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Live Time
setInterval(() => {
  const timeElem = document.getElementById('live-time');
  if (!timeElem) return;
  const now = new Date();
  let hours = now.getHours() % 12 || 12;
  let minutes = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
  timeElem.textContent = `${hours}:${minutes}`;
}, 1000);

document.addEventListener('DOMContentLoaded', () => {
  renderSharedChat();
  updatePitchCalc();
  if (window.lucide) lucide.createIcons();
});
"""

with open(r'C:\Users\kique\arjufitness\app.js', 'w', encoding='utf-8') as f:
    f.write(app_js_content)
print("app.js written! Bytes:", len(app_js_content))

print("Build finished successfully!")

