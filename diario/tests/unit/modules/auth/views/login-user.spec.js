import { shallowMount } from "@vue/test-utils";
import Login from "@/modules/auth/views/Login-user.vue";
import createVuexStore from "tests/unit/mock-data/mock-store";


describe( 'Pruebas en el Login componente' ), () => {

    test('debe de hacer match con el snapcshot', () => {

        const store = createVuexStore({
            status: 'not-authenticated',
            user: null,
            idToken: null,
            refreshToken: null
        })

        const wrapper = shallowMount( Login, {

            global: {

                plugins: [store]

            }

        })

        expect(wrapper.html()).toMatchSnapshot()

    })

}