import React, { useState } from "react";
import "./drRegisterCorrect.css";

function DrRegisterCorrect({ showModal, closeModal }) {
  if (!showModal) return null;

  return (
    <>
    
    <div className="modal-overlay">
        <div className="modal-content">
            <div className="row text-center text-dark modal-bg">
            
            <h3><i className="bi bi-check2-all"></i> REGISTRO EXITOSO</h3>
            <p>      Hemos recibido tus datos correctamente. Un administrador verificará la información y aprobará tu registro. Te enviaremos una notificación una vez esté listo.
            </p>
          <div className="modal-footer">
          <button
              type="button"
              className="btn btn-success m-2"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
            
          
            </div>
          
        </div>
      </div>
      
    </>
  );
}

export default DrRegisterCorrect;
