


export const sendMail = async ({name, phone, isLicense, isExperience}) => {
    // const transporter = nodemailer.createTransport({
    //     host: process.env.MAIL_HOST,
    //     port: 465,
    //     secure: true,
    //     auth: {
    //       // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    //       user: process.env.MAIL_USER,
    //       pass: process.env.MAIL_PASSWORD
    //     }
    //   });

    //   name = name.replace(/[0-9!@#$%^&*()_+-=<>{}\[\]]/gi, '')
    //   phone = phone.match(/[0-9]+/gi)[0]
      

    //   const info = await transporter.sendMail({
    //     from: '"Fortuna" <foo@example.com>', // sender address
    //     //to: "kenttaxi85@yandex.ru", // list of receivers
    //     to: "ayasynkan@gmail.com", // list of receivers 
    //     subject: "Новая заявка", // Subject line
    //     text: `Имя: ${name} Телефон: ${phone} Водительское удостоверение: ${isLicense ? 'Есть' : 'Нет'} Опыт работы в такси: ${isExperience ? 'Есть' : 'Нет'}`, // plain text body
    //     html: "<b>Hello world?</b>", // html body
    //   });
    
    //   console.log("Message sent: %s", info.messageId);

    //   return info
}

