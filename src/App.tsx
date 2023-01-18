//components
import Logo from './components/atoms/Logo';
import ConverterCard from './components/molecules/ConverterCard';

//css initializing bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <div className='page-wrapper'>
      <Logo />
      <ConverterCard title='Crypto converter' className='w-25'/>
    </div>
  );
}

export default App;
