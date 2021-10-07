import React from 'react';
import Button from '../Common/Button';

export default function SignUpWithGoogle() {
    const handleClick = () => {
        // TODO: modal 창 열기
        // TODO: auth state(전역) 업데이트, auth 값이 존재할 경우 다음으로 이동 (history.push => test)
    }
    
    return (
        <Button styles='btn-sm btn-outline btn-outline-red' onClick={handleClick}>
            Sign Up With Google
        </Button>
    )
}
