import 'setimmediate'
import cloudinary from "cloudinary";
import axios from "axios";

import uploadImage from "@/modules/daybook/helpers/uploadImage";

cloudinary.config({
    cloud_name: 'dc8tuofet',
    api_key: '168346875311863',
    api_secret: 'pvoJN0TiL541VTT57NYYVMicb_I',
})

describe('Pruebas en el uploadImage', () => {
    test('debe cargar un archivo y retornar el url', async( done ) => {

        const { data } = await axios.get('https://res.cloudinary.com/dc8tuofet/image/upload/v1654769447/cld-sample-5.jpg', {
            responseType: 'arraybuffer'
        })

        const file = new File([ data ], 'foto.jpg' )

        const url = await uploadImage( file )

        expect( typeof url ).toBe('string')

        //Tomar el ID
        const segments = url.split('/')
        const imageID = segments[ segments.length - 1 ].replace('.jpg', '')
        cloudinary.v2.api.delete_resources( imageID, {}, () => {
            done()
        })

    })
})