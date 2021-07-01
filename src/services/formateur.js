import api from './api';

const formateurService = {
    getAll: async () => {
        return await api.get('/formateurs');
    },
    getById: async (id) => {
        return await api.get('/formateurs/' + id);
    },
    addFormateur :async (fristName,lastName,stack) => {
        return await api.post('/formateurs', {fristName,lastName,stack});
    }
    // other service method
}

export default formateurService;