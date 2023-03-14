import React from 'react'

const Students=(props)=>{
    let data=props.data
    return(
        <table border="2px" style={{textAlign :"center",fontWeight:"bolder"}}>
<tr>
    <td>Name</td>
    <td>Age</td>
    <th>Education</th>
    <th>CGPA</th>
   
    {
        data.map((x)=>{
            return(
                <tr>
                    <td>{x.Name}</td>
                    <td>{x.Age}</td>
                    <td>{x.Education}</td>
                    <td>{x.CGPA}</td>
                    <td><ol>{x.Number.map((x)=>{
                        return <li>{x}</li>
                    })}</ol></td>
                </tr>
            )
        })
    }
</tr>
</table>
    )
}

export default Students