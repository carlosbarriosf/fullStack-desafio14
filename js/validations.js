// const nameValidator = (name) => {
//     const newRegExp = new RegExp("^(?:[A-Za-zñÑÁáÉéÍíÓóÚú]([a-zñáéíóú]{2,9}))$");
//     return newRegExp.test(name);
// }

const upToThreeNamesValidator = (name) => {
    const newRegExp = new RegExp(/^(?:[A-Za-zñÑÁáÉéÍíÓóÚú]([a-zñáéíóú]{2,9})(?:\s+[A-Za-zñÑÁáÉéÍíÓóÚú]([a-zñáéíóú]{2,9})){0,2})?$/);
    return newRegExp.test(name);
}

const surnameValidator = (surname) => {
    const newRegExp = new RegExp(/^[A-Za-zÑñÁáÉéÍíÓóÚú']{2,20}(?:\s+[A-Za-zÑñÁáÉéÍíÓóÚú']{2,20}){0,2}$/);
    return newRegExp.test(surname);
}

const dniValidator = (dni) => {
    const newRegExp = new RegExp(/(^[0-9]{7,8}$)|(^[0-9]{1,2}\.[0-9]{3}\.[0-9]{3}$)/);
    return newRegExp.test(dni);
}

const cuilValidator = (cuil) => {
    const newRegExp = new RegExp("(^[0-9]{11}$)|(^[0-9]{2}-[0-9]{8}-[0-9]$)");
    return newRegExp.test(cuil);
}

const addressValidator = (address) => {
    const newRegExp = new RegExp(/^(?:[A-Za-zñÑñÑÁáÉéÍíÓóÚú 0-9,\-\(\)\.'"°/]{10,200}|)$/);
    return newRegExp.test(address);
}

