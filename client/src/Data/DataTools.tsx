import IconCalendar from "@/Components_svg/IconCalendar";
import IconCatalog from "@/Components_svg/IconCatalog";
import IconContent from "@/Components_svg/IconContent";
import IconDesing from "@/Components_svg/IconDesing";
import IconDigital from "@/Components_svg/IconDigital";
import IconEcomerce from "@/Components_svg/IconEcomerce";
import IconEvolution from "@/Components_svg/IconEvolution";
import IconIdentity from "@/Components_svg/IconIdentity";
import IconMaintenance from "@/Components_svg/IconMaintenance";
import IconManagement from "@/Components_svg/IconManagement";
import IconOptimization from "@/Components_svg/IconOptimization";
import IconUx from "@/Components_svg/IconUx";
import IconVisualtools from "@/Components_svg/IconVisualtools";
import IconWeb from "@/Components_svg/IconWeb";
import IconWebadmin from "@/Components_svg/IconWebadmin";
import IconWebapp from "@/Components_svg/IconWebapp";

import { ComponentType } from "react";

// Definición de las propiedades para los íconos
interface IconProps {

    className: string;
    color: string;
}

// Tipo para las herramientas
interface Tool {

    id: string;
    name: string;
    description: string;
    icon: ComponentType<IconProps>;
}

export const DataTools: Tool[] = [

    {
        id: "1",
        icon: IconWeb,
        name: "Paginas web",
        description: "Una página web es mucho más que un escaparate digital; es el corazón de tu presencia online. Desarrollamos sitios web únicos, diseñados para transformar tu marca y conectar tu negocio con una audiencia global. Hoy, la digitalización es clave para el crecimiento de cualquier marca, y una página web bien diseñada es fundamental para esa transformación. Al invertir en un sitio web creado por Quantico, no solo obtienes una presencia atractiva y funcional, sino que también construyes confianza y credibilidad en tu mercado. Nos aseguramos de que tu página esté optimizada, accesible y lista para adaptarse a las tendencias digitales del futuro. Te ayudamos a conectar tu marca con nuevas oportunidades en el mundo digital.",
    },

    {
        id: "2",
        icon: IconWebapp,
        name: "Aplicaciones web",
        description: "Las aplicaciones web son mucho más que una simple herramienta; es la clave para transformar la forma en que operas y te conectas con tus usuarios. Creamos aplicaciones web personalizadas que optimizan procesos, mejoran la interacción y aumentan la eficiencia de tu nempresa. En un mundo cada vez más digital, tener una aplicación web bien diseñada es fundamental para ofrecer una experiencia ágil y accesible. Al invertir en una aplicación web creada por Quantico, no solo mejoras la experiencia de tus usuarios, sino que posicionas tu marca como líder en innovación. Te ayudamos a crear soluciones digitales que se adaptan a tus necesidades y abren nuevas oportunidades globales para tu empresa.",
    },

    {
        id: "3",
        icon: IconEcomerce,
        name: "E-Comerce",
        description: "Los e-commerces no son solo una tienda online; es la puerta de entrada a un mercado global. Desarrollamos plataformas de comercio electrónico personalizadas que no solo permiten vender productos, sino que crean una experiencia de compra única para tus clientes. En un entorno digital en constante cambio, tener un e-commerce bien diseñado es esencial para llegar a más personas, optimizar ventas y ofrecer un servicio eficiente. Al invertir en un e-commerce creado por Quantico, no solo mejoras tu presencia online, sino que también fortaleces la relación con tus clientes y posicionas tu marca en el mercado global. Te ayudamos a crear una plataforma de ventas que se adapte a tus necesidades y abra nuevas oportunidades de negocio.",
    },

    {
        id: "4",
        icon: IconWebadmin,
        name: "Portales administrativos",
        description: "Un portal administrativo es esencial para gestionar de manera eficiente los procesos internos de tu empresa. Desarrollamos plataformas personalizadas que permiten automatizar tareas, centralizar información y mejorar la productividad de tu equipo. Contar con un portal administrativo bien diseñado es crucial para optimizar recursos y tomar decisiones más rápidas y acertadas. Al invertir en un portal administrativo creado por Quantico, no solo simplificas la gestión interna, sino que también mejoras la comunicación y colaboración entre departamentos. Te ayudamos a crear soluciones digitales que se adaptan a las necesidades de tu empresa y la impulsan hacia un futuro más ágil y eficiente.",
    },

    {
        id: "5",
    icon: IconMaintenance,
    name: "Mantenimiento y soporte",
    description: "El mantenimiento y soporte continuo son clave para que tu presencia digital siga funcionando de manera óptima. Si has confiado en nosotros para crear tu página web, aplicación o plataforma, nuestro servicio de mantenimiento te garantiza que siempre estarás al día con las últimas actualizaciones, mejoras de seguridad y optimización. No dejes que tu herramienta digital quede desactualizada o vulnerable. En Quantico te ayudamos a mantener tu plataforma en su mejor versión, asegurando un rendimiento constante y una experiencia fluida para tus usuarios. Permítenos ser tu aliado en el mantenimiento y soporte continuo, asegurando que tu marca siga creciendo y evolucionando con las necesidades del mercado.",
  },
  {
    id: "6",
    icon: IconDesing,
    name: "Diseño web",
    description: "El diseño web no es solo una cuestión estética, sino una herramienta estratégica para conectar tu marca con tu audiencia. Creamos diseños web personalizados que no solo son visualmente atractivos, sino también funcionales y alineados con los objetivos de tu negocio. Cada elemento está cuidadosamente pensado para garantizar una experiencia de usuario fluida y optimizada. Si tu página o aplicación no está logrando el impacto que esperabas, es el momento de renovarla con un diseño fresco y moderno. Un buen diseño web no solo atrae, sino que también convierte, facilitando la navegación y mejorando la interacción con tus usuarios. Al invertir en un diseño web creado por Quantico, no solo mejoras la apariencia de tu plataforma, sino que también aumentas la efectividad y el rendimiento de tu presencia online. Deja que nuestro equipo de diseñadores transforme tu plataforma en una herramienta poderosa que haga crecer tu marca.",
  },
  {
    id: "7",
    icon: IconIdentity,
    name: "Identidad corporativa",
    description: "Una identidad corporativa sólida es fundamental para destacar en un mercado competitivo. Creamos identidades visuales únicas que reflejan la esencia de tu marca y la conectan de manera auténtica con tu audiencia. Desde logotipos hasta esquemas de colores, tipografía y otros elementos visuales, cada aspecto de tu identidad corporativa está diseñado para transmitir los valores y la misión de tu empresa de forma coherente y profesional. Si tu marca necesita un nuevo enfoque visual o estás comenzando desde cero, nuestro equipo te ayudará a construir una identidad que te haga sobresalir. Una identidad bien definida no solo mejora el reconocimiento de tu marca, sino que también genera confianza y fidelidad entre tus clientes. Permítenos ayudarte a construir una identidad corporativa que sea memorable y poderosa, impulsando tu marca hacia el éxito.",
  },
  {
    id: "8",
    icon: IconUx,
    name: "Experiencia de usuario",
    description: "Una excelente experiencia de usuario (UX) es clave para el éxito de cualquier plataforma digital. Nos enfocamos en crear interfaces intuitivas y accesibles que faciliten la navegación y hagan que tus usuarios se sientan cómodos y satisfechos en cada interacción. Cada decisión de diseño está orientada a optimizar la usabilidad, la velocidad y la fluidez de la plataforma, asegurando que tus usuarios disfruten de una experiencia positiva. Si tu plataforma no está brindando una experiencia memorable, es el momento de mejorarla. Una experiencia de usuario bien diseñada no solo aumenta la satisfacción, sino que también fomenta la lealtad y las conversiones. Al invertir en la experiencia de usuario creada por Quantico, no solo atraes más visitantes, sino que los conviertes en clientes satisfechos. Déjanos ayudarte a transformar la interacción de tus usuarios con tu plataforma, creando una experiencia que eleve tu marca y maximice el impacto digital.",
  },
  {
    id: "9",
    icon: IconEvolution,
    name: "Actualizacion",
    description: "El mundo digital avanza rápidamente, y mantener tus herramientas digitales actualizadas es esencial para seguir siendo competitivo. Si tu página web, aplicación o plataforma ha quedado desactualizada o ha sido olvidada, es el momento perfecto para renovarla. Ofrecemos servicios de actualización que no solo mejoran la apariencia de tu herramienta, sino que también optimizan su rendimiento, seguridad y funcionalidad. Una herramienta desactualizada no solo pierde eficacia, sino que también puede poner en riesgo la experiencia de tus usuarios. Al actualizar tus plataformas con Quantico, garantizamos que estén alineadas con las últimas tendencias, tecnologías y mejores prácticas del mercado, asegurando que sigas ofreciendo una experiencia excelente y segura. No dejes que tus herramientas digitales se queden atrás. Permítenos ayudarte a renovarlas y ponerlas al día, para que sigas ofreciendo lo mejor a tus usuarios.",
  },
  {
    id: "10",
    icon: IconManagement,
    name: "Gestion de redes",
    description: "La gestión efectiva de redes sociales es esencial para conectar tu marca con tu audiencia y mantener una presencia digital activa. Si tus redes sociales no han recibido atención reciente o necesitan una actualización, es el momento de revitalizarlas. Nuestro equipo se encarga de crear estrategias personalizadas, diseñar contenido atractivo y gestionar tus plataformas de manera efectiva para mantener tu presencia relevante y conectada con tus seguidores. Una gestión adecuada no solo aumenta tu visibilidad, sino que también te ayuda a construir una comunidad leal de seguidores, fortaleciendo la relación con tus clientes. Al confiar en Quantico para la gestión de tus redes sociales, te aseguramos que tu marca estará siempre presente y alineada con las tendencias actuales. No dejes que tus redes sociales pasen desapercibidas. Permítenos ayudarte a mantener tu presencia online activa y en constante evolución.",
  },
  {
    id: "11",
    icon: IconDigital,
    name: "Contenido digital",
    description: "En Quantico, el contenido digital visual es clave para transmitir mensajes de manera clara y efectiva. Ya sea que necesites imágenes, videos, infografías u otros tipos de contenido, nuestro equipo está aquí para crear piezas visuales que faciliten la comunicación y hagan más atractivo cualquier proyecto. Ya sea para presentaciones, campañas, sitios web o cualquier otro propósito, nuestro enfoque es generar contenido visual que se adapte a tus necesidades y resalte lo que deseas transmitir. Déjanos ayudarte a crear contenido digital visual que capte la atención y haga que tu mensaje llegue de manera efectiva y profesional.",
  },
  {
    id: "12",
    icon: IconCalendar,
    name: "Calendarios de contenido",
    description: "La planificación y organización del contenido son esenciales para mantener tu presencia digital activa y alineada con las tendencias del año. Creamos calendarios de contenido personalizados que te permiten estar siempre preparado para las diferentes temporadas, festividades y eventos importantes. Ya sea para redes sociales, actualizaciones de tu página web, plataformas o e-commerce, nuestro enfoque te ayuda a estar un paso adelante, asegurando que tu contenido siempre sea relevante y oportuno. Con un calendario de contenido bien estructurado, puedes coordinar tus campañas, promociones y publicaciones de manera efectiva, adaptándote a las necesidades de cada temporada y maximizando el impacto de tus estrategias digitales. Permítenos ayudarte a planificar tu contenido para que tu marca siempre esté en el momento adecuado, con el mensaje correcto, en la época adecuada.",
  },
  {
    id: "13",
    icon: IconCatalog,
    name: "Catalogos digitales",
    description: "Un catálogo digital bien diseñado es una forma efectiva de presentar productos, servicios o información de manera clara, ordenada y visualmente atractiva. Creamos catálogos digitales personalizados que pueden compartirse fácilmente con tus usuarios a través de un enlace en la nube o en formato PDF. Esta herramienta te permite mantener tu contenido siempre actualizado y disponible, facilitando su distribución y acceso en cualquier momento. Déjanos ayudarte a transformar tu información en un catálogo digital funcional, profesional y fácil de compartir.",
  },
  {
    id: "14",
    icon: IconVisualtools,
    name: "Herramientas visuales",
    description: "creamos herramientas visuales orientadas a convertir tus ideas, servicios o proyectos en presentaciones impactantes y funcionales. Este servicio está enfocado en el desarrollo de portafolios digitales y soluciones visuales personalizadas que ayuden a tus usuarios a interactuar de forma clara y práctica con tu propuesta. Ya sea para mostrar tu trabajo, explicar procesos o facilitar tareas específicas, nuestras herramientas visuales están pensadas para destacar lo que haces y cómo lo haces. Haz que tu trabajo hable por sí solo con herramientas visuales que inspiran, ordenan y comunican con propósito.",
  },
  {
    id: "15",
    icon: IconOptimization,
    name: "Optimizacion",
    description: "En Quantico, entendemos que con el tiempo muchas herramientas digitales y equipos pueden perder rendimiento debido a una mala configuración, falta de mantenimiento o tecnologías desactualizadas. Nuestra herramienta de optimización está diseñada para analizar, limpiar y reorganizar sistemas que necesitan recuperar su funcionalidad y eficiencia. Ya sea una plataforma, equipo o recurso digital, nos enfocamos en mejorar su rendimiento, aumentar su vida útil y adaptarlo a los estándares actuales. Contamos con un equipo de profesionales capacitados que se encargan tanto del mantenimiento físico de equipos como de la mejora técnica y estructural de tus herramientas digitales. Deja que nuestros expertos optimicen lo que ya tienes, para que funcione mejor, más rápido y con mayor estabilidad."
  },
];