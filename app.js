// ARJU FITNESS - Core Application Logic & State Engine
// Dedicated prototype for Araceli Morales (@aracelimorales_fit)

// --- STATE MANAGEMENT ---
const AppState = {
  activeTab: 'home',
  currentFollowers: 44000,
  waterMl: 1800,
  waterGoalMl: 2500,
  timerSeconds: 45,
  timerInterval: null,
  timerRunning: false,
  isPhoneMockup: true,
  currentStoryIndex: 0
};

// --- AUDIO SYNTHESIZER (No external audio files needed) ---
function playBeepSound(freq = 880, type = 'sine', duration = 0.15) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.log('Audio not allowed yet by browser', e);
  }
}

// --- LIVE TIME IN STATUS BAR ---
function updateLiveTime() {
  const timeElem = document.getElementById('live-time');
  if (!timeElem) return;
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  timeElem.textContent = `${hours}:${minutes} ${ampm}`;
}
setInterval(updateLiveTime, 1000);
updateLiveTime();

// --- TAB ROUTING ---
function switchTab(tabId) {
  AppState.activeTab = tabId;

  // Hide all panels
  document.querySelectorAll('.view-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  // Show selected panel
  const targetPanel = document.getElementById(`view-${tabId}`);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }

  // Update bottom tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
    btn.classList.remove('text-brand-lime');
    btn.classList.add('text-gray-400');
  });

  const activeBtn = document.getElementById(`tab-${tabId}`);
  if (activeBtn) {
    activeBtn.classList.add('active');
    activeBtn.classList.add('text-brand-lime');
    activeBtn.classList.remove('text-gray-400');
  }

  // Scroll to top of content
  const scrollable = document.getElementById('content-scrollable');
  if (scrollable) {
    scrollable.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Refresh icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // If switched to pitch, recalculate
  if (tabId === 'pitch') {
    calculateRevenue();
  }
}

// --- DEVICE VIEW TOGGLE (Phone frame vs Fullscreen) ---
function toggleDeviceView() {
  const container = document.getElementById('device-container');
  const btnText = document.getElementById('device-toggle-text');
  if (!container) return;

  AppState.isPhoneMockup = !AppState.isPhoneMockup;

  if (AppState.isPhoneMockup) {
    container.className = "w-full max-w-[430px] min-h-screen sm:min-h-[890px] sm:max-h-[920px] bg-brand-dark sm:rounded-[48px] sm:shadow-device border-0 sm:border-[8px] sm:border-[#1C1F2B] relative flex flex-col overflow-hidden transition-all duration-300";
    if (btnText) btnText.textContent = "Modo Celular";
  } else {
    container.className = "w-full max-w-4xl min-h-screen bg-brand-dark rounded-none border-0 relative flex flex-col overflow-hidden transition-all duration-300 shadow-2xl";
    if (btnText) btnText.textContent = "Modo Pantalla Completa";
  }

  if (window.lucide) lucide.createIcons();
}

// --- STORIES VIEWER ---
const storiesData = [
  {
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
    caption: "¡Familia! Recuerden: la disciplina le gana a la motivación 100 de cada 100 veces. ¿Quién ya hizo la rutina de hoy? 🔥"
  },
  {
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=80",
    caption: "Día pesado de glúteo: concéntrense en la contracción de 2 segundos arriba en cada rep de hip thrust. ¡Arde pero funciona! 🍑"
  },
  {
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=80",
    caption: "Meal prep del día: Salmón con quinoa y aguacate. Comer rico y saludable no tiene por qué ser aburrido ni difícil 🥗"
  },
  {
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80",
    caption: "Feliz de ver las fotos de check-in del domingo. ¡Sofía y Pau están cambiando su cuerpo de forma increíble! ✨"
  },
  {
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80",
    caption: "Respondiendo dudas en vivo en el chat de la app. ¡Mándenme sus preguntas de suplementos y pesos! 💬"
  }
];

function openStory(index) {
  AppState.currentStoryIndex = index;
  const story = storiesData[index] || storiesData[0];
  const modal = document.getElementById('story-modal');
  const img = document.getElementById('story-image');
  const caption = document.getElementById('story-caption');

  if (img) img.src = story.image;
  if (caption) caption.textContent = `"${story.caption}"`;
  if (modal) modal.classList.remove('hidden');

  if (window.lucide) lucide.createIcons();
}

function closeStory() {
  const modal = document.getElementById('story-modal');
  if (modal) modal.classList.add('hidden');
}

// --- WORKOUT PLAYER & TIMER ---
function filterWorkouts(category) {
  document.querySelectorAll('.category-pill').forEach(btn => {
    btn.classList.remove('active', 'bg-brand-lime', 'text-black');
    btn.classList.add('bg-white/5', 'text-gray-300');
  });

  const activeBtn = event.target;
  activeBtn.classList.add('active', 'bg-brand-lime', 'text-black');
  activeBtn.classList.remove('bg-white/5', 'text-gray-300');

  document.querySelectorAll('.workout-item').forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function startWorkout(workoutKey) {
  const modal = document.getElementById('workout-modal');
  if (modal) modal.classList.remove('hidden');
  resetWorkoutTimer();
  if (window.lucide) lucide.createIcons();
}

function closeWorkoutModal() {
  const modal = document.getElementById('workout-modal');
  if (modal) modal.classList.add('hidden');
  clearInterval(AppState.timerInterval);
  AppState.timerRunning = false;
}

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
        playBeepSound(880, 'sine', 0.25);
        setTimeout(() => playBeepSound(1100, 'sine', 0.3), 200);
        showToast('⏰ ¡Tiempo de descanso completado! Siguiente serie.');
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

function checkSet(button, setNumber) {
  button.classList.toggle('completed');
  playBeepSound(520, 'triangle', 0.1);
  showToast(`¡Serie ${setNumber} registrada!`);
  resetWorkoutTimer();
  toggleTimer(); // Start rest timer automatically
}

function finishWorkoutModal() {
  closeWorkoutModal();
  triggerCelebrationConfetti();
  showToast('🎉 ¡Entrenamiento completado con éxito! +390 Kcal registradas.');
}

// --- NUTRITION & MACROS ENGINE ---
const macroGoals = {
  deficit: { calories: 1780, protein: 135, carbs: 180, fats: 48 },
  mantener: { calories: 2100, protein: 145, carbs: 230, fats: 58 },
  volumen: { calories: 2450, protein: 160, carbs: 290, fats: 68 }
};

function setMacroGoal(goalKey) {
  document.querySelectorAll('.goal-tab').forEach(b => {
    b.classList.remove('active', 'bg-emerald-400', 'text-black');
    b.classList.add('text-gray-300');
  });

  const activeBtn = document.getElementById(`btn-${goalKey}`);
  if (activeBtn) {
    activeBtn.classList.add('active', 'bg-emerald-400', 'text-black');
    activeBtn.classList.remove('text-gray-300');
  }

  const goal = macroGoals[goalKey] || macroGoals.deficit;
  const calElem = document.getElementById('macro-calories');
  const protElem = document.getElementById('macro-protein');
  const carbsElem = document.getElementById('macro-carbs');
  const fatsElem = document.getElementById('macro-fats');

  if (calElem) calElem.textContent = goal.calories.toLocaleString();
  if (protElem) protElem.textContent = `${goal.protein}g`;
  if (carbsElem) carbsElem.textContent = `${goal.carbs}g`;
  if (fatsElem) fatsElem.textContent = `${goal.fats}g`;

  showToast(`Meta actualizada a: ${goalKey.toUpperCase()} (${goal.calories} kcal)`);
}

function calculateMacrosModal() {
  showToast('Calculadora de macros personalizada activa según tu peso y altura.');
}

function addWaterCup() {
  AppState.waterMl += 250;
  if (AppState.waterMl > AppState.waterGoalMl) {
    AppState.waterMl = AppState.waterGoalMl;
  }
  const textElem = document.getElementById('water-progress-text');
  const homeElem = document.getElementById('home-water-val');

  const liters = (AppState.waterMl / 1000).toFixed(1);
  if (textElem) textElem.textContent = `${AppState.waterMl} ml`;
  if (homeElem) homeElem.textContent = `${liters} L`;

  playBeepSound(640, 'sine', 0.1);
  showToast(`💧 ¡+250ml de agua registrados! Total: ${AppState.waterMl} ml`);
}

// --- RECIPE MODAL ---
const recipeDetails = {
  breakfast: {
    tag: "Desayuno Fit",
    title: "Pancakes de Avena & Proteína",
    desc: "Receta favorita de Araceli para antes de entrenar pierna. Satisface el antojo dulce sin salirte de tus macros.",
    kcal: 410, prot: "34g", carbs: "45g", fat: "7g",
    img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500&auto=format&fit=crop&q=80"
  },
  lunch: {
    tag: "Almuerzo Alto en Proteína",
    title: "Bowl de Salmón con Quinoa y Aguacate",
    desc: "Grasas saludables omega-3 y proteína de alto valor biológico para óptima recuperación muscular.",
    kcal: 540, prot: "42g", carbs: "50g", fat: "16g",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80"
  },
  dinner: {
    tag: "Cena Ligera",
    title: "Omelette de Claras con Espinaca & Cottage",
    desc: "Cena saciante, baja en carbohidratos, perfecta para descansar y promover síntesis de masa muscular durante la noche.",
    kcal: 320, prot: "36g", carbs: "12g", fat: "6g",
    img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&auto=format&fit=crop&q=80"
  },
  smoothie: {
    tag: "Post-Entreno",
    title: "Smoothie Proteico Glow Berries",
    desc: "Rápida absorción de nutrientes justo al terminar la rutina de fuerza.",
    kcal: 320, prot: "32g", carbs: "28g", fat: "4g",
    img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&auto=format&fit=crop&q=80"
  }
};

function showRecipeModal(recipeKey) {
  const data = recipeDetails[recipeKey] || recipeDetails.breakfast;
  const modal = document.getElementById('recipe-modal');
  if (!modal) return;

  document.getElementById('recipe-modal-title').textContent = data.title;
  document.getElementById('recipe-modal-desc').textContent = data.desc;
  document.getElementById('recipe-modal-tag').textContent = data.tag;
  document.getElementById('recipe-modal-kcal').textContent = data.kcal;
  document.getElementById('recipe-modal-prot').textContent = data.prot;
  document.getElementById('recipe-modal-carbs').textContent = data.carbs;
  document.getElementById('recipe-modal-fat').textContent = data.fat;
  document.getElementById('recipe-modal-img').src = data.img;

  modal.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

function closeRecipeModal() {
  const modal = document.getElementById('recipe-modal');
  if (modal) modal.classList.add('hidden');
}

// --- CHECKIN MODAL ---
function openCheckinModal() {
  const modal = document.getElementById('checkin-modal');
  if (modal) modal.classList.remove('hidden');
  if (window.lucide) lucide.createIcons();
}

function closeCheckinModal() {
  const modal = document.getElementById('checkin-modal');
  if (modal) modal.classList.add('hidden');
}

function submitCheckin() {
  closeCheckinModal();
  triggerCelebrationConfetti();
  showToast('💌 ¡Check-in enviado a Araceli! Recibirás tu retroalimentación en el chat.');
}

// --- CHAT SIMULATION SYSTEM ---
function playVoiceNoteDemo(elem) {
  playBeepSound(440, 'triangle', 0.4);
  showToast('▶ Reproduciendo nota de voz de Araceli Morales (0:24)...');
}

function appendUserMessage(text) {
  const chatArea = document.getElementById('chat-messages');
  if (!chatArea) return;

  const now = new Date();
  const timeStr = `${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`;

  const userMsgHtml = `
    <div class="flex items-end justify-end gap-2">
      <div class="max-w-[80%] bg-brand-lime text-black font-medium p-3 rounded-2xl rounded-br-sm text-xs shadow-glow-lime">
        ${escapeHtml(text)}
        <span class="text-[9px] text-black/70 block text-right mt-1 font-mono">${timeStr} ✓✓</span>
      </div>
    </div>
  `;
  chatArea.insertAdjacentHTML('beforeend', userMsgHtml);
  chatArea.scrollTop = chatArea.scrollHeight;
}

function appendAraceliReply(text) {
  const chatArea = document.getElementById('chat-messages');
  if (!chatArea) return;

  const now = new Date();
  const timeStr = `${now.getHours()}:${now.getMinutes() < 10 ? '0' : ''}${now.getMinutes()}`;

  const araMsgHtml = `
    <div class="flex items-start gap-2.5">
      <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=100&auto=format&fit=crop&q=80" class="w-7 h-7 rounded-full object-cover flex-shrink-0 mt-1" alt="Ara">
      <div class="max-w-[85%] bg-brand-card p-3 rounded-2xl rounded-tl-sm border border-brand-cardBorder space-y-1 shadow-sm">
        <p class="text-xs text-gray-200 leading-relaxed">
          ${text}
        </p>
        <span class="text-[10px] text-gray-500 block text-right">${timeStr}</span>
      </div>
    </div>
  `;
  chatArea.insertAdjacentHTML('beforeend', araMsgHtml);
  chatArea.scrollTop = chatArea.scrollHeight;
  playBeepSound(700, 'sine', 0.15);
}

function sendQuickReply(text) {
  appendUserMessage(text);

  let replyText = "¡Me encanta tu dedicación! Sigue así y vas a ver resultados brutales en tus glúteos y cintura 💪";
  if (text.includes("proteína")) {
    replyText = "¡Hola hermosa! Te recomiendo una proteína Whey Isolate sabor vainilla o chocolate. Tómatela dentro de los 45 min después de entrenar con agua o leche de almendras 🥛";
  } else if (text.includes("salmón")) {
    replyText = "¡Claro que sí! Puedes sustituir 150g de salmón por 150g de atún en agua o pechuga de pollo asada. Solo asegúrate de agregar 1/3 de aguacate para tus grasas saludables 🥑";
  } else if (text.includes("rutina de hoy")) {
    replyText = "¡Esoooo! Me da muchísimo orgullo ver que no aflojas. Estira 10 minutos y tómate tu smoothie para recuperar fibras musculares 🔥👏";
  }

  setTimeout(() => {
    appendAraceliReply(replyText);
  }, 900);
}

function handleChatSubmit(event) {
  event.preventDefault();
  const input = document.getElementById('chat-input');
  if (!input || !input.value.trim()) return;

  const userText = input.value.trim();
  input.value = '';
  appendUserMessage(userText);

  setTimeout(() => {
    appendAraceliReply(`¡Hola linda! Ya leí tu mensaje: "${userText}". Dame un ratito y te mando un audio detallado en cuanto termine de grabar el reto de la app 💬💪`);
  }, 1000);
}

function escapeHtml(string) {
  const div = document.createElement('div');
  div.textContent = string;
  return div.innerHTML;
}

// --- LIVE REVENUE CALCULATOR (The Closing Engine) ---
function calculateRevenue() {
  const rateSlider = document.getElementById('rate-slider');
  const priceSlider = document.getElementById('price-slider');
  if (!rateSlider || !priceSlider) return;

  const rate = parseFloat(rateSlider.value);
  const price = parseInt(priceSlider.value, 10);

  const subscriberCount = Math.round((AppState.currentFollowers * rate) / 100);
  const monthlyRevenue = subscriberCount * price;
  const annualRevenue = monthlyRevenue * 12;

  // Update UI Labels
  const rateLabel = document.getElementById('slider-rate-val');
  const priceLabel = document.getElementById('slider-price-val');
  const monthlyElem = document.getElementById('calc-monthly-income');
  const annualElem = document.getElementById('calc-annual-income');

  if (rateLabel) {
    rateLabel.textContent = `${rate.toFixed(1)}% (${subscriberCount.toLocaleString()} alumnas)`;
  }

  if (priceLabel) {
    priceLabel.textContent = `$${price} MXN / mes`;
  }

  if (monthlyElem) {
    monthlyElem.textContent = `$${monthlyRevenue.toLocaleString('es-MX')} MXN`;
  }

  if (annualElem) {
    annualElem.textContent = `$${annualRevenue.toLocaleString('es-MX')} MXN`;
  }
}

function triggerPitchConfetti() {
  triggerCelebrationConfetti();
  showToast('🚀 ¡Propuesta lista para Araceli Morales! ¡Éxito asegurado!');
}

function triggerCelebrationConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#CCFF00', '#FF2A85', '#3B82F6', '#10B981']
    });
  }
}

function toggleLike(button) {
  button.classList.toggle('text-brand-pink');
  showToast('❤️ ¡Le diste Me Gusta al progreso de tu compañera!');
}

// --- TOAST NOTIFICATIONS ---
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('toast');
  const text = document.getElementById('toast-text');
  if (!toast || !text) return;

  text.textContent = message;
  toast.classList.remove('opacity-0', '-translate-y-4', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', '-translate-y-4', 'pointer-events-none');
  }, 3200);
}

// --- INIT ON LOAD ---
document.addEventListener('DOMContentLoaded', () => {
  calculateRevenue();
  if (window.lucide) {
    lucide.createIcons();
  }
});

