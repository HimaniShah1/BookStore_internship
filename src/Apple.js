import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export const Apple = () => {
    const Navigate = useNavigate();
    const onHomePageButtonClick = () => {
        // Navigate("/");
        alert("The button has been clicked");
    };
    return (
    <div>
        <div>Apple 🍎</div>
        {/* <button onClick={onHomePageButtonClick}>Navigate ton HomePage</button> */}
        <Button variant="contained" onClick={onHomePageButtonClick}>Hello World</Button>
      
    </div>
    );
}