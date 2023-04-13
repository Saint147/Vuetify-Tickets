export  type MyType = {
    id: number;
    ticketNo: number;
    name: string;
    type: string;
    serialNo: string;
    machine: string;
    description: string;
    status: string;
   //key: string,
}

type MyGroupType = {
    [key:string]: MyType;
}
export const testColumns = [
    { key: "ticketNo", label: "Ticket No",class: "text-center" },
    { key: "name", label: "Name", class: "text-center" },
    { key: "type", label: "Type", class: "text-center" },
    { key: "serialNo", label: "Serial No", class: "text-center" },
    { key: "machine", label: "Machine", class: "text-center" },
    { key: "description", label: "Description", class: "text-center" },
    { key: "status", label: "Status", class: "text-center" },
   
]
  

export const tests: MyType[] = [
    { id: 0,ticketNo: 101, name: "Fidlo", type: "Hardware",serialNo: "BXK755s", machine:"Tru cut", description:"Spindle Drive", status:"active" },
    { id: 1,ticketNo: 102, name: "game",type: "Software",serialNo: "--", machine:"CNC", description:"Techno Shop", status:"active" },
    { id: 2,ticketNo: 105,name: "Macro",type: "Hardware",serialNo: "AWR5555", machine:"Edge Bander", description:"cable out", status:"pending" },
    { id: 3,ticketNo: 107, name: "Jumbo",type: "Software", serialNo: "--", machine:"CNC", description:"Error on exports", status:"active" }, 
];
