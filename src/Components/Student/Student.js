import { useSelector } from 'react-redux'
export default function Student() {
    const userData = useSelector((a) => a.user);
    console.log(userData);
}