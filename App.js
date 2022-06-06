import { StatusBar } from 'expo-status-bar';
import Layouts from './src/layouts/layouts';

const App = () => {
  return (
    <Layouts preset='dark_bg'>
      <StatusBar style='light'/>
    </Layouts>
  );
};



export default App;
