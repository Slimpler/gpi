import React from 'react';
import { ContainerPerfil, Grid, Grid2, ItemImg,Item, Boton, BtnEdit} from "./PerfilAfiliados.styled"
import Cookies from 'universal-cookie';

export const  PerfilAfiliado = () => {
  const cookies = new Cookies;
  return (
    <div>

    <ContainerPerfil>
        <Grid>
          <Grid2>
            <ItemImg>
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="Afiliado"
                class="rounded-circle"
                width="150"
              />
            </ItemImg>
            <div style={{textAlign:"center"}}>
              <p style={{color:"#fff", marginBottom:"10%", fontFamily:"'Baloo Tammudu 2', cursive"}}> * Departamento EN LA MUNICIPALIDAD * </p>
              
              <Boton to="pagosUsuario">
                Mis Pagos
              </Boton>
             
            </div>
          </Grid2>
          <Grid2>
            <Item>
              <div>
                <h5 class="mb-0">Nombre</h5>
                <div class="text-primary">{cookies.get('nombre')}</div>
                <div class="text-primary"></div>
              </div>
                
            </Item>
            <Item>
              <div>
                <h5 class="mb-0">Rut</h5>
                <div class="text-primary">{cookies.get('rut_afiliado')}</div>
              </div>
            </Item>
            <Item>
              <div>
              <div class="col-sm-3">
                <h5 class="mb-0">Telefono</h5>
                </div>
                <div class="text-primary">{cookies.get('telefono')}</div>            
              </div>
            </Item>
            <Item>
                <div>
                    <h5 class="mb-0">Celular</h5>
                    <div class="text-primary">{cookies.get('celular')}</div>
                </div>
            </Item>
            <Item>
                <div>
                    <h5 class="mb-0">Antiguedad</h5>
                    <div class="text-primary">{cookies.get('antiguedad_afiliado')}</div>
                </div>
            </Item>
           
          </Grid2>
        </Grid>
      </ContainerPerfil>
    </div>
  );
}

export default PerfilAfiliado;




