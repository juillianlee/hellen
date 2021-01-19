import handler from "../../server/utils/handler";
import { RegisterUserController } from "../../server/controllers/register-user-controller";
import { GetUsersController } from "../../server/controllers/get-users-controller";

const registerUserController = new RegisterUserController();
const getUsersController = new GetUsersController();

handler.get(getUsersController.handle);
handler.post(registerUserController.handle);

export default handler;
