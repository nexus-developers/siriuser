export default function modal(state = false, action) {
   switch(action.type){
       case 'MODAL':
           return [ !state ];
        // case 'CLOSE_MODAL':
        //     return [ {state: false} ];
        default:
            return state;
   }
}