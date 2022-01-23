class SessionHelper {
    static SetUserID(UserID){
        return sessionStorage.setItem("UserID", UserID);
    }
    static GetUserID(){
        return sessionStorage.getItem("UserID");
    }
    static RemoveUserID(){
        return sessionStorage.removeItem("UserID");
    }

}
export default SessionHelper;