import {useLocation, useNavigate} from 'react-router-dom';


export default function AdminUserButton({ name}) {
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
    backgroundColor: "white",
                hoverColor: "#e0e0e0",
              width: "150px",
              height: "40px",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "8px",
              color: "#ffffff",
              padding: "10px 20px",
              margin: "0 10px",
              textdecoration: "none"

}

const isAdmin = location.pathname === '/Admin';


  return (
    <button onClick={onClick} style={style}>
        <a>{name}</a>
    </button>
  )
}

