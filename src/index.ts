
import {IUsers} from "../interfaces/IUsers";
import {IUsersNew} from "../interfaces/IUsers";
import {usersInfoArray} from "./userInfo";
import {usersArray} from "./users";
import {useCaseSensitiveFileNames} from "ts-loader/dist/utils";

function getUsersJobPositions(usersArray: IUsers[]): IUsersNew [] {

    const newUsersArray: IUsersNew[] = [];
    usersArray.forEach((usersItem) => {

        const userInfo = usersInfoArray.find(item => item.userid === usersItem.userid);

        if (userInfo!=null){
            const usersNew: IUsersNew = {
                name:       usersItem.name,
                position:   userInfo.organization.position,
                age:        userInfo.age,
                gender:     usersItem.gender
            }
            newUsersArray.push(usersNew);
        }
    })

    return newUsersArray;
}

const usersPositions = getUsersJobPositions(usersArray);
console.log('userPositions', usersPositions);