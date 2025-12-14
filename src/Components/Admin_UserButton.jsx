import {useLocation, useNavigate} from 'react-router-dom';


export default function AdminUserButton({link1, link2, name,backgroundColor,hoverColor}) {
const location = useLocation();
const navigate = useNavigate();

const onClick = () => {
    if (location.pathname === '/Admin'){
        navigate('/');
    }else {
        navigate('/Admin');
    }
};

const style = {
    backgroundColor: backgroundColor ,
    hoverColor: hoverColor,
}

const isAdmin = location.pathname === '/Admin';


  return (
    <button onClick={onClick} style={style}>
        <a>{name}</a>
    </button>
  )
}

