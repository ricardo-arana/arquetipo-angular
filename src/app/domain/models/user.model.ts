

export class User {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    avatarUrl: string;

    getFullname(): string { 
        return `${this.firstName} ${this.lastName}`;
    }
}