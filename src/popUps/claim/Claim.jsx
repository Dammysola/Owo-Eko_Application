import axios from 'axios';
import { popupContextHook } from '../../PopupContext';
import Style from '../claim/Claim.module.css'
import { useUser } from '../../api_services/User';


const Claim = () => {
  
  const { getUserDetails } = useUser();
  const { updateLoadingPopup, updateErrorText, updateErrorPopup, updateClaimPopup } = popupContextHook()


  const claimCoin = async () => {

    try {
      updateLoadingPopup(true);
      let details = JSON.parse(localStorage.getItem("user_details"));

      const response = await axios.post("https://owo-eko-api.onrender.com/user/claim",
        {
          "email": details.email,
          "coin": 50
        },
      )

      console.log(response.status)
      console.log("Clain",response.details)

      if (response.status == 200) {

        console.log('Claim successful', response.data);

        const response2 = await getUserDetails(details.email);


        updateLoadingPopup(false);
        if (response2 == 200) {

          updateClaimPopup(false);
        }

      } else {

        updateLoadingPopup(false);
        updateErrorText(response.data)

        updateErrorPopup(true)
        setTimeout(() => {
          updateErrorPopup(false)
        }, 1000)

        console.log('clain failed', response.data);
      }
    } catch (err) {

      updateLoadingPopup(false);
      let userError = err

      updateErrorText(userError)

      updateErrorPopup(true)
      setTimeout(() => {
        updateErrorPopup(false)
      }, 2000)

      console.log("SignUp Failed: ", userError)
    }
  }
  return (
    <>
      <div id={Style.Claim_MainDiv}>
        <div id={Style.Claim_Wrapper}>
          <div id={Style.Claim_TextWrapper}>
            <p>Claim coins to continue tapping!</p>
          </div>
          <div>
            <button onClick={claimCoin}>Claim</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Claim