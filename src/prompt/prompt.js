import chalk from "chalk"

const mainPrompt = [
    {
        name: 'select',
        description: chalk.yellowBright.bold('Escolha a ferramenta (1 - QRCODE ou 2 - PASSWORD)'),
        pattern: /^[1-2]+$/,
        message: chalk.redBright.italic( 'Escolha apenas entre 1 e 2'),
        require: true
    }
]


export default mainPrompt