import {useLocation, useNavigate} from 'react-router-dom';


export default function AdminUserButton({link1, link2, name}) {
const location = useLocation();
const navigate = useNavigate();

const onClick = () => {
    if (location.pathname === '/Admin'){
        navigate('/');
    }else {
        navigate('/Admin');
    }
};

const isAdmin = location.pathname === '/Admin';


  return (
    <button onClick={onClick}>
        <a>{name}</a>
    </button>
  )
}

