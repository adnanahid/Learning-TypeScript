// union type
// type FrontDev = 'noob' | 'pro';
// const newFrontDev: FrontDev = 'noob';
// console.log(newFrontDev);

// type bloodGroup = 'A+' | 'A-' | 'B+'
//
// type UserInfo = {
//     name: string;
//     blood: bloodGroup,
// }
//
// const noobUser: UserInfo = {
//     name: "Adnan",
//     blood: "A+"
// }
// console.log(noobUser)

type FrontendDev = {
    skills: string[];
    designations: 'Frontend Developer';
    isNoob: boolean;
}

type BackendDev = {
    skills: string[];
    designations: 'BackendDev Developer';
}
type FullstackDev = FrontendDev & BackendDev;

const dev1: FrontendDev = {
    skills: ['react', 'nextjs'],
    designations: 'Frontend Developer',
    isNoob: false
}