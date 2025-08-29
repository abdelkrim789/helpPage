namespace app.interactions;



entity person {
    key UUID_person: UUID;
    name: String;
    position: String;
    description: String;
    mail: String(30);
    phone: String(15);
    place: String;

};


entity KL {
    key UUID_KL: UUID;
    language: String;
};
