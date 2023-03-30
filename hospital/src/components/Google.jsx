import { GoogleLogin } from '@react-oauth/google';
import React from 'react'

function Google() {

    const onsuccess = async (e) => {

        console.log(e);

     
    }

    return (
        <div>

            <GoogleLogin
                onSuccess={onsuccess}

                onError={() => {
                    console.log('Login Failed');
                }}

            />
        </div>
    )
}

export default Google