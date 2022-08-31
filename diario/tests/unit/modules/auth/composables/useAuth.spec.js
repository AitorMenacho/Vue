import useAuth from "@/modules/auth/composables/useAuth";

const mockStore = {

    dispatch: jest.fn(),
    commit: jest.fn(),
    // Getters

}

jest.mock('vuex', () => ({

    useStore: () => mockStore

}))

describe('Pruebas en useAuth', () => {

    beforeEach(() => jest.clearAllMocks())

    test('CreateUser exitoso', async() => {

        const { createUser } = useAuth()

        const newUser = { name: 'Aitor', email: 'aitor@gmail.com' }

        mockStore.dispatch.mockReturnValue({ ok: true })

        const resp = await createUser( newUser )

        expect(mockStore.dispatch).toHaveBeenCalledWith('auth/createUser', newUser)
        expect(resp).toEqual({ ok:true })

    })

    test('CreateUser fallido', async() => {

        const { createUser } = useAuth()

        const newUser = { name: 'Aitor', email: 'aitor@gmail.com' }

        mockStore.dispatch.mockReturnValue({ ok: false, message: 'EMAIL_EXISTS' })

        const resp = await createUser( newUser )

        expect(mockStore.dispatch).toHaveBeenCalledWith('auth/createUser', newUser)
        expect( resp ).toEqual({ ok:false, message: 'EMAIL_EXISTS' })

    })

    test('login exitoso', async() => {

        const { loginUser } = useAuth()

        const loginForm = { email: 'aitor@gmail.com', password: '123456' }

        mockStore.dispatch.mockReturnValue({ ok: true })

        const resp = await loginUser( loginForm )

        expect(mockStore.dispatch).toHaveBeenCalledWith('auth/signInUser', loginForm)
        expect(resp).toEqual({ ok:true })

    })

    test('login fallido', async() => {

        const { loginUser } = useAuth()

        const loginForm = { email: 'aitor@gmail.com', password: '123456' }

        mockStore.dispatch.mockReturnValue({ ok: false, message: 'EMAIL/PASSWORD do not exist' })

        const resp = await loginUser( loginForm )

        expect(mockStore.dispatch).toHaveBeenCalledWith('auth/signInUser', loginForm)
        expect(resp).toEqual({ ok: false, message: 'EMAIL/PASSWORD do not exist' })

    })

    test('checkAuthStatus', async() => {

        const { checkAuthStatus } = useAuth()

        const loginForm = { email: 'aitor@gmail.com', password: '123456' }

        mockStore.dispatch.mockReturnValue({ ok: true })

        const resp = await checkAuthStatus()

        expect(mockStore.dispatch).toHaveBeenCalledWith('auth/checkAuthentication')
        expect(resp).toEqual({ ok: true })

    })

    test('logout', () => {

        const { logout } = useAuth()

        logout()

        expect( mockStore.commit ).toHaveBeenCalledWith('auth/logout')
        expect( mockStore.commit ).toHaveBeenCalledWith('journal/clearEntries')

    })

})

