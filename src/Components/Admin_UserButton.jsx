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
              backgroundColor: "#edeef5fb",
              hoverColor: "#e0e0e0",
              width: "60px",
              height: "60px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "white",
              padding: "0",
              margin: "0 ",
              textDecoration: "none",
              borderRadius: "50px",


}

const isAdmin = location.pathname === '/Admin';


  return (
    <button onClick={onClick} style={style}>
       <img src="./src/Images/Contacts icon.jpg" alt="userIcon" style={style} />
    </button>
  )
}

