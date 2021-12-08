import { useState} from 'react'
import {getAuth, updateProfile} from 'firebase/auth'
import {updateDoc, doc} from 'firebase/firestore'
import {db} from '../firebase.config'
import {useNavigate, Link} from 'react-router-dom'
import {toast} from 'react-toastify'
import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg'
import homeIcon from '../assets/svg/homeIcon.svg'


function Profile() {
    const auth = getAuth()
    const [changeDetails, setChangeDetails] = useState(false)
    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName, 
        email: auth.currentUser.email
    })

    const {name, email} = formData
   

    const navigate = useNavigate()

    const onLogout = () => {
        auth.signOut()
        navigate('/')
    }

    const onSubmit = async () => {
        try {
          if(auth.currentUser.displayName !== name) {
              // Namen aendern
              await updateProfile(auth.currentUser, {
                  displayName: name
              })

              //Update in firestore 
              const userRef = doc(db, 'users', auth.currentUser.uid)
              await updateDoc(userRef, {
                  name
              })

          }
        } catch (error) {
          toast.error("Profil konnte nicht geändert werden!")
        }
    }

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    
    return (
    <div className="profile">
      <header className="profileHeader">
          <p className="pageHeader"></p>
          <button type="button" className="logOut" onClick={onLogout}>Logout</button>
      </header>
      <main>
          <div className="profileDetailsHeader">
              <p className="profileDetailsText"></p>
              <p className="changePersonalDetails" onClick={() => {
                  changeDetails && onSubmit()
                  setChangeDetails((prevState) => !prevState)
              }}>
                  {changeDetails ? 'done' : 'change'}
              </p>
          </div>
          <div className="profileCard">
              <form>
                  <input type="text" id="name" className={!changeDetails ? 'profileName' : 'profileNameActice'} disabled={!changeDetails} value={name} onChange={onChange}/>
                  <input type="text" id="email" className={!changeDetails ? 'profileEmail' : 'profileEmailActice'} disabled={!changeDetails} value={email} onChange={onChange}/>
              </form>
          </div>

          <Link to='/create-Listing' className='createListing'>
              <img src={homeIcon} alt="home" />
              <p>Verkaufen oder Vermieten sie ihre Immobilie</p>
              <img src={arrowRight} alt="arrow right" />
          </Link>
      </main>
    </div>
    )}

export default Profile;