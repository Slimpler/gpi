import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { ButtonStyled, InputStyled } from '../../FormAfiliate/FormAfiliateElements';



function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 style={{textAlign:"center"}} id="simple-modal-title">Recuperar Contraseña</h2>
      <p id="simple-modal-description">
        Las instrucciones de recuperación de contraseña se enviaran al correo electrónico especificado en el registro.
      </p>
      <InputStyled placeholder="Ingrese correo electronico" type="email" border="5px"/>
        <ButtonStyled style={{background:"black", color:"white", justifyContent:"center", justifyItems:"center", display:"grid" }} onClick={handleClose}>
          Enviar
        </ButtonStyled>
    </div>  
  );

  return (
    <div style={{alignItems:"stretch", justifyContent:"normal"}}>
      <button type="button" onClick={handleOpen} style={{background:"transparent", color: "#4183c4", borderRadius:"none", cursor:"pointer", border:"none"}}>
        Recuperar
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}