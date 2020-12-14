// import store from "../../store"
import { Main, Container } from "./styles"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import validationThunk from "../../store/modules/validationToken/thunks"
import { useState, useEffect } from "react"
import EditInfos from "../../components/EditInfos"
import { FiSettings } from "react-icons/fi"

const Profile = () => {
  const dispatch = useDispatch()
  const [publisher, setPublisher] = useState(false)

  const auth = useSelector((state) => state.auth)
  const user = JSON.parse(localStorage.getItem("infoLogged"))

  useEffect(() => {
    dispatch(validationThunk())
  }, [])
  console.log(user)

  return (
    <Main publisher={publisher}>
      {auth ? (
        <div>
          <Container>
            <div>
              <div>
                {user.avatar_url ? (
                  <img alt={user.name} src={user.avatar_url}></img>
                ) : (
                  <img
                    alt={`${user.name}, avatar padrão`}
                    src="https://uploads.metropoles.com/wp-content/uploads/2019/08/05090905/perfilsemfoto.jpg"
                  ></img>
                )}
              </div>
              <div>
                <div className="Background">
                  <span>{user.name}</span>
                </div>
              </div>
            </div>
          </Container>
          <div>
            <div>
              <div>About Me</div>
              <div>{user.bio}</div>
            </div>
            <div>
              <div>Personal Details</div>
              <div>
                <div>Email:{user.email}</div>
                <div>Course Module: {user.course_module}</div>
              </div>
            </div>
            <div>Techs</div>
            <div>
              {user.techs.map((element, index) => (
                <div key={index}>
                  {element.title} - {element.status}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div>
              <div>Works</div>
              <div>
                <div>
                  {user.works.map((element) => (
                    <div>
                      <p>{element.title}</p>
                      <div>{element.description}</div>
                      <div>{element.deploy_url}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <button onClick={() => setPublisher(true)}>
        <FiSettings />
      </button>
      {publisher && <EditInfos setPublisher={setPublisher} />}
    </Main>
  )
}

export default Profile
