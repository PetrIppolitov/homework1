"use strict";
// В файле index.ts создать функцию getUsersJobPositions(usersArray),
// которая на вход принимает массив пользователей из users.ts,
// на выход возвращает новый массив с объектами c новой структурой:
// [
// {
//     name: 'Anna',
//     position: 'Manager',
//     age: 34,
//     gender: 'woman'
// },
// {
//     name: 'John',
//     position: 'General manager',
//     age: 40,
//     gender: 'man'
// }
// ]
// Далее в index.ts создать переменную usersPositions и присвоить ей результат вызова функции.
Object.defineProperty(exports, "__esModule", { value: true });
const userInfo_1 = require("./userInfo");
const users_1 = require("./users");
function getUsersJobPositions(usersArray) {
    let newUsersArray = [];
    usersArray.forEach((usersItem) => {
        const userInfo = userInfo_1.usersInfoArray.find(item => item.userid === usersItem.userid);
        if (userInfo != null) {
            const userNew = {
                name: usersItem.name,
                position: userInfo.organization.position,
                age: userInfo.age,
                gender: usersItem.gender
            };
            newUsersArray.push(userNew);
        }
    });
    return newUsersArray;
}
const usersPositions = getUsersJobPositions(users_1.usersArray);
console.log('usersPositions', usersPositions);
//# sourceMappingURL=index.js.map