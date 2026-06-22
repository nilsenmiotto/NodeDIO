import { getDefaultEmail } from "./services/email";

async function main() {
    let email = await getDefaultEmail("João");
    console.log(email);
    console.log("Email enviado com sucesso!");
}

main();