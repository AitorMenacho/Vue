import AboutView from "@/views/AboutView";
import { shallowMount } from "@vue/test-utils";

describe( 'Pruebas en el About View', () => {
    
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount( AboutView )
    })
    
    test('Debe renderizar el compoenente correctamente', () => {
        expect( wrapper.html() ).toMatchSnapshot()
    })

    

})