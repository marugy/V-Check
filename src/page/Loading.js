import React from "react";
import { useDispatch } from "react-redux";
import {actioncreators as userActions} from "../node_modules/redux/module/user"

const Loading = () => {

const dispatch = useDispatch();

    const href = window.location.href;
    const params = new URL(window.location.href).searchParams;
    const code = params.get('code');
    console.log(code);

    React.useEffect(async () => {
        await dispatch(useActions.kakaoLogin(code));
    },[]);


    return (
        <div>
            사용자 정보 확인중입니다.<br />
            잠시만 기다려주세요
        </div>)
}

export default Loading;