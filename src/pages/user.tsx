import User from '../components/User'
import Head from 'next/head'

const user = () => {
    return (
        <>
            <User />
        </>
    )
}
//콤포넌트를 세분화해서 분리, 분리한 콤포넌트에다 삼항연산자를 걸어서 (조건은 response가 제대로 있는지 없는지)
//그런식으로 작성
export default user
