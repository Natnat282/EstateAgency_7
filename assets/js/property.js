function gerProperty(done) {

    const results = fetch("https://si0sgs.github.io/EstateAgency/datos/propiedades.json");
    results
        .then(response => response.json())
        .then(data => {
            done(data)
        });

}


gerProperty(data => {
    const propertyList = document.getElementById("datosPropiedades");
    
    data.propiedades.forEach(propiedad => {
        const area = propiedad.detalle.area;
        const rooms = propiedad.detalle.rooms;
        const floors = propiedad.detalle.floors;
        const garages = propiedad.detalle.garages;

        const articulo = document.createElement("article");
        articulo.innerHTML = `
            <div class="col-md-4">
                <div class="card-box-a card-shadow">
                    <div class="img-box-a">
                        <img src="${propiedad.imagen}" alt="" class="img-a img-fluid">
                    </div>
                    <div class="card-overlay">
                        <div class="card-overlay-a-content">
                            <div class="card-header-a">
                                <h2 class="card-title-a">
                                    <a href="#">${propiedad.clasificacion}</a>
                                </h2>
                                <p class="link-a">${propiedad.descripcion}</p>
                            </div>
                            <div class="card-body-a">
                                <div class="price-box d-flex">
                                    <span class="price-a">${propiedad.tipo} | $${propiedad.precio}</span>
                                </div>
                            </div>
                            <div class="card-footer-a">
                                <ul class="card-info d-flex justify-content-around">
                                    <li>
                                        <h4 class="card-info-title">Area</h4>
                                        <span>${area}m<sup>2</sup></span>
                                    </li>
                                    <li>
                                        <h4 class="card-info-title">Rooms</h4>
                                        <span>${rooms}</span>
                                    </li>
                                    <li>
                                        <h4 class="card-info-title">Floors</h4>
                                        <span>${floors}</span>
                                    </li>
                                    <li>
                                        <h4 class="card-info-title">Garages</h4>
                                        <span>${garages}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        propertyList.appendChild(articulo);
    });
});