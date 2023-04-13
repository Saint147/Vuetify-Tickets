import { TableColumn } from "./column";
export type MyType = {
    id: number;
    company: string;
    ticket: number;
    status:string;
    description: string;
    email:string;
    date:string;
    time:string;
 

}

type MyGroupType = {
    [key:string]: MyType;
}
export const meetingColumns: TableColumn[] = [
    { key: "company", label: "Company",class: "text-center" },
    { key: "ticket", label: "Ticket No", class: "text-center" },
    { key: "status", label: "Status", class: "text-center" },
    { key: "description", label: "Description", class: "text-center" },
    { key: "email", label: "Email", class: "text-center" }, 
    { key: "date", label: "Date", class: "text-center" }, 
    { key: "time", label: "Time", class: "text-center" }, 
   
]

export const meetings: MyType[] = [
    { id: 0, company: "WoodMillers", ticket: 252, status: "Pending",description: "Request for support via any desk",email:"skdabkdjadkjb@gmail.com",date:"09/03/2022",time:"15:00"},
    { id: 1, company: "WoodTech",  ticket: 475,status: "Agent",description: "Wiring terminilogy and repair",email:"dkjadjhdka@gmail.com",date:"12/052023",time:"10:15"},
    { id: 2,company: "Mars Kitchens", ticket: 859,status: "High",description: "Tru cut training",email:"aklsnafnajfk@gmail.com",date:"15/06/2023",time:"11:17"},
    { id: 3, company: "BoardLiners", ticket: 745,status: "Low",description: "Technosho update" ,email:"woodmillwers@gmail.com",date:"15/06/2023",time:"12:14"}, 
];




