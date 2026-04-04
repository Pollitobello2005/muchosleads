import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import './JobDetails.css';

const JobDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="job-details-container">
            <SEO title="Elite B2B Sales Executive | MuchosLeads Careers" />
            <Navbar />
            
            <main className="job-details-main">
                <div className="job-details-header">
                    <div className="container">
                        <Link to="/jobs" className="back-link">&larr; Back to Open Roles</Link>
                        <div className="job-meta">
                            <span className="meta-tag">Sales</span>
                            <span className="meta-tag type">100% Commission (Performance-Based)</span>
                            <span className="meta-tag location">Remote</span>
                        </div>
                        <h1 className="job-title">Elite B2B Appointment Setter (SDR)</h1>
                        <p className="job-subtitle">Únete a una empresa que escala aceleradamente prospectando operaciones B2B y gana comisiones masivas por cada oportunidad de negocio que agendes.</p>
                    </div>
                </div>

                <div className="job-content container">
                    <div className="job-description">
                        <h2>La Oportunidad</h2>
                        <p>Somos una infraestructura de crecimiento B2B que está escalando a una velocidad brutal, respaldada por <em>founders</em> con experiencia en aceleradoras de primer nivel. Nos dedicamos a <strong>construir sistemas predecibles de adquisición de clientes y escalar operaciones <em>outbound</em></strong>.</p>
                        <p>Nuestro ticket promedio es de <strong>$5,000 USD</strong> y sabemos que el oxígeno de cualquier negocio es la atención de su mercado. Lo que esto significa para ti es una <strong>oportunidad de ingresos masiva y altamente competitiva</strong> si eres un cazador nato enfocado en prospectar y agendar reuniones con precisión.</p>
                        <p>Si buscas un "sueldito base" cómodo para esconderte manejando excéles aburridos, cierra esta pestaña. Si eres un depredador comercial que quiere comisiones sin tope por cada reunión de valor que pongas en nuestro calendario civilizado y cerrado... bienvenido a la vanguardia.</p>

                        <h2>Tu Misión (¿Qué harás?)</h2>
                        <ul>
                            <li><strong>Cazar y Romper la Puerta:</strong> Entrarás a prospectar activamente, despertar interés y enganchar con prospectos clave enfocándote puramente en lograr la agenda de citas (Appointment Setting) principalmente por LinkedIn.</li>
                            <li><strong>Filtrar e Impulsar Pipeline:</strong> Generar un alto volumen de conversaciones, determinar quién cumple con nuestro perfil de dolor exacto y calificar oportunidades de oro.</li>
                            <li><strong>Construir el Puente:</strong> Transicionar la conversación fluida hacia una reunión en nuestra agenda. Tu principal meta ("KPI") del día son las citas conectadas y cualificadas confirmadas en nuestro calendario.</li>
                            <li><strong>Iteración Táctica:</strong> Colaborar junto con operaciones para optimizar la cadencia y mensajes que están teniendo mejor ROI para conectar con los prospectos correctos.</li>
                        </ul>

                        <h2>El Arsenal (¿Qué ofrecemos?)</h2>
                        <ul>
                            <li><strong>Compensación Agresiva:</strong> Modelo 100% a comisión donde el límite te lo dictas tú. Te pagaremos comisiones elevadas y sin tope directamente atadas a número de citas calificadas asistidas, más un % si las citas que seteas se convierten en clientes de alto valor ($5k USD).</li>
                            <li><strong>Motor en Marcha:</strong> Te entregamos una cuenta y estructura de inicio, perfiles configurados y nuestro mejor tech stack B2B (Apollo, CRM, Clay) para que comiences atacando con herramientas de élite, nada a mano.</li>
                            <li><strong>Formación de Élite:</strong> No te dejamos en la deriva. Te adiestraremos en <em>cold messaging</em> perfecto, metodologías de <em>appointment setting</em> modernas y descarte de respuestas robotizadas.</li>
                            <li><strong>Flexibilidad Absoluta:</strong> Posición 100% remota. Enfoque hiperdinámico al desempeño. Sin horas silla obligatorias si tus métricas de reuniones vuelan.</li>
                        </ul>

                        <h2>Tu ADN (¿Qué buscamos?)</h2>
                        <ul>
                            <li><strong>Mentalidad de Tiburón Prospector:</strong> Un perfil enfermizamente enfocado en buscar el 'Sí'. No te ofendes cuando te ignoran, sabes pivotar un 'No' hacia una oportunidad en el futuro. Te divierte llenar un calendario.</li>
                            <li><strong>Maestría en LinkedIn:</strong> Habilidad altísima para buscar y segmentar gente, saltar las barreras de los tomadores de decisión e inferir lo que realmente le duele a la persona a la que atacas.</li>
                            <li><strong>Rapidez en la Batalla de Texto:</strong> Puedes manejar múltiples conversaciones en tiempo real siendo claro, estructurado, amable y directo al mismo tiempo en español nativo o neutro; tú eres la primera impresión que tienen de nosotros.</li>
                            <li><strong>Hambre de Emprender:</strong> Eres proactivo y ves este rol como la escalera de ventas perfecta, un vehículo económico acelerado y una clase maestra del <em>outbound growth</em> B2B moderno.</li>
                        </ul>

                        <h2>Esto es para ti solo si...</h2>
                        <ul>
                            <li>Buscas una oportunidad basada en los frutos de lo que logras y rechazas lo estándar u ordinario.</li>
                            <li>Sientes adrenalina al ver un calendario en blanco y sabes que es tu misión saturarlo organizadamente de reuniones cerradas.</li>
                            <li>Quieres formarte real y pragmáticamente con un equipo enfocado 100% en crecimiento.</li>
                        </ul>

                        <div className="job-apply-section">
                            <h3>¿Listo para hacer llover prospectos?</h3>
                            <p>Demuestra tu agilidad mental y persuasión en el texto. No nos mandes un CV genérico; <strong>convéncenos</strong> (haznos un pitch rápido) de por qué tú eres la pieza que requiere este rol.</p>
                            <a href="https://wa.me/523344577874?text=Hola%20MuchosLeads!%20Aplico%20al%20rol%20de%20Elite%20B2B%20Appointment%20Setter%20(SDR).%20Aquí%20va%20mi%20pitch:" target="_blank" rel="noopener noreferrer" className="apply-massive-btn">Aplicar Ahora por WhatsApp &rarr;</a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default JobDetails;