import Style from '../claim/Claim.module.css'




const Claim = () => {
    return (
        <>
            <div id={Style.Claim_MainDiv}>
                <div id={Style.Claim_Wrapper}>
                    <div id={Style.Claim_TextWrapper}>
                        <p>Claim coins to continue tapping!</p>                 
                    </div>
                    <div>
                        <button>Claim</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Claim