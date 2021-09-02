const initialState = {
    img: "", 
    api: "https://be-app-hiring-bixinf-test.apps.bi-x-ire.tftp.p1.openshiftapps.com/api/v1.0/image/"
}
export const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {    
        case "setImage":
            return {
                ...state,
                img: action.payload
            }
        default:
            return state;
    }
}