
export interface IUsersInfo {
    userid:     string,
    name:       string,
    birthdate:  string,
    age:        number,
    organization: IOrganization
}

interface IOrganization {
    name:       string,
    position:   string
}