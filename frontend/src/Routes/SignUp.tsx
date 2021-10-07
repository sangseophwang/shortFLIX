import React from 'react'
import SignUpWithGoogle from '../Components/SignUp/SignUpWithGoogle';
import InfoText from '../Components/Common/InfoText';
import './scss/SignUp.scss';

export default function SignUp() {
    return (
        <div id='SignUp'>
            <InfoText>
                서비스를 이용하기 위해서는 <span>회원가입</span>이 필요해요!
            </InfoText>
            <SignUpWithGoogle />
        </div>
    )
}
