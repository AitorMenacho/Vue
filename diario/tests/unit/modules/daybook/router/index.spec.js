import daybookRouter from "@/modules/daybook/router/index";


describe('Pruebas en el router module del Daybook', () => {
    test('el router debe de tener esta configuración', async () => {

        expect(daybookRouter).toMatchO

        expect(daybookRouter).toMatchObject({
            name: 'daybook',
            component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
            children: [
                {
                    path: '',
                    name: 'no-entry',
                    component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/daybook/views/NoEntrySelected.vue'),
                },
                {
                    path: ':id',
                    name: 'entry',
                    component: () => import(/* webpackChunkName: "daybook-entry-view" */ '@/modules/daybook/views/EntryView.vue'),
                    props: (route) => {
                        return {
                            id: route.params.id
                        }
                    }
                }

            ]
        })

        // expect( (await daybookRouter.children[0].component()).default.name ).toBe('NoEntrySelected')
        // expect( (await daybookRouter.children[1].component()).default.name ).toBe('EntryView')

        const promiseRoutes = []
        daybookRouter.children.forEach(child => promiseRoutes.push(child.component()))

        const routes = (await Promise.all(promiseRoutes)).map(r => r.default.name)

        expect(routes).toContain('NoEntrySelected')
        expect(routes).toContain('EntryView')

    })

    test('debe retornar el id de la ruta', () => {

        const route = {
            params: {
                id: 'ABC-123'
            }
        }

        // expect( daybookRouter.children[1].props( route ) ).toEqual({ id: 'ABC-123' })

        const entryRoute = daybookRouter.children.find(route => route.name === 'entry')
        expect(entryRoute.props(route)).toEqual({ id: 'ABC-123' })

    })

})