export default interface Pilot{
    memberId:string,
    firstName:string,
    lastName:string,
    email:string,
    type: MemberType
}

enum MemberType{
    "PILOT",
    "ADMIN",
    "PASSENGER"
}