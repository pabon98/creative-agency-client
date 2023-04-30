import { useContext } from "react"
import { AuthContext } from "../Contexts/AuthProvider"


//using context
const useAuth =()=>{
    // console.log(AuthContext)
    return useContext(AuthContext)
}
export default useAuth