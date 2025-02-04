import api from './api';

const reservationService = {
    getAll: async () => {
        return await api.get('/reservations');
    },
    getById: async (id) => {
        return await api.get('/reservations/' + id);
    },
    addNew: async(day, id, promo_id)=>{
        return await api.post('/reservations',{ day, salle_id: id, promo_id})
    },
    getByPromo: async(PromoId)=>{
        return await api.get('/reservations/promo/'+PromoId)
    }
  
    // other service method
}

export default reservationService;