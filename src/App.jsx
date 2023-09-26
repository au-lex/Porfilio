
import './App.css'
import Hero from './Components/Hero'
import  { useState, useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner';

function App() {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
      const timer = setTimeout(() => {
          setShowLoader(false);
      }, 1000);
      return () => clearTimeout(timer);
  }, []);


  return (
    <>
  {showLoader ? (
                <div className="loader ">
                    <InfinitySpin
                        height={400}
                        width={400}
                        radius={5}
                        color="#2f84e4"
                        ariaLabel="ball-triangle-loading"
                        wrapperClass={{}}
                        wrapperStyle=""
                        visible={true}
                    />
                </div>
            ) : (
                <div>
                  
                </div>
            )}
    <Hero />
  
    </>
  )
}

export default App
