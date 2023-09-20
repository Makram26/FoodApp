// const BASE_URL = 'https://tropatest.ifrs16.app';
// const BASE_URL = 'https://sufyan.go-tropa.com';
// const BASE_URL = 'http://192.168.70.184:8069';
// BASE URL
const BASE_URL = 'https://sophi.go-tropa.com';

import AsyncStorage from '@react-native-async-storage/async-storage';

// calling login API
export const login = (username, password,DATABASE_NAME) => {
    return fetch(`${BASE_URL}/web/session/authenticate/attendance-app`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, /',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            jsonrpc: "2.0",
            params: {
                login: username,
                password: password,
                db: DATABASE_NAME,
                attendance_app:"1"
            }
        }),
    }).then(res => res.json());
}


// session management 
export const storeCredential = async (username,email,uid) => {
    console.log("username>>>>>>>",username)
  try {
    await AsyncStorage.setItem('username', username.toString())
    await AsyncStorage.setItem('email', email)
    await AsyncStorage.setItem('uid', uid.toString())
    // await AsyncStorage.setItem('admin', admin.toString())
  } catch (e) {
    console.log("error",e)
  }
}
