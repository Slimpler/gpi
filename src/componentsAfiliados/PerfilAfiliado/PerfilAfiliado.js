import React from 'react';
import { ContainerPerfil, Grid, Grid2, ItemImg,Item, Boton, BtnEdit} from "./PerfilAfiliados.styled"


export const  PerfilAfiliado = () => {

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
              <Boton to="misconvenios">
                Mis Convenios
              </Boton>
              <Boton to="pagosUsuario">
                Mis Pagos
              </Boton>
            </div>
          </Grid2>
          <Grid2>
            <Item>
              <div>
                <h5 class="mb-0">Nombre Completo</h5>
                <div class="text-primary">Jose Enrique Coronado</div>
              </div>
            </Item>
            <Item>
              <div>
                <h5 class="mb-0">Rut</h5>
                <div class="text-primary">12345678-9</div>
              </div>
            </Item>
            <Item>
              <div>
                <h5 class="mb-0">Edad</h5>
                <div class="text-primary">35 años</div>
              </div>
            </Item>
            <Item>
              <div>
              <div class="col-sm-3">
                <h5 class="mb-0">Ciudad</h5>
                </div>
                <div class="text-primary">Ciudad afiliado</div>            
              </div>
            </Item>
            <Item>
                <div>
                    <h5 class="mb-0">Comuna</h5>
                    <div class="text-primary">Comuna afiliado</div>
                </div>
            </Item>
            <Item>
                <div>
                    <h5 class="mb-0">Tipo De Contrato</h5>
                    <div class="text-primary">Contrato Del Afiliado</div>
                </div>
            </Item>
            <BtnEdit>Editar</BtnEdit>
          </Grid2>
        </Grid>
      </ContainerPerfil>
    </div>
  );
}

export default PerfilAfiliado;




