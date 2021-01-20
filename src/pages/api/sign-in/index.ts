import handler from "../../../server/utils/handler";
import { SignInController } from "../../../server/controllers/sign-in-controller";

const signInController = new SignInController();
handler.post(signInController.handle.bind(signInController));

export default handler;
