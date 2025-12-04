// ⚛️ REACT/JSX DEMO
// This file shows Biome working with React and JSX

import React,{useState,useEffect} from 'react'

// Component with formatting issues
function   UserCard({user,onDelete,onEdit}){
    const[isEditing,setIsEditing]=useState(false)
    const[name,setName]=useState(user.name)

    // Missing dependency in useEffect (lint issue)
    useEffect(()=>{
        console.log("User changed:",user.name)
    },[])

    const handleSave=()=>{
        onEdit({...user,name})
        setIsEditing(false)
    }

    // Inline styles (works but shows formatting)
    const cardStyle={padding:'20px',margin:'10px',border:'1px solid #ccc',borderRadius:'8px'}

    return(
        <div style={cardStyle}>
            {isEditing?(
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={()=>setIsEditing(false)}>Cancel</button>
                </div>
            ):(
                <div>
                    <h3>{user.name}</h3>
                    <p>Email: {user.email}</p>
                    <p>Age: {user.age||'N/A'}</p>
                    <button onClick={()=>setIsEditing(true)}>Edit</button>
                    <button onClick={()=>onDelete(user.id)}>Delete</button>
                </div>
            )}
        </div>
    )
}

// List component
function   UserList(){
    const[users,setUsers]=useState([
        {id:1,name:'Alice',email:'alice@example.com',age:25},
        {id:2,name:'Bob',email:'bob@example.com',age:30},
        {id:3,name:'Charlie',email:'charlie@example.com'}
    ])

    const handleDelete=(id)=>{
        setUsers(users.filter(u=>u.id!==id))
    }

    const handleEdit=(updatedUser)=>{
        setUsers(users.map(u=>u.id===updatedUser.id?updatedUser:u))
    }

    return(
        <div>
            <h1>User List</h1>
            {users.map(user=>(
                <UserCard
                    key={user.id}
                    user={user}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            ))}
        </div>
    )
}

export default UserList
export{UserCard}
