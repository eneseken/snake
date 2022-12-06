const date  = new Date()
let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    hours = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    dayNumber= date.getDay()

    let  months = [
        'Ocak', 
        'Şubat', 
        'Mart',
        'Nisan',
        'Mayıs',
        'Haziran',
        'Temmuz',
        'Ağustos',
        'Eylül',
        'Ekim',
        'Kasım',
        'Aralık'
    ]


    let days = [
        'Pazar',
        'Pazartesi',
        'Salı',
        'Çarşamba',
        'Perşembe',
        'Cuma',
        'Cumartesi'
    ]


    let HumanReadableDate = `${day}  ${months[month]}  ${year} , ${days[dayNumber]} , ${hours}:${minute}:${second} `