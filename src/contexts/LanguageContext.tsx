'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    email: 'Email',
    phone: 'Phone',
    spanish: 'Español',
    english: 'English',
    
    // Header
    title: 'Ada Rodriguez',
    subtitle: 'Bilingual licensed professional counselor with 20+ years experience',
    
    // About
    about_p1: 'I am a bilingual and bicultural licensed professional counselor with over 20 years of experience across diverse settings, including a nonprofit mental health clinic, a managed care organization, and a public elementary school. Originally from San Salvador, El Salvador, I relocated to Connecticut to pursue a master\'s degree in psychology. My personal journey—marked by experiences of acculturation, parenting challenges, and significant loss—has deepened my resilience and reinforced my commitment to supporting others through life\'s complexities.',
    about_p2: 'My clinical practice focuses on children (ages 6+), adolescents, and adults navigating a range of concerns, including mood disorders, anxiety, ADHD, adjustment issues, acculturation stress, and grief/loss. I employ an eclectic, client-centered approach tailored to each individual\'s unique needs.',
    about_p3: 'I offer free consultations to determine whether my services are a good fit. Morning and early afternoon appointments are available Monday through Thursday.',
    
    // Experience
    experience: 'Experience',
    exp1_title: 'Clinical Care Manager',
    exp1_content: '6+ years providing high-volume behavioral health care for diverse populations in inpatient and home health settings, including crisis intervention, case reviews with medical directors, and Spanish-language support. Transitioned to managing psychiatric care coordination for homebound members, conducting site visits, and training providers on documentation standards and recovery-oriented practices.',
    exp2_title: 'Licensed Professional Counselor',
    exp2_content: '6+ years providing psychotherapy to children, families, and adults, with a specialized focus on serving the Latino community. Collaborated closely with schools, healthcare providers, and child welfare agencies to ensure integrated, culturally responsive treatment planning.',
    exp3_title: 'Senior Clinician',
    exp3_content: '10+ years case managing foster families and DCF-committed children, providing in-home psychotherapy and 24-hour crisis intervention. Collaborated on child placement and treatment planning with the Department of Children and Families, while also advocating for the educational needs of children in Wheeler\'s Specialized Foster Care Program.',
    
    // Footer
    contact: 'Contact',
    phone_number: 'Phone Number',
    linkedin: 'LinkedIn'
  },
  es: {
    // Navigation
    email: 'Correo',
    phone: 'Teléfono',
    spanish: 'Español',
    english: 'English',
    
    // Header
    title: 'Ada Rodriguez',
    subtitle: 'Consejera profesional bilingüe licenciada con más de 20 años de experiencia',
    
    // About
    about_p1: 'Soy una consejera profesional licenciada bilingüe y bicultural con más de 20 años de experiencia en diversos entornos, incluyendo una clínica de salud mental sin fines de lucro, una organización de atención administrada y una escuela primaria pública. Originaria de San Salvador, El Salvador, me mudé a Connecticut para obtener una maestría en psicología. Mi jornada personal—marcada por experiencias de aculturación, desafíos de crianza y pérdidas significativas—ha profundizado mi resistencia y reforzado mi compromiso de apoyar a otros a través de las complejidades de la vida.',
    about_p2: 'Mi práctica clínica se enfoca en niños (de 6 años en adelante), adolescentes y adultos que navegan una gama de preocupaciones, incluyendo trastornos del estado de ánimo, ansiedad, TDAH, problemas de adaptación, estrés de aculturación y duelo/pérdida. Empleo un enfoque ecléctico y centrado en el cliente, adaptado a las necesidades únicas de cada individuo.',
    about_p3: 'Ofrezco consultas gratuitas para determinar si mis servicios son una buena opción. Las citas de mañana y primera tarde están disponibles de lunes a jueves.',
    
    // Experience
    experience: 'Experiencia',
    exp1_title: 'Gerente de Atención Clínica',
    exp1_content: '6+ años brindando atención de salud conductual de alto volumen para poblaciones diversas en entornos hospitalarios y de salud en el hogar, incluyendo intervención de crisis, revisiones de casos con directores médicos y apoyo en español. Transicioné a manejar la coordinación de atención psiquiátrica para miembros confinados en casa, realizando visitas al sitio y capacitando a proveedores en estándares de documentación y prácticas orientadas a la recuperación.',
    exp2_title: 'Consejera Profesional Licenciada',
    exp2_content: '6+ años brindando psicoterapia a niños, familias y adultos, con un enfoque especializado en servir a la comunidad latina. Colaboré estrechamente con escuelas, proveedores de atención médica y agencias de bienestar infantil para asegurar una planificación de tratamiento integrada y culturalmente receptiva.',
    exp3_title: 'Clínica Senior',
    exp3_content: '10+ años manejando casos de familias de acogida y niños comprometidos con DCF, brindando psicoterapia en el hogar e intervención de crisis las 24 horas. Colaboré en la colocación de niños y planificación de tratamiento con el Departamento de Niños y Familias, mientras también abogaba por las necesidades educativas de los niños en el Programa de Atención de Crianza Especializada de Wheeler.',
    
    // Footer
    contact: 'Contacto',
    phone_number: 'Número de Teléfono',
    linkedin: 'LinkedIn'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}