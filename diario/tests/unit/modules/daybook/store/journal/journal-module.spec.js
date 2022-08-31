import { createStore } from "vuex"
import journal from "@/modules/daybook/store/journal";
import { journalState } from "../../../../mock-data/test-journal-state";


const createVuexStore = ( initialState ) => 
    createStore({
        modules: {
            journal: {
                ...journal,
                state: { ...initialState }
            }
        }
    })

describe('Vuex - Pruebas en el Journal Module', () => {
    test('este es el estado inicial, debe tener este state', () => {

        const store = createVuexStore( journalState )
        const { isLoading, entries } = store.state.journal

        expect( isLoading ).toBeFalsy()
        expect( entries ).toEqual( journalState.entries )

    })

    //Mutations
    test('mutation: setEntries', () => {

        const store = createVuexStore({ isLoading: true, entries: [] })

        store.commit( 'journal/setEntries', journalState.entries )
        
        console.log(store.state.journal.entries);


        // expect( store.state.journal.entries.lenght ).toBe(2)
        // expect( store.state.journal.isLoading ).toBeFalsy()

    })


})