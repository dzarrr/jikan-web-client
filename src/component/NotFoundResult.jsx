import { Result, Button } from "antd";
import { useNavigate } from "react-router";

function NotFoundResult() {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle={
        <div>
          <p>Sorry, the page you visited does not exist.</p>
          <Button onClick={() => navigate("/")}>Back to Homepage</Button>
        </div>
      }
    />
  );
}

export default NotFoundResult;
