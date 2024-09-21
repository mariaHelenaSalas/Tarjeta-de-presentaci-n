class MariaElement extends HTMLElement {
    constructor () {
        super ();
        const ShadowRoot = this.attachShadow({mode: 'open'});

        this.shadowRoot.innerHTML = `
            
            <style>

                :host {
                    display: flex;
                    justify-content: center; 
                    align-items: center;    
                    height: 100vh;  

               div.carta {
                    border: 2px solid #4CAF50;
                    border-radius: 10px;
                    padding: 20px;
                    max-width: 400px;
                    font-family: Arial, sans-serif;
                    background-color: #f9f9f9;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    font-size: 20px;
                }

                h1 {
                    color: #333;
                    margin-left: 80px;

                }

                h2 {
                    color: #4CAF50;
                    
                }

                .Hobbies, .formulario {
                    margin-top: 15px;
                }

                label {
                    display: block;
                    margin-top: 10px;
                }

                input {
                    width: 100%;
                    padding: 8px;
                    margin-top: 5px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }

                button {
                    margin-top: 15px;
                    padding: 10px;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    margin-left: 100px;
                    
                }

                button:hover {
                    background-color: #45a049;
                    

                }
             </style>



               <div class="carta">
                 <h1> CARTA </h1>
                 <p>Nombre: Maria Helena Salas </p>
                 <p>Edad: 29 Años </p>
                 <p>Nacimiento: 19/01/1995 </p>
              
                 <div class="Hobbies">
                 <h2> HOBBIES</h2>
                 <p>Jugar Futbol, Cocinar, Escuchar Musica </p>
                 </div>

                 <div class="formulario">
                 <h2> FORMULARIO</h2>
                 <label for="nombre">Nombre:</label>
                 <input type="nombre" id="nombre" name="nombre" placeholder="ingresa tu nombre">
                 <label for="email">Correo:</label>
                 <input type="email" id="email" name="email" placeholder="Ingresa tu correo"><br>
                 <button >Enviar</button>
                 </div>

              </div>


        `;
    }
     // Se ejecuta cuando se agrega el elemento al DOM
     connectedCallback() {
        console.log("Se ha creado el elemento");
      }
    
      // Se ejecuta cuando se elimina el elemento del DOM
      disconnectedCallback() {
        console.log("Se ha eliminado esta etiqueta");
      }
    }
    
    
 // Registrar el nuevo elemento personalizado
 customElements.define("maria-element", MariaElement);