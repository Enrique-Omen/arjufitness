// ARACELI MORALES - PWA Application & Synchronized Messaging State
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
