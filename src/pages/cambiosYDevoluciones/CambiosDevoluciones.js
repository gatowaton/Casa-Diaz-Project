import React from 'react';
import "./CambiosDevoluciones.css";
import Nav from "../../components/nav/Nav";

function CambiosDevoluciones() {
  return (
    <div>
      <Nav />
      <div className="container container-cambios-devoluciones">
        <h1 className='titulo-devoluciones'>Cambios y devoluciones</h1>

        <hr />
        <div className="container container-cambios-devoluciones-texto">
        <p> <strong>TEXTO DE EJEMPLO PREGUNTAR ESPECIFICACIONES</strong> <br></br><br></br>
            Los requisitos para cualquier cambio, devolución y/o reembolso son los siguientes:<br></br><br></br>

              Si el proceso de devolución es atribuible a alguna responsabilidad de EMPRESA, se procederá a la recepción de la devolución, cumpliéndose política de plazo. Se procederá a lo que el cliente decida, pudiendo ser cambio o reemplazo del producto o devolución de dinero, esto último dentro del plazo de 10 días hábiles posteriores a la emisión de la nota de crédito. NO aplica devolución de dinero por devoluciones a razones atribuibles al cliente. <br></br><br></br><br></br>


            <strong>Solicitud de cambio de producto</strong> <br></br><br></br>

              La solicitud de cambio de producto debe ser dentro de los 2 meses desde la recepción del producto, en caso de deficiencias de fabricación, elaboración, materiales o en caso de que no sea enteramente apto para el uso o consumo al que está destinado.<br></br><br></br><br></br>



            <strong>Solicitud de Devolución / Reembolso</strong><br></br><br></br>

              Solicitud de devolución / reembolso solo se acepta dentro de los 10 primeros días de corridos una vez realizada la recepción del producto, solo se aceptan y realizan con boleta original en la dirección Chiloe 1189 Santiago Centro. El reembolso de la compra dependerá del tipo de pago realizado, y se realizara dentro de los 10 días siguientes a la devolución. (Para pago con tarjeta se anula la transacción, pago en efectivo o cheque se genera depósito bancario) <br></br>

              Para ambos casos el producto debe estar sin uso, con etiquetas, en perfectas condiciones y debe tener los embalajes originales. Para ambos casos no se aceptan, cortes de cable, cortes de tubería, ampolletas y tubos fluorescentes. </p>

        </div>
        

      </div>
      

    </div>
  )
}

export default CambiosDevoluciones