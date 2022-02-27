import React from "react";

function UserList(){
    const users=[
        {
            id: 1,
            name: 'first',
            email: 'id1'
          },
          {
            id: 2,
            name: 'second',
            email: 'id2'
          },
          {
            id: 3,
            name: 'third',
            email: 'id3'
          }
];

return(
<div>
    <h1>List</h1>
    <h3>It renders static JS array</h3>
    <div>
    <b>{users[0].name}</b>({users[0].email})<br/>
    </div>
    <div>
    <b>{users[1].name}</b>({users[1].email})<br/>
    </div>
    <div>
    <b>{users[2].name}</b>({users[2].email})<br/>
    </div>
</div>

);
}




export default UserList;