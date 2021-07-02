import api from './api';

const promoService = {
    getAll: async () => {
        return await api.get('/promos');
    },
    getById: async (id) => {
        return await api.get('/promos/' + id);
    },
     addPromo :async (id,name) => {
        return await api.post('/promos', {id,name});
    }
    // other service method
}

export default promoService;