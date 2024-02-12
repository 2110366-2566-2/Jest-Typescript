// UserController.test.ts
import { UserController} from './user_controller';
import { UserService } from './user_service';
describe('UserController', () => {
  let mockUserService: jest.Mocked<UserService>;
  let userController: UserController;

  beforeEach(() => {
    mockUserService = {
      getUser: jest.fn(),
    } as jest.Mocked<UserService>;

    userController = new UserController(mockUserService);
  });

  test('getUser should return user information', async () => {
    const req: any = { params: { userId: '123' } };
    const res: any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    mockUserService.getUser.mockResolvedValue({ id: '123', name: 'John Doe' });

    await userController.getUser(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ id: '123', name: 'John Doe' });
  });

  test('getUser should handle errors by returning 500 status', async () => {
    const req: any = { params: { userId: '456' } };
    const res: any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Mock the getUser method to throw an error
    mockUserService.getUser.mockRejectedValue(new Error('Some error'));

    await userController.getUser(req, res);

    // Verify that the status and json methods were called with the expected error response
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internal Server Error' });
  });

  test('getUser should handle errors by returning 500 status (alternative approach)', async () => {
    const req: any = { params: { userId: '456' } };
    const res: any = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Mock the getUser method to throw an error
    mockUserService.getUser.mockRejectedValueOnce(new Error('Some error'));

    await userController.getUser(req, res);

    // Verify that the status and json methods were called with the expected error response
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Internal Server Error' });
  });
});
