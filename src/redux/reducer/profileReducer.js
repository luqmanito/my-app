const initStateProfile = {
    profiles: [],
  };
  
  const profileReducer = (state = initStateProfile, action) => {
    if (action.type === "ADD_PROFILE") {
      return {
        ...state,
        profiles: action.payload,
      };
    }
    return state;
  };
  
  export default profileReducer;
  