import SingUp from "../../components/SignUp"
import addUserThunk from "../../store/modules/listOfUsers/thunks"
import { useDispatch } from "react-redux"

const RegisterUser = () => {
  const dispatch = useDispatch()

  dispatch(addUserThunk([]))

  return (
    <>
      <SingUp />
    </>
  )
}

export default RegisterUser
