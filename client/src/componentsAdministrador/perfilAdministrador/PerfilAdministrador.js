import React from 'react';
import { ContainerPerfil, Grid, Grid2, ItemImg,Item, Boton, BtnEdit} from "./PerfilAdministrador.styled"
import Cookies from 'universal-cookie';

export const  PerfilAdministrador = () => {
  const cookies = new Cookies;
  return (
    <div>

    <ContainerPerfil>
        <Grid>
          <Grid2>
            <ItemImg>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar6.png"
                alt="Afiliado"
                class="rounded-circle"
                width="150"
              />
            </ItemImg>
            <div style={{textAlign:"center"}}>
              <p style={{color:"#fff", marginBottom:"10%", fontFamily:"'Baloo Tammudu 2', cursive"}}> </p>
              
            </div>
          </Grid2>
          <Grid2>
            <Item>
              <div>
                <h5 class="mb-0">Nombre Completo</h5>
                <div class="text-primary">{cookies.get('nombre_dir')}</div>
              </div>
            </Item>
            <Item>
              <div>
                <h5 class="mb-0">Rut</h5>
                <div class="text-primary">{cookies.get('rut_dir')}</div>
              </div>
            </Item>
            <Item>
              <div>
              <div class="col-sm-3">
                <h5 class="mb-0">Cargo</h5>
                </div>             
                <div class="text-primary">{cookies.get('tipo_directiva')}</div>
              </div>
            </Item>
          </Grid2>
        </Grid>
      </ContainerPerfil>
    </div>
  );
}

export default PerfilAdministrador;




