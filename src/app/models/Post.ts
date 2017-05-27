export class Post {

    constructor(
        public $key: string,    // For Firebase
        public id: string,      // For Http
        public userKey: string, // For Firebase
        public userId: string, // For Http
        public title: string,
        public body: string,
    ){
    }

    static fromJsonList(array): Post[] {
        return array.map(Post.fromJson);
    }

    static fromJson({
        $key,
        id,
        userKey,
        userId,
        title,
        body,
    }): Post {

        return new Post(
            $key,
            id,
            userKey,
            userId,
            title,
            body);
    }    
}