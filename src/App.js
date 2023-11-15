import { useState } from 'react';
import Banner from './componentes/banner/banner';
import Formulario from './componentes/formularios';
import Time from './componentes/time';
import Rodape from './componentes/rodape';

function App() {
  const times = [
    {
      nome: 'Distintivo de pedra',
      corPrimaria: '#708090',
      corSegundaria: '#A9A9A9'
    },
    {
        nome:'Insígnia de ferro',
      corPrimaria: '#4F4F4F',
      corSegundaria: '#808080'
    },
    {
      nome:'Distintivo de ouro',
      corPrimaria: '#FFD700',
      corSegundaria: '#FFFFE0'
    },
    {
      nome:'Emerald Badge',
      corPrimaria: '#00FF00',
      corSegundaria: '#98FB98'
    },
    {
      nome:'Emblema de diamante',
      corPrimaria: '#00FFFF',
      corSegundaria: '#7FFFD4'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      { times.map(time =>   <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSegundaria={time.corSegundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
       />
)} 
<Rodape/>
    </div>
   
  );
}

export default App;
