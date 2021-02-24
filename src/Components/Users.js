import { faTasks } from "@fortawesome/free-solid-svg-icons"
import User from './User'
const Users = ({users, onDelete}) => {
    return (
        <>
            {users.map((task,index) => (
                <User key={index} user={user}></User>
            ))}
        </>
    )
}
export default Users