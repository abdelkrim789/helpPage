using app.interactions from '../db/interactions';


service InteractionsService {
    entity Person as Projection on interactions.person;
    entity KL as Projection on  interactions.KL;

}