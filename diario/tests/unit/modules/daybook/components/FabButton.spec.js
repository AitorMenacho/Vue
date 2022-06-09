import FabButton from "@/modules/daybook/components/FabButton";
import { shallowMount } from "@vue/test-utils";

describe('Pruebas en el FAB component', () => {

    test('debe mostrar el ícono por defecto', () => {

        const wrapper = shallowMount( FabButton )

        const porDefecto = wrapper.find('i')

        expect( porDefecto.classes('fa-plus') ).toBeTruthy()

    })
    
    test('debe mostrar el ícono por argumento: fa-circle', () => {

        const wrapper = shallowMount( FabButton, {
            props: {
                icon: 'fa-circle'
            }
        })

        const porDefecto = wrapper.find('i')

        expect( porDefecto.classes('fa-circle') ).toBeTruthy()

    })

    test('debe emitir el evento on:click cuando se hace click', () => {

        const wrapper = shallowMount( FabButton )

        wrapper.find('button').trigger('click')

        expect(wrapper.emitted('on:click')).toHaveLength(1)

    })


})