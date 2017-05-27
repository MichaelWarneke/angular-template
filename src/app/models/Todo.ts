export class Todo {

    constructor(
        public $key: string,    // For Firebase
        public id: string,      // For Http
        public userKey: string, // For Firebase
        public userId: string, // For Http
        public title: string,
        public completed: boolean,
    ){
    }

    static fromJsonList(array): Todo[] {
        return array.map(Todo.fromJson);
    }

    static fromJson({
        $key,
        id,
        userKey,
        userId,
        title,
        completed,
    }): Todo {
        return new Todo(
            $key,
            id,
            userKey,
            userId,
            title,
            completed);
    }    
}