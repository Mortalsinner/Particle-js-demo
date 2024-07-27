import {Button, defaultTheme, Provider} from '@adobe/react-spectrum';
import {TextField} from '@adobe/react-spectrum';

const Home = () => {
    return ( 

        <div className='container'>
        
        <div className='form'>
            <TextField
            type="password"
            label="Password"
            description="Password must be at least 8 characters."
            />
        </div>

        <div className='button'>
        <Provider theme={defaultTheme}>
        <Button
          variant="accent"
          onPress={() => alert('Hey there!')}
        >
          Hello React Spectrum!
        </Button>
      </Provider>
      </div>
      </div>
     );
}
 
export default Home;