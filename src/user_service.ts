class UserService {
    async getUser(userId: string): Promise<{ id: string; name: string }> {  
      return { id: userId, name: 'John Doe' };
    }
}

export { UserService };