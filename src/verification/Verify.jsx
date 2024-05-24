import React from 'react'

const Verify = () => {
  return (
    <div>
      <div>Complete sign up be verifying your email address</div>
      <div>We sent a code to johndoe@gmail.com, enter code to continue</div>

      <div>
        <form>
        <InputField
              label='Enter Code'
              placeholder='Type code'
              type='text'
              name='phoneNumber'
            // value={}
            // OnChange={}
            />

            <button>Verify </button>
        </form>
      </div>
    </div>
  )
}

export default Verify