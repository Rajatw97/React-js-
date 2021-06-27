import _ from "lodash";


// Key-interpolation : [action.payload.id]:action.payload
export default(state={},action)=>{

    switch(action.type){

        case 'FETCH_STREAM':
            return {...state,[action.payload.id]:action.payload};
        case 'CREATE_STREAM':
            return {...state,[action.payload.id]:action.payload};
        case 'EDIT_STREAM':
            return {...state,[action.payload.id]:action.payload};
        case 'DELETE_STREAM':
            return _.omit(state,action.payload);
        case 'EDIT_STREAM':
            return {...state,[action.payload.id]:action.payload};
        case 'FETCH_STREAMS': 
        // console.log("Fetch: "+JSON.stringify(action.payload));
              return {...state,..._.mapKeys(action.payload,'id')};    
            //  return {};
        default:
            return state;
            

    }
};