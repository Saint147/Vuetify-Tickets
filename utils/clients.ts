
export type MyType = {
    id: number;
    person: string;
    company: string;
    address: string;
    email: string;
    contact: number;
    

}

type MyGroupType = {
    [key:string]: MyType;
    
}
export const clientColumns = [
    { key: "company", label: "Company",class: "text-center" },
    { key: "person", label: "Contact Person", class: "text-center" },
    { key: "address", label: "Address", class: "text-center" },
    { key: "email", label: "Email", class: "text-center" },
    { key: "contact", label: "Contact No", class: "text-center" }, 
    { label: "Action", class: "text-center" }, 
]

export const clients: MyType[] = [
    { id: 0, company: "WoodTech Mechatronis",person: "Prov Sanders", address:"45 bevly street north end ", email: "woodtech.biz", contact : 1256546544654},
    { id: 1, company: "WoodMillers",person: "Anoit Delliot", address:"134 kepston road PE",  email: "Woodmillers.biz",  contact: 785554654},
    { id: 2,company: "Carbon Plaster",person: "Skpy Skater", address:"45 durban road korsten PE", email: "Carbopalster.biz",  contact: 458564651655},
    { id: 3, company: "Addler CardBoard",person: "Princila Mvimba", address:"145 govan Mbeki nort end", email: "adllers.biz",  contact:7566654654654654 }, 
];



