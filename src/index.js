import prompt from "prompt";
import mainPrompt from "./prompt/prompt.js";
import createQrCode from "./services/create-qrCode.js";
import createPassword from "./password/create-password.js";
import 'dotenv/config';

async function main() {
    prompt.get(mainPrompt, async (err, choose) => {
    if(choose.select == 1 ) createQrCode();
    if(choose.select == 2 ) createPassword();
  });

  prompt.start();
}

main();
