// =========================================================
// ARACELI MORALES | STUDIO OPERATING SYSTEM (OS 2.0)
// Engineered by OMEN Technologies • Apple HIG Compliant
// =========================================================

const INITIAL_DATA = {
  view: 'portal',
  directorTab: 'roster',
  athleteTab: 'nutrition',
  activeClientId: 'sofia',
  activeDay: 'Lunes',
  clients: {
    sofia: {
      id: 'sofia',
      name: 'Sofía Ramírez',
      age: 24,
      tagline: 'Hypertrophy & Glute Lab // Cycle 03',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80',
      weightCurrent: '58.2 kg',
      weightTarget: '56.0 kg',
      compliance: 96,
      streak: 14,
      waterMl: 1750,
      days: {
        'Lunes': {
          calories: 1850, protein: 135, carbs: 180, fat: 52,
          meals: [
            { time: '08:30', title: 'Avena Orgánica, Proteína Isolatada & Frutos Rojos', kcal: 420, p: 34, c: 54, f: 8 },
            { time: '13:30', title: 'Salmón Salvaje Sellado, Quinoa Real & Aguacate Hass', kcal: 620, p: 44, c: 56, f: 18 },
            { time: '17:00', title: 'Tortitas de Avena, Canela de Ceylán & Almendras', kcal: 310, p: 26, c: 38, f: 6 },
            { time: '20:30', title: 'Pechuga a la Parrilla en Tortilla de Nopal & Pico de Gallo', kcal: 500, p: 38, c: 26, f: 12 }
          ],
          workout: {
            title: 'GLUTE LAB // SESSION PROTOCOL',
            focus: 'Hipertrofia Glúteo Máximo & Isquiotibiales',
            duration: '55 min',
            exercises: [
              { name: 'Hip Thrust con Barra Olímpica', sets: '4 series', reps: '10-12 reps', load: '75 kg', cue: 'Pausa isométrica de 2 segundos en contracción superior. Mirada al frente.' },
              { name: 'Sentadilla Búlgara con Mancuerna', sets: '3 series', reps: '10 reps / pierna', load: '14 kg c/u', cue: 'Torso inclinado 15° hacia adelante para máxima carga glútea.' },
              { name: 'Peso Muerto Rumano con Mancuernas', sets: '4 series', reps: '12 reps', load: '22 kg c/u', cue: 'Bisagra de cadera estricta. Escápulas retraídas.' },
              { name: 'Abducciones en Máquina', sets: '3 series', reps: '15-20 reps', load: '35 kg', cue: 'Drop set al fallo mecánico en la última serie.' }
            ]
          }
        },
        'Martes': {
          calories: 1800, protein: 130, carbs: 170, fat: 50,
          meals: [
            { time: '08:30', title: 'Omelette de Claras con Espinaca Baby & Feta de Cabra', kcal: 380, p: 36, c: 14, f: 12 },
            { time: '14:00', title: 'Pechuga de Campo a las Hierbas con Camote Asado', kcal: 580, p: 48, c: 58, f: 10 },
            { time: '17:30', title: 'Yogurt Griego Griego Sin Grasa con Almendras Tostadas', kcal: 260, p: 24, c: 18, f: 8 },
            { time: '20:30', title: 'Ensalada César Fit con Pollo Crunch al Horno', kcal: 480, p: 40, c: 20, f: 14 }
          ],
          workout: {
            title: 'UPPER BODY SCULPT & TRANSVERSE CORE',
            focus: 'Deltoides Lateral + Espalda Alta + Cintura',
            duration: '45 min',
            exercises: [
              { name: 'Press Militar con Mancuerna', sets: '4 series', reps: '12 reps', load: '10 kg c/u', cue: 'Cadencia excéntrica controlada en 3 segundos.' },
              { name: 'Jalón al Pecho Agarre Neutro', sets: '4 series', reps: '12 reps', load: '32 kg', cue: 'Iniciar el movimiento deprimiendo escápulas.' },
              { name: 'Elevaciones Laterales Estilo Pájaro', sets: '3 series', reps: '15 reps', load: '6 kg c/u', cue: 'Codos ligeramente flexionados, control total.' },
              { name: 'Vacío Abdominal + Plancha T-Cross', sets: '4 series', reps: '45 segundos', load: 'Peso corporal', cue: 'Comprimir ombligo hacia la espina dorsal.' }
            ]
          }
        },
        'Miércoles': {
          calories: 1750, protein: 135, carbs: 160, fat: 48,
          meals: [
            { time: '08:30', title: 'Tostada de Masa Madre con Huevo Poché & Aguacate', kcal: 410, p: 28, c: 42, f: 14 },
            { time: '13:30', title: 'Salpicón de Res Magra con Nopal Asado & Tostadas', kcal: 540, p: 46, c: 44, f: 12 },
            { time: '17:00', title: 'Batido de Aislado de Proteína con Cacao & Plátano', kcal: 290, p: 28, c: 36, f: 4 },
            { time: '20:30', title: 'Crema de Calabacín con Filete de Robalo al Limón', kcal: 460, p: 38, c: 22, f: 10 }
          ],
          workout: {
            title: 'QUADRICIAS FOCUS & GLUTEUS MEDIUS',
            focus: 'Cadera Lateral & Firmeza de Piernas',
            duration: '50 min',
            exercises: [
              { name: 'Sentadilla Goblet con Talones Elevados', sets: '4 series', reps: '12 reps', load: '20 kg', cue: 'Profundidad anatómica completa sin colapsar rodillas.' },
              { name: 'Prensa Inclinada Pies Altos y Abiertos', sets: '4 series', reps: '12 reps', load: '90 kg', cue: 'Empuje con talones, sin despegar la pelvis.' },
              { name: 'Kickbacks en Polea para Glúteo Medio', sets: '3 series', reps: '15 reps', load: '12 kg', cue: 'Trayectoria a 45 grados para aislamiento máximo.' }
            ]
          }
        },
        'Jueves': {
          calories: 1800, protein: 130, carbs: 170, fat: 50,
          meals: [
            { time: '08:30', title: 'Bowl de Chía con Leche de Coco & Proteína Vainilla', kcal: 390, p: 30, c: 38, f: 12 },
            { time: '13:30', title: 'Pechuga Rellena de Espinacas con Arroz Jazmín', kcal: 610, p: 50, c: 54, f: 12 },
            { time: '17:00', title: 'Tortitas de Arroz Inflado con Mantequilla de Almendra', kcal: 260, p: 12, c: 30, f: 10 },
            { time: '20:30', title: 'Tataki de Atún con Semillas de Sésamo & Wok', kcal: 490, p: 44, c: 18, f: 14 }
          ],
          workout: {
            title: 'CORE CONDITIONING & METABOLIC FLUSH',
            focus: 'Gasto Calórico + Compactación Abdominal',
            duration: '40 min',
            exercises: [
              { name: 'Elevaciones de Piernas Colgada en Barra', sets: '4 series', reps: '15 reps', load: 'Peso corporal', cue: 'Cero inercia. Enrollar la pelvis hacia el pecho.' },
              { name: 'Russian Twists con Disco Olímpico', sets: '3 series', reps: '20 reps', load: '5 kg', cue: 'Rotación torácica controlada.' },
              { name: 'Intervalos Inclinados en Caminadora 12%', sets: '8 intervalos', reps: '30s on / 30s off', load: '11.5 km/h', cue: 'Ritmo cardíaco zona 4-5.' }
            ]
          }
        },
        'Viernes': {
          calories: 1900, protein: 140, carbs: 190, fat: 54,
          meals: [
            { time: '08:30', title: 'Waffles Fit de Avena, Proteína Isolatada & Berries', kcal: 450, p: 36, c: 56, f: 8 },
            { time: '13:30', title: 'Poke Bowl de Salmón, Edamames & Arroz Integral', kcal: 640, p: 42, c: 66, f: 16 },
            { time: '17:00', title: 'Manzana Verde con Canela & Batido Proteico', kcal: 270, p: 24, c: 34, f: 4 },
            { time: '20:30', title: 'Burger Fit en Pan de Nopal con Papas Horneadas', kcal: 540, p: 40, c: 40, f: 14 }
          ],
          workout: {
            title: 'MAXIMAL HYPERTROPHY // GLUTE FINISHER',
            focus: 'Pico de Carga Semanal & Moldeado',
            duration: '60 min',
            exercises: [
              { name: 'Hip Thrust con Pausa Isométrica 3s', sets: '5 series', reps: '8-10 reps', load: '80 kg', cue: 'Carga máxima controlada. Glúteo al fallo.' },
              { name: 'Sentadilla Sumo con Mancuerna Pesada', sets: '4 series', reps: '12 reps', load: '28 kg', cue: 'Apertura amplia, empujar rodillas hacia los dedos.' },
              { name: 'Step Ups en Banco sin Impulso', sets: '3 series', reps: '12 / pierna', load: '12 kg c/u', cue: 'Apoyo 100% en la pierna superior.' },
              { name: 'Banded Frog Pumps al Fallo', sets: '3 series', reps: '25 reps', load: 'Banda pesada', cue: 'Quema metabólica terminal.' }
            ]
          }
        },
        'Sábado': {
          calories: 1950, protein: 130, carbs: 210, fat: 55,
          meals: [
            { time: '09:00', title: 'Tostadas Francesas de Pan Integral & Claras de Huevo', kcal: 460, p: 32, c: 58, f: 9 },
            { time: '14:00', title: 'Arrachera Magra con Guacamole Casero & Frijol Negro', kcal: 680, p: 48, c: 48, f: 22 },
            { time: '17:30', title: 'Smoothie Antioxidante de Frutos Rojos', kcal: 280, p: 26, c: 34, f: 4 },
            { time: '21:00', title: 'Pizza Fit en Base de Avena & Pechuga de Pavo', kcal: 530, p: 38, c: 46, f: 13 }
          ],
          workout: {
            title: 'ACTIVE RECOVERY & FASCIAL RELEASE',
            focus: 'Movilidad Pélvica & Drenaje Linfático',
            duration: '35 min',
            exercises: [
              { name: 'Pigeon Pose para Piriforme Profundo', sets: '3 series', reps: '60 seg / lado', load: 'Estiramiento', cue: 'Respiración diafragmática para relajar psoas.' },
              { name: 'Liberación Miofascial con Foam Roller', sets: '3 series', reps: '90 seg / zona', load: 'Auto-masaje', cue: 'Femorales, banda iliotibial y glúteos.' },
              { name: 'Paseo al Aire Libre en Zona 2', sets: '1 serie', reps: '40 minutos', load: 'Caminata suave', cue: 'Oxigenación sin fatiga nerviosa.' }
            ]
          }
        },
        'Domingo': {
          calories: 1800, protein: 125, carbs: 180, fat: 50,
          meals: [
            { time: '09:30', title: 'Brunch: Huevos Pochados sobre Pan Campesino', kcal: 480, p: 30, c: 44, f: 18 },
            { time: '14:30', title: 'Bowl Mediterráneo de Pollo al Limón con Cuscús', kcal: 610, p: 45, c: 60, f: 14 },
            { time: '18:00', title: 'Té Matcha con Galleta Artesanal de Avena', kcal: 210, p: 8, c: 28, f: 6 },
            { time: '20:30', title: 'Caldo de Huesos con Pechuga Deshebrada & Vegetales', kcal: 450, p: 38, c: 26, f: 10 }
          ],
          workout: {
            title: 'CENTRAL NERVOUS RECHARGE & BIOMETRICS',
            focus: 'Recuperación Sistémica',
            duration: '0 min',
            exercises: [
              { name: 'Hidratación Celular 3.0 Litros', sets: 'Día completo', reps: 'Continuo', load: 'Agua + Electrolitos', cue: 'Optimizar hidratación celular.' },
              { name: 'Check-in Fotográfico Semanal', sets: '1 reporte', reps: 'Fotos + Medidas', load: 'Bóveda privada', cue: 'Enviar fotos en ayunas para ajuste de ciclo.' }
            ]
          }
        }
      }
    },
    valentina: {
      id: 'valentina',
      name: 'Valentina López',
      age: 28,
      tagline: 'Metabolic Conditioning & Lean Tone',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80',
      weightCurrent: '64.5 kg',
      weightTarget: '59.0 kg',
      compliance: 88,
      streak: 9,
      waterMl: 2100,
      days: {
        'Lunes': {
          calories: 1650, protein: 130, carbs: 140, fat: 45,
          meals: [
            { time: '08:00', title: 'Claras con Espinacas & Tostada de Centeno', kcal: 320, p: 32, c: 20, f: 6 },
            { time: '13:30', title: 'Pechuga a la Plancha con Arroz al Vapor & Brócoli', kcal: 520, p: 45, c: 45, f: 10 },
            { time: '17:00', title: 'Aislado de Proteína con Agua Helada & Nueces', kcal: 220, p: 25, c: 4, f: 10 },
            { time: '20:00', title: 'Salmón con Espárragos Verdes al Horno', kcal: 480, p: 38, c: 12, f: 18 }
          ],
          workout: {
            title: 'HIGH INTENSITY METABOLIC COND',
            focus: 'Gasto Energético & Densidad Muscular',
            duration: '50 min',
            exercises: [
              { name: 'Sentadilla con Salto Controlado', sets: '4 series', reps: '15 reps', load: 'Peso corporal', cue: 'Aterrizaje suave en antepié.' },
              { name: 'Zancadas Alternadas con Mancuerna', sets: '3 series', reps: '12 / pierna', load: '8 kg c/u', cue: 'Cadencia continua sin pausas.' },
              { name: 'Kettlebell Swings Rusos', sets: '4 series', reps: '20 reps', load: '12 kg', cue: 'Empuje explosivo de cadera.' }
            ]
          }
        },
        'Martes': { calories: 1650, protein: 130, carbs: 140, fat: 45, meals: [], workout: { title: 'Upper Body Tono', focus: 'Espalda & Brazos', duration: '45 min', exercises: [] } },
        'Miércoles': { calories: 1650, protein: 130, carbs: 140, fat: 45, meals: [], workout: { title: 'Cardio LISS', focus: 'Quema Grasa', duration: '40 min', exercises: [] } },
        'Jueves': { calories: 1650, protein: 130, carbs: 140, fat: 45, meals: [], workout: { title: 'Glúteos & Tono', focus: 'Moldeado', duration: '45 min', exercises: [] } },
        'Viernes': { calories: 1700, protein: 135, carbs: 150, fat: 45, meals: [], workout: { title: 'Circuito Completo', focus: 'Metabolismo', duration: '50 min', exercises: [] } },
        'Sábado': { calories: 1700, protein: 130, carbs: 150, fat: 45, meals: [], workout: { title: 'Movilidad', focus: 'Recuperación', duration: '30 min', exercises: [] } },
        'Domingo': { calories: 1650, protein: 125, carbs: 140, fat: 45, meals: [], workout: { title: 'Descanso Total', focus: 'Relax', duration: '0 min', exercises: [] } }
      }
    },
    camila: {
      id: 'camila',
      name: 'Camila Torres',
      age: 22,
      tagline: 'Body Recomposition & Power',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80',
      weightCurrent: '52.8 kg',
      weightTarget: '54.5 kg',
      compliance: 92,
      streak: 11,
      waterMl: 1900,
      days: {
        'Lunes': {
          calories: 2050, protein: 145, carbs: 220, fat: 58,
          meals: [
            { time: '08:30', title: 'Avena con Crema de Almendras & Proteína Isolatada', kcal: 480, p: 35, c: 60, f: 12 },
            { time: '13:30', title: 'Corte Magro de Ternera con Puré de Papa & Brócoli', kcal: 650, p: 50, c: 65, f: 16 },
            { time: '17:00', title: 'Tostadas con Panela Fresco & Pavo Orgánico', kcal: 350, p: 26, c: 40, f: 7 },
            { time: '20:30', title: 'Pasta Integral con Pollo & Pesto Ligero de Albahaca', kcal: 570, p: 40, c: 62, f: 15 }
          ],
          workout: {
            title: 'HEAVY POSTERIOR CHAIN & POWER',
            focus: 'Hipertrofia Muscular Limpia',
            duration: '60 min',
            exercises: [
              { name: 'Hip Thrust Pesado con Banda Elástica', sets: '5 series', reps: '8-10 reps', load: '70 kg', cue: 'Tensión constante durante toda la serie.' },
              { name: 'Peso Muerto Piernas Semirrígidas', sets: '4 series', reps: '10 reps', load: '50 kg', cue: 'Barra rozando tibias en todo el descenso.' }
            ]
          }
        },
        'Martes': { calories: 2000, protein: 140, carbs: 210, fat: 56, meals: [], workout: { title: 'Deltoides & Espalda', focus: 'Forma V', duration: '50 min', exercises: [] } },
        'Miércoles': { calories: 2000, protein: 140, carbs: 210, fat: 56, meals: [], workout: { title: 'Pierna & Cuádriceps', focus: 'Volumen', duration: '55 min', exercises: [] } },
        'Jueves': { calories: 2000, protein: 140, carbs: 210, fat: 56, meals: [], workout: { title: 'Movilidad Activa', focus: 'Apertura', duration: '25 min', exercises: [] } },
        'Viernes': { calories: 2100, protein: 145, carbs: 230, fat: 58, meals: [], workout: { title: 'Glúteos Aislamiento', focus: 'Bombeo', duration: '50 min', exercises: [] } },
        'Sábado': { calories: 2100, protein: 140, carbs: 220, fat: 58, meals: [], workout: { title: 'Full Body Sculpt', focus: 'Tono Total', duration: '45 min', exercises: [] } },
        'Domingo': { calories: 2000, protein: 135, carbs: 210, fat: 55, meals: [], workout: { title: 'Descanso Total', focus: 'SNC Recharge', duration: '0 min', exercises: [] } }
      }
    }
  },
  masterclasses: [
    {
      id: 'm1',
      title: 'Hip Thrust Biomechanics: Maximum Neuromuscular Glute Recruitment',
      category: 'Biomecánica & Glúteos',
      duration: '14:20 min',
      thumbnail: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&auto=format&fit=crop&q=80',
      views: '1,420 visualizaciones',
      badge: 'Masterclass 01',
      notes: 'Desglose detallado de los 3 vectores de fuerza, posición cervical neutra y rotación externa de fémures para activar 100% de fibras superiores.'
    },
    {
      id: 'm2',
      title: '15-Minute High-Density Metabolic Interval Circuit',
      category: 'Acondicionamiento',
      duration: '15:45 min',
      thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80',
      views: '980 visualizaciones',
      badge: 'Sin Equipo',
      notes: 'Protocolo de alta densidad neuromuscular para elevar la tasa metabólica basal por 24 horas sin pérdida de masa muscular.'
    },
    {
      id: 'm3',
      title: 'Nutritional Architecture: Precision Carbohydrate Cycling for Lean Glute Growth',
      category: 'Nutrición de Élite',
      duration: '11:15 min',
      thumbnail: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&auto=format&fit=crop&q=80',
      views: '2,150 visualizaciones',
      badge: 'Estrategia Nutricional',
      notes: 'Cómo alternar días de recarga de glucógeno y días de oxidación lipídica sin retención de líquidos indeseada.'
    }
  ],
  messages: {
    sofia: [
      { id: 1, sender: 'director', text: 'Sofía, revisé tu registro del lunes. Los 75kg en Hip Thrust se vieron biomecánicamente impecables. El viernes te subí a 80kg.', time: '09:15' },
      { id: 2, sender: 'athlete', text: '¡Excelente Ara! Sentí la activación en el glúteo superior como nunca. Ya tengo listos los 80kg para el viernes. ¿La avena la dejo en 55g?', time: '09:22' },
      { id: 3, sender: 'director', text: 'Exacto, mantén los 55g para asegurar glucógeno intramuscular. Hidrátate con 3L de agua mínimo hoy.', time: '09:25' }
    ],
    valentina: [
      { id: 1, sender: 'director', text: 'Valentina, ¿cómo va la hidratación matutina?', time: '10:00' },
      { id: 2, sender: 'athlete', text: 'Llevo 2.1L Ara, siguiendo la meta a la perfección.', time: '10:45' }
    ],
    camila: [
      { id: 1, sender: 'director', text: 'Camila, tu reporte de composición corporal muestra una notable definición en cintura.', time: 'Ayer' },
      { id: 2, sender: 'athlete', text: '¡Muchas gracias Ara! El plan desinflamó por completo el abdomen bajo.', time: 'Ayer' }
    ]
  }
};

// State Store with LocalStorage Persistence
let AppStore = JSON.parse(localStorage.getItem('araceli_apple_os_v4') || 'null');
if (!AppStore || !AppStore.clients || !AppStore.clients.sofia) {
  AppStore = JSON.parse(JSON.stringify(INITIAL_DATA));
  saveStore();
}

function saveStore() {
  localStorage.setItem('araceli_apple_os_v4', JSON.stringify(AppStore));
}

// Apple Taptic Engine Audio Synthesizer (Web Audio API)
let tapticAudio = null;
function playTaptic(type) {
  try {
    if (!tapticAudio) tapticAudio = new (window.AudioContext || window.webkitAudioContext)();
    if (tapticAudio.state === 'suspended') tapticAudio.resume();
    const osc = tapticAudio.createOscillator();
    const gain = tapticAudio.createGain();
    osc.connect(gain);
    gain.connect(tapticAudio.destination);
    const now = tapticAudio.currentTime;

    if (type === 'tap') {
      // 10ms crisp tactile tick
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.015);
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.015);
      osc.start(now);
      osc.stop(now + 0.015);
    } else if (type === 'select') {
      // Apple Wheel Segment Click
      osc.type = 'sine';
      osc.frequency.setValueAtTime(850, now);
      osc.frequency.exponentialRampToValueAtTime(450, now + 0.02);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);
      osc.start(now);
      osc.stop(now + 0.02);
    } else if (type === 'success') {
      // Apple Pay Double Haptic Tone
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, now);
      osc.frequency.setValueAtTime(880.00, now + 0.08);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === 'chime') {
      // Apple Watch Ring Chime
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1318.51, now);
      osc.frequency.exponentialRampToValueAtTime(1046.50, now + 0.5);
      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      osc.start(now);
      osc.stop(now + 0.5);
    }
  } catch (e) {
    // Audio context suppressed
  }
}

// Apple iOS Capsule Toast
function showAppleToast(title, subtitle = 'Live sync active across all devices') {
  const toast = document.getElementById('apple-toast');
  const titleEl = document.getElementById('apple-toast-title');
  const subEl = document.getElementById('apple-toast-sub');
  if (!toast || !titleEl) return;
  titleEl.textContent = title;
  if (subEl) subEl.textContent = subtitle;
  toast.classList.remove('opacity-0', '-translate-y-12', 'scale-95');
  toast.classList.add('opacity-100', 'translate-y-0', 'scale-100');
  playTaptic('success');
  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0', 'scale-100');
    toast.classList.add('opacity-0', '-translate-y-12', 'scale-95');
  }, 3000);
}

// ==================== SYSTEM NAVIGATION ====================
function navigateView(viewName) {
  AppStore.view = viewName;
  saveStore();
  playTaptic('select');

  const elPortal = document.getElementById('view-portal');
  const elDirector = document.getElementById('view-director');
  const elAthlete = document.getElementById('view-athlete');
  const statusPill = document.getElementById('nav-status-pill');
  const btnPortal = document.getElementById('btn-header-portal');
  const segDirector = document.getElementById('seg-btn-director');
  const segAthlete = document.getElementById('seg-btn-athlete');

  if (elPortal) elPortal.classList.add('hidden');
  if (elDirector) elDirector.classList.add('hidden');
  if (elAthlete) elAthlete.classList.add('hidden');

  if (segDirector) segDirector.classList.remove('active');
  if (segAthlete) segAthlete.classList.remove('active');
  if (btnPortal) btnPortal.classList.remove('hidden');

  if (viewName === 'portal') {
    if (elPortal) elPortal.classList.remove('hidden');
    if (statusPill) statusPill.textContent = 'Keynote Portal // System 2.0';
    if (btnPortal) btnPortal.classList.add('hidden');
  } else if (viewName === 'director') {
    if (elDirector) elDirector.classList.remove('hidden');
    if (statusPill) statusPill.textContent = 'Director Console // Araceli Morales';
    if (segDirector) segDirector.classList.add('active');
    renderDirectorConsole();
  } else if (viewName === 'athlete') {
    if (elAthlete) elAthlete.classList.remove('hidden');
    if (statusPill) statusPill.textContent = 'Athlete Environment // Sofía Ramírez';
    if (segAthlete) segAthlete.classList.add('active');
    renderAthleteExperience();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (window.lucide) lucide.createIcons();
}

// ==================== DIRECTOR CONSOLE LOGIC ====================
function switchDirectorTab(tabName) {
  AppStore.directorTab = tabName;
  saveStore();
  playTaptic('select');

  const tabs = ['roster', 'masterclass', 'messages', 'financials'];
  tabs.forEach(t => {
    const el = document.getElementById(`director-tab-${t}`);
    const btn = document.getElementById(`btn-dir-tab-${t}`);
    if (el) el.classList.add('hidden');
    if (btn) btn.classList.remove('active');
  });

  const activeEl = document.getElementById(`director-tab-${tabName}`);
  const activeBtn = document.getElementById(`btn-dir-tab-${tabName}`);
  if (activeEl) activeEl.classList.remove('hidden');
  if (activeBtn) activeBtn.classList.add('active');

  if (tabName === 'roster') renderDirectorEditor();
  if (tabName === 'masterclass') renderMasterclasses('director');
  if (tabName === 'messages') renderMessages('director');
  if (window.lucide) lucide.createIcons();
}

function selectClient(clientId) {
  AppStore.activeClientId = clientId;
  saveStore();
  playTaptic('tap');
  renderDirectorRoster();
  renderDirectorEditor();
}

function selectDay(dayName) {
  AppStore.activeDay = dayName;
  saveStore();
  playTaptic('tap');

  document.querySelectorAll('.apple-day-pill').forEach(btn => {
    if (btn.dataset.day === dayName) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  if (AppStore.view === 'director') {
    renderDirectorEditor();
  } else if (AppStore.view === 'athlete') {
    renderAthleteExperience();
  }
}

function renderDirectorConsole() {
  renderDirectorRoster();
  renderDirectorEditor();
  renderMasterclasses('director');
  renderMessages('director');
}

function renderDirectorRoster() {
  const container = document.getElementById('director-roster-container');
  if (!container) return;

  const clientKeys = Object.keys(AppStore.clients);
  container.innerHTML = clientKeys.map(k => {
    const cl = AppStore.clients[k];
    const isSelected = cl.id === AppStore.activeClientId;
    return `
      <div onclick="selectClient('${cl.id}')" class="p-3.5 rounded-2xl cursor-pointer transition-all duration-200 border ${isSelected ? 'bg-white/[0.08] border-rose-500/50 shadow-[0_4px_20px_rgba(255,45,85,0.25)]' : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05]'}">
        <div class="flex items-center gap-3">
          <div class="relative shrink-0">
            <img src="${cl.avatar}" alt="${cl.name}" class="w-11 h-11 rounded-full object-cover border ${isSelected ? 'border-rose-400' : 'border-white/10'}">
            <span class="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-black"></span>
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <h4 class="text-xs font-bold text-white truncate">${cl.name}</h4>
              <span class="text-[10px] font-mono font-bold text-rose-300 bg-rose-500/15 px-2 py-0.5 rounded-full border border-rose-500/25">${cl.compliance}% COMPLIANCE</span>
            </div>
            <p class="text-[11px] text-neutral-400 truncate mt-0.5">${cl.tagline}</p>
            <div class="flex items-center gap-3 mt-1.5 text-[10px] text-neutral-400 font-mono">
              <span>WEIGHT: <strong class="text-white">${cl.weightCurrent}</strong></span>
              <span>•</span>
              <span class="text-amber-300">STREAK: ${cl.streak}D</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderDirectorEditor() {
  const cl = AppStore.clients[AppStore.activeClientId] || AppStore.clients.sofia;
  const day = AppStore.activeDay || 'Lunes';
  const dayData = (cl.days && cl.days[day]) || {
    calories: 1850, protein: 135, carbs: 180, fat: 52, meals: [],
    workout: { title: 'Training Session', focus: 'Hypertrophy', duration: '50 min', exercises: [] }
  };

  const nameEl = document.getElementById('dir-editor-client-name');
  const tagEl = document.getElementById('dir-editor-client-tag');
  const dayEl = document.getElementById('dir-editor-active-day');
  if (nameEl) nameEl.textContent = cl.name;
  if (tagEl) tagEl.textContent = `${cl.tagline} • Weight: ${cl.weightCurrent}`;
  if (dayEl) dayEl.textContent = day.toUpperCase();

  const inCal = document.getElementById('input-dir-cal');
  const inProt = document.getElementById('input-dir-prot');
  const inCarb = document.getElementById('input-dir-carb');
  const inFat = document.getElementById('input-dir-fat');
  if (inCal) inCal.value = dayData.calories || 1850;
  if (inProt) inProt.value = dayData.protein || 135;
  if (inCarb) inCarb.value = dayData.carbs || 180;
  if (inFat) inFat.value = dayData.fat || 52;

  const mealsList = document.getElementById('dir-meals-list');
  if (mealsList) {
    if (!dayData.meals || dayData.meals.length === 0) {
      mealsList.innerHTML = `<p class="text-xs text-neutral-500 italic py-3 text-center">No meal entries logged for ${day}.</p>`;
    } else {
      mealsList.innerHTML = dayData.meals.map((m, idx) => `
        <div class="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-white/15 transition">
          <div class="flex-1 min-w-0 pr-3">
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-rose-300 font-bold">${m.time}</span>
              <span class="text-xs font-semibold text-white truncate">${m.title}</span>
            </div>
            <p class="text-[10px] font-mono text-neutral-400 mt-1">${m.kcal} kcal • P: ${m.p}g | C: ${m.c}g | F: ${m.f}g</p>
          </div>
          <button onclick="deleteMealEntry(${idx})" class="text-neutral-500 hover:text-rose-400 p-1 rounded-lg transition" title="Delete entry">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      `).join('');
    }
  }

  const inWTitle = document.getElementById('input-dir-workout-title');
  const inWFocus = document.getElementById('input-dir-workout-focus');
  const inWDuration = document.getElementById('input-dir-workout-duration');
  if (inWTitle) inWTitle.value = (dayData.workout && dayData.workout.title) || '';
  if (inWFocus) inWFocus.value = (dayData.workout && dayData.workout.focus) || '';
  if (inWDuration) inWDuration.value = (dayData.workout && dayData.workout.duration) || '';

  const exList = document.getElementById('dir-exercises-list');
  if (exList) {
    const exercises = (dayData.workout && dayData.workout.exercises) || [];
    if (exercises.length === 0) {
      exList.innerHTML = `<p class="text-xs text-neutral-500 italic py-4 text-center">Scheduled recovery day.</p>`;
    } else {
      exList.innerHTML = exercises.map((ex, idx) => `
        <div class="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex flex-col gap-2.5">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-white flex items-center gap-2">
              <span class="w-5 h-5 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center text-[10px] font-mono font-bold">${idx + 1}</span>
              ${ex.name}
            </span>
            <button onclick="deleteExerciseEntry(${idx})" class="text-neutral-500 hover:text-rose-400 transition">
              <i data-lucide="x" class="w-3.5 h-3.5"></i>
            </button>
          </div>
          <div class="grid grid-cols-3 gap-2 text-[11px] font-mono">
            <div class="bg-black/40 p-2 rounded-xl border border-white/5">
              <span class="text-[9px] text-neutral-400 uppercase block">Sets</span>
              <strong class="text-white">${ex.sets}</strong>
            </div>
            <div class="bg-black/40 p-2 rounded-xl border border-white/5">
              <span class="text-[9px] text-neutral-400 uppercase block">Reps</span>
              <strong class="text-white">${ex.reps}</strong>
            </div>
            <div class="bg-black/40 p-2 rounded-xl border border-white/5">
              <span class="text-[9px] text-neutral-400 uppercase block">Target Load</span>
              <strong class="text-rose-300">${ex.load}</strong>
            </div>
          </div>
          ${ex.cue ? `<p class="text-[11px] text-neutral-400 bg-white/[0.02] p-2 rounded-xl border border-white/5">Technical Cue: <span class="text-neutral-200">${ex.cue}</span></p>` : ''}
        </div>
      `).join('');
    }
  }

  if (window.lucide) lucide.createIcons();
}

function saveDirectorNutrition() {
  const cl = AppStore.clients[AppStore.activeClientId];
  const day = AppStore.activeDay;
  if (!cl || !cl.days || !cl.days[day]) return;

  cl.days[day].calories = parseInt(document.getElementById('input-dir-cal').value) || 1850;
  cl.days[day].protein = parseInt(document.getElementById('input-dir-prot').value) || 135;
  cl.days[day].carbs = parseInt(document.getElementById('input-dir-carb').value) || 180;
  cl.days[day].fat = parseInt(document.getElementById('input-dir-fat').value) || 52;

  saveStore();
  showAppleToast(`Nutritional Architecture Committed`, `${day} targets updated for ${cl.name}`);
}

function saveDirectorWorkout() {
  const cl = AppStore.clients[AppStore.activeClientId];
  const day = AppStore.activeDay;
  if (!cl || !cl.days || !cl.days[day]) return;

  const title = document.getElementById('input-dir-workout-title').value.trim() || 'Custom Session Protocol';
  const focus = document.getElementById('input-dir-workout-focus').value.trim() || 'Hypertrophy';
  const duration = document.getElementById('input-dir-workout-duration').value.trim() || '50 min';

  if (!cl.days[day].workout) cl.days[day].workout = { exercises: [] };
  cl.days[day].workout.title = title;
  cl.days[day].workout.focus = focus;
  cl.days[day].workout.duration = duration;

  saveStore();
  showAppleToast(`Session Protocol Committed`, `${title} published to ${cl.name}`);
}

function addMealPrompt() {
  const cl = AppStore.clients[AppStore.activeClientId];
  const day = AppStore.activeDay;
  if (!cl || !cl.days || !cl.days[day]) return;

  const title = prompt('Meal Title:', 'Pre-Workout Whey & Rice Cakes');
  if (!title) return;
  const time = prompt('Scheduled Time (24h or AM/PM):', '16:30') || '16:30';
  const kcal = parseInt(prompt('Target Calories (kcal):', '320')) || 320;
  const p = parseInt(prompt('Protein (g):', '28')) || 28;

  if (!cl.days[day].meals) cl.days[day].meals = [];
  cl.days[day].meals.push({ time, title, kcal, p, c: 35, f: 6 });

  saveStore();
  renderDirectorEditor();
  showAppleToast('Meal Entry Appended');
}

function deleteMealEntry(idx) {
  const cl = AppStore.clients[AppStore.activeClientId];
  const day = AppStore.activeDay;
  if (!cl || !cl.days || !cl.days[day] || !cl.days[day].meals) return;
  cl.days[day].meals.splice(idx, 1);
  saveStore();
  renderDirectorEditor();
}

function addExercisePrompt() {
  const cl = AppStore.clients[AppStore.activeClientId];
  const day = AppStore.activeDay;
  if (!cl || !cl.days || !cl.days[day]) return;

  const name = prompt('Exercise Name:', 'Barbell Glute Bridge');
  if (!name) return;
  const sets = prompt('Sets:', '4 series') || '4 series';
  const reps = prompt('Rep Range:', '10-12 reps') || '10-12 reps';
  const load = prompt('Target Load (kg):', '70 kg') || '70 kg';
  const cue = prompt('Technical Cue:', 'Hold peak isometric contraction for 2 seconds.') || '';

  if (!cl.days[day].workout) cl.days[day].workout = { title: 'Session', focus: '', duration: '45 min', exercises: [] };
  if (!cl.days[day].workout.exercises) cl.days[day].workout.exercises = [];

  cl.days[day].workout.exercises.push({ name, sets, reps, load, cue });
  saveStore();
  renderDirectorEditor();
  showAppleToast('Exercise Block Appended');
}

function deleteExerciseEntry(idx) {
  const cl = AppStore.clients[AppStore.activeClientId];
  const day = AppStore.activeDay;
  if (!cl || !cl.days || !cl.days[day] || !cl.days[day].workout || !cl.days[day].workout.exercises) return;
  cl.days[day].workout.exercises.splice(idx, 1);
  saveStore();
  renderDirectorEditor();
}

// ==================== MASTERCLASS MEDIA STUDIO ====================
function renderMasterclasses(viewMode) {
  const containerDir = document.getElementById('dir-masterclass-grid');
  const containerAth = document.getElementById('ath-masterclass-grid');

  const html = AppStore.masterclasses.map(m => `
    <div class="rounded-3xl overflow-hidden apple-glass apple-glass-card flex flex-col group cursor-pointer" onclick="openMasterclassPlayer('${m.id}')">
      <div class="relative aspect-video w-full overflow-hidden">
        <img src="${m.thumbnail}" alt="${m.title}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        <span class="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-[10px] font-mono font-bold text-white border border-white/10">
          ${m.duration}
        </span>
        <span class="absolute top-3 left-3 px-3 py-1 rounded-full bg-rose-500 text-white text-[9px] font-bold uppercase tracking-wider shadow">
          ${m.badge}
        </span>
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-200">
          <div class="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-[0_0_25px_rgba(255,45,85,0.6)] transform scale-90 group-hover:scale-100 transition">
            <i data-lucide="play" class="w-5 h-5 fill-current ml-0.5"></i>
          </div>
        </div>
      </div>
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span class="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-widest">${m.category}</span>
          <h4 class="text-sm font-bold text-white mt-1.5 line-clamp-2 leading-snug">${m.title}</h4>
          <p class="text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">${m.notes}</p>
        </div>
        <div class="flex items-center justify-between mt-5 pt-3 border-t border-white/5 text-[10px] font-mono text-neutral-400">
          <span>${m.views}</span>
          <span class="text-rose-300 font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition">
            Launch Film <i data-lucide="arrow-right" class="w-3 h-3"></i>
          </span>
        </div>
      </div>
    </div>
  `).join('');

  if (containerDir) containerDir.innerHTML = html;
  if (containerAth) containerAth.innerHTML = html;
  if (window.lucide) lucide.createIcons();
}

function openMasterclassModal() {
  const modal = document.getElementById('modal-upload-masterclass');
  if (modal) modal.classList.remove('hidden');
  playTaptic('tap');
}

function closeMasterclassModal() {
  const modal = document.getElementById('modal-upload-masterclass');
  if (modal) modal.classList.add('hidden');
}

function submitMasterclass(e) {
  if (e) e.preventDefault();
  const title = document.getElementById('mc-input-title').value.trim();
  const category = document.getElementById('mc-input-category').value;
  const duration = document.getElementById('mc-input-duration').value.trim() || '14:00 min';
  const notes = document.getElementById('mc-input-notes').value.trim() || 'Bespoke masterclass directed by Araceli Morales.';

  if (!title) return;

  const newClass = {
    id: 'mc_' + Date.now(),
    title: title,
    category: category,
    duration: duration,
    thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80',
    views: '1 view',
    badge: 'Exclusive',
    notes: notes
  };

  AppStore.masterclasses.unshift(newClass);
  saveStore();
  closeMasterclassModal();
  renderMasterclasses('director');
  showAppleToast(`Masterclass Published`, title);
}

function openMasterclassPlayer(mcId) {
  const mc = AppStore.masterclasses.find(item => item.id === mcId) || AppStore.masterclasses[0];
  const modal = document.getElementById('modal-masterclass-player');
  const titleEl = document.getElementById('player-mc-title');
  const descEl = document.getElementById('player-mc-desc');
  const catEl = document.getElementById('player-mc-cat');
  const posterEl = document.getElementById('player-mc-poster');

  if (titleEl) titleEl.textContent = mc.title;
  if (descEl) descEl.textContent = mc.notes;
  if (catEl) catEl.textContent = `${mc.category.toUpperCase()} • ${mc.duration}`;
  if (posterEl) posterEl.src = mc.thumbnail;

  if (modal) modal.classList.remove('hidden');
  playTaptic('tap');
  if (window.lucide) lucide.createIcons();
}

function closeMasterclassPlayer() {
  const modal = document.getElementById('modal-masterclass-player');
  if (modal) modal.classList.add('hidden');
}

// ==================== ENCRYPTED DIRECT LINE (iMessage) ====================
function renderMessages(viewType) {
  const clientId = AppStore.activeClientId || 'sofia';
  const thread = AppStore.messages[clientId] || [];

  if (viewType === 'director') {
    const threadEl = document.getElementById('dir-chat-thread');
    const headerName = document.getElementById('dir-chat-client-name');
    if (headerName) headerName.textContent = AppStore.clients[clientId].name;
    if (threadEl) {
      threadEl.innerHTML = thread.map(msg => `
        <div class="flex flex-col ${msg.sender === 'director' ? 'items-end' : 'items-start'} mb-3">
          <div class="max-w-[78%] rounded-2xl px-4 py-2.5 text-xs ${msg.sender === 'director' ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-br-sm shadow-[0_4px_15px_rgba(255,45,85,0.3)]' : 'bg-white/[0.08] border border-white/10 text-neutral-100 rounded-bl-sm'}">
            ${msg.text}
          </div>
          <span class="text-[9px] font-mono text-neutral-500 mt-1 px-1">${msg.time} • ${msg.sender === 'director' ? 'Delivered by Araceli' : AppStore.clients[clientId].name}</span>
        </div>
      `).join('');
      threadEl.scrollTop = threadEl.scrollHeight;
    }
  } else if (viewType === 'athlete') {
    const athThreadEl = document.getElementById('ath-chat-thread');
    if (athThreadEl) {
      athThreadEl.innerHTML = thread.map(msg => `
        <div class="flex flex-col ${msg.sender === 'athlete' ? 'items-end' : 'items-start'} mb-3">
          <div class="max-w-[78%] rounded-2xl px-4 py-2.5 text-xs ${msg.sender === 'athlete' ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-br-sm shadow-[0_4px_15px_rgba(255,45,85,0.3)]' : 'bg-white/[0.08] border border-white/10 text-neutral-100 rounded-bl-sm'}">
            ${msg.text}
          </div>
          <span class="text-[9px] font-mono text-neutral-500 mt-1 px-1">${msg.time} • ${msg.sender === 'athlete' ? 'Delivered' : 'Coach Araceli'}</span>
        </div>
      `).join('');
      athThreadEl.scrollTop = athThreadEl.scrollHeight;
    }
  }
}

function sendDirectorMessage() {
  const input = document.getElementById('dir-chat-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  const clientId = AppStore.activeClientId || 'sofia';
  if (!AppStore.messages[clientId]) AppStore.messages[clientId] = [];

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  AppStore.messages[clientId].push({
    id: Date.now(),
    sender: 'director',
    text: text,
    time: timeStr
  });

  input.value = '';
  saveStore();
  renderMessages('director');
  playTaptic('tap');
}

function sendDirectorVoiceMemo() {
  const clientId = AppStore.activeClientId || 'sofia';
  if (!AppStore.messages[clientId]) AppStore.messages[clientId] = [];

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  AppStore.messages[clientId].push({
    id: Date.now(),
    sender: 'director',
    text: '🎙️ Voice Memo from Araceli (0:44s): "Sofia, I reviewed your hip thrust angle. Excellent pelvic lock. Keep the ribcage anchored on the top phase."',
    time: timeStr
  });

  saveStore();
  renderMessages('director');
  showAppleToast('Voice Memo Dispatched', 'Delivered to athlete thread');
}

function sendAthleteMessage() {
  const input = document.getElementById('ath-chat-input');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  const clientId = 'sofia';
  if (!AppStore.messages[clientId]) AppStore.messages[clientId] = [];

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  AppStore.messages[clientId].push({
    id: Date.now(),
    sender: 'athlete',
    text: text,
    time: timeStr
  });

  input.value = '';
  saveStore();
  renderMessages('athlete');
  playTaptic('tap');
}

// ==================== ATHLETE ENVIRONMENT LOGIC ====================
function switchAthleteTab(tabName) {
  AppStore.athleteTab = tabName;
  saveStore();
  playTaptic('select');

  const tabs = ['nutrition', 'training', 'masterclasses', 'directline'];
  tabs.forEach(t => {
    const el = document.getElementById(`athlete-tab-${t}`);
    const btn = document.getElementById(`btn-ath-tab-${t}`);
    if (el) el.classList.add('hidden');
    if (btn) btn.classList.remove('active');
  });

  const activeEl = document.getElementById(`athlete-tab-${tabName}`);
  const activeBtn = document.getElementById(`btn-ath-tab-${tabName}`);
  if (activeEl) activeEl.classList.remove('hidden');
  if (activeBtn) activeBtn.classList.add('active');

  renderAthleteExperience();
  if (window.lucide) lucide.createIcons();
}

function renderAthleteExperience() {
  const cl = AppStore.clients.sofia;
  const day = AppStore.activeDay || 'Lunes';
  const dayData = (cl.days && cl.days[day]) || {
    calories: 1850, protein: 135, carbs: 180, fat: 52, meals: [],
    workout: { title: 'Session Protocol', focus: 'Hypertrophy', duration: '50 min', exercises: [] }
  };

  document.querySelectorAll('.ath-day-indicator').forEach(el => el.textContent = day);

  const calEl = document.getElementById('ath-cal-val');
  const protEl = document.getElementById('ath-prot-val');
  const carbEl = document.getElementById('ath-carb-val');
  const fatEl = document.getElementById('ath-fat-val');
  if (calEl) calEl.textContent = dayData.calories || 1850;
  if (protEl) protEl.textContent = `${dayData.protein || 135}g`;
  if (carbEl) carbEl.textContent = `${dayData.carbs || 180}g`;
  if (fatEl) fatEl.textContent = `${dayData.fat || 52}g`;

  // Apple Watch Rings Calculations
  const cCal = 440;
  const targetCal = dayData.calories || 1850;
  const currentCal = Math.min(targetCal, 1420);
  const offsetCal = cCal - (currentCal / targetCal) * cCal;
  const ringCal = document.getElementById('ath-ring-cal');
  if (ringCal) ringCal.style.strokeDashoffset = offsetCal;

  const cProt = 326;
  const targetProt = dayData.protein || 135;
  const currentProt = Math.min(targetProt, 112);
  const offsetProt = cProt - (currentProt / targetProt) * cProt;
  const ringProt = document.getElementById('ath-ring-prot');
  if (ringProt) ringProt.style.strokeDashoffset = offsetProt;

  const cWater = 213;
  const targetWater = 3000;
  const currentWater = Math.min(targetWater, cl.waterMl || 1750);
  const offsetWater = cWater - (currentWater / targetWater) * cWater;
  const ringWater = document.getElementById('ath-ring-water');
  if (ringWater) ringWater.style.strokeDashoffset = offsetWater;

  const waterStat = document.getElementById('ath-water-stat');
  if (waterStat) waterStat.textContent = `${(currentWater / 1000).toFixed(1)}L / ${(targetWater / 1000).toFixed(1)}L`;

  const mealsBox = document.getElementById('ath-meals-container');
  if (mealsBox) {
    if (!dayData.meals || dayData.meals.length === 0) {
      mealsBox.innerHTML = `<p class="text-xs text-neutral-500 italic p-6 text-center">No meal assignments for ${day}.</p>`;
    } else {
      mealsBox.innerHTML = dayData.meals.map(m => `
        <div class="p-5 rounded-3xl apple-glass border border-white/5 hover:border-rose-500/30 transition">
          <div class="flex items-center justify-between">
            <span class="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-white/10 text-rose-300">${m.time}</span>
            <span class="text-xs font-mono font-bold text-white">${m.kcal} kcal</span>
          </div>
          <h4 class="text-sm font-bold text-white mt-2.5 leading-snug">${m.title}</h4>
          <div class="flex items-center gap-3 mt-3 text-[10px] font-mono text-neutral-400">
            <span>PROTEIN: <strong class="text-white">${m.p}g</strong></span>
            <span>•</span>
            <span>CARBS: <strong class="text-white">${m.c}g</strong></span>
            <span>•</span>
            <span>FATS: <strong class="text-white">${m.f}g</strong></span>
          </div>
        </div>
      `).join('');
    }
  }

  const wTitle = document.getElementById('ath-workout-title');
  const wFocus = document.getElementById('ath-workout-focus');
  const wDur = document.getElementById('ath-workout-dur');
  if (wTitle) wTitle.textContent = (dayData.workout && dayData.workout.title) || 'Scheduled Protocol';
  if (wFocus) wFocus.textContent = (dayData.workout && dayData.workout.focus) || 'Hypertrophy';
  if (wDur) wDur.textContent = (dayData.workout && dayData.workout.duration) || '50 min';

  const exBox = document.getElementById('ath-exercises-container');
  if (exBox) {
    const exList = (dayData.workout && dayData.workout.exercises) || [];
    if (exList.length === 0) {
      exBox.innerHTML = `<p class="text-xs text-neutral-500 italic p-8 text-center">Scheduled Central Nervous System Recovery.</p>`;
    } else {
      exBox.innerHTML = exList.map((ex, idx) => `
        <div class="p-5 rounded-3xl apple-glass border border-white/5 flex flex-col gap-3.5">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-7 h-7 rounded-full bg-rose-500/20 text-rose-300 flex items-center justify-center font-mono font-bold text-xs">
                ${idx + 1}
              </div>
              <h4 class="text-sm font-bold text-white">${ex.name}</h4>
            </div>
            <span class="text-[11px] font-mono font-bold text-rose-300 bg-rose-500/10 px-3 py-1 rounded-xl border border-rose-500/20">
              TARGET: ${ex.load}
            </span>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
            <div class="p-2.5 rounded-xl bg-black/40 border border-white/5">
              <span class="text-[9px] text-neutral-400 block uppercase">Sets</span>
              <strong class="text-white text-xs">${ex.sets}</strong>
            </div>
            <div class="p-2.5 rounded-xl bg-black/40 border border-white/5">
              <span class="text-[9px] text-neutral-400 block uppercase">Reps</span>
              <strong class="text-white text-xs">${ex.reps}</strong>
            </div>
            <div class="p-2.5 rounded-xl bg-black/40 border border-white/5">
              <span class="text-[9px] text-neutral-400 block uppercase">Logged Load</span>
              <input type="text" placeholder="${ex.load}" class="w-full bg-transparent text-rose-300 font-bold outline-none text-xs">
            </div>
            <div class="p-2.5 rounded-xl bg-black/40 border border-white/5 flex items-center justify-center">
              <button onclick="this.classList.toggle('bg-emerald-500'); this.classList.toggle('text-white'); playTaptic('success');" class="w-full h-full text-[10px] font-bold py-1.5 px-2 rounded-lg bg-white/5 hover:bg-emerald-500/20 text-neutral-300 transition">
                ✓ Check Set
              </button>
            </div>
          </div>
          ${ex.cue ? `<p class="text-[11px] text-neutral-400 bg-white/[0.02] p-2.5 rounded-xl border border-white/5">Coach Araceli: <span class="text-neutral-200">${ex.cue}</span></p>` : ''}
        </div>
      `).join('');
    }
  }

  renderMasterclasses('athlete');
  renderMessages('athlete');
  if (window.lucide) lucide.createIcons();
}

function addWater(amount) {
  const cl = AppStore.clients.sofia;
  cl.waterMl = (cl.waterMl || 1750) + amount;
  if (cl.waterMl > 3500) cl.waterMl = 3500;
  saveStore();
  renderAthleteExperience();
  playTaptic('tap');
  showAppleToast(`+${amount}ml Hydration Registered`, `Total: ${(cl.waterMl / 1000).toFixed(1)}L / 3.0L Target`);
}

// Apple Rest Interval Timer
let restInterval = null;
let restTimeLeft = 45;

function startRestInterval() {
  clearInterval(restInterval);
  restTimeLeft = 45;
  playTaptic('tap');
  const display = document.getElementById('ath-rest-display');
  const btn = document.getElementById('btn-start-rest');
  if (btn) btn.textContent = 'Interval in progress...';

  restInterval = setInterval(() => {
    restTimeLeft--;
    if (display) display.textContent = `${restTimeLeft}s`;
    if (restTimeLeft <= 0) {
      clearInterval(restInterval);
      playTaptic('chime');
      showAppleToast('Rest Interval Complete', 'Proceed to next working set');
      if (btn) btn.textContent = 'Start 45s Rest Interval';
      if (display) display.textContent = '45s';
    }
  }, 1000);
}

// Weekly Check-in Sheet
function openCheckinSheet() {
  const m = document.getElementById('modal-checkin-sheet');
  if (m) m.classList.remove('hidden');
  playTaptic('tap');
}

function closeCheckinSheet() {
  const m = document.getElementById('modal-checkin-sheet');
  if (m) m.classList.add('hidden');
}

function submitCheckinSheet(e) {
  if (e) e.preventDefault();
  const weight = document.getElementById('checkin-weight-input').value || '58.0 kg';
  closeCheckinSheet();
  showAppleToast('Check-in Vault Encrypted', 'Report securely delivered to Araceli');
  playTaptic('success');

  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  AppStore.messages.sofia.push({
    id: Date.now(),
    sender: 'athlete',
    text: `📸 Biometric Check-in Transmitted: Morning Fasting Weight ${weight}. Front, lateral and posterior progression scans verified.`,
    time: timeStr
  });
  saveStore();
}

// Financial Model & Calculator
function openFinancialModal() {
  const m = document.getElementById('modal-financial-model');
  if (m) m.classList.remove('hidden');
  playTaptic('tap');
  updateFinancialModel();
}

function closeFinancialModal() {
  const m = document.getElementById('modal-financial-model');
  if (m) m.classList.add('hidden');
}

function updateFinancialModel() {
  const convSlider = document.getElementById('fin-slider-conv');
  const priceSlider = document.getElementById('fin-slider-price');
  if (!convSlider || !priceSlider) return;

  const convRate = parseFloat(convSlider.value) / 100;
  const price = parseInt(priceSlider.value);
  const audience = 44000;

  const athletes = Math.round(audience * convRate);
  const monthlyGross = athletes * price;
  const araShare = Math.round(monthlyGross * 0.70);
  const annualAra = araShare * 12;

  const lblConv = document.getElementById('fin-lbl-conv');
  const lblPrice = document.getElementById('fin-lbl-price');
  const lblAthletes = document.getElementById('fin-lbl-athletes');
  const lblGross = document.getElementById('fin-lbl-gross');
  const lblAra = document.getElementById('fin-lbl-ara');
  const lblAnnual = document.getElementById('fin-lbl-annual');

  if (lblConv) lblConv.textContent = `${convSlider.value}%`;
  if (lblPrice) lblPrice.textContent = `$${price} MXN`;
  if (lblAthletes) lblAthletes.textContent = `${athletes.toLocaleString()} Athletes`;
  if (lblGross) lblGross.textContent = `$${monthlyGross.toLocaleString()} MXN`;
  if (lblAra) lblAra.textContent = `$${araShare.toLocaleString()} MXN`;
  if (lblAnnual) lblAnnual.textContent = `$${annualAra.toLocaleString()} MXN`;
}

// Bootstrap
document.addEventListener('DOMContentLoaded', () => {
  navigateView(AppStore.view || 'portal');
});
