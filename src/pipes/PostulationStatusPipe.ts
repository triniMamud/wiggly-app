const PostulationStatusPipe = (value: 1 | 2 | 3 | 4) => {
  const translations: { [key in 1 | 2 | 3 | 4]: string } = {
    1: 'Pendiente',
    2: 'Pendiente',
    3: 'Aprobada',
    4: 'Rechazada'
  };

  return translations[value] || value;
};