import qr from "qr-image";
import inquirer from "inquirer";


inquirer
    .prompt([
        {
            message: "please type the URL for QR conversion",
            name:"URL",
        }
    ])
    .then((answers) =>{
        const url = answers.URL;
        console.log(url);
    })