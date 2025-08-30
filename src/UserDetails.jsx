import Alert from 'react-bootstrap/Alert';
import { useParams } from 'react-router';

function UserDetails() {

  const param = useParams();
  console.log(param.id);
  return (
    
      <Alert variant="info" style={{ backgroundColor: "Green", padding: "20px", textAlign: "center" }}>
          <h3>UserDetails</h3>
        </Alert>
      
    
  );
}

export default UserDetails;
