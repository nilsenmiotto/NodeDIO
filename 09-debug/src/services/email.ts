async function getDefaultEmail(senderName : string) : Promise<string> {

    let email = await getHeaderText();

    email += `Olá ${senderName}, gostaria de me inscrever para uma vaga`;

    email += "\n estou deixando o meu curriculo em anexo";

    return email;
}

async function getHeaderText() : Promise<string> {
    return "Olá, tudo bem?";
}

export { getDefaultEmail }