const modulo = (() => {
    let limSup = document.querySelector('#limSup');
    let limInf = document.querySelector('#limInf');
    let objetivo = document.querySelector('#objetivo');
    let error = document.querySelector('#error');

    // Muestra el # de iteraciones
    let valor = document.querySelector('#valor');

    const divApp = document.querySelector('#tabla');

    const btnCalcular = document.querySelector('#calcular');

    // Función de Aproximación del punto medio
    const aproximacion = (limSup, limInf, objetivo, error) => {
        let resultado = 0;
        let iter = 0;
        const tabla = document.createElement('table');
        tabla.classList.add('table');
        const thead = `<thead class=\"thead-dark\">
                            <tr>
                                <th>Límite Superior</th>
                                <th>Límite Inferior</th>
                                <th>Resultado</th>
                            </tr>
                        </thead>`;
        tabla.innerHTML = thead;

        do {
            resultado = (limSup + limInf) / 2;
            const tr = document.createElement('tr');
            const td = `<td>${limSup}</td>
                        <td>${limInf}</td>
                        <td>${resultado}</td>`;
            tr.innerHTML = td;
            tabla.appendChild(tr);
            if (resultado < objetivo) {
                limInf = resultado;
            } else {
                limSup = resultado;
            }
            iter++;
        } while (
            !(resultado >= objetivo - error && resultado <= objetivo + error)
        );

        divApp.append(tabla);
        return iter;
    };


    // Eventos
    btnCalcular.addEventListener('click', () => {
        const aprox = aproximacion(
            Number(limSup.value),
            Number(limInf.value),
            Number(objetivo.value),
            Number(error.value)
        );

        valor.innerText = aprox;
    });
})();
