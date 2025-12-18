import './App.css'
import { AuthProvider } from './context/AuthContext'
import { FormsPage } from './components/FormsPage'
// import { UsersPage } from './components/UsersPage'
// import { LoginPage } from './components/LoginPage'
// import { ObjectLiterals } from './typescript/ObjectLiterals'
// import { BasicTypes } from './typescript/BasicTypes'
// import { BasicFuntions } from './typescript/BasicFuntions'
// import { Counter } from './components/Counter'
function App() {

  return (
    <AuthProvider>
      <div className='flex flex-col items-center justify-center h-svh'>

        <h1 className='mb-5 text-4xl'>React + TS</h1>
        {/* <BasicTypes /> */}
        {/* <ObjectLiterals /> */}
        {/* <BasicFuntions /> */}
        {/* <Counter /> */}
        {/* <LoginPage /> */}
        {/* <UsersPage /> */}
        <FormsPage />
      </div>
    </AuthProvider>
  )
}

export default App
