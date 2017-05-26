export class User {

    constructor(
        public id: number,
        public name: string,
        public username: string,
        public email: string,
        public address : {
            street: string,
            suite: string,
            city: string,
            zipcode: string,
        },
        public phone: string,
        public website: string,
        public company : {
            name: string,
            catchPhrase: string,
            bs: string,
        },
    ){
    }

    static fromJsonList(array): User[] {
        return array.map(User.fromJson);
    }

    static fromJson({
        id,
        name,
        username,
        email,
        address,
        phone,
        website,
        company,
    }): User {
        return new User(
            id,
            name,
            username,
            email,
            address,
            phone,
            website,
            company);
    }    
}