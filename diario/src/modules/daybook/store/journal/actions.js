import dayBookapi from "@/api/daybookApi"

// export const myAction = async ({ commit }) => {


    
// }


export const loadEntries = async ({ commit }) => {
    
    const { data } = await dayBookapi.get('/entries.json')

    if( !data ) return commit('setEntries', [])

    const entries = []

    for( let id of Object.keys( data ) ) {
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries', entries)

}

export const updateEntry = async ({ commit }, entry ) => { //entry como parametro

    // Extraer solo lo que necesito -id
    const { date, picture, text } = entry
    const dataToSave = {date, picture, text}

    //await dayBookApi.put( Path.json, dataToSave )
    const resp = await dayBookapi.put( `/entries/${ entry.id }.json`, dataToSave )
    console.log(resp);

    //Commit de una mutation -> updateEntry
    commit('updateEntry', {...entry})

}

export const createEntry = async ({ commit }, entry) => {

    const {date, picture, text} = entry
    const dataToSave = {date, picture, text}

    const { data } = await dayBookapi.post( `/entries.json`, dataToSave )

    dataToSave.id = data.name

    commit('addEntry', dataToSave)

    return data.name
}

export const deleteEntry = async ({ commit }, id) => {

    await dayBookapi.delete(`/entries/${ id }.json`)

    commit('deleteEntry', id)

    return id
}

