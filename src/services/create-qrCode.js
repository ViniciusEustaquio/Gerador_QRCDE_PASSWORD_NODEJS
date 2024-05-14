import prompt from "prompt";
import promptQrCode from "../prompt/prompt-qrCode.js";
import handle from '../services/handle.js'



async function createQrCode () {
    prompt.get(promptQrCode, handle)
}


export default createQrCode;