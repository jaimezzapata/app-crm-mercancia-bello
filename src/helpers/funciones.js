import Swal from "sweetalert2";
export function alertaConfirmacion() {
    Swal.fire({
        title: "Correcto!",
        text: "Ha ingresado de forma correcta!",
        icon: "success"
    });
}
export function alertaError(mensaje) {
    Swal.fire({
        title: "Error!",
        text: mensaje,
        icon: "error"
    });
}
export function alertaRedireccion(redireccion, path, mensaje) {
    let timerInterval;
    Swal.fire({
        title: mensaje,
        html: "I will close in <b></b> milliseconds.",
        timer: 2000,
        icon: "success",
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
            redireccion(path)
        }
    })
}

export function generarToken() {
    return Math.random().toString(36).substring(2, 10) + "-" + Math.random().toString(36).substring(2, 10)
}