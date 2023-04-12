
export type MyType = {
    id: number;
    ticketNo: string;
    text: string;
    
    

}

type MyGroupType = {
    [key:string]: MyType;
}

export const messages: MyType[] = [
    { id: 0, ticketNo: "", text: ""},
    { id: 1, ticketNo: "",  text: ""},
    { id: 2,ticketNo: "", text: ""},
    { id: 3, ticketNo: "", text: "" }, 
];



