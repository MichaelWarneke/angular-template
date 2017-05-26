export class Post {

    constructor(
        public id: number,
        public userId: number,
        public title: string,
        public body: string,
    ){
    }

    static fromJsonList(array): Post[] {
        return array.map(Post.fromJson);
    }

    static fromJson({
        id,
        userId,
        title,
        body,
    }): Post {

        return new Post(
            id,
            userId,
            title,
            body);
    }    
}