// UserController.ts
import { UserService } from "./user_service";
class UserController {
    private userService: UserService;
  
    constructor(userService: UserService) {
      this.userService = userService;
    }
  
    async getUser(req: any, res: any): Promise<void> {
      const userId: string = req.params.userId;
      try {
        const user = await this.userService.getUser(userId);
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  }
  
  export { UserController };