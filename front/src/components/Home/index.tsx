import Carrousel from '@/components/Carrousel';
import React from 'react';
import CiudadesHome from '../ListaCiudades';

const HomeContainer = () => {
  return (
    <>
      <Carrousel />
      <CiudadesHome />
    </>
  );
};

export default HomeContainer;
