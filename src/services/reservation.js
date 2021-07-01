import api from './api';

const reservationService = {
    getAll: async () => {
        return await api.get('/reservations');
    },
    getById: async (id) => {
        return await api.get('/reservations/' + id);
    },
    addNew:async( day, salle_id, promo_id)=>{
        return await api.add('/reservations',{ day, salle_id, promo_id})
    }
    // other service method
}

export default reservationService;