import Loader from "react-loader-spinner";
import styled from 'styled-components';


const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`


const LoadingScreen = () => (
  <LoadingContainer data-testid="backdrop">
    <Loader
      type="Circles"
      color="#00BFFF"
      height={200}
      width={200}
      timeout={3000}
    />
  </LoadingContainer>
)


export default LoadingScreen;
