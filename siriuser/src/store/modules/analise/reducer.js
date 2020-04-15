export default function modal(state =[], action) {
   switch(action.type){
        case 'ANALISE_OPEN':
            return [ action.placa, action.micros, action.perfis, action.gIntermediarios, action.gTerminais, action.fixadores, action.juncoes ]
        default:
            return state;
   }
}