import rad1 from '../../../assets/img/rad1.png';
import rad2 from '../../../assets/img/rad2.png';
import rad3 from '../../../assets/img/rad3.png';

export const dataTest = [
    {
      id: 1,
      ask:'1. Paciente de 16 años con Fibrosis Quística controlado en consulta de Neumología Pediátrica. Contacto estrecho reciente de amigo con PCR SARS CoV2 (+). ¿ Cual es la conducta frente a este paciente ?',
      alt1:'Manejo expectante',
      alt2:'Indicar Oxigeno domiciliario',
      alt3:'Solicitar gases arteriales y PCR SARS CoV 2',
      alt4:'Hospitalizar inmediatamente',
      num: 'question1'
    },
    {
        id: 2,
        ask:'2. AL mismo paciente se le toma TAC pulmonar sin contraste, ¿Cual es el hallazgos radiológicos mas destacables en estas imágenes?',
        alt1:'Infiltrado intersticial Bilateral',
        alt2:'Neumonía de Lóbulo inferior izquierdo',
        alt3:'Neumotorax de Hemitorax derecho', 
        alt4:'Bronquiectasia quisticas y varicosas',
        num: 'question2',
        img1: rad1,
        img2: rad2,
    },
    {
        id: 3,
        ask:'3.	En relación a TAC pulmonar que se adjunta, de un adolescente con fiebre, tos y dificultad respiratoria hospitalizado por infección por COVID ¿ Que hallazgo de este TAC es característico de COVID 19 ?',
        alt1:'Neumotocele de Lóbulo inferior izquierdo',
        alt2:'Compromiso alveolar multifocal',
        alt3:'Nódulo pulmonar', 
        alt4:'Derrame pleural',
        num: 'question3',
        img1: rad1
    },
    {
        id: 4,
        ask:'4.	Lactante menor de 2 años, con historia de ser hijo único, madre asmática conocida, historia de sibilancias recurrentes desde los 3 meses de vida,  4 a 5 episodios que requiere necesidad de corticoides orales. Hospitalizado a los 15 meses por virus Sincicial y necesidad de ventilación  no invasiva. A los 18 meses hospitalizado por virus influenza B, con necesidad de oxigeno y corticoides sistémicos. Considerando estos antecedentes ¿cuál de las siguientes estrategias terapéuticas les parece mas razonable',
        alt1:'Salbutamol a demanda y corticoides sistémicos de rescate',
        alt2:'Budesonida + formoterol en MDI en forma intermitente',
        alt3:'Fluticasona o Budesonida en MDI en forma permanente ', 
        alt4:'Solo antileucotrienos',
        num: 'question4'
    },
    {
        id: 5,
        ask:'5.	El mismo paciente, ahora de 7 años, sigue en control por asma severa en tratamiento con corticoides inhalados + LABA + antilecutrienos que no logra control de síntomas. Presenta persistencia de crisis, necesidad de visitas de urgencia, y hospitalizaciones frecuentes. ¿Qué otras alternativas terapéuticas podríamos plantear?',
        alt1:'Agregar un antimuscarinico de acción prolongada como Tiotropio',
        alt2:'Considerar terapia biológicas',
        alt3:'Cambiar a una asociación de budesonida y formoterol', 
        alt4:'Indicar triamcinolona intrmuscular mensual',
        num: 'question5'
    },
    {
        id: 6,
        ask:'6.	En relación a paciente preescolar con historia de cuadros obstructivos recurrente, eosinofilia, y dermatitis  atopica ¿Que estudio podría ser de utilidad para confirmar sospecha de ASMA del preescolar?',
        alt1:'Realizar espirometria, Oscilometría y FeNo',
        alt2:'sudor, Inmunoglobulinas Totales, Ac Antineumococo',
        alt3:'Tomografía axial computada de tórax', 
        alt4:'deglución y/o pH metría',
        num: 'question6'
    },

    {
        id: 7,
        ask: '7. ¿Cual seria el tratamiento de elección en este paciente?',
        alt1:'Tratamiento de rescate con salbutamol y prednisona en los episodios de sibilancias',
        alt2:'Tratamiento de Rescate con fluticasona y salbutamol en los episodios de sibilancias',
        alt3:'Tratamiento de manutención con fluticasona', 
        alt4:'Tratamiento de Mantencion con inhibidos de leucotrienos',
        num: 'question7'
    },
    {
        id: 8,
        ask: '8. ¿Que opción considera ante una mala adherencia al tratamiento de manutención en este preescolar?',
        alt1:'Tratamiento de rescate con salbutamol y prednisona en los episodios de sibilancias',
        alt2:'Tratamiento de rescate con salbutamol y fluticasona en los episodios de sibilancias',
        alt3:'Tratamiento de rescate con inhibidos de leucotrienos', 
        alt4:'Tratamiento de rescate con azitromicina y salbutamol ',
        num: 'question8'
    },
    {
        id: 9,
        ask: '9. Paciente con Fibrosis Quística de 12 años homocigoto DF508, que presenta tres exacerbaciones al año, VEF1 70%, buen estado nutricional con soporte de enzimas pancreáticas y suero hipertónico. En relación al tratamiento de base  ¿cuál es la estrategia que UD recomienda?',
        alt1:'Derivar el paciente a un centro multidisciplinario',
        alt2:'Tiene indicación absoluta de uso de moduladores del CFTR como Trikafta',
        alt3:'Debe incorporar asistencia para kinesiterapia respiratoria con dispositivo Vest ', 
        alt4:'Debe considerarse derivación a centro de trasplante a la brevedad posible',
        num: 'question9'
    },
    {
        id: 10,
        ask: '10. En este mismo paciente ¿Que recomienda UD en su tratamiento de mantención? ',
        alt1:'Dado el VEF1 debe recibir azitromicina trisemanal',
        alt2:'Requiere Nebulizaciones con DNasa a diario',
        alt3:'Ejercicio fisico y rehabilitacion respiratoria son claves en su manejo', 
        alt4:'Todas las anteriores son correctas',
        num: 'question10'
    },
    {
        id: 11,
        ask: '11. Con respecto al tratamiento de exacerbaciones en pacientes con Fibrosis Quistica, la meta a lograr con el tratamiento es :',
        alt1:'Recuperar valores de función pulmonar previo a la exacerbación',
        alt2:'Erradicar el microorganismo en los cultivos',
        alt3:'Recuperar el peso previo a la exacerbación', 
        alt4:'Resolución radiográfica de las lesiones ',
        num: 'question11'
    },
    {
        id: 12,
        ask: '12. En un paciente con sd Down y obesidad que UD sospecha un trastorno respiratorio del sueño ¿ Que estudio seria el mas indicado en este paciente?',
        alt1:'La Aplicación de cuestionario sería suficiente',
        alt2:'La poligrafía portátil ayudar a detectar eventos obstructivos',
        alt3:'La polisomonografia no es posible realizar por edad', 
        alt4:'La saturometria nocturna nos permitiría diferenciar apneas centrales y obstructivas',
        num: 'question12'
    },
    {
        id: 13,
        ask: '13. En relación a la asociación de Síndrome de Apneas obstructivas del sueño (SAOS) y obesidad, señale la correcta',
        alt1:'La obesidad produce SAOS',
        alt2:'EL SAOS produce obesidad',
        alt3:'No se ha demostrado relación entre ambos', 
        alt4:'Existe una relación Bidireccional ',
        num: 'question13'
    },
    {
        id: 14,
        ask: '14. En relación al tratamiento de un paciente de 10 años con obesidad  IMC 33 y apneas obstructivas del sueño (AHÍ 12) en la polisomnografía.',
        alt1:'El tratamiento de elección debiera ser corticoides nasales',
        alt2:'El tratamiento quirúrgico con adenoamigdalectomia debiera ser la elección',
        alt3:'Se debe realizar un manejo multidisciplinario', 
        alt4:'Se debe considerar la cirugía bariátrica como parte del manejo',
        num: 'question14'
    },
    {
        id: 15,
        ask: '15. Paciente lactante  de 18 meses que presenta estigmas de dermatitis alérgica y síntomas de Rinitis Alérgica además de sibilancias recurrentes (5 episodios en su vida). ¿Que estudio podría ser mas útil para confirmar la sospecha de atopia en este  lactante?',
        alt1:'Hemograma e IgE Total',
        alt2:'Test cutáneo en el dorso',
        alt3:'Test de parche para aeroalergenos', 
        alt4:'Medir eosinófilos en secreción nasal',
        num: 'question15'
    },
    {
        id: 16,
        ask: '16. ¿Cual opción terapéutica de las siguientes le parece las más adecuada en este paciente si  no ha respondido clínicamente con Fluticasona MDI y levocetirizina permanente?',
        alt1:'No le haría cambios en su terapia de mantención',
        alt2:'Agregar Beta 2 de vida media larga',
        alt3:'Agregar fluticasona nasal para tratar su Rinitis alérgica', 
        alt4:'Indicar un purificador de aire en su habitación ',
        num: 'question16'
    },
    {
        id: 17,
        ask: '17. En relación a la etiología viral de Bronquiolitis aguda ¿ Que podemos decir diferente de bronquiolitis causada por rinovirus?',
        alt1:'Es una infección viral como cualquier otra',
        alt2:'Incrementa su riesgo de desarrollar asma bronquial',
        alt3:'Es muy leve comparado con la bronquiolitis por VRS', 
        alt4:'Es poco frecuente puesto que RV causa solo resfrios',
        num: 'question17'
    },
    {
        id: 18,
        ask: '18. En un paciente de 3 años recientemente hospitalizado con sospecha de empiema pleural que se encuentra recibiendo tratamiento antibiótico endovenoso ¿Cuál sería el tratamiento de elección en el paciente?',
        alt1:'Tratamiento antibiótico endovenoso prolongado',
        alt2:'Uso de fibrinolíticos o video toracoscopia de acuerdo a experiencia local',
        alt3:'Punciones pleurales repetidas durante las primeras 24 horas', 
        alt4:'Cirugia abierta convencional',
        num: 'question18'
    },
    {
        id: 19,
        ask: '19. ¿Cuándo sería apropiado solicitar Tomografía Axial Computada (TAC) de tórax en un paciente de 2 años que evoluciona con Neumonía complicada?',
        alt1:'Frente a la persistencia de fiebre luego de 24 horas de tratamiento',
        alt2:'Frente a la presencia de fiebre > de 39° C',
        alt3:'Frente a Hemopstisis y tos purulenta', 
        alt4:'Todo paciente con neumonía complicada amerita TAC',
        num: 'question19'
    },
    {
        id: 20,
        ask: '20. Paciente de 5 meses consulta por rinorrea, tos sin fiebre de 3 días de evolución. En las últimas 24 horas ha desarrollado polipnea y ruidos al respirar que UD identifica como sibilancias.  Se encuentra en muy buenas condiciones y no requiere oxígeno. ¿Cuál es el diagnostico inicial mas probable?',
        alt1:'Rinofaringitis viral',
        alt2:'Neumonía de la comunidad',
        alt3:'Bronquiolitis aguda', 
        alt4:'Sibilancias recurrentes',
        num: 'question20'
    },
    {
        id: 21,
        ask: '21. ¿Qué estudio podría ser de utilidad para confirmar la sospecha diagnostica en un paciente como el mencionado en la pregunta anterior?',
        alt1:'Radiografia de Torax',
        alt2:'Panel viral con IFD',
        alt3:'Hemograma, PCR, hemocultivo', 
        alt4:'Ningún examen es necesario',
        num: 'question21'
    },    
]