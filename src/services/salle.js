import api from './api';

const salleService = {
    getAll: async () => {
        return await api.get('/salles');
    },
    getById: async (id) => {
        return await api.get('/salles/' + id);
    },
   

    // other service method
}

export default salleService;