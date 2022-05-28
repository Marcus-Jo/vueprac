import { generateUUID } from "@/utils/uuid";

export class Todo {
    constructor( content ) {
        this.id = generateUUID();
        this.content = content;
        this.state = false;
    }
}