// ==========================================
// ARACELI MORALES | Official Platform Engine
// Powered by OMEN Technologies
// ==========================================

const DEFAULT_DATA = {
  activeView: 'portal',
  coachTab: 'clients',
  clientTab: 'nutrition',
  selectedClientId: 'sofia',
  selectedDay: 'Lunes',
  clients: {
    sofia: {
      id: 'sofia',
      name: 'Sofía Ramírez',
      age: 24,
      plan: 'Plan VIP Booty & Glow',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&auto=format&fit=crop&q=80',
      currentWeight: '58.2 kg',
      targetWeight: '56.0 kg',
      adherence: 96,
      streak: 14,
      waterMl: 1750,
      days: {
        'Lunes': {
          calories: 1850,
          protein: 135,
          carbs: 180,
          fat: 52,
          meals: [
            { time: '08:30 AM', name: 'Bowl de Avena con Proteína, Crema de Cacahuate & Berries', kcal: 420, p: 32, c: 55, f: 8 },
            { time: '01:30 PM', name: 'Bowl de Salmón Rostizado, Quinoa & Aguacate', kcal: 620, p: 44, c: 58, f: 18 },
            { time: '05:00 PM', name: 'Pancakes de Avena & Canela Fit (Pre-entreno)', kcal: 310, p: 25, c: 40, f: 4 },
            { time: '08:30 PM', name: 'Tacos de Pollo al Pastor en Tortilla de Nopal', kcal: 500, p: 34, c: 27, f: 12 }
          ],
          workout: {
            title: '🍑 Booty Sculpt & Femorales Pesados',
            focus: 'Glúteo Máximo + Isquios',
            duration: '55 min',
            exercises: [
              { name: 'Hip Thrust con Barra', sets: '4 series', reps: '10-12 reps', weight: '75 kg', notes: 'Pausa de 2s arriba en contracción máxima' },
              { name: 'Sentadilla Búlgara con Mancuerna', sets: '3 series', reps: '10 por pierna', weight: '14 kg', notes: 'Inclinación de torso hacia adelante para glúteo' },
              { name: 'Peso Muerto Rumano con Mancuernas', sets: '4 series', reps: '12 reps', weight: '22 kg', notes: 'Espalda neutra, estirón profundo en femoral' },
              { name: 'Abducciones en Polea o Máquina', sets: '3 series', reps: '15-20 reps', weight: '35 kg', notes: 'Drop set al fallo en la última serie' }
            ]
          }
        },
        'Martes': {
          calories: 1800,
          protein: 130,
          carbs: 170,
          fat: 50,
          meals: [
            { time: '08:30 AM', name: 'Omelette de Claras con Espinacas & Feta', kcal: 380, p: 35, c: 15, f: 12 },
            { time: '02:00 PM', name: 'Pechuga a la Parrilla con Camote Asado', kcal: 580, p: 48, c: 60, f: 10 },
            { time: '05:30 PM', name: 'Yogurt Griego con Almendras & Moras', kcal: 260, p: 22, c: 20, f: 8 },
            { time: '08:30 PM', name: 'Ensalada César Fit con Pollo Crunch', kcal: 480, p: 38, c: 22, f: 14 }
          ],
          workout: {
            title: '🔥 Upper Body Toned & Cintura Diminuta',
            focus: 'Espalda + Hombro + Abs',
            duration: '45 min',
            exercises: [
              { name: 'Press Militar con Mancuerna', sets: '4 series', reps: '12 reps', weight: '10 kg', notes: 'Controlar la bajada en 3s' },
              { name: 'Jalón al Pecho Agarre Neutro', sets: '4 series', reps: '12 reps', weight: '32 kg', notes: 'Retraer escápulas con fuerza' },
              { name: 'Elevaciones Laterales Estilo Pájaro', sets: '3 series', reps: '15 reps', weight: '6 kg', notes: 'Codos ligeramente flexionados' },
              { name: 'Vacío Abdominal + Plancha T-Cross', sets: '4 series', reps: '45 seg', weight: 'Peso corporal', notes: 'Comprimir ombligo hacia la columna' }
            ]
          }
        },
        'Miércoles': {
          calories: 1750,
          protein: 135,
          carbs: 160,
          fat: 48,
          meals: [
            { time: '08:30 AM', name: 'Tostadas de Masa Madre con Huevo Poché & Aguacate', kcal: 410, p: 28, c: 45, f: 14 },
            { time: '01:30 PM', name: 'Salpicón de Res Magra con Nopal & Tostadas Horneadas', kcal: 540, p: 45, c: 48, f: 12 },
            { time: '05:00 PM', name: 'Batido de Proteína con Plátano & Cacao', kcal: 290, p: 28, c: 38, f: 3 },
            { time: '08:30 PM', name: 'Crema de Calabacín con Filete de Pescado Blanco', kcal: 460, p: 36, c: 24, f: 11 }
          ],
          workout: {
            title: '⚡ Glúteo Medio & Cuádriceps Bomb',
            focus: 'Cadera Redonda + Cuádriceps',
            duration: '50 min',
            exercises: [
              { name: 'Sentadilla Goblet con Talones Elevados', sets: '4 series', reps: '12 reps', weight: '20 kg', notes: 'Profundidad completa, torso erguido' },
              { name: 'Prensa de Pierna Pies Altos y Abiertos', sets: '4 series', reps: '12 reps', weight: '90 kg', notes: 'Empujar con los talones' },
              { name: 'Kickbacks en Polea para Glúteo', sets: '3 series', reps: '15 reps', weight: '12 kg', notes: 'Apretar glúteo arriba sin arquear espalda' }
            ]
          }
        },
        'Jueves': {
          calories: 1800,
          protein: 130,
          carbs: 170,
          fat: 50,
          meals: [
            { time: '08:30 AM', name: 'Bowl de Chía con Leche de Almendras & Proteína', kcal: 390, p: 30, c: 40, f: 12 },
            { time: '01:30 PM', name: 'Pechuga Rellena de Espinacas con Arroz Jazmín', kcal: 610, p: 50, c: 55, f: 12 },
            { time: '05:00 PM', name: 'Rice Cakes con Mantequilla de Almendra', kcal: 260, p: 10, c: 32, f: 10 },
            { time: '08:30 PM', name: 'Atún Sellado con Ensalada Asiática', kcal: 490, p: 42, c: 20, f: 14 }
          ],
          workout: {
            title: '✨ Core Sculpt & Cardio Quema Grasa',
            focus: 'Abdomen + Resistencia',
            duration: '40 min',
            exercises: [
              { name: 'Elevaciones de Piernas Colgada', sets: '4 series', reps: '15 reps', weight: 'Peso corporal', notes: 'Sin balanceo, movimiento controlado' },
              { name: 'Russian Twists con Disco', sets: '3 series', reps: '20 reps', weight: '5 kg', notes: 'Giro completo de torso' },
              { name: 'Sprints en Caminadora Inclinación 12%', sets: '8 intervalos', reps: '30s sprint / 30s descanso', weight: '11 km/h', notes: 'Máxima intensidad' }
            ]
          }
        },
        'Viernes': {
          calories: 1900,
          protein: 140,
          carbs: 190,
          fat: 54,
          meals: [
            { time: '08:30 AM', name: 'Waffles Fit de Avena & Proteína Vainilla', kcal: 450, p: 35, c: 58, f: 8 },
            { time: '01:30 PM', name: 'Poke Bowl de Salmón & Edamames', kcal: 640, p: 42, c: 68, f: 16 },
            { time: '05:00 PM', name: 'Manzana con Canela & Proteína en Polvo', kcal: 270, p: 24, c: 35, f: 3 },
            { time: '08:30 PM', name: 'Hamburguesa Fit en Pan de Nopal con Papas Airfryer', kcal: 540, p: 39, c: 42, f: 14 }
          ],
          workout: {
            title: '👑 Glúteos Máximos: Full Hypertrophy Day',
            focus: 'Moldeado General de Glúteo',
            duration: '60 min',
            exercises: [
              { name: 'Hip Thrust con Pausa Isométrica 3s', sets: '5 series', reps: '8-10 reps', weight: '80 kg', notes: 'Pesado, empujar con cadera' },
              { name: 'Sentadilla Sumo con Mancuerna Pesada', sets: '4 series', reps: '12 reps', weight: '28 kg', notes: 'Apertura amplia, rodillas hacia afuera' },
              { name: 'Step Ups en Banco con Mancuernas', sets: '3 series', reps: '12 por pierna', weight: '12 kg', notes: 'Subir sin impulsarse con el pie de apoyo' },
              { name: 'Frog Pumps con Banda de Resistencia', sets: '3 series', reps: '25 reps', weight: 'Banda pesada', notes: 'Quema final al fallo' }
            ]
          }
        },
        'Sábado': {
          calories: 1950,
          protein: 130,
          carbs: 210,
          fat: 55,
          meals: [
            { time: '09:00 AM', name: 'French Toast Fit de Pan Integral & Claras', kcal: 460, p: 32, c: 60, f: 9 },
            { time: '02:00 PM', name: 'Arrachera Magra Asada con Guacamole Fit', kcal: 680, p: 48, c: 50, f: 22 },
            { time: '05:30 PM', name: 'Smoothie Frutos Rojos & Proteína', kcal: 280, p: 26, c: 35, f: 4 },
            { time: '09:00 PM', name: 'Pizza Fit en Base de Avena & Pechuga de Pavo', kcal: 530, p: 38, c: 48, f: 13 }
          ],
          workout: {
            title: '🧘‍♀️ Recuperación Activa & Movilidad Pélvica',
            focus: 'Estiramientos + Apertura de Cadera',
            duration: '35 min',
            exercises: [
              { name: 'Pigeon Pose para Glúteo Profundo', sets: '3 series', reps: '60 seg por lado', weight: 'Estiramiento', notes: 'Respiración diafragmática profunda' },
              { name: 'Foam Roller en Isquios & Glúteo', sets: '3 series', reps: '90 seg por zona', weight: 'Auto-masaje', notes: 'Liberación miofascial' },
              { name: 'Caminata Ligera al Aire Libre', sets: '1 serie', reps: '30 min continuo', weight: 'Paseo', notes: 'Oxigenación y drenaje linfático' }
            ]
          }
        },
        'Domingo': {
          calories: 1800,
          protein: 125,
          carbs: 180,
          fat: 50,
          meals: [
            { time: '09:30 AM', name: 'Brunch: Huevos Pochados sobre Pan Campesino & Aguacate', kcal: 480, p: 30, c: 45, f: 18 },
            { time: '02:30 PM', name: 'Bowl Mediterráneo de Pollo al Limón con Cuscús', kcal: 610, p: 45, c: 62, f: 14 },
            { time: '06:00 PM', name: 'Té Verde con Galleta de Avena Casera', kcal: 210, p: 8, c: 30, f: 6 },
            { time: '08:30 PM', name: 'Sopa de Verduras con Tiras de Pollo Deshebrado', kcal: 450, p: 38, c: 28, f: 10 }
          ],
          workout: {
            title: '✨ Día de Descanso Total & Preparación Semanal',
            focus: 'Descanso del Sistema Nervioso',
            duration: '0 min',
            exercises: [
              { name: 'Hidratación Óptima (3L Agua)', sets: 'Todo el día', reps: '12 vasos', weight: 'Agua + Electrolitos', notes: 'Reponer minerales' },
              { name: 'Check-in Semanal con Ara', sets: '1 vez', reps: 'Fotos de progreso + Peso', weight: 'En la app', notes: 'Subir reporte dominical para feedback' }
            ]
          }
        }
      }
    },
    valentina: {
      id: 'valentina',
      name: 'Valentina López',
      age: 28,
      plan: 'Plan Shred & Tone',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=160&auto=format&fit=crop&q=80',
      currentWeight: '64.5 kg',
      targetWeight: '59.0 kg',
      adherence: 88,
      streak: 9,
      waterMl: 2100,
      days: {
        'Lunes': {
          calories: 1650,
          protein: 130,
          carbs: 140,
          fat: 45,
          meals: [
            { time: '08:00 AM', name: 'Claras de Huevo con Espinacas & 1 Tostada', kcal: 320, p: 32, c: 20, f: 6 },
            { time: '01:30 PM', name: 'Pechuga a la Plancha con Ensalada Verde & Arroz', kcal: 520, p: 45, c: 45, f: 10 },
            { time: '05:00 PM', name: 'Proteína Isolatada con Agua & Nueces', kcal: 220, p: 25, c: 4, f: 10 },
            { time: '08:00 PM', name: 'Salmón con Espárragos Asados', kcal: 480, p: 38, c: 12, f: 18 }
          ],
          workout: {
            title: '🔥 HIIT Quema Grasa & Pierna Ligera',
            focus: 'Gasto Calórico + Tonificación',
            duration: '50 min',
            exercises: [
              { name: 'Sentadilla con Salto + Peso Corporal', sets: '4 series', reps: '15 reps', weight: 'Sin peso', notes: 'Aterrizaje suave' },
              { name: 'Zancadas Alternas con Mancuerna', sets: '3 series', reps: '12 por pierna', weight: '8 kg', notes: 'Ritmo constante' },
              { name: 'Kettlebell Swings', sets: '4 series', reps: '20 reps', weight: '12 kg', notes: 'Empuje de cadera explosivo' }
            ]
          }
        },
        'Martes': {
          calories: 1650, protein: 130, carbs: 140, fat: 45,
          meals: [{ time: '08:00 AM', name: 'Batido Verde Detox con Proteína', kcal: 310, p: 28, c: 22, f: 5 }],
          workout: { title: 'Upper Body Tono Rápido', focus: 'Brazos & Espalda', duration: '45 min', exercises: [{ name: 'Remo con Mancuerna', sets: '4 series', reps: '12 reps', weight: '10 kg', notes: 'Codos pegados' }] }
        },
        'Miércoles': { calories: 1650, protein: 130, carbs: 140, fat: 45, meals: [], workout: { title: 'Cardio LISS & Core', focus: 'Resistencia', duration: '40 min', exercises: [] } },
        'Jueves': { calories: 1650, protein: 130, carbs: 140, fat: 45, meals: [], workout: { title: 'Glúteos & Tono', focus: 'Cadera', duration: '45 min', exercises: [] } },
        'Viernes': { calories: 1700, protein: 135, carbs: 150, fat: 45, meals: [], workout: { title: 'Full Body Circuit', focus: 'Metabolismo', duration: '50 min', exercises: [] } },
        'Sábado': { calories: 1700, protein: 130, carbs: 150, fat: 45, meals: [], workout: { title: 'Recuperación Activa', focus: 'Movilidad', duration: '30 min', exercises: [] } },
        'Domingo': { calories: 1650, protein: 125, carbs: 140, fat: 45, meals: [], workout: { title: 'Descanso', focus: 'Relax', duration: '0 min', exercises: [] } }
      }
    },
    camila: {
      id: 'camila',
      name: 'Camila Torres',
      age: 22,
      plan: 'Plan Recomp & Curvas',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=160&auto=format&fit=crop&q=80',
      currentWeight: '52.8 kg',
      targetWeight: '54.5 kg',
      adherence: 92,
      streak: 11,
      waterMl: 1900,
      days: {
        'Lunes': {
          calories: 2050,
          protein: 145,
          carbs: 220,
          fat: 58,
          meals: [
            { time: '08:30 AM', name: 'Tazón de Avena con Proteína & Crema de Almendras', kcal: 480, p: 35, c: 60, f: 12 },
            { time: '01:30 PM', name: 'Carne Magra con Puré de Papa & Brócoli', kcal: 650, p: 50, c: 65, f: 16 },
            { time: '05:00 PM', name: 'Sándwich de Pavo con Queso Panela', kcal: 350, p: 26, c: 40, f: 7 },
            { time: '08:30 PM', name: 'Pasta Integral con Pollo & Pesto Ligero', kcal: 570, p: 40, c: 62, f: 15 }
          ],
          workout: {
            title: '🍑 Fuerza Glúteos & Isquios Pro',
            focus: 'Crecimiento Muscular Limpio',
            duration: '60 min',
            exercises: [
              { name: 'Hip Thrust con Banda & Barra', sets: '5 series', reps: '8-10 reps', weight: '70 kg', notes: 'Tensión continua sin descansar abajo' },
              { name: 'Peso Muerto Piernas Semirrígidas', sets: '4 series', reps: '10 reps', weight: '50 kg', notes: 'Mantener barra pegada a las espinillas' }
            ]
          }
        },
        'Martes': { calories: 2000, protein: 140, carbs: 210, fat: 56, meals: [], workout: { title: 'Upper Body & Hombros', focus: 'Forma V', duration: '50 min', exercises: [] } },
        'Miércoles': { calories: 2000, protein: 140, carbs: 210, fat: 56, meals: [], workout: { title: 'Pierna & Cuádriceps', focus: 'Volumen', duration: '55 min', exercises: [] } },
        'Jueves': { calories: 2000, protein: 140, carbs: 210, fat: 56, meals: [], workout: { title: 'Descanso Activo', focus: 'Estiramientos', duration: '25 min', exercises: [] } },
        'Viernes': { calories: 2100, protein: 145, carbs: 230, fat: 58, meals: [], workout: { title: 'Glúteos Bombeo', focus: 'Aislamiento', duration: '50 min', exercises: [] } },
        'Sábado': { calories: 2100, protein: 140, carbs: 220, fat: 58, meals: [], workout: { title: 'Full Body Tono', focus: 'Cuerpo Completo', duration: '45 min', exercises: [] } },
        'Domingo': { calories: 2000, protein: 135, carbs: 210, fat: 55, meals: [], workout: { title: 'Descanso', focus: 'Recovery', duration: '0 min', exercises: [] } }
      }
    }
  },
  videos: [
    {
      id: 'v1',
      title: 'Técnica Maestra: Máximo Aislamiento de Glúteo en Hip Thrust',
      category: 'Glúteos & Pierna',
      duration: '14:20 min',
      thumbnail: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&auto=format&fit=crop&q=80',
      views: '1,420 vistas',
      date: 'Hoy',
      tag: 'Exclusivo VIP',
      description: 'Aprende los 3 errores más comunes que evitan que sientas el glúteo y cómo corregir la posición de pies y barbilla.'
    },
    {
      id: 'v2',
      title: 'Rutina Quema Grasa Rápida: 15 Minutos HIIT Sin Equipo',
      category: 'Cardio & HIIT',
      duration: '15:45 min',
      thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=80',
      views: '980 vistas',
      date: 'Ayer',
      tag: 'Sin Equipo',
      description: 'Ideal para cuando estás de viaje o tienes poco tiempo. Acelera tu ritmo metabólico por 24 horas.'
    },
    {
      id: 'v3',
      title: 'Qué Comer Antes y Después de Entrenar para Crecer Glúteo Limpio',
      category: 'Nutrición & Macros',
      duration: '11:15 min',
      thumbnail: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&auto=format&fit=crop&q=80',
      views: '2,150 vistas',
      date: 'Hace 3 días',
      tag: 'Guía de Comidas',
      description: 'Los mejores carbohidratos de asimilación rápida pre-workout y cómo estructurar tus gramos de proteína.'
    }
  ],
  messages: {
    sofia: [
      { id: 1, sender: 'coach', text: '¡Hola Sofi hermosa! Bienvenida a tu semana 3. Te subí a 75kg el Hip Thrust para el lunes porque te vi sobrada en tu último video 🔥', time: '09:15 AM' },
      { id: 2, sender: 'client', text: '¡Siii Ara! Me sentí súper fuerte, el lunes le meto los 75kg con todo. Oye, ¿el batido de proteína me lo tomo con leche de almendras o agua?', time: '09:22 AM' },
      { id: 3, sender: 'coach', text: 'Con leche de almendras sin azúcar queda súper cremosito y no te suma casi nada de carbs. ¡A darle con todo hoy!', time: '09:25 AM' }
    ],
    valentina: [
      { id: 1, sender: 'coach', text: 'Hola Vale, ¿cómo vas con tu hidratación de hoy?', time: '10:00 AM' },
      { id: 2, sender: 'client', text: 'Llevo 2.1 litros Ara, ya casi llego a los 2.5L 💪', time: '10:45 AM' }
    ],
    camila: [
      { id: 1, sender: 'coach', text: 'Camila, revisé tus fotos de check-in, la cintura se te ve mucho más marcada y el glúteo más elevado.', time: 'Ayer' },
      { id: 2, sender: 'client', text: '¡Muchas gracias Ara! La verdad el plan de comidas me quitó la inflamación por completo 🥰', time: 'Ayer' }
    ]
  }
};

// State Manager with LocalStorage persistence
let AppState = JSON.parse(localStorage.getItem('araceli_app_state_v3') || 'null');
if (!AppState || !AppState.clients || !AppState.clients.sofia) {
  AppState = JSON.parse(JSON.stringify(DEFAULT_DATA));
  saveState();
}

function saveState() {
  localStorage.setItem('araceli_app_state_v3', JSON.stringify(AppState));
}

// Audio Engine for Luxury Haptic Sounds
let audioCtx = null;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    const now = audioCtx.currentTime;

    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.05);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'success') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.08);
      osc.frequency.setValueAtTime(783.99, now + 0.16);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'chime') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(987.77, now);
      osc.frequency.exponentialRampToValueAtTime(493.88, now + 0.6);
      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
      osc.start(now);
      osc.stop(now + 0.6);
    }
  } catch (e) {
    // Web audio blocked
  }
}

// Toast Alert System
function showToast(msg, sub = 'Sincronizado en vivo con la app') {
  const toast = document.getElementById('toast');
  const msgEl = document.getElementById('toast-msg');
  if (!toast || !msgEl) return;
  msgEl.textContent = msg;
  toast.classList.remove('opacity-0', '-translate-y-10', 'scale-95');
  toast.classList.add('opacity-100', 'translate-y-0', 'scale-100');
  playSound('success');
  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0', 'scale-100');
    toast.classList.add('opacity-0', '-translate-y-10', 'scale-95');
  }, 3200);
}

// ==================== ROUTING & NAVIGATION ====================
function navigateTo(viewName) {
  AppState.activeView = viewName;
  saveState();
  playSound('click');

  const viewPortal = document.getElementById('view-portal');
  const viewCoach = document.getElementById('view-coach');
  const viewClient = document.getElementById('view-client');
  const navModeBadge = document.getElementById('nav-mode-badge');
  const btnNavPortal = document.getElementById('btn-nav-portal');
  const btnQuickCoach = document.getElementById('btn-quick-coach');
  const btnQuickClient = document.getElementById('btn-quick-client');

  if (viewPortal) viewPortal.classList.add('hidden');
  if (viewCoach) viewCoach.classList.add('hidden');
  if (viewClient) viewClient.classList.add('hidden');

  if (btnQuickCoach) btnQuickCoach.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all text-gray-400 hover:text-white';
  if (btnQuickClient) btnQuickClient.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all text-gray-400 hover:text-white';
  if (btnNavPortal) btnNavPortal.classList.remove('hidden', 'flex');

  if (viewName === 'portal') {
    if (viewPortal) viewPortal.classList.remove('hidden');
    if (navModeBadge) navModeBadge.textContent = 'Portal de Bienvenida VIP';
    if (btnNavPortal) btnNavPortal.classList.add('hidden');
  } else if (viewName === 'coach') {
    if (viewCoach) viewCoach.classList.remove('hidden');
    if (navModeBadge) navModeBadge.textContent = '👑 Modo Dueña (Araceli Morales)';
    if (btnNavPortal) btnNavPortal.classList.add('flex');
    if (btnQuickCoach) btnQuickCoach.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-gradient-to-r from-amber-500/30 to-amber-600/30 text-amber-200 border border-amber-500/40 shadow-glow-gold';
    renderCoachView();
  } else if (viewName === 'client') {
    if (viewClient) viewClient.classList.remove('hidden');
    if (navModeBadge) navModeBadge.textContent = '🌸 Modo Alumna (Sofía Ramírez)';
    if (btnNavPortal) btnNavPortal.classList.add('flex');
    if (btnQuickClient) btnQuickClient.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-gradient-to-r from-rose-500 to-pink-600 text-white shadow-glow-rose';
    renderClientView();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (window.lucide) lucide.createIcons();
}

// ==================== COACH VIEW LOGIC ====================
function switchCoachTab(tabName) {
  AppState.coachTab = tabName;
  saveState();
  playSound('click');

  const tabs = ['clients', 'videos', 'messages', 'metrics'];
  tabs.forEach(t => {
    const el = document.getElementById(`coach-tab-${t}`);
    const btn = document.getElementById(`btn-coach-tab-${t}`);
    if (el) el.classList.add('hidden');
    if (btn) {
      btn.classList.remove('active-tab');
      btn.classList.add('text-gray-400', 'hover:text-white');
    }
  });

  const activeEl = document.getElementById(`coach-tab-${tabName}`);
  const activeBtn = document.getElementById(`btn-coach-tab-${tabName}`);
  if (activeEl) activeEl.classList.remove('hidden');
  if (activeBtn) {
    activeBtn.classList.add('active-tab');
    activeBtn.classList.remove('text-gray-400');
  }

  if (tabName === 'clients') renderCoachClientEditor();
  if (tabName === 'videos') renderVideos('coach');
  if (tabName === 'messages') renderMessages('coach');
  if (tabName === 'metrics') renderMetrics();
  if (window.lucide) lucide.createIcons();
}

function selectClient(clientId) {
  AppState.selectedClientId = clientId;
  saveState();
  playSound('click');
  renderCoachClientRoster();
  renderCoachClientEditor();
}

function selectDay(dayName) {
  AppState.selectedDay = dayName;
  saveState();
  playSound('click');

  document.querySelectorAll('.day-pill').forEach(btn => {
    if (btn.dataset.day === dayName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  if (AppState.activeView === 'coach') {
    renderCoachClientEditor();
  } else if (AppState.activeView === 'client') {
    renderClientView();
  }
}

function renderCoachView() {
  renderCoachClientRoster();
  renderCoachClientEditor();
  renderVideos('coach');
  renderMessages('coach');
}

function renderCoachClientRoster() {
  const container = document.getElementById('coach-roster-list');
  if (!container) return;

  const clientKeys = Object.keys(AppState.clients);
  container.innerHTML = clientKeys.map(k => {
    const cl = AppState.clients[k];
    const isSelected = cl.id === AppState.selectedClientId;
    return `
      <div onclick="selectClient('${cl.id}')" class="p-3 sm:p-4 rounded-2xl cursor-pointer transition-all duration-200 border ${isSelected ? 'bg-gradient-to-r from-rose-950/40 via-[#1D1426] to-[#161220] border-rose-500/50 shadow-glow-rose' : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/15'}">
        <div class="flex items-center gap-3">
          <div class="relative">
            <img src="${cl.avatar}" alt="${cl.name}" class="w-11 h-11 rounded-full object-cover border-2 ${isSelected ? 'border-rose-400' : 'border-white/10'}">
            <span class="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-black"></span>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <h4 class="text-sm font-bold text-white truncate">${cl.name}</h4>
              <span class="text-[10px] font-mono font-bold text-rose-300 bg-rose-500/15 px-2 py-0.5 rounded-full border border-rose-500/30">${cl.adherence}% adherencia</span>
            </div>
            <p class="text-[11px] text-gray-400 truncate">${cl.plan} • ${cl.age} años</p>
            <div class="flex items-center gap-3 mt-1.5 text-[10px] text-gray-400">
              <span>Peso: <strong class="text-gray-200">${cl.currentWeight}</strong></span>
              <span>•</span>
              <span>Racha: <strong class="text-amber-300">🔥 ${cl.streak} días</strong></span>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderCoachClientEditor() {
  const cl = AppState.clients[AppState.selectedClientId] || AppState.clients.sofia;
  const day = AppState.selectedDay || 'Lunes';
  const dayData = (cl.days && cl.days[day]) || {
    calories: 1850, protein: 130, carbs: 175, fat: 50, meals: [],
    workout: { title: 'Día de Entrenamiento', focus: 'General', duration: '45 min', exercises: [] }
  };

  const headerName = document.getElementById('coach-editor-client-name');
  const headerPlan = document.getElementById('coach-editor-client-plan');
  const headerDay = document.getElementById('coach-editor-current-day');
  if (headerName) headerName.textContent = cl.name;
  if (headerPlan) headerPlan.textContent = `${cl.plan} • ${cl.currentWeight} actual`;
  if (headerDay) headerDay.textContent = day;

  const inCal = document.getElementById('input-coach-cal');
  const inProt = document.getElementById('input-coach-prot');
  const inCarb = document.getElementById('input-coach-carb');
  const inFat = document.getElementById('input-coach-fat');
  if (inCal) inCal.value = dayData.calories || 1850;
  if (inProt) inProt.value = dayData.protein || 135;
  if (inCarb) inCarb.value = dayData.carbs || 180;
  if (inFat) inFat.value = dayData.fat || 50;

  const mealsContainer = document.getElementById('coach-meals-list');
  if (mealsContainer) {
    if (!dayData.meals || dayData.meals.length === 0) {
      mealsContainer.innerHTML = `<p class="text-xs text-gray-400 italic py-2">No hay comidas programadas para este día.</p>`;
    } else {
      mealsContainer.innerHTML = dayData.meals.map((m, idx) => `
        <div class="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/15 transition">
          <div class="flex-1 min-w-0 pr-2">
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold">${m.time}</span>
              <span class="text-xs font-semibold text-gray-200 truncate">${m.name}</span>
            </div>
            <p class="text-[10px] text-gray-400 mt-1">${m.kcal} kcal • P: ${m.p}g | C: ${m.c}g | G: ${m.f}g</p>
          </div>
          <button onclick="deleteMealRow(${idx})" class="text-gray-400 hover:text-rose-400 p-1 rounded-lg transition" title="Eliminar platillo">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      `).join('');
    }
  }

  const inWTitle = document.getElementById('input-coach-workout-title');
  const inWFocus = document.getElementById('input-coach-workout-focus');
  const inWDuration = document.getElementById('input-coach-workout-duration');
  if (inWTitle) inWTitle.value = (dayData.workout && dayData.workout.title) || '';
  if (inWFocus) inWFocus.value = (dayData.workout && dayData.workout.focus) || '';
  if (inWDuration) inWDuration.value = (dayData.workout && dayData.workout.duration) || '';

  const exercisesContainer = document.getElementById('coach-exercises-list');
  if (exercisesContainer) {
    const exercises = (dayData.workout && dayData.workout.exercises) || [];
    if (exercises.length === 0) {
      exercisesContainer.innerHTML = `<p class="text-xs text-gray-400 italic py-2">No hay ejercicios asignados para este día.</p>`;
    } else {
      exercisesContainer.innerHTML = exercises.map((ex, idx) => `
        <div class="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-white flex items-center gap-1.5">
              <span class="w-5 h-5 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center text-[10px] font-mono">${idx + 1}</span>
              ${ex.name}
            </span>
            <button onclick="deleteExerciseRow(${idx})" class="text-gray-400 hover:text-rose-400 transition">
              <i data-lucide="x" class="w-3.5 h-3.5"></i>
            </button>
          </div>
          <div class="grid grid-cols-3 gap-2 text-[11px]">
            <div class="bg-black/30 p-1.5 rounded-lg border border-white/5">
              <span class="text-[9px] text-gray-400 uppercase">Series</span>
              <p class="font-bold text-gray-200">${ex.sets}</p>
            </div>
            <div class="bg-black/30 p-1.5 rounded-lg border border-white/5">
              <span class="text-[9px] text-gray-400 uppercase">Reps</span>
              <p class="font-bold text-gray-200">${ex.reps}</p>
            </div>
            <div class="bg-black/30 p-1.5 rounded-lg border border-white/5">
              <span class="text-[9px] text-gray-400 uppercase">Peso Sugerido</span>
              <p class="font-bold text-rose-300">${ex.weight}</p>
            </div>
          </div>
          ${ex.notes ? `<p class="text-[10px] text-gray-400 italic bg-white/[0.02] p-1.5 rounded border border-white/5">💡 Tip Ara: ${ex.notes}</p>` : ''}
        </div>
      `).join('');
    }
  }

  if (window.lucide) lucide.createIcons();
}

function saveCoachNutrition() {
  const cl = AppState.clients[AppState.selectedClientId];
  const day = AppState.selectedDay;
  if (!cl || !cl.days || !cl.days[day]) return;

  const inCal = parseInt(document.getElementById('input-coach-cal').value) || 1850;
  const inProt = parseInt(document.getElementById('input-coach-prot').value) || 135;
  const inCarb = parseInt(document.getElementById('input-coach-carb').value) || 180;
  const inFat = parseInt(document.getElementById('input-coach-fat').value) || 50;

  cl.days[day].calories = inCal;
  cl.days[day].protein = inProt;
  cl.days[day].carbs = inCarb;
  cl.days[day].fat = inFat;

  saveState();
  showToast(`✨ Nutrición del ${day} guardada para ${cl.name}`);
}

function saveCoachWorkout() {
  const cl = AppState.clients[AppState.selectedClientId];
  const day = AppState.selectedDay;
  if (!cl || !cl.days || !cl.days[day]) return;

  const title = document.getElementById('input-coach-workout-title').value || 'Rutina Personalizada';
  const focus = document.getElementById('input-coach-workout-focus').value || 'Hipertrofia';
  const duration = document.getElementById('input-coach-workout-duration').value || '50 min';

  if (!cl.days[day].workout) cl.days[day].workout = { exercises: [] };
  cl.days[day].workout.title = title;
  cl.days[day].workout.focus = focus;
  cl.days[day].workout.duration = duration;

  saveState();
  showToast(`✨ Rutina del ${day} guardada para ${cl.name}`);
}

function addMealPrompt() {
  const cl = AppState.clients[AppState.selectedClientId];
  const day = AppState.selectedDay;
  if (!cl || !cl.days || !cl.days[day]) return;

  const name = prompt('Nombre del platillo o snack:', 'Shake Proteico con Almendras');
  if (!name) return;
  const time = prompt('Horario aproximado:', '04:30 PM') || '04:30 PM';
  const kcal = parseInt(prompt('Calorías aproximadas (kcal):', '320')) || 320;
  const p = parseInt(prompt('Gramos de proteína:', '28')) || 28;

  if (!cl.days[day].meals) cl.days[day].meals = [];
  cl.days[day].meals.push({ time, name, kcal, p, c: 30, f: 8 });

  saveState();
  renderCoachClientEditor();
  showToast('Platillo agregado a la dieta');
}

function deleteMealRow(idx) {
  const cl = AppState.clients[AppState.selectedClientId];
  const day = AppState.selectedDay;
  if (!cl || !cl.days || !cl.days[day] || !cl.days[day].meals) return;
  cl.days[day].meals.splice(idx, 1);
  saveState();
  renderCoachClientEditor();
}

function addExercisePrompt() {
  const cl = AppState.clients[AppState.selectedClientId];
  const day = AppState.selectedDay;
  if (!cl || !cl.days || !cl.days[day]) return;

  const name = prompt('Nombre del ejercicio:', 'Elevación de Pelvis con Mancuerna');
  if (!name) return;
  const sets = prompt('Series:', '4 series') || '4 series';
  const reps = prompt('Repeticiones:', '12 reps') || '12 reps';
  const weight = prompt('Peso sugerido:', '20 kg') || '20 kg';
  const notes = prompt('Instrucción o tip técnico:', 'Contracción sostenida de 2 segundos') || '';

  if (!cl.days[day].workout) cl.days[day].workout = { title: 'Rutina', focus: '', duration: '45 min', exercises: [] };
  if (!cl.days[day].workout.exercises) cl.days[day].workout.exercises = [];

  cl.days[day].workout.exercises.push({ name, sets, reps, weight, notes });
  saveState();
  renderCoachClientEditor();
  showToast('Ejercicio agregado a la rutina');
}

function deleteExerciseRow(idx) {
  const cl = AppState.clients[AppState.selectedClientId];
  const day = AppState.selectedDay;
  if (!cl || !cl.days || !cl.days[day] || !cl.days[day].workout || !cl.days[day].workout.exercises) return;
  cl.days[day].workout.exercises.splice(idx, 1);
  saveState();
  renderCoachClientEditor();
}

// ==================== VIDEOS & MASTERCLASSES ====================
function renderVideos(viewMode) {
  const coachGrid = document.getElementById('coach-videos-grid');
  const clientGrid = document.getElementById('client-videos-grid');

  const html = AppState.videos.map(v => `
    <div class="rounded-2xl overflow-hidden glass-panel glass-card-hover flex flex-col group">
      <div class="relative aspect-video w-full overflow-hidden cursor-pointer" onclick="openVideoPlayer('${v.id}')">
        <img src="${v.thumbnail}" alt="${v.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <span class="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold text-white border border-white/10">
          ${v.duration}
        </span>
        <span class="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-rose-500/90 text-white text-[9px] font-extrabold uppercase tracking-wider shadow">
          ${v.tag}
        </span>
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <div class="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-glow-rose transform scale-90 group-hover:scale-100 transition">
            <i data-lucide="play" class="w-5 h-5 fill-current ml-0.5"></i>
          </div>
        </div>
      </div>
      <div class="p-4 flex-1 flex flex-col justify-between">
        <div>
          <span class="text-[10px] font-bold text-rose-400 uppercase tracking-wide">${v.category}</span>
          <h4 class="text-sm font-bold text-white mt-1 line-clamp-2">${v.title}</h4>
          <p class="text-[11px] text-gray-400 mt-1.5 line-clamp-2">${v.description}</p>
        </div>
        <div class="flex items-center justify-between mt-4 pt-3 border-t border-white/5 text-[10px] text-gray-400">
          <span>${v.views}</span>
          <button onclick="openVideoPlayer('${v.id}')" class="text-rose-300 font-bold hover:text-white transition flex items-center gap-1">
            Ver clase <i data-lucide="arrow-right" class="w-3 h-3"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  if (coachGrid) coachGrid.innerHTML = html;
  if (clientGrid) clientGrid.innerHTML = html;
  if (window.lucide) lucide.createIcons();
}

function openUploadVideoModal() {
  const modal = document.getElementById('modal-upload-video');
  if (modal) modal.classList.remove('hidden');
  playSound('click');
}

function closeUploadVideoModal() {
  const modal = document.getElementById('modal-upload-video');
  if (modal) modal.classList.add('hidden');
}

function submitUploadVideo(e) {
  if (e) e.preventDefault();
  const title = document.getElementById('video-input-title').value.trim();
  const category = document.getElementById('video-input-category').value;
  const duration = document.getElementById('video-input-duration').value.trim() || '12:00 min';
  const desc = document.getElementById('video-input-desc').value.trim() || 'Nueva clase exclusiva subida por Araceli Morales.';

  if (!title) {
    alert('Por favor ingresa un título para el video.');
    return;
  }

  const newVideo = {
    id: 'v_' + Date.now(),
    title: title,
    category: category,
    duration: duration,
    thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&auto=format&fit=crop&q=80',
    views: '1 vista',
    date: 'Hace un momento',
    tag: 'Nuevo VIP',
    description: desc
  };

  AppState.videos.unshift(newVideo);
  saveState();
  closeUploadVideoModal();
  renderVideos('coach');
  showToast(`🎥 Video publicado: "${title}"`);
}

function openVideoPlayer(videoId) {
  const v = AppState.videos.find(item => item.id === videoId) || AppState.videos[0];
  const modal = document.getElementById('modal-video-player');
  const titleEl = document.getElementById('player-video-title');
  const descEl = document.getElementById('player-video-desc');
  const catEl = document.getElementById('player-video-category');
  const posterEl = document.getElementById('player-video-poster');

  if (titleEl) titleEl.textContent = v.title;
  if (descEl) descEl.textContent = v.description;
  if (catEl) catEl.textContent = `${v.category} • ${v.duration}`;
  if (posterEl) posterEl.src = v.thumbnail;

  if (modal) modal.classList.remove('hidden');
  playSound('click');
  if (window.lucide) lucide.createIcons();
}

function closeVideoPlayer() {
  const modal = document.getElementById('modal-video-player');
  if (modal) modal.classList.add('hidden');
}

// ==================== MESSAGING & CHAT ====================
function renderMessages(viewType) {
  const clientId = AppState.selectedClientId || 'sofia';
  const thread = AppState.messages[clientId] || [];

  if (viewType === 'coach') {
    const threadEl = document.getElementById('coach-chat-thread');
    const headerEl = document.getElementById('coach-chat-client-name');
    if (headerEl) headerEl.textContent = AppState.clients[clientId].name;
    if (threadEl) {
      threadEl.innerHTML = thread.map(msg => `
        <div class="flex flex-col ${msg.sender === 'coach' ? 'items-end' : 'items-start'} mb-3">
          <div class="max-w-[80%] rounded-2xl px-4 py-2.5 text-xs ${msg.sender === 'coach' ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-br-none shadow-glow-rose' : 'bg-white/[0.06] border border-white/10 text-gray-200 rounded-bl-none'}">
            ${msg.text}
          </div>
          <span class="text-[9px] text-gray-400 mt-1 px-1">${msg.time} • ${msg.sender === 'coach' ? 'Ara' : AppState.clients[clientId].name}</span>
        </div>
      `).join('');
      threadEl.scrollTop = threadEl.scrollHeight;
    }
  } else if (viewType === 'client') {
    const clientThreadEl = document.getElementById('client-chat-thread');
    if (clientThreadEl) {
      clientThreadEl.innerHTML = thread.map(msg => `
        <div class="flex flex-col ${msg.sender === 'client' ? 'items-end' : 'items-start'} mb-3">
          <div class="max-w-[80%] rounded-2xl px-4 py-2.5 text-xs ${msg.sender === 'client' ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-br-none shadow-glow-rose' : 'bg-white/[0.06] border border-white/10 text-gray-200 rounded-bl-none'}">
            ${msg.text}
          </div>
          <span class="text-[9px] text-gray-400 mt-1 px-1">${msg.time} • ${msg.sender === 'client' ? 'Tú' : 'Coach Ara'}</span>
        </div>
      `).join('');
      clientThreadEl.scrollTop = clientThreadEl.scrollHeight;
    }
  }
}

function sendCoachMessage() {
  const input = document.getElementById('coach-chat-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  const clientId = AppState.selectedClientId || 'sofia';
  if (!AppState.messages[clientId]) AppState.messages[clientId] = [];

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  AppState.messages[clientId].push({
    id: Date.now(),
    sender: 'coach',
    text: text,
    time: timeStr
  });

  input.value = '';
  saveState();
  renderMessages('coach');
  playSound('click');
}

function sendCoachVoiceNote() {
  const clientId = AppState.selectedClientId || 'sofia';
  if (!AppState.messages[clientId]) AppState.messages[clientId] = [];

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  AppState.messages[clientId].push({
    id: Date.now(),
    sender: 'coach',
    text: '🎙️ Nota de voz de Araceli (0:42s): "¡Hola hermosa! Me encantó ver cómo ejecutaste el Hip Thrust hoy, vas brutal..."',
    time: timeStr
  });

  saveState();
  renderMessages('coach');
  showToast('🎙️ Nota de voz enviada a la alumna');
}

function sendClientMessage() {
  const input = document.getElementById('client-chat-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  const clientId = 'sofia';
  if (!AppState.messages[clientId]) AppState.messages[clientId] = [];

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  AppState.messages[clientId].push({
    id: Date.now(),
    sender: 'client',
    text: text,
    time: timeStr
  });

  input.value = '';
  saveState();
  renderMessages('client');
  playSound('click');
}

// ==================== CLIENT VIEW LOGIC ====================
function switchClientTab(tabName) {
  AppState.clientTab = tabName;
  saveState();
  playSound('click');

  const tabs = ['nutrition', 'workout', 'videos', 'chat'];
  tabs.forEach(t => {
    const el = document.getElementById(`client-tab-${t}`);
    const btn = document.getElementById(`btn-client-tab-${t}`);
    if (el) el.classList.add('hidden');
    if (btn) {
      btn.classList.remove('active-tab');
      btn.classList.add('text-gray-400', 'hover:text-white');
    }
  });

  const activeEl = document.getElementById(`client-tab-${tabName}`);
  const activeBtn = document.getElementById(`btn-client-tab-${tabName}`);
  if (activeEl) activeEl.classList.remove('hidden');
  if (activeBtn) {
    activeBtn.classList.add('active-tab');
    activeBtn.classList.remove('text-gray-400');
  }

  renderClientView();
  if (window.lucide) lucide.createIcons();
}

function renderClientView() {
  const cl = AppState.clients.sofia;
  const day = AppState.selectedDay || 'Lunes';
  const dayData = (cl.days && cl.days[day]) || {
    calories: 1850, protein: 135, carbs: 180, fat: 52, meals: [],
    workout: { title: 'Día de Entrenamiento', focus: 'General', duration: '45 min', exercises: [] }
  };

  document.querySelectorAll('.client-day-indicator').forEach(el => el.textContent = day);

  const calEl = document.getElementById('client-cal-target');
  const protEl = document.getElementById('client-prot-target');
  const carbEl = document.getElementById('client-carb-target');
  const fatEl = document.getElementById('client-fat-target');
  if (calEl) calEl.textContent = dayData.calories || 1850;
  if (protEl) protEl.textContent = `${dayData.protein || 135}g`;
  if (carbEl) carbEl.textContent = `${dayData.carbs || 180}g`;
  if (fatEl) fatEl.textContent = `${dayData.fat || 52}g`;

  // Apple Rings SVG Math
  const cCal = 440;
  const targetCal = dayData.calories || 1850;
  const currentCal = Math.min(targetCal, 1420);
  const offsetCal = cCal - (currentCal / targetCal) * cCal;
  const ringCal = document.getElementById('client-ring-cal');
  if (ringCal) ringCal.style.strokeDashoffset = offsetCal;

  const cProt = 326;
  const targetProt = dayData.protein || 135;
  const currentProt = Math.min(targetProt, 112);
  const offsetProt = cProt - (currentProt / targetProt) * cProt;
  const ringProt = document.getElementById('client-ring-prot');
  if (ringProt) ringProt.style.strokeDashoffset = offsetProt;

  const cWater = 213;
  const targetWater = 3000;
  const currentWater = Math.min(targetWater, cl.waterMl || 1750);
  const offsetWater = cWater - (currentWater / targetWater) * cWater;
  const ringWater = document.getElementById('client-ring-water');
  if (ringWater) ringWater.style.strokeDashoffset = offsetWater;

  const waterCounterEl = document.getElementById('client-water-counter');
  if (waterCounterEl) waterCounterEl.textContent = `${(currentWater / 1000).toFixed(1)}L / ${(targetWater / 1000).toFixed(1)}L`;

  const clientMealsContainer = document.getElementById('client-meals-container');
  if (clientMealsContainer) {
    if (!dayData.meals || dayData.meals.length === 0) {
      clientMealsContainer.innerHTML = `<p class="text-xs text-gray-400 italic p-4 text-center">No hay comidas programadas por Ara para hoy.</p>`;
    } else {
      clientMealsContainer.innerHTML = dayData.meals.map(m => `
        <div class="p-4 rounded-2xl glass-panel border border-white/5 hover:border-rose-500/25 transition">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">${m.time}</span>
            <span class="text-xs font-bold text-white">${m.kcal} kcal</span>
          </div>
          <h4 class="text-sm font-bold text-gray-100 mt-2">${m.name}</h4>
          <div class="flex items-center gap-3 mt-2 text-[10px] text-gray-400">
            <span>Prot: <strong class="text-gray-200">${m.p}g</strong></span>
            <span>•</span>
            <span>Carbs: <strong class="text-gray-200">${m.c}g</strong></span>
            <span>•</span>
            <span>Grasas: <strong class="text-gray-200">${m.f}g</strong></span>
          </div>
        </div>
      `).join('');
    }
  }

  const wTitle = document.getElementById('client-workout-title');
  const wFocus = document.getElementById('client-workout-focus');
  const wDur = document.getElementById('client-workout-duration');
  if (wTitle) wTitle.textContent = (dayData.workout && dayData.workout.title) || 'Rutina del Día';
  if (wFocus) wFocus.textContent = (dayData.workout && dayData.workout.focus) || 'Enfoque Hipertrofia';
  if (wDur) wDur.textContent = (dayData.workout && dayData.workout.duration) || '50 min';

  const clientExContainer = document.getElementById('client-exercises-container');
  if (clientExContainer) {
    const exList = (dayData.workout && dayData.workout.exercises) || [];
    if (exList.length === 0) {
      clientExContainer.innerHTML = `<p class="text-xs text-gray-400 italic p-6 text-center">Día de descanso programado por Araceli ✨</p>`;
    } else {
      clientExContainer.innerHTML = exList.map((ex, idx) => `
        <div class="p-4 rounded-2xl glass-panel border border-white/5 flex flex-col gap-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2.5">
              <div class="w-7 h-7 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white flex items-center justify-center font-bold text-xs shadow-glow-rose">
                ${idx + 1}
              </div>
              <h4 class="text-sm font-bold text-white">${ex.name}</h4>
            </div>
            <span class="text-[11px] font-mono font-bold text-rose-300 bg-rose-500/10 px-2.5 py-1 rounded-lg border border-rose-500/20">
              Sugerido: ${ex.weight}
            </span>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div class="p-2 rounded-xl bg-black/40 border border-white/5">
              <span class="text-[9px] text-gray-400 block uppercase">Series</span>
              <strong class="text-white">${ex.sets}</strong>
            </div>
            <div class="p-2 rounded-xl bg-black/40 border border-white/5">
              <span class="text-[9px] text-gray-400 block uppercase">Repeticiones</span>
              <strong class="text-white">${ex.reps}</strong>
            </div>
            <div class="p-2 rounded-xl bg-black/40 border border-white/5">
              <span class="text-[9px] text-gray-400 block uppercase">Tu Peso Hoy</span>
              <input type="text" placeholder="${ex.weight}" class="w-full bg-transparent text-rose-300 font-bold outline-none text-xs">
            </div>
            <div class="p-2 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center">
              <button onclick="this.classList.toggle('bg-emerald-500'); this.classList.toggle('text-white'); playSound('success');" class="w-full h-full text-[10px] font-bold py-1 px-2 rounded-lg bg-white/5 hover:bg-emerald-500/30 text-gray-300 transition">
                ✓ Marcar Serie
              </button>
            </div>
          </div>
          ${ex.notes ? `<p class="text-[11px] text-gray-400 italic bg-white/[0.02] p-2 rounded-lg border border-white/5">💡 Tip de Ara: ${ex.notes}</p>` : ''}
        </div>
      `).join('');
    }
  }

  renderVideos('client');
  renderMessages('client');
  if (window.lucide) lucide.createIcons();
}

function addWater(amount) {
  const cl = AppState.clients.sofia;
  cl.waterMl = (cl.waterMl || 1750) + amount;
  if (cl.waterMl > 3500) cl.waterMl = 3500;
  saveState();
  renderClientView();
  playSound('click');
  showToast(`💧 +${amount}ml registrados (${(cl.waterMl / 1000).toFixed(1)}L total)`);
}

// Rest Timer Engine
let restInterval = null;
let restTimeLeft = 45;

function startRestTimer() {
  clearInterval(restInterval);
  restTimeLeft = 45;
  playSound('click');
  const display = document.getElementById('rest-timer-display');
  const btn = document.getElementById('btn-start-timer');
  if (btn) btn.textContent = 'En descanso...';

  restInterval = setInterval(() => {
    restTimeLeft--;
    if (display) display.textContent = `${restTimeLeft}s`;
    if (restTimeLeft <= 0) {
      clearInterval(restInterval);
      playSound('chime');
      showToast('⏰ ¡Tiempo cumplido! A la siguiente serie 💪');
      if (btn) btn.textContent = 'Iniciar Descanso (45s)';
      if (display) display.textContent = '45s';
    }
  }, 1000);
}

// Checkin Modal Logic
function openCheckinModal() {
  const m = document.getElementById('modal-checkin');
  if (m) m.classList.remove('hidden');
  playSound('click');
}

function closeCheckinModal() {
  const m = document.getElementById('modal-checkin');
  if (m) m.classList.add('hidden');
}

function submitCheckin(e) {
  if (e) e.preventDefault();
  const weight = document.getElementById('checkin-weight').value || '58.0 kg';
  closeCheckinModal();
  showToast(`📸 Check-in enviado a Ara con peso ${weight}`);
  playSound('success');

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  AppState.messages.sofia.push({
    id: Date.now(),
    sender: 'client',
    text: `📸 Check-in Semanal Enviado: Peso ${weight}, fotos de frente y espalda cargadas con éxito.`,
    time: timeStr
  });
  saveState();
}

// Pitch & Metrics Modal Logic
function openPitchModal() {
  const m = document.getElementById('modal-pitch');
  if (m) m.classList.remove('hidden');
  playSound('click');
  updatePitchCalculator();
}

function closePitchModal() {
  const m = document.getElementById('modal-pitch');
  if (m) m.classList.add('hidden');
}

function updatePitchCalculator() {
  const convSlider = document.getElementById('slider-conv');
  const priceSlider = document.getElementById('slider-price');
  if (!convSlider || !priceSlider) return;

  const convRate = parseFloat(convSlider.value) / 100;
  const price = parseInt(priceSlider.value);
  const followers = 44000;

  const totalClients = Math.round(followers * convRate);
  const monthlyGross = totalClients * price;
  const araShare = Math.round(monthlyGross * 0.70);
  const yearlyAra = araShare * 12;

  const labelConv = document.getElementById('calc-val-conv');
  const labelPrice = document.getElementById('calc-val-price');
  const labelClients = document.getElementById('calc-val-clients');
  const labelGross = document.getElementById('calc-val-gross');
  const labelAra = document.getElementById('calc-val-ara');
  const labelYearly = document.getElementById('calc-val-yearly');

  if (labelConv) labelConv.textContent = `${convSlider.value}%`;
  if (labelPrice) labelPrice.textContent = `$${price} MXN`;
  if (labelClients) labelClients.textContent = `${totalClients.toLocaleString()} alumnas`;
  if (labelGross) labelGross.textContent = `$${monthlyGross.toLocaleString()} MXN`;
  if (labelAra) labelAra.textContent = `$${araShare.toLocaleString()} MXN`;
  if (labelYearly) labelYearly.textContent = `$${yearlyAra.toLocaleString()} MXN`;
}

// Global Event Initialization
document.addEventListener('DOMContentLoaded', () => {
  navigateTo(AppState.activeView || 'portal');
});
