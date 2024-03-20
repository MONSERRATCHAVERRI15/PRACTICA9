
<script>
function generarTabla() {
    const nombre = document.getElementById("nombre").value;
    const matricula = document.getElementById("matricula").value;
    const calif1 = parseInt(document.getElementById("calif1").value);
    const calif2 = parseInt(document.getElementById("calif2").value);
    const calif3 = parseInt(document.getElementById("calif3").value);
    const calif4 = parseInt(document.getElementById("calif4").value);
    const calif5 = parseInt(document.getElementById("calif5").value);
    
    const promedio = (calif1 + calif2 + calif3 + calif4 + calif5) / 5;
    
    const tabla = `
        <table>
            <tr>
                <th>Nombre</th>
                <th>Matrícula</th>
                <th>Calificación 1</th>
                <th>Calificación 2</th>
                <th>Calificación 3</th>
                <th>Calificación 4</th>
                <th>Calificación 5</th>
                <th>Promedio</th>
            </tr>
            <tr>
                <td>${nombre}</td>
                <td>${matricula}</td>
                <td>${calif1}</td>
                <td>${calif2}</td>
                <td>${calif3}</td>
                <td>${calif4}</td>
                <td>${calif5}</td>
                <td>${promedio.toFixed(2)}</td>
            </tr>
        </table>`;
    
    document.getElementById("tablaContainer").innerHTML = tabla;
}
</script>