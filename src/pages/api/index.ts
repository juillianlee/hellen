import handler from "../../server/utils/handler";
import { RegisterUserController } from "../../server/controllers/register-user-controller";
import { GetUsersController } from "../../server/controllers/get-users-controller";

const registerUserController = new RegisterUserController();
const getUsersController = new GetUsersController();

handler.get(getUsersController.handle.bind(getUsersController));
handler.post(registerUserController.handle.bind(registerUserController));

export default handler;
