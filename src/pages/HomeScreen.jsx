import React from 'react'
import "../css/HomeScreen.css"

function HomeScreen() {
  return (
    <div>
        <section className="container-fluid row d-flex flex-wrap">
        <div className="mb-4">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner border border-black">
                    <div className="carousel-item active">
                        <img src="https://infraestructuramedica.mx/wp-content/uploads/2022/08/hospital-gral-hospital-general-de.png"
                            className="rounded d-block w-100" alt="escritorio de recepcion"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://www.cloudia.com.br/wp-content/uploads/clnica_portuguesa_4.jpg"
                            className="rounded d-block w-100" alt="odontologia"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://3.bp.blogspot.com/-MbFXcy2o9Yw/VtYREaolxkI/AAAAAAAAAAs/4Q48j-EghXI/s1600/111111111111111.jpg"
                            className="rounded d-block w-100" alt="dengue"/>
                    </div>
                </div>
            </div>
        </div>
        
            <div className="d-flex justify-content-around align-items-center">
                <button type="button" className="btn btn-danger square-button m-3">
                    <h3>pedir tu turno</h3>
                </button>
                <button type="button" className="btn btn-info square-button m-3">
                    <h3>info de turnos</h3>
                </button>
            </div>
    </section>
    </div>
  )
}

export default HomeScreen