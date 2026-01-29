export interface User {
        id: string | number,
        username: string,
        email: string,
        fullName: string,
        role: 'admin' | 'user',
        assword?: string,
        avatar: string
}