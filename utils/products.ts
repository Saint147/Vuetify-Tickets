
export type MyType = {
    id: number;
    name: string;
    title: string;
    content: string;
    price: number;

}

type MyGroupType = {
    [key:string]: MyType;
}
export const productColumns = [
    { key: "name", label: "Product Name",class: "text-center" },
    { key: "title", label: "Title", class: "text-center" },
    { key: "content", label: "Description", class: "text-center" },
    { key: "price", label: "Price", class: "text-center" },
    { key: "view",label: "Action", class: "text-center" }, 
    { key: "delete",class: "text-right" },
]

export const products: MyType[] = [
    { id: 0, name: "Egde Bander", title: "EGBND",content: "Board side lamminating", price: 125},
    { id: 1, name: "Trucut",  title: "CNC", content: "Automated Measuring & Cuttig", price: 785},
    { id: 2,name: "Tru cut Light", title: "RP", content: "Automated with saw fence",  price: 458},
    { id: 3, name: "Vacum Press", title: "VC", content: "Board Heat lamination ", price:7566 }, 
];

export type MeType = {
    id: number;
    name: string;
    path: string;
    icon: string;

}

export const actions  = [
    { id: 1,name:"view", path: "/", icon: "mdi-pencil", },
    { id: 2,name:"delete", path: "/", icon: "mdi-delete" },
  ]



