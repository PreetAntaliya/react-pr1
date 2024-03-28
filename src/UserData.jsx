// import React from 'react';

const UserData = ({ data }) => {
    console.log(data[0].name);
    return (
        <div>
            <h1 className="text-center text-light" >Student Data Display</h1>
            <table className="table table-bordered table-striped table-info">
                <thead className="table-dark">
                    <tr>
                        <th>GR</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Cource</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.grid}>
                                <td>{item.grid}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>{item.course.join(", ")}</td>
                                <td>{item.city}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserData;
