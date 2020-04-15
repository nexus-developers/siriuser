const INITIAL_STATE = false;
export default function modal(state = INITIAL_STATE, action) {
   switch(action.type){
       case 'MODAL':
           return [ state = true ];
       case 'MODAL_KITS':
           return [ state = true, action.product ];
        case 'MODAL_CLOSE':
            return INITIAL_STATE;
        case 'ANALISE_OPEN':
            return [ action.data, action.placa, action.products, action.micros, action.gTerminais, action.gIntermediarios, action.fixadores, action.perfis, action.juncoes ]
        default:
            return state;
   }
}