"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userInfo_1 = require("./userInfo");
const users_1 = require("./users");
function getUsersJobPositions(usersArray) {
    const newUsersArray = [];
    usersArray.forEach((usersItem) => {
        const userInfo = userInfo_1.usersInfoArray.find(item => item.userid === usersItem.userid);
        if (userInfo != null) {
            const usersNew = {
                name: usersItem.name,
                position: userInfo.organization.position,
                age: userInfo.age,
                gender: usersItem.gender
            };
            newUsersArray.push(usersNew);
        }
    });
    return newUsersArray;
}
const usersPositions = getUsersJobPositions(users_1.usersArray);
console.log('userPositions', usersPositions);
//# sourceMappingURL=index.js.map