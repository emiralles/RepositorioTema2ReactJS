import React,{ Component } from 'react';
import PilasConvencionales from '../Pilas/Pilas';
import BateriasLitio from '../Baterias/Baterias';
import Hidrogeno from '../Baterias/Hidrogeno';
import Likes from '../Likes';
import Bitcoin from '../Bitcoin/Bitcoin';


class Articulo extends Component{

    render() {
      return (
        <div>
          <PilasConvencionales />
          <BateriasLitio />
          <Hidrogeno />
          <Likes />
          <Bitcoin />
        </div>
      )
    }
}

export default Articulo;
