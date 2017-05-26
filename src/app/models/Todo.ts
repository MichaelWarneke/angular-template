export class Todo {

    constructor(
        public id: number,
        public userId: number,
        public title: string,
        public completed: boolean,
    ){
    }

    static fromJsonList(array): Todo[] {
        return array.map(Todo.fromJson);
    }

    static fromJson({
        id,
        userId,
        title,
        completed,
    }): Todo {
        return new Todo(
            id,
            userId,
            title,
            completed);
    }    
}