import axios from 'axios';

const eventsGit = axios.create({
    baseURL:'https://api.github.com/users/RaphaelBRodrigues/events'
});


export { eventsGit };