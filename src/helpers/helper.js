
export const revisarPresupuesto = (presupuesto, restante) => {
    // Comprobar el 25% 
    if ((presupuesto / 4) > restante) {
        return 'alert alert-danger';
    } else if ((presupuesto / 2) > restante) {
        return 'alert alert-warning';
    } else {
        return 'alert alert alert-success';
    }
};
