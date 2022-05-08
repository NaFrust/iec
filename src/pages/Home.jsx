import React from 'react'
import Carrousel from '../components/Carrousel';
import ValoresContenedor from '../components/ValoresContenedor';
import Nosotros from '../components/Nosotros';
import ServiciosContenedor from '../components/ServiciosContenedor';
import ProyectosContenedor from '../components/ProyectosContenedor';
import Contacto from '../components/Contacto';


function home() {
  return (
    <div>
      <Carrousel />
      <ValoresContenedor />
      <Nosotros />
      <ServiciosContenedor />
      <ProyectosContenedor />
    </div>
  )
}

export default home