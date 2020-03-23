const INITIAL_STATE = false;
export default function modal(state = INITIAL_STATE, action) {
   switch(action.type){
       case 'MODAL':
           return [ state = true ];
       case 'MODAL_KITS':
           return [ state = true, action.product ];
        case 'MODAL_CLOSE':
            return INITIAL_STATE;
        default:
            return state;
   }
}