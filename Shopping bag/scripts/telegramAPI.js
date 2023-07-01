const token = '5940709122:AAEnMAmgzOtXNKwys8roviVM6qVWBKyqRcg'
const CHAT_ID = '-1001920681948'
const URL = `https://api.telegram.org/bot${token}/sendMessage`

export function TelegramAPI(data) {
        const names = document.querySelectorAll("input[type=text]")[0]
        const familya = document.querySelectorAll("input[type=text]")[1]
        const city = document.querySelectorAll("input[type=text]")[2]
        console.log(city)
        const telephone = document.querySelectorAll("input[type=text]")[3]
        const button = document.querySelector("#form-submit-btn")
        button.addEventListener('click' , function (e) {
            e.preventDefault()
            let message = `
                <b>Покупатель:</b>\n
                <b>Имя клиента: ${names.value} \n</b> \n
                <b>Фамилия клиента: ${familya.value} </b> \n
                <b>Адресс клиента: ${city.value} </b> \n
                <b>Телефон клиента: ${telephone.value} </b> \n
            `
            let items = data.forEach(element => {
                message += `
                    <b>${element.img}</b> \n
                    <b>${element.name}</b> \n
                    <b>${element.price}</b> \n
                `
            });

            axios.post(URL, {
                chat_id: CHAT_ID,
                parse_mode: 'html',
                text: message
            }) 

            console.log(message)
           
        })
        
    }





