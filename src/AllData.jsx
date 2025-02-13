import { Component } from "react";
import UserData from "./UserData";

class Alldata extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    grid: 1,
                    name: 'kishan',
                    email: 'kishan@gmail.com',
                    password: 'kishan@123',
                    course: ["html", "css", "bootstrap", "js"],
                    city: "surat"
                },
                {
                    grid: 2,
                    name: 'jay',
                    email: 'jay@gmail.com',
                    password: 'kishan@123',
                    course: ["photosho", "figma", "illustrator", "adobe xd"],
                    city: "rajkot"
                },
                {
                    grid: 3,
                    name: 'ajay',
                    email: 'ajay@gmail.com',
                    password: 'ajay@123',
                    course: ["html", "css", "bootstrap", "nodejs"],
                    city: "amareli"
                },
                {
                    grid: 4,
                    name: 'nisha',
                    email: 'nisha@gmail.com',
                    password: 'nisha@123',
                    course: ["html", "css", "bootstrap", "python"],
                    city: "vadodara"
                }
            ]
        };
    }

    render(){
        return (
            <div>
                <UserData data={this.state.data}/>
            </div>
        )
    }
}


export default Alldata